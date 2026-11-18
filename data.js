const quizData = [
  {
    "id": 1,
    "section": "Phần I: Kiến Thức Nền Tảng",
    "tag": "Lý thuyết - Tích vô hướng",
    "question": "Trong không gian Euclide $\\mathbb{R}^n$, tích vô hướng của hai vectơ $u = (u_1, u_2, \\dots, u_n)^T$ và $v = (v_1, v_2, \\dots, v_n)^T$ được định nghĩa như thế nào?",
    "options": [
      "$\\langle u, v \\rangle = \\sum_{i=1}^n (u_i + v_i)$",
      "$\\langle u, v \\rangle = u_1 v_1 + u_2 v_2 + \\dots + u_n v_n = u^T v$",
      "$\\langle u, v \\rangle = \\max_{1 \\le i \\le n} |u_i v_i|$",
      "$\\langle u, v \\rangle = \\sqrt{\\sum_{i=1}^n u_i^2 v_i^2}$"
    ],
    "answer": 1,
    "explanation": "Tích vô hướng chuẩn trong $\\mathbb{R}^n$: $\\langle u, v \\rangle = \\sum_{i=1}^n u_i v_i = u^T v$."
  },
  {
    "id": 2,
    "tag": "Tính toán - Tích vô hướng",
    "question": "Cho hai vectơ $a = (1, 2, 3, 4)^T$ và $b = (2, -1, -2, 1)^T$ trong $\\mathbb{R}^4$. Giá trị tích vô hướng $\\langle a, b \\rangle$ bằng:",
    "options": [
      "$2$",
      "$-2$",
      "$0$",
      "$-4$"
    ],
    "answer": 1,
    "explanation": "$\\langle a, b \\rangle = 1(2) + 2(-1) + 3(-2) + 4(1) = 2 - 2 - 6 + 4 = -2$."
  },
  {
    "id": 3,
    "tag": "Tính toán - Tích vô hướng tham số",
    "question": "Cho vectơ $c = (5, 2, -1, 3)^T$ và $x = (x_1, x_2, x_3, x_4)^T$. Tích vô hướng $\\langle c, x \\rangle$ có dạng đại số là:",
    "options": [
      "$5x_1 + 2x_2 - x_3 + 3x_4$",
      "$5x_1 + 2x_2 + x_3 + 3x_4$",
      "$10 x_1 x_2 x_3 x_4$",
      "$(5+x_1) + (2+x_2) + (-1+x_3) + (3+x_4)$"
    ],
    "answer": 0,
    "explanation": "$\\langle c, x \\rangle = c_1 x_1 + c_2 x_2 + c_3 x_3 + c_4 x_4 = 5x_1 + 2x_2 - x_3 + 3x_4$."
  },
  {
    "id": 4,
    "tag": "Tính toán - Dạng toàn phương",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 2 \\end{bmatrix}$ và vectơ $x = (x_1, x_2)^T$. Biểu thức dạng toàn phương $x^T A x$ bằng:",
    "options": [
      "$x_1^2 + 2x_2^2$",
      "$x_1^2 + 5x_1 x_2 + 2x_2^2$",
      "$x_1^2 + 6x_1 x_2 + 2x_2^2$",
      "$x_1^2 + 2x_1 x_2 + 3x_2^2$"
    ],
    "answer": 1,
    "explanation": "$x^T A x = [x_1, x_2] \\begin{bmatrix} 1 & 2 \\\\ 3 & 2 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = x_1(x_1 + 2x_2) + x_2(3x_1 + 2x_2) = x_1^2 + 5x_1 x_2 + 2x_2^2$."
  },
  {
    "id": 5,
    "tag": "Lý thuyết - Ma trận đối xứng",
    "question": "Biết hàm số $f(x) = \\frac{1}{2} x^T A x = x_1^2 + 2x_2^2 - 6x_1 x_2$ với $A$ là ma trận đối xứng cỡ $2 \\times 2$. Ma trận $A$ là:",
    "options": [
      "$\\begin{bmatrix} 2 & -6 \\\\ -6 & 4 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & -3 \\\\ -3 & 2 \\end{bmatrix}$",
      "$\\begin{bmatrix} 2 & -3 \\\\ -3 & 4 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & -6 \\\\ -6 & 2 \\end{bmatrix}$"
    ],
    "answer": 0,
    "explanation": "$f(x) = \\frac{1}{2} x^T A x = \\frac{1}{2}(a_{11}x_1^2 + 2a_{12}x_1x_2 + a_{22}x_2^2) = x_1^2 - 6x_1x_2 + 2x_2^2 \\implies a_{11}=2, a_{12}=-6, a_{22}=4$. Do đó $A = \\begin{bmatrix} 2 & -6 \\\\ -6 & 4 \\end{bmatrix}$."
  },
  {
    "id": 6,
    "tag": "Lý thuyết - Các định nghĩa chuẩn",
    "question": "Cho vectơ $x = (x_1, x_2, \\dots, x_n) \\in \\mathbb{R}^n$. Chuẩn Euclide $\\|x\\|_2$, chuẩn $\\|x\\|_1$ và chuẩn $\\|x\\|_\\infty$ lần lượt được định nghĩa là:",
    "options": [
      "$\\|x\\|_2 = \\sqrt{\\sum x_i^2}$, $\\|x\\|_1 = \\sum |x_i|$, $\\|x\\|_\\infty = \\max |x_i|$",
      "$\\|x\\|_2 = \\sum |x_i|$, $\\|x\\|_1 = \\sqrt{\\sum x_i^2}$, $\\|x\\|_\\infty = \\min |x_i|$",
      "$\\|x\\|_2 = \\max |x_i|$, $\\|x\\|_1 = \\sum |x_i|$, $\\|x\\|_\\infty = \\sqrt{\\sum x_i^2}$",
      "$\\|x\\|_2 = \\sum x_i^2$, $\\|x\\|_1 = \\sum x_i$, $\\|x\\|_\\infty = \\max x_i$"
    ],
    "answer": 0,
    "explanation": "Theo định nghĩa chuẩn: $\\|x\\|_2 = \\sqrt{\\sum x_i^2}$, $\\|x\\|_1 = \\sum |x_i|$, $\\|x\\|_\\infty = \\max |x_i|$."
  },
  {
    "id": 7,
    "tag": "Lý thuyết - Bất đẳng thức chuỗi chuẩn",
    "question": "Trong không gian $\\mathbb{R}^n$, bất đẳng thức nào sau đây thể hiện mối quan hệ đúng giữa các chuẩn với mọi $x \\in \\mathbb{R}^n$?",
    "options": [
      "$\\|x\\|_1 \\le \\|x\\|_2 \\le \\|x\\|_\\infty$",
      "$\\|x\\|_\\infty \\le \\|x\\|_2 \\le \\|x\\|_1$",
      "$\\|x\\|_2 \\le \\|x\\|_1 \\le \\|x\\|_\\infty$",
      "$\\|x\\|_\\infty \\le \\|x\\|_1 \\le \\|x\\|_2$"
    ],
    "answer": 1,
    "explanation": "Bất đẳng thức chuỗi chuẩn trong $\\mathbb{R}^n$: $\\|x\\|_\\infty \\le \\|x\\|_2 \\le \\|x\\|_1$."
  },
  {
    "id": 8,
    "tag": "Tính toán - Tính chuẩn vectơ",
    "question": "Cho vectơ $x = (3, -4, 1)^T \\in \\mathbb{R}^3$. Giá trị của các chuẩn $\\|x\\|_1, \\|x\\|_2, \\|x\\|_\\infty$ lần lượt là:",
    "options": [
      "$\\|x\\|_1 = 8,\\; \\|x\\|_2 = \\sqrt{26},\\; \\|x\\|_\\infty = 4$",
      "$\\|x\\|_1 = 6,\\; \\|x\\|_2 = 26,\\; \\|x\\|_\\infty = 3$",
      "$\\|x\\|_1 = 8,\\; \\|x\\|_2 = 5,\\; \\|x\\|_\\infty = 4$",
      "$\\|x\\|_1 = 7,\\; \\|x\\|_2 = \\sqrt{24},\\; \\|x\\|_\\infty = 3$"
    ],
    "answer": 0,
    "explanation": "$\\|x\\|_1 = |3| + |-4| + |1| = 8$; $\\|x\\|_2 = \\sqrt{3^2 + (-4)^2 + 1^2} = \\sqrt{26}$; $\\|x\\|_\\infty = \\max(3, 4, 1) = 4$."
  },
  {
    "id": 9,
    "tag": "Thực tế - Ứng dụng của chuẩn",
    "question": "Ứng dụng thực tế của chuẩn $\\|x - y\\|_1, \\|x - y\\|_2, \\|x - y\\|_\\infty$ được ghép nối đúng là:",
    "options": [
      "$\\|.\\|_1$: Khoảng cách robot; $\\|.\\|_2$: Sai số chế tạo cơ khí; $\\|.\\|_\\infty$: Xử lý ảnh.",
      "$\\|.\\|_1$: Xử lý nhận dạng ảnh; $\\|.\\|_2$: Quãng đường tối thiểu robot di chuyển; $\\|.\\|_\\infty$: Kiểm soát sai số tối đa trong chế tạo chi tiết máy.",
      "$\\|.\\|_1$: Lập trình robot; $\\|.\\|_2$: Nhận dạng ảnh; $\\|.\\|_\\infty$: Đo khoảng cách đường bay.",
      "Cả 3 chuẩn đều dùng chung cho một mục đích xử lý đồ họa."
    ],
    "answer": 1,
    "explanation": "Chuẩn $\\|.\\|_1$ đo khoảng cách Manhattan (robot trên lưới, nhận dạng ảnh); $\\|.\\|_2$ đo khoảng cách Euclide thẳng; $\\|.\\|_\\infty$ kiểm soát sai số tối đa trong dung sai chế tạo."
  },
  {
    "id": 10,
    "tag": "Ứng dụng - Đánh giá độ lệch điểm thi",
    "question": "Một học sinh có điểm mục tiêu $x = [8, 9, 7, 8]^T$ và điểm thực tế $y = [7, 8, 6, 5]^T$. Độ lệch theo chuẩn $\\|x - y\\|_1$ và $\\|x - y\\|_\\infty$ là:",
    "options": [
      "$\\|x - y\\|_1 = 6,\\; \\|x - y\\|_\\infty = 3$",
      "$\\|x - y\\|_1 = 5,\\; \\|x - y\\|_\\infty = 2$",
      "$\\|x - y\\|_1 = 6,\\; \\|x - y\\|_\\infty = 2$",
      "$\\|x - y\\|_1 = 4,\\; \\|x - y\\|_\\infty = 3$"
    ],
    "answer": 0,
    "explanation": "$|x - y| = [|8-7|, |9-8|, |7-6|, |8-5|]^T = [1, 1, 1, 3]^T \\implies \\|x-y\\|_1 = 1+1+1+3=6$; $\\|x-y\\|_\\infty = \\max(1, 1, 1, 3) = 3$."
  },
  {
    "id": 11,
    "tag": "Lý thuyết - Gradient và Hessian",
    "question": "Cho hàm khả vi cấp hai $f: \\mathbb{R}^n \\to \\mathbb{R}$. Vector Gradient $\\nabla f(x)$ và Ma trận Hessian $\\nabla^2 f(x)$ có kích thước lần lượt là:",
    "options": [
      "Gradient cấp $n \\times n$, Hessian cấp $n \\times 1$",
      "Gradient cấp $n \\times 1$, Hessian cấp $n \\times n$",
      "Cả hai đều cấp $n \\times 1$",
      "Cả hai đều cấp $n \\times n$"
    ],
    "answer": 1,
    "explanation": "Gradient $\\nabla f(x)$ là vectơ đạo hàm riêng cấp 1 (cỡ $n \\times 1$); Hessian $\\nabla^2 f(x)$ là ma trận đạo hàm riêng cấp 2 (cỡ $n \\times n$)."
  },
  {
    "id": 12,
    "tag": "Tính toán - Gradient & Hessian cơ bản",
    "question": "Cho hàm số $f(x_1, x_2, x_3) = x_1^2 + 2x_2^2 + 3x_3^2$. Gradient $\\nabla f(x)$ và Ma trận Hessian $\\nabla^2 f(x)$ là:",
    "options": [
      "$\\nabla f(x) = (2x_1, 4x_2, 6x_3)^T$, $\\nabla^2 f(x) = \\text{diag}(2, 4, 6)$",
      "$\\nabla f(x) = (x_1, 2x_2, 3x_3)^T$, $\\nabla^2 f(x) = \\text{diag}(1, 2, 3)$",
      "$\\nabla f(x) = (2x_1, 2x_2, 2x_3)^T$, $\\nabla^2 f(x) = \\text{diag}(2, 2, 2)$",
      "$\\nabla f(x) = (2, 4, 6)^T$, $\\nabla^2 f(x) = O_3$"
    ],
    "answer": 0,
    "explanation": "$\\nabla f = (\\frac{\\partial f}{\\partial x_1}, \\frac{\\partial f}{\\partial x_2}, \\frac{\\partial f}{\\partial x_3})^T = (2x_1, 4x_2, 6x_3)^T$; Hessian là ma trận đường chéo $\\text{diag}(2, 4, 6)$."
  },
  {
    "id": 13,
    "tag": "Tính toán - Hessian hàm hỗn hợp",
    "question": "Cho hàm số $f(x_1, x_2, x_3) = x_1^2 - 3x_2^2 + x_3^2 + 3x_1 x_2 - 5x_2 x_3 + 4x_1 x_3$. Ma trận Hessian $\\nabla^2 f(x)$ là:",
    "options": [
      "$\\begin{bmatrix} 2 & 3 & 4 \\\\ 3 & -6 & -5 \\\\ 4 & -5 & 2 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & 3 & 4 \\\\ 3 & -3 & -5 \\\\ 4 & -5 & 1 \\end{bmatrix}$",
      "$\\begin{bmatrix} 2 & 6 & 8 \\\\ 6 & -6 & -10 \\\\ 8 & -10 & 2 \\end{bmatrix}$",
      "$\\begin{bmatrix} 2 & 3 & 0 \\\\ 3 & -6 & -5 \\\\ 0 & -5 & 2 \\end{bmatrix}$"
    ],
    "answer": 0,
    "explanation": "Đạo hàm cấp 2: $f_{x_1 x_1}=2, f_{x_2 x_2}=-6, f_{x_3 x_3}=2$; $f_{x_1 x_2}=3, f_{x_1 x_3}=4, f_{x_2 x_3}=-5$. Ghép vào ma trận Hessian đối xứng cỡ $3 \\times 3$."
  },
  {
    "id": 14,
    "tag": "Lý thuyết - Ma trận xác định dương & nửa xác định dương",
    "question": "Ma trận vuông $A \\in \\mathbb{R}^{n \\times n}$ được gọi là xác định dương ($A \\succ 0$) và nửa xác định dương ($A \\succeq 0$) khi nào?",
    "options": [
      "$x^T A x > 0 \\; \\forall x \\neq 0$ (xác định dương); $x^T A x \\ge 0 \\; \\forall x \\in \\mathbb{R}^n$ (nửa xác định dương)",
      "$x^T A x \\ge 0 \\; \\forall x \\neq 0$ (xác định dương); $x^T A x > 0 \\; \\forall x \\in \\mathbb{R}^n$ (nửa xác định dương)",
      "Tất cả các phần tử $a_{ij} > 0$ (xác định dương); $a_{ij} \\ge 0$ (nửa xác định dương)",
      "$\\det A > 0$ (xác định dương); $\\det A \\ge 0$ (nửa xác định dương)"
    ],
    "answer": 0,
    "explanation": "Theo định nghĩa: $A \\succ 0 \\iff x^T A x > 0 \\; \\forall x \\neq 0$; $A \\succeq 0 \\iff x^T A x \\ge 0 \\; \\forall x \\in \\mathbb{R}^n$."
  },
  {
    "id": 15,
    "tag": "Lý thuyết - Ma trận xác định âm",
    "question": "Khẳng định nào sau đây ĐÚNG về ma trận xác định âm ($A \\prec 0$) và nửa xác định âm ($A \\preceq 0$)?",
    "options": [
      "$A \\prec 0 \\iff x^T A x < 0 \\; \\forall x \\neq 0$; $A \\preceq 0 \\iff x^T A x \\le 0 \\; \\forall x \\in \\mathbb{R}^n$.",
      "Ma trận xác định âm luôn có các phần tử trên đường chéo chính lớn hơn 0.",
      "Nếu $A \\prec 0$ thì $-A$ là ma trận xác định âm.",
      "Ma trận đơn vị $I_n$ là ma trận xác định âm."
    ],
    "answer": 0,
    "explanation": "Định nghĩa: $A \\prec 0 \\iff x^T A x < 0 \\; \\forall x \\neq 0$; $A \\preceq 0 \\iff x^T A x \\le 0 \\; \\forall x \\in \\mathbb{R}^n$."
  },
  {
    "id": 16,
    "tag": "Tính toán - Kiểm tra xác định dương bằng định nghĩa",
    "question": "Cho ma trận $A = \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}$. Giá trị dạng toàn phương $x^T A x$ với $x = (x_1, x_2)^T$ và tính chất xác định dấu của $A$ là:",
    "options": [
      "$x^T A x = 2x_1^2 + 3x_2^2 > 0 \\; \\forall x \\neq 0 \\implies A \\succ 0$ (xác định dương).",
      "$x^T A x = 2x_1^2 + 3x_2^2 = 0 \\implies A$ không xác định dấu.",
      "$x^T A x = 6 x_1 x_2 \\implies A \\succeq 0$.",
      "$x^T A x = 2x_1 + 3x_2 \\implies A \\prec 0$."
    ],
    "answer": 0,
    "explanation": "$x^T A x = 2x_1^2 + 3x_2^2 > 0$ với mọi $(x_1, x_2) \\neq (0,0) \\implies A \\succ 0$ (xác định dương)."
  },
  {
    "id": 17,
    "tag": "Tính toán - Ma trận đường chéo suy biến",
    "question": "Cho ma trận $B = \\begin{bmatrix} 2 & 0 \\\\ 0 & 0 \\end{bmatrix}$. Kết luận nào sau đây ĐÚNG?",
    "options": [
      "$B$ xác định dương ($B \\succ 0$).",
      "$B$ nửa xác định dương ($B \\succeq 0$) nhưng không xác định dương.",
      "$B$ xác định âm ($B \\prec 0$).",
      "$B$ không nửa xác định dương."
    ],
    "answer": 1,
    "explanation": "$x^T B x = 2x_1^2 + 0 \\cdot x_2^2 = 2x_1^2 \\ge 0 \\; \\forall x$. Với $x = (0, 1)^T \\neq 0$ thì $x^T B x = 0$, nên $B$ nửa xác định dương nhưng không xác định dương."
  },
  {
    "id": 18,
    "tag": "Lý thuyết - Dấu hiệu giá trị riêng",
    "question": "Cho ma trận đối xứng $A$ cấp $n \\times n$. Điều kiện cần và đủ về giá trị riêng để $A$ là nửa xác định dương ($A \\succeq 0$) là:",
    "options": [
      "Tất cả giá trị riêng của $A$ đều dương ($\\lambda_i > 0$).",
      "Tất cả giá trị riêng của $A$ đều không âm ($\\lambda_i \\ge 0$).",
      "Tất cả giá trị riêng của $A$ đều âm ($\\lambda_i < 0$).",
      "Có ít nhất một giá trị riêng dương."
    ],
    "answer": 1,
    "explanation": "Điều kiện cần và đủ về giá trị riêng: Ma trận đối xứng $A \\succeq 0 \\iff$ tất cả các giá trị riêng $\\lambda_i \\ge 0$."
  },
  {
    "id": 19,
    "tag": "Tính toán - Giá trị riêng của ma trận 2×2",
    "question": "Giá trị riêng của ma trận $A = \\begin{bmatrix} 2 & -1 \\\\ -1 & 2 \\end{bmatrix}$ là:",
    "options": [
      "$\\lambda_1 = 1, \\lambda_2 = 3 \\implies A \\succ 0$",
      "$\\lambda_1 = 2, \\lambda_2 = 2 \\implies A \\succ 0$",
      "$\\lambda_1 = 0, \\lambda_2 = 4 \\implies A \\succeq 0$",
      "$\\lambda_1 = -1, \\lambda_2 = 3 \\implies A$ không xác định dấu"
    ],
    "answer": 0,
    "explanation": "Phương trình đặc trưng: $(2-\\lambda)^2 - 1 = 0 \\iff 2-\\lambda = \\pm 1 \\iff \\lambda_1 = 1, \\lambda_2 = 3$. Cả hai $> 0 \\implies A \\succ 0$."
  },
  {
    "id": 20,
    "tag": "Lý thuyết - Khái niệm Principal Minor",
    "question": "Định thức của một ma trận con thu được bằng cách chọn cùng một tập chỉ số hàng và cột $\\alpha = \\beta \\subseteq \\{1, \\dots, n\\}$ của ma trận $A$ được gọi là:",
    "options": [
      "Leading principal minor (định thức con chính đầu).",
      "Principal minor (định thức con chính).",
      "Trailing principal minor.",
      "Minor phụ hợp đại số."
    ],
    "answer": 1,
    "explanation": "Principal minor (định thức con chính) là định thức của ma trận con lập từ cùng tập chỉ số hàng và cột $\\alpha = \\beta$."
  },
  {
    "id": 21,
    "tag": "Lý thuyết - Tiêu chuẩn Sylvester cho XĐD",
    "question": "Dấu hiệu định thức con chính (Sylvester Criterion): Ma trận đối xứng $A$ là xác định dương ($A \\succ 0$) khi và chỉ khi:",
    "options": [
      "Tất cả các leading principal minors đều dương ($\\Delta_k > 0 \\; \\forall k=1,\\dots,n$).",
      "Tất cả các leading principal minors đều không âm ($\\Delta_k \\ge 0$).",
      "Các leading principal minors cấp lẻ âm, cấp chẵn dương.",
      "Định thức $\\det A > 0$."
    ],
    "answer": 0,
    "explanation": "Sylvester criterion: $A \\succ 0 \\iff$ mọi định thức con chính đầu (leading principal minors) đều dương: $\\Delta_k > 0 \\; \\forall k=1,\\dots,n$."
  },
  {
    "id": 22,
    "tag": "Lý thuyết - Tiêu chuẩn Sylvester cho XĐÂ",
    "question": "Ma trận đối xứng $A$ cấp $n \\times n$ là xác định âm ($A \\prec 0$) khi và chỉ khi:",
    "options": [
      "Mọi leading principal minors đều âm.",
      "Mọi leading principal minors cấp lẻ âm ($\\Delta_1 < 0, \\Delta_3 < 0, \\dots$), cấp chẵn dương ($\\Delta_2 > 0, \\Delta_4 > 0, \\dots$).",
      "Mọi principal minors đều không âm.",
      "$\\det A < 0$."
    ],
    "answer": 1,
    "explanation": "Sylvester criterion cho ma trận xác định âm: các leading principal minors đan xen dấu, cấp lẻ âm và cấp chẵn dương: $\\Delta_1 < 0, \\Delta_2 > 0, \\Delta_3 < 0, \\dots$"
  },
  {
    "id": 23,
    "tag": "Tính toán - Kiểm tra XĐD ma trận 3×3",
    "question": "Cho ma trận $A = \\begin{bmatrix} 2 & -1 & 0 \\\\ -1 & 2 & -1 \\\\ 0 & -1 & 2 \\end{bmatrix}$. Các leading principal minors của $A$ là:",
    "options": [
      "$\\Delta_1 = 2,\\; \\Delta_2 = 3,\\; \\Delta_3 = 4 \\implies A \\succ 0$",
      "$\\Delta_1 = 2,\\; \\Delta_2 = 4,\\; \\Delta_3 = 6 \\implies A \\succ 0$",
      "$\\Delta_1 = 2,\\; \\Delta_2 = 3,\\; \\Delta_3 = 0 \\implies A \\succeq 0$",
      "$\\Delta_1 = -1,\\; \\Delta_2 = 2,\\; \\Delta_3 = -1 \\implies A \\prec 0$"
    ],
    "answer": 0,
    "explanation": "$\\Delta_1 = 2 > 0$; $\\Delta_2 = 4 - 1 = 3 > 0$; $\\Delta_3 = 2(4-1) - (-1)(-2-0) = 6 - 2 = 4 > 0 \\implies A \\succ 0$."
  },
  {
    "id": 24,
    "tag": "Lý thuyết - Phép toán Minkowski",
    "question": "Cho hai tập hợp $S_1, S_2 \\subset \\mathbb{R}^n$ và $\\lambda \\in \\mathbb{R}$. Định nghĩa đúng của tổng Minkowski $S_1 + S_2$ và tích $\\lambda S_1$ là:",
    "options": [
      "$S_1 + S_2 = \\{x + y \\mid x \\in S_1, y \\in S_2\\}$, $\\lambda S_1 = \\{\\lambda x \\mid x \\in S_1\\}$",
      "$S_1 + S_2 = S_1 \\cup S_2$, $\\lambda S_1 = \\{x^\\lambda \\mid x \\in S_1\\}$",
      "$S_1 + S_2 = S_1 \\cap S_2$, $\\lambda S_1 = \\{x + \\lambda \\mid x \\in S_1\\}$",
      "$S_1 + S_2 = \\{x \\cdot y \\mid x \\in S_1, y \\in S_2\\}$, $\\lambda S_1 = \\{\\lambda + x \\mid x \\in S_1\\}$"
    ],
    "answer": 0,
    "explanation": "Tổng Minkowski: $S_1 + S_2 = \\{x + y \\mid x \\in S_1, y \\in S_2\\}$, tích vô hướng: $\\lambda S_1 = \\{\\lambda x \\mid x \\in S_1\\}$."
  },
  {
    "id": 25,
    "tag": "Tính toán - Phép toán Minkowski trên tập rời rạc",
    "question": "Xét $S_1 = \\{1, 3\\}$, $S_2 = \\{2, 4\\}$ trong $\\mathbb{R}$. Kết quả của $S_1 + S_2$, $S_1 - S_2$ và $2S_1$ là:",
    "options": [
      "$S_1 + S_2 = \\{3, 5, 7\\},\\; S_1 - S_2 = \\{-3, -1, 1\\},\\; 2S_1 = \\{2, 6\\}$",
      "$S_1 + S_2 = \\{3, 7\\},\\; S_1 - S_2 = \\{-1, -3\\},\\; 2S_1 = \\{2, 3\\}$",
      "$S_1 + S_2 = \\{2, 4, 6, 8\\},\\; S_1 - S_2 = \\{1, 3\\},\\; 2S_1 = \\{1, 3, 2, 6\\}$",
      "$S_1 + S_2 = [3, 7],\\; S_1 - S_2 = [-3, 1],\\; 2S_1 = [2, 6]$"
    ],
    "answer": 0,
    "explanation": "$S_1+S_2 = \\{1+2, 1+4, 3+2, 3+4\\} = \\{3, 5, 7\\}$; $S_1-S_2 = \\{1-2, 1-4, 3-2, 3-4\\} = \\{-3, -1, 1\\}$; $2S_1 = \\{2(1), 2(3)\\} = \\{2, 6\\}$."
  },
  {
    "id": 26,
    "section": "Phần II: Tập Lồi, Tập Affine, Siêu Phẳng & Đa Diện Lồi",
    "tag": "Lý thuyết - Đường thẳng và đoạn thẳng",
    "question": "Tập hợp các điểm $z = \\theta x + (1-\\theta)y$ với $x, y \\in \\mathbb{R}^n$ nối hai điểm phân biệt đại diện cho đường thẳng và đoạn thẳng khi $\\theta$ nhận giá trị:",
    "options": [
      "Đường thẳng: $\\theta \\in [0, 1]$; Đoạn thẳng: $\\theta \\in \\mathbb{R}$",
      "Đường thẳng: $\\theta \\in \\mathbb{R}$; Đoạn thẳng: $\\theta \\in [0, 1]$",
      "Đường thẳng: $\\theta > 0$; Đoạn thẳng: $\\theta < 0$",
      "Đường thẳng: $\\theta \\in (0, 1)$; Đoạn thẳng: $\\theta = 0.5$"
    ],
    "answer": 1,
    "explanation": "Đường thẳng tương ứng với $\\theta \\in \\mathbb{R}$; Đoạn thẳng giới hạn trong $\\theta \\in [0, 1]$."
  },
  {
    "id": 27,
    "tag": "Lý thuyết - Định nghĩa Tập lồi",
    "question": "Một tập hợp khác rỗng $C \\subset \\mathbb{R}^n$ được gọi là tập lồi nếu:",
    "options": [
      "Mọi đường thẳng đi qua 2 điểm của $C$ đều thuộc $C$.",
      "Đoạn thẳng nối hai điểm bất kỳ thuộc $C$ nằm trọn trong $C$ (tức $\\theta x + (1-\\theta)y \\in C \\; \\forall x, y \\in C, \\forall \\theta \\in [0, 1]$).",
      "Biên của $C$ là một đường tròn hoặc mặt cầu.",
      "$C$ luôn chứa gốc tọa độ $0$."
    ],
    "answer": 1,
    "explanation": "Tập lồi $C$: Đoạn thẳng nối 2 điểm bất kỳ thuộc $C$ nằm trọn trong $C$, tức $\\theta x + (1-\\theta)y \\in C \\; \\forall x, y \\in C, \\forall \\theta \\in [0, 1]$."
  },
  {
    "id": 28,
    "tag": "Lý thuyết - Quy ước tập rỗng",
    "question": "Theo quy ước chuẩn trong Giải tích lồi, tập rỗng $\\emptyset$:",
    "options": [
      "Là tập lồi.",
      "Không phải là tập lồi.",
      "Là tập lồi nhưng không phải tập affine.",
      "Chỉ lồi trong không gian 1 chiều."
    ],
    "answer": 0,
    "explanation": "Theo quy ước toán học chuẩn trong giải tích lồi, tập rỗng $\\emptyset$ là tập lồi (chân lý rỗng)."
  },
  {
    "id": 29,
    "tag": "Nhận biết - Ví dụ tập lồi cơ bản",
    "question": "Tập hợp nào sau đây KHÔNG PHẢI là tập lồi trong $\\mathbb{R}^2$?",
    "options": [
      "Hình tròn đóng $S = \\{(x,y) \\in \\mathbb{R}^2 \\mid x^2 + y^2 \\le 1\\}$",
      "Đường tròn $C = \\{(x,y) \\in \\mathbb{R}^2 \\mid x^2 + y^2 = 1\\}$",
      "Nửa mặt phẳng $H = \\{(x,y) \\in \\mathbb{R}^2 \\mid x + y \\le 1\\}$",
      "Góc phần tư thứ nhất $Q_1 = \\{(x,y) \\in \\mathbb{R}^2 \\mid x \\ge 0, y \\ge 0\\}$"
    ],
    "answer": 1,
    "explanation": "Đường tròn $x^2 + y^2 = 1$ không lồi vì nối 2 điểm đối tâm $(1, 0)$ và $(-1, 0)$ có trung điểm $(0, 0)$ không thuộc đường tròn."
  },
  {
    "id": 30,
    "tag": "Tính toán - Kiểm tra tập lồi",
    "question": "Xét tập $E = \\{(x,y) \\in \\mathbb{R}^2 \\mid y \\le x^2\\}$. Khẳng định nào sau đây ĐÚNG?",
    "options": [
      "$E$ là tập lồi vì đồ thị hàm $y = x^2$ là parabol.",
      "$E$ không phải là tập lồi (ví dụ đoạn nối $(-1, 1)$ và $(1, 1)$ chứa $(0, 1) \\notin E$).",
      "$E$ là tập affine.",
      "$E$ là tập lồi đa diện."
    ],
    "answer": 1,
    "explanation": "Đoạn nối $(-1, 1)$ và $(1, 1)$ có trung điểm $(0, 1) \\notin E$ vì $1 > 0^2$. Do đó $E$ không lồi."
  },
  {
    "id": 31,
    "tag": "Tính toán - Kiểm tra tập lồi $xy \\le 1$",
    "question": "Tập hợp $G = \\{(x,y) \\in \\mathbb{R}^2 \\mid xy \\le 1\\}$ có phải là tập lồi không? Vì sao?",
    "options": [
      "Có, vì $xy \\le 1$ định ra bởi bất đẳng thức đơn giản.",
      "Không, vì lấy $x = (2, 0.1) \\in G$ và $y = (0.1, 2) \\in G$, trung điểm $(1.05, 1.05)$ có $1.05 \\times 1.05 = 1.1025 > 1 \\implies (1.05, 1.05) \\notin G$.",
      "Có, vì mọi miền nằm dưới đường hyperbol đều lồi.",
      "Không, chỉ lồi khi $x > 0, y > 0$."
    ],
    "answer": 1,
    "explanation": "Lấy $x = (2, 0.1) \\in G$ và $y = (0.1, 2) \\in G$, trung điểm là $(1.05, 1.05)$ có tích $1.05 \\times 1.05 = 1.1025 > 1 \\implies (1.05, 1.05) \\notin G$."
  },
  {
    "id": 32,
    "tag": "Lý thuyết - Tính chất giao các tập lồi",
    "question": "Cho $S_1$ và $S_2$ là hai tập lồi trong $\\mathbb{R}^n$. Khẳng định nào sau đây KHÔNG CHÍNH XÁC?",
    "options": [
      "Giao $S_1 \\cap S_2$ luôn là tập lồi.",
      "Hợp $S_1 \\cup S_2$ luôn luôn là tập lồi.",
      "Tổng Minkowski $S_1 + S_2$ là tập lồi.",
      "Tích $\\lambda S_1$ (với $\\lambda \\in \\mathbb{R}$) là tập lồi."
    ],
    "answer": 1,
    "explanation": "Hợp của hai tập lồi nói chung KHÔNG lồi (ví dụ hợp của 2 điểm rời nhau là tập không lồi)."
  },
  {
    "id": 33,
    "tag": "Lý thuyết - Hợp của hai tập lồi",
    "question": "Hợp của hai tập lồi $S_1 \\cup S_2$:",
    "options": [
      "Luôn luôn lồi.",
      "Nói chung không lồi (trừ khi một tập chứa tập kia hoặc thỏa mãn điều kiện đặc biệt).",
      "Luôn lồi nếu hai tập giao nhau khác rỗng.",
      "Không bao giờ lồi."
    ],
    "answer": 1,
    "explanation": "Hợp của 2 tập lồi nói chung không lồi, trừ khi một tập chứa tập kia."
  },
  {
    "id": 34,
    "tag": "Lý thuyết - Định nghĩa Tổ hợp lồi",
    "question": "Điểm $z = \\theta_1 x_1 + \\theta_2 x_2 + \\dots + \\theta_k x_k$ được gọi là một tổ hợp lồi của các điểm $x_1, x_2, \\dots, x_k$ khi và chỉ khi:",
    "options": [
      "$\\sum_{i=1}^k \\theta_i = 1$ và $\\theta_i \\ge 0 \\; \\forall i=1,\\dots,k$",
      "$\\sum_{i=1}^k \\theta_i = 0$",
      "$\\theta_i \\in \\mathbb{R}$ tùy ý",
      "$\\theta_1 = \\theta_2 = \\dots = \\theta_k = \\frac{1}{k}$"
    ],
    "answer": 0,
    "explanation": "Tổ hợp lồi yêu cầu các hệ số không âm $\\theta_i \\ge 0$ và có tổng bằng 1: $\\sum \\theta_i = 1$."
  },
  {
    "id": 35,
    "tag": "Lý thuyết - Bao lồi Convex Hull",
    "question": "Bao lồi của tập hợp $C$, ký hiệu là $\\text{conv } C$, được định nghĩa là:",
    "options": [
      "Giao của tất cả các tập lồi chứa $C$ (hoặc tập hợp tất cả các tổ hợp lồi của các điểm thuộc $C$).",
      "Hợp của tất cả các tập lồi có giao khác rỗng với $C$.",
      "Tập lồi lớn nhất nằm trong $C$.",
      "Biên ngoài của tập $C$."
    ],
    "answer": 0,
    "explanation": "Bao lồi $\\text{conv } C$ là giao của tất cả các tập lồi chứa $C$, hoặc tập tất cả các tổ hợp lồi của các điểm thuộc $C$."
  },
  {
    "id": 36,
    "tag": "Lý thuyết - Bao lồi của các tập điểm",
    "question": "Bao lồi của 2 điểm phân biệt $x, y$ và bao lồi của 3 điểm không thẳng hàng trong $\\mathbb{R}^2$ lần lượt là:",
    "options": [
      "Đường thẳng nối $x, y$; Hình tròn qua 3 điểm",
      "Đoạn thẳng nối $x, y$; Tam giác nhận 3 điểm làm đỉnh",
      "Đoạn thẳng nối $x, y$; Đường tròn ngoại tiếp tam giác",
      "Hai điểm $x, y$; Ba điểm đã cho"
    ],
    "answer": 1,
    "explanation": "Bao lồi của 2 điểm phân biệt là đoạn thẳng; bao lồi của 3 điểm không thẳng hàng là hình tam giác nhận 3 điểm làm đỉnh."
  },
  {
    "id": 37,
    "tag": "Lý thuyết - Dấu hiệu nhận biết tập lồi qua bao lồi",
    "question": "Tập hợp $C \\subset \\mathbb{R}^n$ là tập lồi khi và chỉ khi:",
    "options": [
      "$\\text{conv } C = C$",
      "$\\text{conv } C \\supsetneq C$",
      "$\\text{conv } C = \\emptyset$",
      "$\\text{conv } C = \\mathbb{R}^n$"
    ],
    "answer": 0,
    "explanation": "Một tập $C$ là tập lồi khi và chỉ khi nó trùng với bao lồi của chính nó: $\\text{conv } C = C$."
  },
  {
    "id": 38,
    "tag": "Lý thuyết - Định nghĩa Tập Affine",
    "question": "Tập $C \\subset \\mathbb{R}^n$ được gọi là tập affine nếu:",
    "options": [
      "Mọi đường thẳng nối 2 điểm bất kỳ thuộc $C$ đều nằm trọn trong $C$ (tức $\\theta x + (1-\\theta)y \\in C \\; \\forall x,y \\in C, \\forall \\theta \\in \\mathbb{R}$).",
      "Mọi đoạn thẳng nối 2 điểm thuộc $C$ nằm trong $C$.",
      "$C$ là một hình đa diện đóng bị chặn.",
      "$C$ chứa duy nhất gốc tọa độ."
    ],
    "answer": 0,
    "explanation": "Tập affine chứa toàn bộ đường thẳng đi qua 2 điểm bất kỳ: $\\theta x + (1-\\theta)y \\in C \\; \\forall \\theta \\in \\mathbb{R}$."
  },
  {
    "id": 39,
    "tag": "Lý thuyết - Biểu diễn đại số tập Affine",
    "question": "Mỗi tập affine trong $\\mathbb{R}^n$ đều có thể biểu diễn dưới dạng tập nghiệm của:",
    "options": [
      "Một hệ phương trình tuyến tính $Ax = b$ (với $A \\in \\mathbb{R}^{m \\times n}, b \\in \\mathbb{R}^m$).",
      "Một hệ bất đẳng thức tuyến tính $Ax \\le b$.",
      "Một phương trình bậc hai $x^T P x = 1$.",
      "Tập các điểm có chuẩn $\\|x\\|_2 \\le 1$."
    ],
    "answer": 0,
    "explanation": "Mọi tập affine trong $\\mathbb{R}^n$ đều có thể biểu diễn dưới dạng tập nghiệm của hệ phương trình tuyến tính $Ax = b$."
  },
  {
    "id": 40,
    "tag": "Lý thuyết - Mối quan hệ Tập Affine và Tập Lồi",
    "question": "Khẳng định nào sau đây đúng khi so sánh Tập Affine và Tập Lồi?",
    "options": [
      "Mọi tập lồi đều là tập affine.",
      "Mọi tập affine đều là tập lồi.",
      "Tập affine và tập lồi là hai khái niệm hoàn toàn độc lập, không tập nào chứa tập nào.",
      "Chỉ có không gian $\\mathbb{R}^n$ mới vừa lồi vừa affine."
    ],
    "answer": 1,
    "explanation": "Mọi tập affine đều là tập lồi (vì nếu chứa cả đường thẳng thì hiển nhiên chứa đoạn thẳng). Chiều ngược lại không đúng."
  },
  {
    "id": 41,
    "tag": "Tính toán - Kiểm tra các tập Affine",
    "question": "Tập hợp nào sau đây KHÔNG PHẢI là tập affine trong $\\mathbb{R}^2$?",
    "options": [
      "$A_1 = \\{(x,y) \\in \\mathbb{R}^2 \\mid y = 2x + 1\\}$",
      "$A_2 = \\{(x,y) \\in \\mathbb{R}^2 \\mid x^2 + y^2 \\le 1\\}$",
      "$A_3 = \\{(x,y) \\in \\mathbb{R}^2 \\mid x = 0\\}$",
      "$A_4 = \\{(\\lambda, 1-\\lambda) \\mid \\lambda \\in \\mathbb{R}\\}$"
    ],
    "answer": 1,
    "explanation": "$A_2 = \\{x^2 + y^2 \\le 1\\}$ là hình tròn đóng, là tập lồi nhưng không phải tập affine (đường thẳng vượt ra ngoài biên hình tròn)."
  },
  {
    "id": 42,
    "tag": "Lý thuyết - Định nghĩa Siêu phẳng",
    "question": "Một siêu phẳng trong không gian $\\mathbb{R}^n$ là một tập hợp có dạng:",
    "options": [
      "$\\{x \\in \\mathbb{R}^n \\mid a^T x = b\\}$ với $a \\in \\mathbb{R}^n, a \\neq 0, b \\in \\mathbb{R}$.",
      "$\\{x \\in \\mathbb{R}^n \\mid a^T x \\le b\\}$ với $a \\neq 0$.",
      "$\\{x \\in \\mathbb{R}^n \\mid \\|x\\|_2 = b\\}$.",
      "$\\{x \\in \\mathbb{R}^n \\mid x^T A x = b\\}$."
    ],
    "answer": 0,
    "explanation": "Siêu phẳng trong $\\mathbb{R}^n$ có phương trình đại số: $\\{x \\in \\mathbb{R}^n \\mid a^T x = b\\}$ với $a \\neq 0, b \\in \\mathbb{R}$."
  },
  {
    "id": 43,
    "tag": "Lý thuyết - Định nghĩa Nửa không gian",
    "question": "Một siêu phẳng $a^T x = b$ chia không gian $\\mathbb{R}^n$ thành hai nửa không gian đóng có dạng:",
    "options": [
      "$\\{x \\in \\mathbb{R}^n \\mid a^T x \\le b\\}$ và $\\{x \\in \\mathbb{R}^n \\mid a^T x \\ge b\\}$",
      "$\\{x \\in \\mathbb{R}^n \\mid a^T x < b\\}$ và $\\{x \\in \\mathbb{R}^n \\mid a^T x = b\\}$",
      "$\\{x \\in \\mathbb{R}^n \\mid \\|x\\|_1 \\le b\\}$ và $\\{x \\in \\mathbb{R}^n \\mid \\|x\\|_1 \\ge b\\}$",
      "Cả A, B, C đều sai."
    ],
    "answer": 0,
    "explanation": "Siêu phẳng $a^T x = b$ chia không gian thành 2 nửa không gian đóng: $\\{x \\mid a^T x \\le b\\}$ và $\\{x \\mid a^T x \\ge b\\}$."
  },
  {
    "id": 44,
    "tag": "Lý thuyết - Tính lồi của Siêu phẳng và Nửa không gian",
    "question": "Siêu phẳng và Nửa không gian đóng trong $\\mathbb{R}^n$:",
    "options": [
      "Đều là các tập lồi.",
      "Siêu phẳng lồi nhưng nửa không gian không lồi.",
      "Nửa không gian lồi nhưng siêu phẳng không lồi.",
      "Cả hai đều không phải là tập lồi."
    ],
    "answer": 0,
    "explanation": "Cả siêu phẳng và nửa không gian đóng đều là các tập lồi."
  },
  {
    "id": 45,
    "tag": "Lý thuyết - Định nghĩa Polyhedron",
    "question": "Một Polyhedron (tập lồi đa diện) trong $\\mathbb{R}^n$ được định nghĩa là:",
    "options": [
      "Tập nghiệm của một hệ gồm hữu hạn các đẳng thức và bất đẳng thức tuyến tính (giao hữu hạn các nửa không gian đóng).",
      "Tập hợp tất cả các điểm có chuẩn $\\|x\\|_2 \\le R$.",
      "Bao lồi của một đường tròn.",
      "Tập nghiệm của phương trình bậc hai đa biến."
    ],
    "answer": 0,
    "explanation": "Polyhedron (đa diện lồi) là tập nghiệm của hệ hữu hạn các đẳng thức và bất đẳng thức tuyến tính (giao của hữu hạn các nửa không gian đóng)."
  },
  {
    "id": 46,
    "tag": "Lý thuyết - Định nghĩa Polytope",
    "question": "Một Polyhedron được gọi là một Polytope khi và chỉ khi:",
    "options": [
      "Nó là một tập bị chặn.",
      "Nó chứa gốc tọa độ.",
      "Số đỉnh của nó bằng đúng $n+1$.",
      "Nó có thể mở rộng đến vô hạn."
    ],
    "answer": 0,
    "explanation": "Polytope là một Polyhedron bị chặn (bounded)."
  },
  {
    "id": 47,
    "tag": "Tính toán - Phân loại Polytope vs Polyhedron",
    "question": "Cho tập $S_1 = \\{x \\in \\mathbb{R}^2 \\mid 0 \\le x_1 \\le 1, 0 \\le x_2 \\le 1\\}$ và $S_3 = \\{x \\in \\mathbb{R}^3 \\mid x_1 \\ge 0, x_2 \\ge 0, x_3 \\ge 0\\}$. Phân loại đúng:",
    "options": [
      "$S_1$ là Polytope (bị chặn); $S_3$ là Polyhedron không bị chặn.",
      "Cả $S_1$ và $S_3$ đều là Polytope.",
      "Cả $S_1$ và $S_3$ đều không phải Polyhedron.",
      "$S_1$ không bị chặn; $S_3$ bị chặn."
    ],
    "answer": 0,
    "explanation": "$S_1 = [0, 1] \\times [0, 1]$ bị chặn $\\implies$ Polytope; $S_3$ là góc phần tám không bị chặn $\\implies$ Polyhedron không bị chặn."
  },
  {
    "id": 48,
    "tag": "Lý thuyết - Khái niệm Điểm cực biên / Đỉnh",
    "question": "Trong tập lồi đa diện $P$, mỗi đỉnh (vertex) của đa diện tương ứng với:",
    "options": [
      "Một điểm cực biên (extreme point) của $P$.",
      "Trung điểm của một đoạn thẳng thuộc $P$.",
      "Một điểm nằm hoàn toàn ở phần trong (interior) của $P$.",
      "Vectơ pháp tuyến của siêu phẳng."
    ],
    "answer": 0,
    "explanation": "Trong lý thuyết đa diện lồi, mỗi đỉnh (vertex) tương ứng với một điểm cực biên (extreme point) của đa diện."
  },
  {
    "id": 49,
    "tag": "Tính toán - Biểu diễn Siêu phẳng qua Nửa không gian",
    "question": "Siêu phẳng $H = \\{x \\in \\mathbb{R}^n \\mid a^T x = b\\}$ có thể được biểu diễn dưới dạng giao của hai nửa không gian đóng là:",
    "options": [
      "$H = \\{x \\mid a^T x \\le b\\} \\cap \\{x \\mid a^T x \\ge b\\}$",
      "$H = \\{x \\mid a^T x < b\\} \\cup \\{x \\mid a^T x > b\\}$",
      "$H = \\{x \\mid a^T x \\le b\\} \\setminus \\{x \\mid a^T x = b\\}$",
      "Không thể biểu diễn qua nửa không gian."
    ],
    "answer": 0,
    "explanation": "Đẳng thức $a^T x = b \\iff a^T x \\le b$ và $a^T x \\ge b$, do đó $H = \\{a^T x \\le b\\} \\cap \\{a^T x \\ge b\\}$."
  },
  {
    "id": 50,
    "tag": "Thực tế - Ứng dụng Minkowski trong Robotics",
    "question": "Trong điều khiển Robot di chuyển tránh vật cản, phép toán Minkowski nào được áp dụng để mở rộng vật cản (obstacle expansion)?",
    "options": [
      "Tổng Minkowski $O + (-R)$ giữa tập vật cản $O$ và tập hình học Robot $R$.",
      "Giao của hai tập hợp $O \\cap R$.",
      "Phép nhân số thực $-1 \\times O$.",
      "Phép chia không gian Euclide."
    ],
    "answer": 0,
    "explanation": "Thuật toán Configuration Space mở rộng chướng ngại vật bằng tổng Minkowski $O + (-R)$."
  },
  {
    "id": 51,
    "section": "Phần III: Hàm Lồi, Điều Kiện Cấp 1, Cấp 2 & Bài Toán Tối Ưu Lồi",
    "tag": "Lý thuyết - Miền xác định dom f",
    "question": "Cho hàm số $f: \\mathbb{R}^n \\to \\mathbb{R}$. Miền xác định (domain) $\\text{dom } f$ được định nghĩa là:",
    "options": [
      "$\\text{dom } f = \\{x \\in \\mathbb{R}^n \\mid f(x) < +\\infty\\}$",
      "$\\text{dom } f = \\{x \\in \\mathbb{R}^n \\mid f(x) = 0\\}$",
      "$\\text{dom } f = \\{(x, f(x)) \\in \\mathbb{R}^{n+1}\\}$",
      "$\\text{dom } f = \\mathbb{R}^n$ với mọi hàm số."
    ],
    "answer": 0,
    "explanation": "Miền xác định (domain): $\\text{dom } f = \\{x \\in \\mathbb{R}^n \\mid f(x) < +\\infty\\}$."
  },
  {
    "id": 52,
    "tag": "Lý thuyết - Đồ thị và Trên đồ thị Epigraph",
    "question": "Cho $f: \\mathbb{R}^n \\to \\mathbb{R}$. Đồ thị $\\text{gph } f$ và Trên đồ thị $\\text{epi } f$ được định nghĩa lần lượt là:",
    "options": [
      "$\\text{gph } f = \\{(x, f(x)) \\in \\mathbb{R}^{n+1} \\mid x \\in \\text{dom } f\\}$; $\\text{epi } f = \\{(x, t) \\in \\mathbb{R}^{n+1} \\mid x \\in \\text{dom } f, f(x) \\le t\\}$",
      "$\\text{gph } f = \\{(x, t) \\mid f(x) \\ge t\\}$; $\\text{epi } f = \\{(x, f(x))\\}$",
      "$\\text{gph } f = \\text{dom } f$; $\\text{epi } f = \\text{im } f$",
      "$\\text{gph } f = \\{(x, t) \\mid f(x) = t\\}$; $\\text{epi } f = \\{(x, t) \\mid f(x) > t\\}$"
    ],
    "answer": 0,
    "explanation": "$\\text{gph } f = \\{(x, f(x)) \\mid x \\in \\text{dom } f\\}$; $\\text{epi } f = \\{(x, t) \\mid x \\in \\text{dom } f, f(x) \\le t\\}$."
  },
  {
    "id": 53,
    "tag": "Tính toán - Kiểm tra tính lồi của miền xác định",
    "question": "Xét hàm $f(x, y) = \\sqrt{1 - x^2 - y^2}$. Miền xác định $\\text{dom } f$ và tính lồi của nó là:",
    "options": [
      "$\\text{dom } f = \\{(x,y) \\mid x^2 + y^2 \\le 1\\}$, là một tập lồi.",
      "$\\text{dom } f = \\{(x,y) \\mid x^2 + y^2 \\neq 1\\}$, không lồi.",
      "$\\text{dom } f = \\mathbb{R}^2$, là tập lồi.",
      "$\\text{dom } f = \\{(x,y) \\mid x^2 + y^2 \\ge 1\\}$, không lồi."
    ],
    "answer": 0,
    "explanation": "Điều kiện: $1 - x^2 - y^2 \\ge 0 \\iff x^2 + y^2 \\le 1$, là hình tròn đóng đơn vị nên là tập lồi."
  },
  {
    "id": 54,
    "tag": "Tính toán - Kiểm tra dom f của hàm phân thức",
    "question": "Xét hàm số $f(x, y) = \\frac{1}{x^2 + y^2 - 1}$. Miền xác định $\\text{dom } f$ có lồi không?",
    "options": [
      "Có lồi vì là toàn bộ $\\mathbb{R}^2$.",
      "Không lồi vì $\\text{dom } f = \\mathbb{R}^2 \\setminus \\{(x,y) \\mid x^2 + y^2 = 1\\}$ bị loại bỏ đường tròn đơn vị.",
      "Có lồi vì bỏ đi đường tròn.",
      "Chỉ lồi khi $x > 0$."
    ],
    "answer": 1,
    "explanation": "Miền xác định $\\text{dom } f = \\mathbb{R}^2 \\setminus \\{x^2 + y^2 = 1\\}$ bị khoét bỏ đường tròn đơn vị nên không lồi."
  },
  {
    "id": 55,
    "tag": "Lý thuyết - Định nghĩa Hàm Lồi qua BĐT Jensen",
    "question": "Hàm số $f: \\mathbb{R}^n \\to \\mathbb{R}$ được gọi là hàm lồi nếu $\\text{dom } f$ lồi và với mọi $x, y \\in \\text{dom } f, \\lambda \\in (0, 1)$, bất đẳng thức nào thỏa mãn?",
    "options": [
      "$f(\\lambda x + (1-\\lambda)y) \\le \\lambda f(x) + (1-\\lambda)f(y)$ (Bất đẳng thức Jensen)",
      "$f(\\lambda x + (1-\\lambda)y) \\ge \\lambda f(x) + (1-\\lambda)f(y)$",
      "$f(x+y) \\le f(x) + f(y)$",
      "$f(\\lambda x) \\le \\lambda f(x)$"
    ],
    "answer": 0,
    "explanation": "Bất đẳng thức Jensen: $f(\\lambda x + (1-\\lambda)y) \\le \\lambda f(x) + (1-\\lambda)f(y)$ với mọi $\\lambda \\in (0, 1)$."
  },
  {
    "id": 56,
    "tag": "Lý thuyết - Hàm Lồi Chặt, Hàm Lõm",
    "question": "Hàm $f$ được gọi là hàm lõm khi và chỉ khi:",
    "options": [
      "Hàm $-f$ là hàm lồi.",
      "Hàm $1/f$ là hàm lồi.",
      "Hàm $f^2$ là hàm lồi.",
      "Bất đẳng thức Jensen đổi chiều thành đẳng thức."
    ],
    "answer": 0,
    "explanation": "Hàm $f$ lõm khi và chỉ khi $-f$ lồi."
  },
  {
    "id": 57,
    "tag": "Lý thuyết - Điều kiện cần và đủ cấp 1",
    "question": "Giả sử $f: \\mathbb{R}^n \\to \\mathbb{R}$ khả vi. $f$ là hàm lồi khi và chỉ khi $\\text{dom } f$ lồi và với mọi $x, y \\in \\text{dom } f$:",
    "options": [
      "$f(y) \\ge f(x) + \\nabla f(x)^T (y - x)$",
      "$f(y) \\le f(x) + \\nabla f(x)^T (y - x)$",
      "$f(y) = f(x) + \\nabla f(x)^T (y - x)$",
      "$\\nabla f(x)^T (y - x) \\ge 0$"
    ],
    "answer": 0,
    "explanation": "Điều kiện cần và đủ cấp 1: $f$ lồi $\\iff \\text{dom } f$ lồi và $f(y) \\ge f(x) + \\nabla f(x)^T (y - x) \\; \\forall x, y \\in \\text{dom } f$."
  },
  {
    "id": 58,
    "tag": "Lý thuyết - Ý nghĩa hình học ĐK cấp 1",
    "question": "Ý nghĩa hình học của điều kiện cần và đủ cấp 1 ($f(y) \\ge f(x) + \\nabla f(x)^T(y-x)$) là gì?",
    "options": [
      "Đồ thị của hàm lồi nằm hoàn toàn phía trên (hoặc chạm) tiếp tuyến / siêu phẳng tiếp xúc tại mọi điểm.",
      "Đồ thị hàm lồi nằm phía dưới tiếp tuyến.",
      "Đồ thị hàm lồi giao với tiếp tuyến tại ít nhất 2 điểm.",
      "Tiếp tuyến của hàm lồi luôn có hệ số góc bằng 0."
    ],
    "answer": 0,
    "explanation": "Ý nghĩa hình học: Đồ thị hàm lồi luôn nằm phía trên (hoặc chạm) tiếp tuyến / siêu phẳng tiếp xúc tại mọi điểm."
  },
  {
    "id": 59,
    "tag": "Lý thuyết - Điều kiện cần và đủ cấp 2",
    "question": "Giả sử $f: \\mathbb{R}^n \\to \\mathbb{R}$ khả vi đến cấp 2. $f$ là hàm lồi khi và chỉ khi $\\text{dom } f$ lồi và Ma trận Hessian thỏa mãn:",
    "options": [
      "$\\nabla^2 f(x) \\succeq 0 \\; \\forall x \\in \\text{dom } f$ (nửa xác định dương).",
      "$\\nabla^2 f(x) \\prec 0 \\; \\forall x \\in \\text{dom } f$.",
      "$\\det(\\nabla^2 f(x)) = 0$.",
      "$\\text{trace}(\\nabla^2 f(x)) > 0$."
    ],
    "answer": 0,
    "explanation": "Điều kiện cấp 2: $f$ lồi $\\iff \\nabla^2 f(x) \\succeq 0$ (Hessian nửa xác định dương) với mọi $x \\in \\text{dom } f$."
  },
  {
    "id": 60,
    "tag": "Lý thuyết - ĐK cấp 2 trường hợp 1 biến",
    "question": "Với hàm 1 biến $f: \\mathbb{R} \\to \\mathbb{R}$ khả vi cấp 2, điều kiện để $f$ lồi trên khoảng $I$ là:",
    "options": [
      "$f''(x) \\ge 0 \\; \\forall x \\in I$",
      "$f''(x) \\le 0 \\; \\forall x \\in I$",
      "$f'(x) = 0 \\; \\forall x \\in I$",
      "$f''(x) < 0 \\; \\forall x \\in I$"
    ],
    "answer": 0,
    "explanation": "Với hàm 1 biến khả vi cấp 2: $f$ lồi trên $I \\iff f''(x) \\ge 0 \\; \\forall x \\in I$."
  },
  {
    "id": 61,
    "tag": "Tính toán - Kiểm tra hàm $e^{-x}$",
    "question": "Hàm số $f(x) = e^{-x}$ có lồi trên $\\mathbb{R}$ không?",
    "options": [
      "Có, vì $f''(x) = e^{-x} > 0 \\; \\forall x \\in \\mathbb{R}$.",
      "Không, vì có dấu trừ ở số mũ.",
      "Lõm trên $\\mathbb{R}$.",
      "Chỉ lồi khi $x > 0$."
    ],
    "answer": 0,
    "explanation": "$f'(x) = -e^{-x} \\implies f''(x) = e^{-x} > 0 \\; \\forall x \\in \\mathbb{R} \\implies f$ lồi trên $\\mathbb{R}$."
  },
  {
    "id": 62,
    "tag": "Tính toán - Kiểm tra hàm $x \\ln x$",
    "question": "Xét hàm $f(x) = x \\ln x$ trên $x > 0$. Khẳng định nào ĐÚNG?",
    "options": [
      "$f''(x) = \\frac{1}{x} > 0 \\implies f(x)$ lồi chặt trên $(0, +\\infty)$.",
      "$f''(x) = -\\frac{1}{x^2} < 0 \\implies f(x)$ lõm.",
      "$f(x)$ không lồi cũng không lõm.",
      "$f(x)$ chỉ lồi khi $x > 1$."
    ],
    "answer": 0,
    "explanation": "$f'(x) = \\ln x + 1 \\implies f''(x) = 1/x > 0 \\; \\forall x > 0 \\implies f$ lồi chặt trên $(0, +\\infty)$."
  },
  {
    "id": 63,
    "tag": "Lý thuyết - Điều kiện Epigraph",
    "question": "Khẳng định nào sau đây là định lý về mối quan hệ giữa Hàm lồi và Trên đồ thị Epigraph?",
    "options": [
      "Hàm số $f$ là lồi khi và chỉ khi trên đồ thị $\\text{epi } f$ là một tập lồi trong $\\mathbb{R}^{n+1}$.",
      "Hàm số $f$ lồi khi và chỉ khi đồ thị $\\text{gph } f$ là tập lồi.",
      "Hàm số $f$ lồi khi và chỉ khi miền giá trị $\\text{im } f$ lồi.",
      "Epigraph của hàm lồi luôn là một tập đa diện."
    ],
    "answer": 0,
    "explanation": "Định lý nền tảng: Hàm $f$ lồi khi và chỉ khi epigraph $\\text{epi } f$ là tập lồi trong $\\mathbb{R}^{n+1}$."
  },
  {
    "id": 64,
    "tag": "Lý thuyết - Hàm tuyến tính và Hàm Affine",
    "question": "Hàm affine $f(x) = a^T x + b$ có tính chất lồi/lõm như thế nào?",
    "options": [
      "Vừa là hàm lồi, vừa là hàm lõm trên $\\mathbb{R}^n$.",
      "Chỉ là hàm lồi, không phải hàm lõm.",
      "Chỉ là hàm lõm.",
      "Không lồi cũng không lõm."
    ],
    "answer": 0,
    "explanation": "Hàm affine $f(x) = a^T x + b$ có đạo hàm cấp 2 bằng 0, thỏa mãn BĐT Jensen với dấu đẳng thức nên vừa lồi vừa lõm."
  },
  {
    "id": 65,
    "tag": "Lý thuyết - Hàm toàn phương",
    "question": "Cho hàm toàn phương $f(x) = \\frac{1}{2} x^T P x + q^T x + r$ với $P$ là ma trận đối xứng. $f(x)$ lồi khi và chỉ khi:",
    "options": [
      "$P \\succeq 0$ (nửa xác định dương).",
      "$P \\succ 0$ (xác định dương).",
      "$q = 0$.",
      "$P$ là ma trận đường chéo."
    ],
    "answer": 0,
    "explanation": "Hàm toàn phương $f(x) = \\frac{1}{2} x^T P x + q^T x + r$ có Hessian $\\nabla^2 f = P$. Do đó $f$ lồi $\\iff P \\succeq 0$."
  },
  {
    "id": 66,
    "tag": "Tính toán - Kiểm tra tính lồi hàm toàn phương 2 biến",
    "question": "Cho hàm $f(x, y) = x^2 + 3y^2 - 4xy$. Ma trận Hessian $\\nabla^2 f$ và tính lồi của $f$ là:",
    "options": [
      "$\\nabla^2 f = \\begin{bmatrix} 2 & -4 \\\\ -4 & 6 \\end{bmatrix}$, có $\\Delta_2 = 12 - 16 = -4 < 0 \\implies f$ KHÔNG lồi.",
      "$\\nabla^2 f = \\begin{bmatrix} 1 & -2 \\\\ -2 & 3 \\end{bmatrix} \\implies f$ lồi.",
      "$f$ lồi chặt vì hệ số $x^2, y^2 > 0$.",
      "$f$ lõm."
    ],
    "answer": 0,
    "explanation": "$\\nabla^2 f = \\begin{bmatrix} 2 & -4 \\\\ -4 & 6 \\end{bmatrix}$. $\\Delta_2 = 12 - 16 = -4 < 0 \\implies$ Hessian không xác định dấu $\\implies f$ KHÔNG lồi."
  },
  {
    "id": 67,
    "tag": "Tính toán - Hàm $(x-y)^2$",
    "question": "Hàm số $f(x, y) = x^2 - 2xy + y^2 = (x - y)^2$:",
    "options": [
      "Lồi (nửa xác định dương vì Hessian có $\\lambda_1 = 0, \\lambda_2 = 4$).",
      "Lồi chặt.",
      "Lõm.",
      "Không xác định dấu."
    ],
    "answer": 0,
    "explanation": "$f(x, y) = (x - y)^2$ có Hessian $\\nabla^2 f = \\begin{bmatrix} 2 & -2 \\\\ -2 & 2 \\end{bmatrix}$, các giá trị riêng $\\lambda_1 = 0, \\lambda_2 = 4 \\ge 0 \\implies f$ lồi (nhưng không lồi chặt vì có $\\lambda=0$)."
  },
  {
    "id": 68,
    "tag": "Lý thuyết - Các phép toán bảo toàn tính lồi",
    "question": "Khẳng định nào sau đây SAI về tính chất của hàm lồi?",
    "options": [
      "Nếu $f(x)$ lồi và $\\alpha > 0$ thì $\\alpha f(x)$ lồi.",
      "Nếu $f(x)$ và $g(x)$ lồi thì $f(x) + g(x)$ lồi.",
      "Nếu $f(x)$ và $g(x)$ lồi thì $h(x) = \\max\\{f(x), g(x)\\}$ lồi.",
      "Nếu $f(x)$ và $g(x)$ lồi thì tích $f(x) \\cdot g(x)$ luôn luôn là hàm lồi."
    ],
    "answer": 3,
    "explanation": "Tích của hai hàm lồi nói chung KHÔNG PHẢI hàm lồi (ví dụ $f(x)=x, g(x)=x^2$ trên $\\mathbb{R}$ thì $f(x)g(x)=x^3$ không lồi)."
  },
  {
    "id": 69,
    "tag": "Lý thuyết - Tính liên tục của hàm lồi",
    "question": "Nếu $f: \\mathbb{R}^n \\to \\mathbb{R}$ là một hàm lồi thì:",
    "options": [
      "$f$ luôn liên tục trên phần trong (interior) của miền xác định $\\text{dom } f$.",
      "$f$ phải khả vi trên toàn bộ $\\mathbb{R}^n$.",
      "$f$ có thể bị gián đoạn tại mọi điểm.",
      "$f$ luôn bị chặn trên."
    ],
    "answer": 0,
    "explanation": "Nếu $f$ là hàm lồi trên $\\mathbb{R}^n$, $f$ luôn liên tục trên phần trong $\\text{int}(\\text{dom } f)$."
  },
  {
    "id": 70,
    "tag": "Lý thuyết - Bài toán Tối ưu lồi",
    "question": "Trong bài toán tối ưu lồi $\\min \\{f(x) \\mid x \\in C\\}$ (với $C$ lồi, $f$ lồi), nghiệm tối ưu địa phương (local minimum):",
    "options": [
      "Cũng chính là nghiệm tối ưu toàn cục (global minimum).",
      "Chưa chắc là nghiệm tối ưu toàn cục.",
      "Đóng vai trò là điểm yên ngựa.",
      "Luôn nằm trên biên của $C$."
    ],
    "answer": 0,
    "explanation": "Trong bài toán tối ưu lồi, mọi điểm cực tiểu địa phương đều là điểm cực tiểu toàn cục."
  },
  {
    "id": 71,
    "tag": "Tính toán - Nhận biết bài toán tối ưu KHÔNG lồi",
    "question": "Bài toán tối ưu nào sau đây KHÔNG PHẢI là bài toán tối ưu lồi?",
    "options": [
      "$\\min (x_1^2 + x_2^2)$ với ĐK $x_1^2 + x_2^2 \\ge 1, x_1 \\ge 0, x_2 \\ge 0$.",
      "$\\min (2x_1 + 3x_2)$ với ĐK $x_1 + x_2 \\le 5, x_1 \\ge 0, x_2 \\ge 0$.",
      "$\\min (x_1^2 + 2x_2^2)$ với ĐK $x_1 + 2x_2 \\le 6, x_1 \\ge 0$.",
      "$\\min (e^{x_1} + e^{x_2})$ với ĐK $x_1 + x_2 = 1$."
    ],
    "answer": 0,
    "explanation": "Miền ràng buộc $x_1^2 + x_2^2 \\ge 1$ là miền ngoài hình tròn, không phải tập lồi, nên bài toán không phải tối ưu lồi."
  },
  {
    "id": 72,
    "tag": "Tính toán - Kiểm tra hàm $x^2/y$",
    "question": "Xét hàm $f(x, y) = \\frac{x^2}{y}$ trên miền $y > 0$. Kết luận nào đúng?",
    "options": [
      "$\\Delta_1 = \\frac{2}{y} > 0$ và $\\Delta_2 = 0 \\implies \\nabla^2 f \\succeq 0 \\implies f$ lồi trên $\\mathbb{R} \\times (0, +\\infty)$.",
      "$f$ không lồi vì có mẫu số $y$.",
      "$f$ lõm.",
      "$f$ chỉ lồi khi $x = 0$."
    ],
    "answer": 0,
    "explanation": "Hessian có $\\Delta_1 = 2/y > 0$ và $\\Delta_2 = 0$, cả hai giá trị riêng $\\ge 0 \\implies \\nabla^2 f \\succeq 0 \\implies f$ lồi trên $y > 0$."
  },
  {
    "id": 73,
    "tag": "Tính toán - Hàm $-\\ln(xy)$",
    "question": "Cho hàm $f(x, y) = -\\ln x - \\ln y$ trên $x > 0, y > 0$. Hessian là $\\nabla^2 f = \\begin{bmatrix} 1/x^2 & 0 \\\\ 0 & 1/y^2 \\end{bmatrix}$. Kết luận?",
    "options": [
      "$\\nabla^2 f \\succ 0 \\implies f(x, y)$ lồi chặt trên $\\mathbb{R}^2_{++}$.",
      "$f$ lõm chặt.",
      "$f$ tuyến tính.",
      "$f$ không xác định dấu."
    ],
    "answer": 0,
    "explanation": "Hessian $\\nabla^2 f = \\text{diag}(1/x^2, 1/y^2) \\succ 0 \\; \\forall x>0, y>0 \\implies f$ lồi chặt trên $\\mathbb{R}^2_{++}$."
  },
  {
    "id": 74,
    "tag": "Tính toán - Hàm $e^{x^2+y^2}$",
    "question": "Hàm số $f(x, y) = e^{x^2 + y^2}$ là:",
    "options": [
      "Hàm lồi chặt trên $\\mathbb{R}^2$.",
      "Hàm lõm.",
      "Hàm tuyến tính.",
      "Hàm không lồi."
    ],
    "answer": 0,
    "explanation": "$f(x,y) = e^{x^2+y^2}$ là hợp của hàm lồi đồng biến $e^u$ và hàm lồi chặt $u = x^2 + y^2 \\implies f$ lồi chặt trên $\\mathbb{R}^2$."
  },
  {
    "id": 75,
    "tag": "Tính toán - Hàm $|x|$",
    "question": "Hàm số $f(x) = |x|$:",
    "options": [
      "Là hàm lồi trên $\\mathbb{R}$ (do là cực đại của 2 hàm lồi/affine $x$ và $-x$).",
      "Không lồi tại $x = 0$ vì không có đạo hàm tại $x = 0$.",
      "Là hàm lõm.",
      "Là hàm lồi chặt."
    ],
    "answer": 0,
    "explanation": "$|x| = \\max(x, -x)$ là max của hai hàm affine nên là hàm lồi trên $\\mathbb{R}$."
  },
  {
    "id": 76,
    "section": "Phần IV: Vận Dụng & Tính Toán Nâng Cao",
    "tag": "Tính toán - Chuẩn vectơ trong R⁴",
    "question": "Cho vectơ $x = (-2, 5, -1, 4)^T \\in \\mathbb{R}^4$. Giá trị của $\\|x\\|_1,\\; \\|x\\|_2,\\; \\|x\\|_\\infty$ lần lượt là:",
    "options": [
      "$\\|x\\|_1 = 12,\\; \\|x\\|_2 = \\sqrt{46},\\; \\|x\\|_\\infty = 5$",
      "$\\|x\\|_1 = 10,\\; \\|x\\|_2 = \\sqrt{46},\\; \\|x\\|_\\infty = 5$",
      "$\\|x\\|_1 = 12,\\; \\|x\\|_2 = \\sqrt{44},\\; \\|x\\|_\\infty = 4$",
      "$\\|x\\|_1 = 8,\\; \\|x\\|_2 = \\sqrt{30},\\; \\|x\\|_\\infty = 5$"
    ],
    "answer": 0,
    "explanation": "$\\|x\\|_1 = |-2| + |5| + |-1| + |4| = 12$; $\\|x\\|_2 = \\sqrt{4 + 25 + 1 + 16} = \\sqrt{46}$; $\\|x\\|_\\infty = \\max(2, 5, 1, 4) = 5$."
  },
  {
    "id": 77,
    "tag": "Tính toán - Sylvester ma trận 3×3",
    "question": "Cho ma trận $A = \\begin{bmatrix} 4 & 1 & 1 \\\\ 1 & 5 & 2 \\\\ 1 & 2 & 6 \\end{bmatrix}$. Các leading principal minors và tính xác định dấu của $A$ là:",
    "options": [
      "$\\Delta_1 = 4,\\; \\Delta_2 = 19,\\; \\Delta_3 = 97$, tất cả dương $\\implies A \\succ 0$ (xác định dương).",
      "$\\Delta_1 = 4,\\; \\Delta_2 = 19,\\; \\Delta_3 = -97 \\implies A$ không xác định dấu.",
      "$\\Delta_1 = 4,\\; \\Delta_2 = 21,\\; \\Delta_3 = 97 \\implies A \\succ 0$.",
      "$\\Delta_1 = 4,\\; \\Delta_2 = 19,\\; \\Delta_3 = 0 \\implies A \\succeq 0$ (nửa xác định dương)."
    ],
    "answer": 0,
    "explanation": "$\\Delta_1 = 4 > 0$; $\\Delta_2 = 20 - 1 = 19 > 0$; $\\Delta_3 = 4(30 - 4) - 1(6 - 2) + 1(2 - 5) = 104 - 4 - 3 = 97 > 0 \\implies A \\succ 0$."
  },
  {
    "id": 78,
    "tag": "Tính toán - Kiểm tra ma trận xác định âm",
    "question": "Cho ma trận $B = \\begin{bmatrix} -5 & 1 & 1 \\\\ 1 & -7 & 1 \\\\ 1 & 1 & -5 \\end{bmatrix}$. Kết luận về tính xác định dấu của $B$ là:",
    "options": [
      "$B \\succ 0$ (xác định dương) vì $|\\Delta_3| > 0$.",
      "$B \\prec 0$ (xác định âm), vì $\\Delta_1 = -5 < 0,\\; \\Delta_2 = 34 > 0,\\; \\Delta_3 = -156 < 0$ (dấu đan xen).",
      "$B \\succeq 0$ (nửa xác định dương).",
      "$B$ không xác định dấu vì $\\Delta_1 < 0$ nhưng $\\Delta_2 > 0$."
    ],
    "answer": 1,
    "explanation": "$\\Delta_1 = -5 < 0$; $\\Delta_2 = 35 - 1 = 34 > 0$; $\\Delta_3 = -156 < 0$. Dấu đan xen $\\implies B \\prec 0$ (xác định âm)."
  },
  {
    "id": 79,
    "tag": "Tính toán - Phép toán Minkowski trên đoạn",
    "question": "Cho $S_1 = [-2, 1]$, $S_2 = [1, 2]$ trong $\\mathbb{R}$, $\\lambda = -2$. Kết quả của $S_1 + S_2$, $S_1 - S_2$ và $\\lambda S_1$ là:",
    "options": [
      "$S_1 + S_2 = [-1, 3],\\; S_1 - S_2 = [-4, 0],\\; \\lambda S_1 = [-2, 4]$",
      "$S_1 + S_2 = [-1, 3],\\; S_1 - S_2 = [-3, -1],\\; \\lambda S_1 = [4, -2]$",
      "$S_1 + S_2 = [0, 3],\\; S_1 - S_2 = [-4, 1],\\; \\lambda S_1 = [-4, 2]$",
      "$S_1 + S_2 = [-2, 3],\\; S_1 - S_2 = [-4, 0],\\; \\lambda S_1 = [2, 4]$"
    ],
    "answer": 0,
    "explanation": "$S_1+S_2 = [-2+1, 1+2] = [-1, 3]$; $S_1-S_2 = [-2-2, 1-1] = [-4, 0]$; $\\lambda S_1 = -2[-2, 1] = [-2, 4]$."
  },
  {
    "id": 80,
    "tag": "Lý thuyết - Giao họ tập lồi",
    "question": "Cho $\\{C_i\\}_{i \\in I}$ là họ bất kỳ (hữu hạn hoặc vô hạn) các tập lồi trong $\\mathbb{R}^n$. Khẳng định nào sau đây ĐÚNG?",
    "options": [
      "Giao $\\bigcap_{i \\in I} C_i$ luôn là tập lồi (vì $\\forall x, y \\in \\bigcap C_i,\\, \\theta \\in [0,1]$: $\\theta x + (1-\\theta)y \\in C_i\\; \\forall i \\implies$ thuộc giao).",
      "Giao chỉ lồi khi họ $\\{C_i\\}$ là hữu hạn.",
      "Giao có thể không lồi khi họ $\\{C_i\\}$ là vô hạn.",
      "Giao luôn là tập rỗng khi họ vô hạn."
    ],
    "answer": 0,
    "explanation": "Với mọi $x, y \\in \\bigcap C_i$ và $\\theta \\in [0, 1]$, vì mỗi $C_i$ lồi nên $\\theta x + (1-\\theta)y \\in C_i \\; \\forall i \\implies \\theta x + (1-\\theta)y \\in \\bigcap C_i$. Vậy giao luôn lồi."
  },
  {
    "id": 81,
    "tag": "Tính toán - Kiểm tra tập lồi nửa mặt phẳng & hình tròn mở",
    "question": "Cho $A = \\{(x,y) \\mid x + y \\le 1\\}$ và $B = \\{(x,y) \\mid x^2 + y^2 < 2\\}$ trong $\\mathbb{R}^2$. Khẳng định nào ĐÚNG?",
    "options": [
      "$A$ lồi (nửa mặt phẳng — tập nghiệm BĐT tuyến tính) và $B$ lồi (hình tròn mở bán kính $\\sqrt{2}$).",
      "$A$ lồi nhưng $B$ không lồi vì là tập mở (không chứa biên).",
      "$A$ không lồi vì không bị chặn, $B$ lồi.",
      "Cả $A$ và $B$ đều không lồi."
    ],
    "answer": 0,
    "explanation": "$A$ là nửa mặt phẳng (tập nghiệm BĐT tuyến tính) $\\implies$ lồi. $B$ là hình tròn mở bán kính $\\sqrt{2}$ $\\implies$ lồi theo BĐT tam giác chuẩn Euclide."
  },
  {
    "id": 82,
    "tag": "Tính toán - Chứng minh đường tròn không lồi",
    "question": "Cho $C = \\{(x,y) \\in \\mathbb{R}^2 \\mid x^2 + y^2 = 1\\}$ (đường tròn đơn vị). Khẳng định nào ĐÚNG?",
    "options": [
      "$C$ là tập lồi vì là tập đóng và bị chặn.",
      "$C$ KHÔNG phải tập lồi. Phản ví dụ: $(1,0), (-1,0) \\in C$ nhưng trung điểm $(0,0) \\notin C$ vì $0^2 + 0^2 = 0 \\neq 1$.",
      "$C$ là tập lồi vì mọi điểm trên $C$ cách gốc tọa độ bằng 1.",
      "$C$ là tập affine."
    ],
    "answer": 1,
    "explanation": "Chọn $(1, 0) \\in C$ và $(-1, 0) \\in C$, trung điểm $(0, 0)$ có $0^2 + 0^2 = 0 \\neq 1 \\implies (0, 0) \\notin C$. Vậy đường tròn không lồi."
  },
  {
    "id": 83,
    "tag": "Tính toán - Bao lồi của 4 điểm",
    "question": "Bao lồi $\\text{conv } C$ của tập $C = \\{(0,0), (1,0), (0,1), (1,1)\\}$ trong $\\mathbb{R}^2$ là:",
    "options": [
      "Hình vuông đơn vị $\\{(x,y) \\mid 0 \\le x \\le 1,\\; 0 \\le y \\le 1\\}$.",
      "Tam giác có đỉnh $(0,0), (1,0), (0,1)$.",
      "Đoạn thẳng nối $(0,0)$ và $(1,1)$.",
      "Hình tròn nội tiếp hình vuông đơn vị."
    ],
    "answer": 0,
    "explanation": "Bao lồi của 4 đỉnh $(0,0), (1,0), (0,1), (1,1)$ là toàn bộ hình vuông đơn vị $[0, 1] \\times [0, 1]$."
  },
  {
    "id": 84,
    "tag": "Tính toán - Tập nghiệm hệ PT tuyến tính là tập Affine",
    "question": "Cho hệ $\\begin{cases} x_1 + x_2 + x_3 = 1 \\\\ x_1 - x_2 = 0 \\end{cases}$. Tập nghiệm $A \\subset \\mathbb{R}^3$ thuộc loại tập nào?",
    "options": [
      "Tập lồi nhưng không phải tập affine.",
      "Tập affine (vì là tập nghiệm hệ phương trình tuyến tính $Ax = b$), do đó cũng là tập lồi.",
      "Tập rỗng.",
      "Không phải tập lồi cũng không phải tập affine."
    ],
    "answer": 1,
    "explanation": "Tập nghiệm hệ $Ax = b$ luôn là tập affine theo định lý đại số biểu diễn tập affine, do đó cũng là tập lồi."
  },
  {
    "id": 85,
    "tag": "Tính toán - Siêu phẳng qua giao nửa không gian",
    "question": "Siêu phẳng $H: 3x_1 - 2x_2 + 4x_3 = 7$ trong $\\mathbb{R}^3$ được biểu diễn dưới dạng giao 2 nửa không gian đóng là:",
    "options": [
      "$H = \\{x \\mid 3x_1 - 2x_2 + 4x_3 \\le 7\\} \\cap \\{x \\mid 3x_1 - 2x_2 + 4x_3 \\ge 7\\}$",
      "$H = \\{x \\mid 3x_1 - 2x_2 + 4x_3 < 7\\} \\cup \\{x \\mid 3x_1 - 2x_2 + 4x_3 > 7\\}$",
      "$H = \\{x \\mid 3x_1 - 2x_2 + 4x_3 \\le 7\\} \\cup \\{x \\mid 3x_1 - 2x_2 + 4x_3 \\ge 7\\}$",
      "Không thể biểu diễn siêu phẳng qua nửa không gian."
    ],
    "answer": 0,
    "explanation": "Siêu phẳng $a^T x = b$ luôn biểu diễn bằng giao 2 nửa không gian đóng: $\\{a^T x \\le b\\} \\cap \\{a^T x \\ge b\\}$."
  },
  {
    "id": 86,
    "tag": "Tính toán - Phân loại Polytope & tìm đỉnh",
    "question": "Cho $P = \\{(x_1, x_2) \\in \\mathbb{R}^2 \\mid x_1 \\ge 0,\\; x_2 \\ge 0,\\; 2x_1 + 3x_2 \\le 6\\}$. Phân loại $P$ và các đỉnh của nó là:",
    "options": [
      "$P$ là Polytope (bị chặn), đỉnh: $(0,0),\\; (3,0),\\; (0,2)$.",
      "$P$ là Polyhedron không bị chặn, đỉnh: $(0,0),\\; (6,0),\\; (0,3)$.",
      "$P$ là Polytope, đỉnh: $(0,0),\\; (3,0),\\; (0,3)$.",
      "$P$ là Polytope, đỉnh: $(0,0),\\; (2,0),\\; (0,3)$."
    ],
    "answer": 0,
    "explanation": "$P$ là tam giác đóng trong $\\mathbb{R}^2$ giới hạn bởi $x_1 \\ge 0, x_2 \\ge 0, 2x_1+3x_2 \\le 6 \\implies$ Polytope bị chặn. Các đỉnh: $(0,0), (3,0), (0,2)$."
  },
  {
    "id": 87,
    "tag": "Tính toán - Gradient, Hessian & tính lồi",
    "question": "Cho $f(x_1, x_2) = 2x_1^2 + x_1 x_2 + x_2^2 - 6x_1 - 10x_2 + 4$. Gradient, Hessian và tính lồi của $f$ là:",
    "options": [
      "$\\nabla f = (4x_1 + x_2 - 6,\\; x_1 + 2x_2 - 10)^T$, $\\nabla^2 f = \\begin{bmatrix} 4 & 1 \\\\ 1 & 2 \\end{bmatrix}$, $\\Delta_1 = 4 > 0,\\; \\Delta_2 = 7 > 0 \\implies f$ lồi chặt.",
      "$\\nabla f = (4x_1 + x_2,\\; x_1 + 2x_2)^T$, $\\nabla^2 f = \\begin{bmatrix} 4 & 1 \\\\ 1 & 2 \\end{bmatrix} \\implies f$ lồi chặt.",
      "$\\nabla f = (4x_1 + x_2 - 6,\\; x_1 + 2x_2 - 10)^T$, $\\nabla^2 f = \\begin{bmatrix} 2 & 1 \\\\ 1 & 1 \\end{bmatrix}$, $\\Delta_2 = 1 > 0 \\implies f$ lồi chặt.",
      "$\\nabla f = (2x_1 + x_2 - 6,\\; x_1 + x_2 - 10)^T$, $\\nabla^2 f = \\begin{bmatrix} 2 & 1 \\\\ 1 & 1 \\end{bmatrix} \\implies f$ lồi."
    ],
    "answer": 0,
    "explanation": "$\\nabla f = (4x_1 + x_2 - 6, x_1 + 2x_2 - 10)^T$; $\\nabla^2 f = \\begin{bmatrix} 4 & 1 \\\\ 1 & 2 \\end{bmatrix}$ có $\\Delta_1 = 4 > 0, \\Delta_2 = 7 > 0 \\implies f$ lồi chặt."
  },
  {
    "id": 88,
    "tag": "Tính toán - Tính lồi hàm ln(1+eˣ)",
    "question": "Cho $f(x) = \\ln(1 + e^x)$. Đạo hàm cấp hai $f''(x)$ và tính lồi của $f$ trên $\\mathbb{R}$ là:",
    "options": [
      "$f''(x) = \\frac{e^x}{(1 + e^x)^2} > 0 \\; \\forall x \\in \\mathbb{R} \\implies f$ lồi chặt trên $\\mathbb{R}$.",
      "$f''(x) = -\\frac{e^x}{(1 + e^x)^2} < 0 \\implies f$ lõm trên $\\mathbb{R}$.",
      "$f''(x) = \\frac{1}{1 + e^x} > 0 \\implies f$ lồi nhưng không lồi chặt.",
      "$f''(x) = \\frac{e^{2x}}{(1 + e^x)^2} \\implies f$ không xác định được tính lồi."
    ],
    "answer": 0,
    "explanation": "$f'(x) = \\frac{e^x}{1+e^x}$, $f''(x) = \\frac{e^x}{(1+e^x)^2} > 0 \\; \\forall x \\in \\mathbb{R} \\implies f$ lồi chặt trên $\\mathbb{R}$."
  },
  {
    "id": 89,
    "tag": "Tính toán - Hàm từng khúc & tính lồi",
    "question": "Xét hàm $f(x) = \\begin{cases} x^2 & \\text{nếu } x < 0 \\\\ x & \\text{nếu } x \\ge 0 \\end{cases}$. Khẳng định nào ĐÚNG?",
    "options": [
      "$f$ lồi trên $\\mathbb{R}$ (kiểm tra BĐT Jensen: $f(0) = 0 < 1 = \\frac{1}{2}f(-1) + \\frac{1}{2}f(1)$, dù $f$ không khả vi tại $x = 0$).",
      "$f$ không lồi vì $f$ không khả vi tại $x = 0$.",
      "$f$ lồi chặt trên $\\mathbb{R}$.",
      "$f$ lõm trên $\\mathbb{R}$."
    ],
    "answer": 0,
    "explanation": "Với $x<0: f''(x)=2>0$; với $x>0: f''(x)=0$. Tại $x=0$, đồ thị nối điểm nằm trên đồ thị hàm số $\\implies$ thỏa mãn BĐT Jensen $\\implies f$ lồi trên $\\mathbb{R}$."
  },
  {
    "id": 90,
    "tag": "Tính toán - Hessian hàm 2 biến & Sylvester",
    "question": "Cho $f(x, y) = 2x^2 + 2y^2 - 3xy$. Ma trận Hessian và tính lồi của $f$ là:",
    "options": [
      "$\\nabla^2 f = \\begin{bmatrix} 4 & -3 \\\\ -3 & 4 \\end{bmatrix}$, $\\Delta_1 = 4 > 0,\\; \\Delta_2 = 16 - 9 = 7 > 0 \\implies f$ lồi chặt trên $\\mathbb{R}^2$.",
      "$\\nabla^2 f = \\begin{bmatrix} 2 & -3 \\\\ -3 & 2 \\end{bmatrix}$, $\\Delta_2 = 4 - 9 = -5 < 0 \\implies f$ không lồi.",
      "$\\nabla^2 f = \\begin{bmatrix} 4 & -3 \\\\ -3 & 4 \\end{bmatrix}$, $\\Delta_2 = 16 - 9 = -7 < 0 \\implies f$ không lồi.",
      "$\\nabla^2 f = \\begin{bmatrix} 4 & -6 \\\\ -6 & 4 \\end{bmatrix}$, $\\Delta_2 = 16 - 36 = -20 < 0 \\implies f$ không lồi."
    ],
    "answer": 0,
    "explanation": "$\\nabla^2 f = \\begin{bmatrix} 4 & -3 \\\\ -3 & 4 \\end{bmatrix}$ có $\\Delta_1 = 4 > 0, \\Delta_2 = 16 - 9 = 7 > 0 \\implies \\nabla^2 f \\succ 0 \\implies f$ lồi chặt trên $\\mathbb{R}^2$."
  },
  {
    "id": 91,
    "tag": "Lý thuyết - Max của hai hàm lồi",
    "question": "Cho $f_1(x), f_2(x)$ lồi trên $\\mathbb{R}^n$. Hàm $h(x) = \\max\\{f_1(x), f_2(x)\\}$:",
    "options": [
      "Lồi, vì $h(\\lambda u + (1-\\lambda)v) = \\max\\{f_i(\\lambda u + (1-\\lambda)v)\\} \\le \\lambda h(u) + (1-\\lambda)h(v)$.",
      "Lõm.",
      "Lồi chặt.",
      "Không lồi vì $\\max$ không phải phép toán tuyến tính."
    ],
    "answer": 0,
    "explanation": "$f_1, f_2 \\le h$. Do đó $f_i(\\lambda u + (1-\\lambda)v) \\le \\lambda f_i(u) + (1-\\lambda)f_i(v) \\le \\lambda h(u) + (1-\\lambda)h(v)$. Lấy $\\max$ ta được $h$ lồi."
  },
  {
    "id": 92,
    "tag": "Tính toán - Epigraph của f(x) = x²",
    "question": "Trên đồ thị (epigraph) $\\text{epi } f$ của hàm $f(x) = x^2$ là tập nào và có lồi không?",
    "options": [
      "$\\text{epi } f = \\{(x, t) \\in \\mathbb{R}^2 \\mid t \\ge x^2\\}$, là tập lồi (vì $f$ là hàm lồi).",
      "$\\text{epi } f = \\{(x, t) \\mid t \\le x^2\\}$, là tập lồi.",
      "$\\text{epi } f = \\{(x, t) \\mid t \\ge x^2\\}$, không phải tập lồi.",
      "$\\text{epi } f = \\{(x, t) \\mid t = x^2\\}$, là tập lồi."
    ],
    "answer": 0,
    "explanation": "$\\text{epi } f = \\{(x, t) \\mid t \\ge x^2\\}$. Do $f(x)=x^2$ lồi nên $(\\lambda x_1 + (1-\\lambda)x_2)^2 \\le \\lambda x_1^2 + (1-\\lambda)x_2^2 \\le \\lambda t_1 + (1-\\lambda)t_2 \\implies \\text{epi } f$ lồi."
  },
  {
    "id": 93,
    "tag": "Tính toán - Hessian hàm f(x,y) = xy",
    "question": "Hàm $f(x, y) = xy$ có phải hàm lồi trên $\\mathbb{R}^2$ không? Xét qua Hessian và giá trị riêng:",
    "options": [
      "$\\nabla^2 f = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$, giá trị riêng $\\lambda = \\pm 1$ $\\implies$ Hessian không xác định dấu $\\implies f$ KHÔNG lồi, KHÔNG lõm.",
      "$\\nabla^2 f = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$, giá trị riêng $\\lambda = 0, 2$ $\\implies f$ nửa xác định dương $\\implies f$ lồi.",
      "$\\nabla^2 f = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$ $\\implies f$ lồi chặt.",
      "$\\nabla^2 f = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$, giá trị riêng $\\lambda = \\pm 1$ $\\implies f$ lõm."
    ],
    "answer": 0,
    "explanation": "$\\nabla^2 f = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$ có giá trị riêng $\\lambda = \\pm 1$ (1 âm, 1 dương) $\\implies$ ma trận không xác định dấu $\\implies f$ không lồi, không lõm."
  },
  {
    "id": 94,
    "tag": "Tính toán - Nhận biết bài toán tối ưu lồi",
    "question": "Bài toán $\\min f(x_1, x_2) = 4x_1 + x_2 - x_1^2 - 2x_2^2$ với ĐK $2x_1 + x_2 \\le 1,\\; x_1 \\ge 0,\\; x_2 \\ge 0$. Đây có phải bài toán tối ưu lồi không?",
    "options": [
      "Là bài toán tối ưu lồi vì miền ràng buộc lồi.",
      "KHÔNG phải tối ưu lồi, vì $\\nabla^2 f = \\begin{bmatrix} -2 & 0 \\\\ 0 & -4 \\end{bmatrix} \\prec 0$ nên $f$ lõm chặt; cực tiểu hóa hàm lõm không phải tối ưu lồi.",
      "KHÔNG phải tối ưu lồi vì miền ràng buộc không lồi.",
      "Là bài toán tối ưu lồi vì hàm mục tiêu là đa thức bậc 2."
    ],
    "answer": 1,
    "explanation": "$\\nabla^2 f = \\begin{bmatrix} -2 & 0 \\\\ 0 & -4 \\end{bmatrix} \\prec 0 \\implies f$ lõm chặt. Bài toán cực tiểu hóa hàm lõm không phải bài toán tối ưu lồi."
  },
  {
    "id": 95,
    "tag": "Tính toán - Tính lồi hàm -log(x)",
    "question": "Hàm $f(x) = -\\log(x)$ trên $(0, +\\infty)$. Đạo hàm cấp hai và tính lồi:",
    "options": [
      "$f'(x) = -\\frac{1}{x}$, $f''(x) = \\frac{1}{x^2} > 0 \\; \\forall x > 0 \\implies f$ lồi chặt trên $(0, +\\infty)$.",
      "$f''(x) = -\\frac{1}{x^2} < 0 \\implies f$ lõm trên $(0, +\\infty)$.",
      "$f''(x) = \\frac{1}{x} > 0 \\implies f$ lồi nhưng không lồi chặt.",
      "$f$ không lồi vì $\\text{dom } f = (0, +\\infty) \\neq \\mathbb{R}$."
    ],
    "answer": 0,
    "explanation": "$f'(x) = -1/x, f''(x) = 1/x^2 > 0 \\; \\forall x > 0 \\implies f(x) = -\\log x$ lồi chặt trên $(0, +\\infty)$."
  },
  {
    "id": 96,
    "tag": "Tính toán - Hessian hàm 3 biến & xác định dấu",
    "question": "Cho $f(x_1, x_2, x_3) = x_1^2 + 4x_2^2 + 3x_3^2 - 6x_1 x_2$. Ma trận Hessian, leading principal minors và tính lồi:",
    "options": [
      "$\\nabla^2 f = \\begin{bmatrix} 2 & -6 & 0 \\\\ -6 & 8 & 0 \\\\ 0 & 0 & 6 \\end{bmatrix}$, $\\Delta_1 = 2 > 0,\\; \\Delta_2 = 16 - 36 = -20 < 0 \\implies$ không xác định dấu $\\implies f$ không lồi, không lõm.",
      "$\\nabla^2 f = \\begin{bmatrix} 2 & -6 & 0 \\\\ -6 & 8 & 0 \\\\ 0 & 0 & 6 \\end{bmatrix}$, $\\Delta_2 = 52 > 0 \\implies f$ lồi chặt.",
      "$\\nabla^2 f = \\begin{bmatrix} 1 & -3 & 0 \\\\ -3 & 4 & 0 \\\\ 0 & 0 & 3 \\end{bmatrix} \\implies f$ lồi.",
      "$\\nabla^2 f = \\begin{bmatrix} 2 & -6 & 0 \\\\ -6 & 8 & 0 \\\\ 0 & 0 & 6 \\end{bmatrix}$, $\\Delta_1 = 2 > 0,\\; \\Delta_2 = -20 < 0 \\implies f$ lõm."
    ],
    "answer": 0,
    "explanation": "$\\nabla^2 f = \\begin{bmatrix} 2 & -6 & 0 \\\\ -6 & 8 & 0 \\\\ 0 & 0 & 6 \\end{bmatrix}$ có $\\Delta_1 = 2 > 0, \\Delta_2 = 16 - 36 = -20 < 0 \\implies$ không xác định dấu $\\implies f$ không lồi, không lõm."
  },
  {
    "id": 97,
    "tag": "Tính toán - Tổng Minkowski hai hình tròn",
    "question": "Cho $S_1 = \\{x \\in \\mathbb{R}^2 \\mid \\|x\\|_2 \\le 1\\}$ và $S_2 = \\{x \\in \\mathbb{R}^2 \\mid \\|x\\|_2 \\le 2\\}$. Tổng Minkowski $S_1 + S_2$ là:",
    "options": [
      "$S_1 + S_2 = \\{x \\in \\mathbb{R}^2 \\mid \\|x\\|_2 \\le 3\\}$ (hình tròn bán kính 3).",
      "$S_1 + S_2 = \\{x \\in \\mathbb{R}^2 \\mid \\|x\\|_2 \\le 2\\}$ (hình tròn bán kính 2).",
      "$S_1 + S_2 = \\{x \\in \\mathbb{R}^2 \\mid \\|x\\|_2 \\le \\sqrt{5}\\}$.",
      "$S_1 + S_2 = \\{x \\in \\mathbb{R}^2 \\mid \\|x\\|_2 \\le 1\\}$ (hình tròn bán kính 1)."
    ],
    "answer": 0,
    "explanation": "Tổng Minkowski của 2 hình tròn tâm gốc tọa độ: $B(0, 1) + B(0, 2) = B(0, 1+2) = B(0, 3) = \\{x \\in \\mathbb{R}^2 \\mid \\|x\\|_2 \\le 3\\}$."
  },
  {
    "id": 98,
    "tag": "Lý thuyết - Tập ma trận NXĐ dương là nón lồi",
    "question": "Tập $\\mathbb{S}^n_+$ gồm các ma trận nửa xác định dương cỡ $n \\times n$. Khẳng định nào ĐÚNG?",
    "options": [
      "$\\mathbb{S}^n_+$ là nón lồi (convex cone), vì $\\forall A, B \\in \\mathbb{S}^n_+,\\; \\alpha, \\beta \\ge 0$: $x^T(\\alpha A + \\beta B)x = \\alpha(x^T A x) + \\beta(x^T B x) \\ge 0$.",
      "$\\mathbb{S}^n_+$ là tập lồi nhưng không phải nón lồi.",
      "$\\mathbb{S}^n_+$ là nón nhưng không lồi.",
      "$\\mathbb{S}^n_+$ không phải tập lồi."
    ],
    "answer": 0,
    "explanation": "Với $A, B \\in \\mathbb{S}^n_+$ và $\\alpha, \\beta \\ge 0$, ta có $x^T(\\alpha A + \\beta B)x = \\alpha x^T A x + \\beta x^T B x \\ge 0 \\implies \\mathbb{S}^n_+$ là nón lồi (convex cone)."
  },
  {
    "id": 99,
    "tag": "Lý thuyết - ĐK tối ưu hàm toàn phương",
    "question": "Cho $f(x) = \\frac{1}{2} x^T P x + q^T x + r$ với $P$ đối xứng. Điều kiện cần và đủ để $f$ đạt giá trị nhỏ nhất toàn cục duy nhất tại $x^* = -P^{-1}q$ là:",
    "options": [
      "$P \\succ 0$ (xác định dương), khi đó $f$ lồi chặt và $\\nabla f(x^*) = Px^* + q = 0 \\implies x^* = -P^{-1}q$ là cực tiểu toàn cục duy nhất.",
      "$P \\succeq 0$ (nửa xác định dương).",
      "$P \\prec 0$ (xác định âm).",
      "$\\det(P) \\neq 0$ (chỉ cần $P$ khả nghịch)."
    ],
    "answer": 0,
    "explanation": "$f$ đạt cực tiểu toàn cục duy nhất $\\iff P \\succ 0$ (xác định dương). Khi đó điểm dừng $x^* = -P^{-1}q$ là nghiệm duy nhất."
  },
  {
    "id": 100,
    "tag": "Lý thuyết - Tính duy nhất nghiệm tối ưu",
    "question": "Trong bài toán $\\min\\{f(x) \\mid x \\in C\\}$ với $f$ lồi chặt, $C$ lồi. Nếu nghiệm tối ưu toàn cục tồn tại thì:",
    "options": [
      "Nghiệm tối ưu toàn cục duy nhất (vì giả sử có $x^* \\neq y^*$ cùng tối ưu, trung điểm $z \\in C$ cho $f(z) < f(x^*)$, mâu thuẫn).",
      "Có thể có nhiều nghiệm tối ưu toàn cục.",
      "Nghiệm tối ưu toàn cục luôn tồn tại.",
      "Nghiệm tối ưu địa phương không nhất thiết là nghiệm toàn cục."
    ],
    "answer": 0,
    "explanation": "Nếu có 2 nghiệm tối ưu phân biệt $x^* \\neq y^*$, do $f$ lồi chặt thì điểm trung điểm $z = \\frac{x^*+y^*}{2}$ có $f(z) < f(x^*)$, mâu thuẫn. Vậy nghiệm tối ưu toàn cục là duy nhất."
  }
];
