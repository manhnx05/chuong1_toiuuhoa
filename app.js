// ============ STATE & VARIABLES ============
const container = document.getElementById('quizContainer');
let userAnswers = {};
let submitted = false;
let currentFilter = 'all';
let timerInterval = null;
let secondsElapsed = 0;

const STORAGE_KEY = 'convex_opt_quiz_answers_v2';
const STORAGE_SUBMITTED = 'convex_opt_quiz_submitted_v2';

// Section boundaries
const SECTIONS = [
  { name: 'Phần I: Kiến Thức Nền Tảng (Câu 1-25)', start: 1, end: 25 },
  { name: 'Phần II: Tập Lồi, Tập Affine, Siêu Phẳng (Câu 26-50)', start: 26, end: 50 },
  { name: 'Phần III: Hàm Lồi & Tối Ưu Hóa Lồi (Câu 51-75)', start: 51, end: 75 },
  { name: 'Phần IV: Vận Dụng & Tính Toán Nâng Cao (Câu 76-100)', start: 76, end: 100 }
];

// ============ INIT & STORAGE ============
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      userAnswers = JSON.parse(saved);
    }
  } catch (e) {
    userAnswers = {};
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userAnswers));
  } catch (e) {}
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    secondsElapsed++;
    const m = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
    const s = String(secondsElapsed % 60).padStart(2, '0');
    const el = document.getElementById('timerText');
    if (el) el.textContent = `${m}:${s}`;
  }, 1000);
}

// ============ RENDER QUIZ & PALETTE ============
function renderQuiz() {
  let html = '';
  let currentSection = '';

  quizData.forEach((q) => {
    if (q.section && q.section !== currentSection) {
      currentSection = q.section;
      html += `<div class="section-header" id="sec-${q.id}">${currentSection}</div>`;
    }

    const labels = ['A', 'B', 'C', 'D'];
    const selectedIdx = userAnswers[q.id];

    html += `
      <div class="question-card" id="q${q.id}">
        <div class="question-header">
          <span class="question-number">Câu ${q.id}</span>
          <span class="question-tag">${q.tag}</span>
        </div>
        <div class="question-text">${q.question}</div>
        <div class="options">
          ${q.options.map((opt, i) => {
            const isSel = selectedIdx === i ? ' selected' : '';
            return `
              <div class="option${isSel}" id="opt-${q.id}-${i}" onclick="selectOption(${q.id}, ${i})">
                <input type="radio" name="q${q.id}" value="${i}" ${selectedIdx === i ? 'checked' : ''}>
                <span class="option-label">${labels[i]}</span>
                <span class="option-text">${opt}</span>
              </div>
            `;
          }).join('')}
        </div>
        <div class="answer-feedback" id="fb-${q.id}"></div>
      </div>
    `;
  });

  container.innerHTML = html;
  renderPalette();
  updateProgress();
  renderMath();
}

function renderPalette() {
  const paletteEl = document.getElementById('paletteGrid');
  if (!paletteEl) return;

  let chips = '';
  quizData.forEach(q => {
    let chipClass = 'palette-chip';
    if (submitted) {
      const userAns = userAnswers[q.id];
      if (userAns === undefined) {
        chipClass += ' chip-unanswered-graded';
      } else if (userAns === q.answer) {
        chipClass += ' chip-correct';
      } else {
        chipClass += ' chip-wrong';
      }
    } else {
      if (userAnswers[q.id] !== undefined) {
        chipClass += ' chip-selected';
      }
    }

    chips += `
      <div class="${chipClass}" id="chip-${q.id}" onclick="jumpToQuestion(${q.id})">
        ${q.id}
      </div>
    `;
  });

  paletteEl.innerHTML = chips;
}

function togglePalette() {
  const p = document.getElementById('paletteContainer');
  p.classList.toggle('show');
}

function jumpToQuestion(qId) {
  const card = document.getElementById(`q${qId}`);
  if (card) {
    // If filtered out, reset filter to 'all'
    if (card.classList.contains('filtered-out')) {
      filterQuestions('all');
    }
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.style.transform = 'scale(1.02)';
    setTimeout(() => { card.style.transform = ''; }, 400);
  }
}

// ============ SELECT OPTION ============
function selectOption(qId, optIdx) {
  if (submitted) return;

  const options = document.querySelectorAll(`#q${qId} .option`);
  options.forEach(o => o.classList.remove('selected'));

  const chosen = document.getElementById(`opt-${qId}-${optIdx}`);
  if (chosen) chosen.classList.add('selected');

  userAnswers[qId] = optIdx;
  saveState();

  // Update chip
  const chip = document.getElementById(`chip-${qId}`);
  if (chip) chip.classList.add('chip-selected');

  updateProgress();
}

function updateProgress() {
  const answered = Object.keys(userAnswers).length;
  const total = quizData.length;
  const pct = Math.round((answered / total) * 100);

  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressText').textContent = `Đã trả lời: ${answered}/${total}`;
  document.getElementById('progressPercent').textContent = `(${pct}%)`;
}

// ============ SUBMIT & GRADE ============
function submitQuiz() {
  submitted = true;
  clearInterval(timerInterval);

  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;
  const wrongQuestions = [];
  const sectionScores = SECTIONS.map(s => ({ ...s, correct: 0, total: s.end - s.start + 1 }));

  const labels = ['A', 'B', 'C', 'D'];

  quizData.forEach(q => {
    const card = document.getElementById(`q${q.id}`);
    const fb = document.getElementById(`fb-${q.id}`);
    const userAns = userAnswers[q.id];

    // Find section
    const sec = sectionScores.find(s => q.id >= s.start && q.id <= s.end);

    let status = '';
    let explanationHtml = '';
    if (q.explanation) {
      explanationHtml = `
        <div class="explanation-card">
          <div class="explanation-title">💡 Giải thích chi tiết:</div>
          <div>${q.explanation}</div>
        </div>
      `;
    }

    if (userAns === undefined) {
      unansweredCount++;
      card.classList.add('unanswered-card');
      card.dataset.status = 'unanswered';
      fb.className = 'answer-feedback show wrong-fb';
      fb.innerHTML = `⚪ <strong>Chưa trả lời</strong> — Đáp án đúng: <strong>${labels[q.answer]}</strong>${explanationHtml}`;
      document.getElementById(`opt-${q.id}-${q.answer}`).classList.add('correct-answer');
      wrongQuestions.push(q);
    } else if (userAns === q.answer) {
      correctCount++;
      if (sec) sec.correct++;
      card.classList.add('correct-card');
      card.dataset.status = 'correct';
      fb.className = 'answer-feedback show correct-fb';
      fb.innerHTML = `✅ <strong>Chính xác!</strong>${explanationHtml}`;
      document.getElementById(`opt-${q.id}-${userAns}`).classList.add('correct-answer');
    } else {
      wrongCount++;
      card.classList.add('wrong-card');
      card.dataset.status = 'wrong';
      fb.className = 'answer-feedback show wrong-fb';
      fb.innerHTML = `❌ <strong>Sai rồi!</strong> Bạn chọn <strong>${labels[userAns]}</strong>. Đáp án đúng: <strong>${labels[q.answer]}</strong>${explanationHtml}`;
      document.getElementById(`opt-${q.id}-${userAns}`).classList.add('wrong-answer');
      document.getElementById(`opt-${q.id}-${q.answer}`).classList.add('correct-answer');
      wrongQuestions.push(q);
    }
  });

  // Score summary
  const total = quizData.length;
  const pct = Math.round((correctCount / total) * 100);
  const scale10 = ((correctCount / total) * 10).toFixed(1);

  document.getElementById('correctCount').textContent = correctCount;
  document.getElementById('wrongCount').textContent = wrongCount;
  document.getElementById('unansweredCount').textContent = unansweredCount;
  document.getElementById('scoreScale10').textContent = `${scale10}/10`;
  document.getElementById('scorePercent').textContent = `${pct}%`;

  // Update filter counters
  document.getElementById('wrongFilterCount').textContent = wrongCount;
  document.getElementById('unansweredFilterCount').textContent = unansweredCount;
  document.getElementById('correctFilterCount').textContent = correctCount;

  // Section stats
  const secGrid = document.getElementById('sectionStatsGrid');
  if (secGrid) {
    secGrid.innerHTML = sectionScores.map(s => {
      const p = Math.round((s.correct / s.total) * 100);
      return `
        <div class="sec-stat-item">
          <span class="sec-stat-name">${s.name}</span>
          <span class="sec-stat-score">${s.correct}/${s.total} (${p}%)</span>
        </div>
      `;
    }).join('');
  }

  // Wrong list
  const wrongListEl = document.getElementById('wrongList');
  if (wrongQuestions.length > 0) {
    let wrongHtml = `<h3>❌ Danh sách ${wrongQuestions.length} câu cần ôn lại kỹ:</h3>`;
    wrongQuestions.forEach(q => {
      const userAns = userAnswers[q.id];
      const statusText = userAns === undefined ? '⚪ Chưa làm' : `❌ Chọn ${labels[userAns]}`;
      wrongHtml += `
        <div class="question-card wrong-card" style="cursor:pointer;margin-bottom:10px;" onclick="jumpToQuestion(${q.id})">
          <div class="question-header">
            <span class="question-number">Câu ${q.id}</span>
            <span class="question-tag">${q.tag}</span>
          </div>
          <p style="margin-bottom:6px;color:#e2e8f0;">${q.question}</p>
          <p style="color:#f87171;font-size:0.9rem;">
            ${statusText} → Đáp án đúng: <strong style="color:#34d399;">${labels[q.answer]}</strong>
          </p>
        </div>
      `;
    });
    wrongListEl.innerHTML = wrongHtml;
  } else {
    wrongListEl.innerHTML = '<h3 style="color:#34d399;">🎉 Tuyệt vời! Bạn đã đạt 100/100 câu đúng!</h3>';
  }

  // Show UI elements
  document.getElementById('results').classList.remove('hidden');
  document.getElementById('filterGroup').style.display = 'flex';
  document.getElementById('btnViewResults').style.display = 'inline-flex';
  document.querySelectorAll('.graded-legend').forEach(el => el.style.display = 'inline');

  // Re-render palette with colored chips
  renderPalette();
  renderMath();

  // Scroll to results
  setTimeout(() => {
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
  }, 250);
}

// ============ FILTER QUESTIONS ============
function filterQuestions(type) {
  currentFilter = type;

  // Active button style
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === type);
  });

  const cards = document.querySelectorAll('.question-card');
  cards.forEach(card => {
    const status = card.dataset.status;
    if (type === 'all') {
      card.classList.remove('filtered-out');
    } else if (type === 'wrong') {
      card.classList.toggle('filtered-out', status !== 'wrong');
    } else if (type === 'unanswered') {
      card.classList.toggle('filtered-out', status !== 'unanswered');
    } else if (type === 'correct') {
      card.classList.toggle('filtered-out', status !== 'correct');
    }
  });

  // Hide section headers if all cards under it are hidden
  document.querySelectorAll('.section-header').forEach(header => {
    header.style.display = type === 'all' ? 'block' : 'none';
  });
}

// ============ RESET ============
function confirmReset() {
  if (confirm('Bạn có chắc muốn làm lại từ đầu? Tất cả đáp án đã chọn sẽ bị xóa.')) {
    resetQuiz();
  }
}

function resetQuiz() {
  submitted = false;
  userAnswers = {};
  saveState();
  secondsElapsed = 0;
  startTimer();

  // Reset UI cards
  document.querySelectorAll('.question-card').forEach(c => {
    c.classList.remove('correct-card', 'wrong-card', 'unanswered-card', 'filtered-out');
    delete c.dataset.status;
  });
  document.querySelectorAll('.option').forEach(o => {
    o.classList.remove('selected', 'correct-answer', 'wrong-answer');
    const input = o.querySelector('input');
    if (input) input.checked = false;
  });
  document.querySelectorAll('.answer-feedback').forEach(f => {
    f.className = 'answer-feedback';
    f.innerHTML = '';
  });

  document.querySelectorAll('.section-header').forEach(h => {
    h.style.display = 'block';
  });

  document.getElementById('results').classList.add('hidden');
  document.getElementById('filterGroup').style.display = 'none';
  document.getElementById('btnViewResults').style.display = 'none';
  document.querySelectorAll('.graded-legend').forEach(el => el.style.display = 'none');

  renderPalette();
  updateProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToResults() {
  const r = document.getElementById('results');
  if (!r.classList.contains('hidden')) {
    r.scrollIntoView({ behavior: 'smooth' });
  }
}

// ============ KATEX RENDER ============
function renderMath() {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\[', right: '\\]', display: true },
        { left: '\\(', right: '\\)', display: false }
      ],
      throwOnError: false
    });
  }
}

// ============ STARTUP ============
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderQuiz();
  startTimer();

  const checkKatex = setInterval(() => {
    if (typeof renderMathInElement === 'function') {
      clearInterval(checkKatex);
      renderMath();
    }
  }, 100);
});
