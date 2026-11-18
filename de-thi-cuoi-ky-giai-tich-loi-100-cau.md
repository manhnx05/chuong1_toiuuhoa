# Ngân Hàng Đề Thi Cuối Kỳ: Nguyên Lý Giải Tích Lồi & Tối Ưu Hóa (100 Câu Hỏi Chi Tiết)

**Môn học:** Giải tích lồi và Tối ưu hóa (Convex Analysis and Optimization)  
**Tài liệu chuẩn hóa gốc:** *2. TUH_Giai tich loi 260816.pdf* (Phenikaa University)  
**Cấu trúc bộ đề:** 100 câu hỏi (bao gồm Trắc nghiệm lý thuyết, Trắc nghiệm định lượng và Bài tập tự luận có lời giải chi tiết)  
**Mục tiêu sư phạm:** Đánh giá toàn diện kiến thức từ nhận biết, thông hiểu đến vận dụng cao trong Giải tích lồi.

---

## Phần I: Kiến Thức Nền Tảng Không Gian $\mathbb{R}^n$, Chuẩn, Ma Trận & Phép Toán Minkowski (Câu 1 – 25)

### Câu 1 (Lý thuyết - Tích vô hướng)
Trong không gian Euclide $\mathbb{R}^n$, tích vô hướng của hai vectơ $u = (u_1, u_2, \dots, u_n)^T$ và $v = (v_1, v_2, \dots, v_n)^T$ được định nghĩa như thế nào?
- A. $\langle u, v \rangle = \sum_{i=1}^n (u_i + v_i)$
- B. $\langle u, v \rangle = u_1 v_1 + u_2 v_2 + \dots + u_n v_n = u^T v$
- C. $\langle u, v \rangle = \max_{1 \le i \le n} |u_i v_i|$
- D. $\langle u, v \rangle = \sqrt{\sum_{i=1}^n u_i^2 v_i^2}$

### Câu 2 (Tính toán - Tích vô hướng)
Cho hai vectơ $a = (1, 2, 3, 4)^T$ và $b = (2, -1, -2, 1)^T$ trong $\mathbb{R}^4$. Giá trị tích vô hướng $\langle a, b \rangle$ bằng:
- A. $2$
- B. $-2$
- C. $0$
- D. $-4$

### Câu 3 (Tính toán - Tích vô hướng tham số)
Cho vectơ $c = (5, 2, -1, 3)^T$ và $x = (x_1, x_2, x_3, x_4)^T$. Tích vô hướng $\langle c, x \rangle$ có dạng đại số là:
- A. $5x_1 + 2x_2 - x_3 + 3x_4$
- B. $5x_1 + 2x_2 + x_3 + 3x_4$
- C. $10 x_1 x_2 x_3 x_4$
- D. $(5+x_1) + (2+x_2) + (-1+x_3) + (3+x_4)$

### Câu 4 (Tính toán - Dạng toàn phương)
Cho ma trận $A = \begin{bmatrix} 1 & 2 \\ 3 & 2 \end{bmatrix}$ và vectơ $x = (x_1, x_2)^T$. Biểu thức dạng toàn phương $x^T A x$ bằng:
- A. $x_1^2 + 2x_2^2$
- B. $x_1^2 + 5x_1 x_2 + 2x_2^2$
- C. $x_1^2 + 6x_1 x_2 + 2x_2^2$
- D. $x_1^2 + 2x_1 x_2 + 3x_2^2$

### Câu 5 (Lý thuyết - Ma trận đối xứng)
Biết hàm số $f(x) = \frac{1}{2} x^T A x = x_1^2 + 2x_2^2 - 6x_1 x_2$ với $A$ là ma trận đối xứng cỡ $2 \times 2$. Ma trận $A$ là:
- A. $\begin{bmatrix} 2 & -6 \\ -6 & 4 \end{bmatrix}$
- B. $\begin{bmatrix} 1 & -3 \\ -3 & 2 \end{bmatrix}$
- C. $\begin{bmatrix} 2 & -3 \\ -3 & 4 \end{bmatrix}$
- D. $\begin{bmatrix} 1 & -6 \\ -6 & 2 \end{bmatrix}$

### Câu 6 (Lý thuyết - Các định nghĩa chuẩn)
Cho vectơ $x = (x_1, x_2, \dots, x_n) \in \mathbb{R}^n$. Chuẩn Euclide $\|x\|_2$, chuẩn $\|x\|_1$ và chuẩn $\|x\|_\infty$ lần lượt được định nghĩa là:
- A. $\|x\|_2 = \sqrt{\sum x_i^2}$, $\|x\|_1 = \sum |x_i|$, $\|x\|_\infty = \max |x_i|$
- B. $\|x\|_2 = \sum |x_i|$, $\|x\|_1 = \sqrt{\sum x_i^2}$, $\|x\|_\infty = \min |x_i|$
- C. $\|x\|_2 = \max |x_i|$, $\|x\|_1 = \sum |x_i|$, $\|x\|_\infty = \sqrt{\sum x_i^2}$
- D. $\|x\|_2 = \sum x_i^2$, $\|x\|_1 = \sum x_i$, $\|x\|_\infty = \max x_i$

### Câu 7 (Lý thuyết - Bất đẳng thức chuỗi chuẩn)
Trong không gian $\mathbb{R}^n$, bất đẳng thức nào sau đây thể hiện mối quan hệ đúng giữa các chuẩn với mọi $x \in \mathbb{R}^n$?
- A. $\|x\|_1 \le \|x\|_2 \le \|x\|_\infty$
- B. $\|x\|_\infty \le \|x\|_2 \le \|x\|_1$
- C. $\|x\|_2 \le \|x\|_1 \le \|x\|_\infty$
- D. $\|x\|_\infty \le \|x\|_1 \le \|x\|_2$

### Câu 8 (Tính toán - Tính chuẩn vectơ)
Cho vectơ $x = (3, -4, 1)^T \in \mathbb{R}^3$. Giá trị của các chuẩn $\|x\|_1, \|x\|_2, \|x\|_\infty$ lần lượt là:
- A. $\|x\|_1 = 8,\; \|x\|_2 = \sqrt{26},\; \|x\|_\infty = 4$
- B. $\|x\|_1 = 6,\; \|x\|_2 = 26,\; \|x\|_\infty = 3$
- C. $\|x\|_1 = 8,\; \|x\|_2 = 5,\; \|x\|_\infty = 4$
- D. $\|x\|_1 = 7,\; \|x\|_2 = \sqrt{24},\; \|x\|_\infty = 3$

### Câu 9 (Thực tế - Ứng dụng của chuẩn)
Ứng dụng thực tế của chuẩn $\|x - y\|_1, \|x - y\|_2, \|x - y\|_\infty$ được ghép nối đúng là:
- A. $\|.\|_1$: Khoảng cách robot; $\|.\|_2$: Sai số chế tạo cơ khí; $\|.\|_\infty$: Xử lý ảnh.
- B. $\|.\|_1$: Xử lý nhận dạng ảnh; $\|.\|_2$: Quãng đường tối thiểu robot di chuyển; $\|.\|_\infty$: Kiểm soát sai số tối đa trong chế tạo chi tiết máy.
- C. $\|.\|_1$: Lập trình robot; $\|.\|_2$: Nhận dạng ảnh; $\|.\|_\infty$: Đo khoảng cách đường bay.
- D. Cả 3 chuẩn đều dùng chung cho một mục đích xử lý đồ họa.

### Câu 10 (Ứng dụng - Đánh giá độ lệch điểm thi)
Một học sinh có điểm mục tiêu $x = [8, 9, 7, 8]^T$ và điểm thực tế $y = [7, 8, 6, 5]^T$. Độ lệch theo chuẩn $\|x - y\|_1$ và $\|x - y\|_\infty$ là:
- A. $\|x - y\|_1 = 6,\; \|x - y\|_\infty = 3$
- B. $\|x - y\|_1 = 5,\; \|x - y\|_\infty = 2$
- C. $\|x - y\|_1 = 6,\; \|x - y\|_\infty = 2$
- D. $\|x - y\|_1 = 4,\; \|x - y\|_\infty = 3$

### Câu 11 (Lý thuyết - Gradient và Hessian)
Cho hàm khả vi cấp hai $f: \mathbb{R}^n \to \mathbb{R}$. Vector Gradient $\nabla f(x)$ và Ma trận Hessian $\nabla^2 f(x)$ có kích thước lần lượt là:
- A. Gradient cấp $n \times n$, Hessian cấp $n \times 1$
- B. Gradient cấp $n \times 1$, Hessian cấp $n \times n$
- C. Cả hai đều cấp $n \times 1$
- D. Cả hai đều cấp $n \times n$

### Câu 12 (Tính toán - Gradient & Hessian cơ bản)
Cho hàm số $f(x_1, x_2, x_3) = x_1^2 + 2x_2^2 + 3x_3^2$. Gradient $\nabla f(x)$ và Ma trận Hessian $\nabla^2 f(x)$ là:
- A. $\nabla f(x) = (2x_1, 4x_2, 6x_3)^T$, $\nabla^2 f(x) = \text{diag}(2, 4, 6)$
- B. $\nabla f(x) = (x_1, 2x_2, 3x_3)^T$, $\nabla^2 f(x) = \text{diag}(1, 2, 3)$
- C. $\nabla f(x) = (2x_1, 2x_2, 2x_3)^T$, $\nabla^2 f(x) = \text{diag}(2, 2, 2)$
- D. $\nabla f(x) = (2, 4, 6)^T$, $\nabla^2 f(x) = O_3$

### Câu 13 (Tính toán - Hessian hàm hỗn hợp)
Cho hàm số $f(x_1, x_2, x_3) = x_1^2 - 3x_2^2 + x_3^2 + 3x_1 x_2 - 5x_2 x_3 + 4x_1 x_3$. Ma trận Hessian $\nabla^2 f(x)$ là:
- A. $\begin{bmatrix} 2 & 3 & 4 \\ 3 & -6 & -5 \\ 4 & -5 & 2 \end{bmatrix}$
- B. $\begin{bmatrix} 1 & 3 & 4 \\ 3 & -3 & -5 \\ 4 & -5 & 1 \end{bmatrix}$
- C. $\begin{bmatrix} 2 & 6 & 8 \\ 6 & -6 & -10 \\ 8 & -10 & 2 \end{bmatrix}$
- D. $\begin{bmatrix} 2 & 3 & 0 \\ 3 & -6 & -5 \\ 0 & -5 & 2 \end{bmatrix}$

### Câu 14 (Lý thuyết - Ma trận xác định dương & nửa xác định dương)
Ma trận vuông $A \in \mathbb{R}^{n \times n}$ được gọi là xác định dương ($A \succ 0$) và nửa xác định dương ($A \succeq 0$) khi nào?
- A. $x^T A x > 0 \; \forall x \neq 0$ (xác định dương); $x^T A x \ge 0 \; \forall x \in \mathbb{R}^n$ (nửa xác định dương)
- B. $x^T A x \ge 0 \; \forall x \neq 0$ (xác định dương); $x^T A x > 0 \; \forall x \in \mathbb{R}^n$ (nửa xác định dương)
- C. Tất cả các phần tử $a_{ij} > 0$ (xác định dương); $a_{ij} \ge 0$ (nửa xác định dương)
- D. $\det A > 0$ (xác định dương); $\det A \ge 0$ (nửa xác định dương)

### Câu 15 (Lý thuyết - Ma trận xác định âm)
Khẳng định nào sau đây ĐÚNG về ma trận xác định âm ($A \prec 0$) và nửa xác định âm ($A \preceq 0$)?
- A. $A \prec 0 \iff x^T A x < 0 \; \forall x \neq 0$; $A \preceq 0 \iff x^T A x \le 0 \; \forall x \in \mathbb{R}^n$.
- B. Ma trận xác định âm luôn có các phần tử trên đường chéo chính lớn hơn 0.
- C. Nếu $A \prec 0$ thì $-A$ là ma trận xác định âm.
- D. Ma trận đơn vị $I_n$ là ma trận xác định âm.

### Câu 16 (Tính toán - Kiểm tra xác định dương bằng định nghĩa)
Cho ma trận $A = \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix}$. Giá trị dạng toàn phương $x^T A x$ với $x = (x_1, x_2)^T$ và tính chất xác định dấu của $A$ là:
- A. $x^T A x = 2x_1^2 + 3x_2^2 > 0 \; \forall x \neq 0 \implies A \succ 0$ (xác định dương).
- B. $x^T A x = 2x_1^2 + 3x_2^2 = 0 \implies A$ không xác định dấu.
- C. $x^T A x = 6 x_1 x_2 \implies A \succeq 0$.
- D. $x^T A x = 2x_1 + 3x_2 \implies A \prec 0$.

### Câu 17 (Tính toán - Ma trận đường chéo suy biến)
Cho ma trận $B = \begin{bmatrix} 2 & 0 \\ 0 & 0 \end{bmatrix}$. Kết luận nào sau đây ĐÚNG?
- A. $B$ xác định dương ($B \succ 0$).
- B. $B$ nửa xác định dương ($B \succeq 0$) nhưng không xác định dương.
- C. $B$ xác định âm ($B \prec 0$).
- D. $B$ không nửa xác định dương.

### Câu 18 (Lý thuyết - Dấu hiệu giá trị riêng)
Cho ma trận đối xứng $A$ cấp $n \times n$. Điều kiện cần và đủ về giá trị riêng để $A$ là nửa xác định dương ($A \succeq 0$) là:
- A. Tất cả giá trị riêng của $A$ đều dương ($\lambda_i > 0$).
- B. Tất cả giá trị riêng của $A$ đều không âm ($\lambda_i \ge 0$).
- C. Tất cả giá trị riêng của $A$ đều âm ($\lambda_i < 0$).
- D. Có ít nhất một giá trị riêng dương.

### Câu 19 (Tính toán - Giá trị riêng của ma trận $2 \times 2$)
Giá trị riêng của ma trận $A = \begin{bmatrix} 2 & -1 \\ -1 & 2 \end{bmatrix}$ là:
- A. $\lambda_1 = 1, \lambda_2 = 3 \implies A \succ 0$
- B. $\lambda_1 = 2, \lambda_2 = 2 \implies A \succ 0$
- C. $\lambda_1 = 0, \lambda_2 = 4 \implies A \succeq 0$
- D. $\lambda_1 = -1, \lambda_2 = 3 \implies A$ không xác định dấu

### Câu 20 (Lý thuyết - Khái niệm Principal Minor)
Định thức của một ma trận con thu được bằng cách chọn cùng một tập chỉ số hàng và cột $\alpha = \beta \subseteq \{1, \dots, n\}$ của ma trận $A$ được gọi là:
- A. Leading principal minor (định thức con chính đầu).
- B. Principal minor (định thức con chính).
- C. Trailing principal minor.
- D. Minor phụ hợp đại số.

### Câu 21 (Lý thuyết - Tiêu chuẩn Sylvester cho ma trận xác định dương)
Dấu hiệu định thức con chính (Sylvester Criterion): Ma trận đối xứng $A$ là xác định dương ($A \succ 0$) khi và chỉ khi:
- A. Tất cả các leading principal minors đều dương ($\Delta_k > 0 \; \forall k=1,\dots,n$).
- B. Tất cả các leading principal minors đều không âm ($\Delta_k \ge 0$).
- C. Các leading principal minors cấp lẻ âm, cấp chẵn dương.
- D. Định thức $\det A > 0$.

### Câu 22 (Lý thuyết - Tiêu chuẩn Sylvester cho ma trận xác định âm)
Ma trận đối xứng $A$ cấp $n \times n$ là xác định âm ($A \prec 0$) khi và chỉ khi:
- A. Mọi leading principal minors đều âm.
- B. Mọi leading principal minors cấp lẻ âm ($\Delta_1 < 0, \Delta_3 < 0, \dots$), cấp chẵn dương ($\Delta_2 > 0, \Delta_4 > 0, \dots$).
- C. Mọi principal minors đều không âm.
- D. $\det A < 0$.

### Câu 23 (Tính toán - Kiểm tra tính xác định dương ma trận $3 \times 3$)
Cho ma trận $A = \begin{bmatrix} 2 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 2 \end{bmatrix}$. Các leading principal minors của $A$ là:
- A. $\Delta_1 = 2,\; \Delta_2 = 3,\; \Delta_3 = 4 \implies A \succ 0$
- B. $\Delta_1 = 2,\; \Delta_2 = 4,\; \Delta_3 = 6 \implies A \succ 0$
- C. $\Delta_1 = 2,\; \Delta_2 = 3,\; \Delta_3 = 0 \implies A \succeq 0$
- D. $\Delta_1 = -1,\; \Delta_2 = 2,\; \Delta_3 = -1 \implies A \prec 0$

### Câu 24 (Lý thuyết - Phép toán Minkowski)
Cho hai tập hợp $S_1, S_2 \subset \mathbb{R}^n$ và $\lambda \in \mathbb{R}$. Định nghĩa đúng của tổng Minkowski $S_1 + S_2$ và tích $\lambda S_1$ là:
- A. $S_1 + S_2 = \{x + y \mid x \in S_1, y \in S_2\}$, $\lambda S_1 = \{\lambda x \mid x \in S_1\}$
- B. $S_1 + S_2 = S_1 \cup S_2$, $\lambda S_1 = \{x^\lambda \mid x \in S_1\}$
- C. $S_1 + S_2 = S_1 \cap S_2$, $\lambda S_1 = \{x + \lambda \mid x \in S_1\}$
- D. $S_1 + S_2 = \{x \cdot y \mid x \in S_1, y \in S_2\}$, $\lambda S_1 = \{\lambda + x \mid x \in S_1\}$

### Câu 25 (Tính toán - Phép toán Minkowski trên tập rời rạc và đoạn thẳng)
Xét $S_1 = \{1, 3\}$, $S_2 = \{2, 4\}$ trong $\mathbb{R}$. Kết quả của $S_1 + S_2$, $S_1 - S_2$ và $2S_1$ là:
- A. $S_1 + S_2 = \{3, 5, 7\},\; S_1 - S_2 = \{-3, -1, 1\},\; 2S_1 = \{2, 6\}$
- B. $S_1 + S_2 = \{3, 7\},\; S_1 - S_2 = \{-1, -3\},\; 2S_1 = \{2, 3\}$
- C. $S_1 + S_2 = \{2, 4, 6, 8\},\; S_1 - S_2 = \{1, 3\},\; 2S_1 = \{1, 3, 2, 6\}$
- D. $S_1 + S_2 = [3, 7],\; S_1 - S_2 = [-3, 1],\; 2S_1 = [2, 6]$

---

## Phần II: Tập Lồi, Tập Affine, Siêu Phẳng & Đa Diện Lồi (Câu 26 – 50)

### Câu 26 (Lý thuyết - Đường thẳng và đoạn thẳng)
Tập hợp các điểm $z = \theta x + (1-\theta)y$ với $x, y \in \mathbb{R}^n$ nối hai điểm phân biệt đại diện cho đường thẳng và đoạn thẳng khi $\theta$ nhận giá trị:
- A. Đường thẳng: $\theta \in [0, 1]$; Đoạn thẳng: $\theta \in \mathbb{R}$
- B. Đường thẳng: $\theta \in \mathbb{R}$; Đoạn thẳng: $\theta \in [0, 1]$
- C. Đường thẳng: $\theta > 0$; Đoạn thẳng: $\theta < 0$
- D. Đường thẳng: $\theta \in (0, 1)$; Đoạn thẳng: $\theta = 0,5$

### Câu 27 (Lý thuyết - Định nghĩa Tập lồi)
Một tập hợp khác rỗng $C \subset \mathbb{R}^n$ được gọi là tập lồi nếu:
- A. Mọi đường thẳng đi qua 2 điểm của $C$ đều thuộc $C$.
- B. Đoạn thẳng nối hai điểm bất kỳ thuộc $C$ nằm trọn trong $C$ (tức $\theta x + (1-\theta)y \in C \; \forall x, y \in C, \forall \theta \in [0, 1]$).
- C. Biên của $C$ là một đường tròn hoặc mặt cầu.
- D. $C$ luôn chứa gốc tọa độ $0$.

### Câu 28 (Lý thuyết - Quy ước tập rỗng)
Theo quy ước chuẩn trong Giải tích lồi, tập rỗng $\emptyset$:
- A. Là tập lồi.
- B. Không phải là tập lồi.
- C. Là tập lồi nhưng không phải tập affine.
- D. Chỉ lồi trong không gian 1 chiều.

### Câu 29 (Nhận biết - Ví dụ tập lồi cơ bản)
Tập hợp nào sau đây KHÔNG PHẢI là tập lồi trong $\mathbb{R}^2$?
- A. Hình tròn đóng $S = \{(x,y) \in \mathbb{R}^2 \mid x^2 + y^2 \le 1\}$
- B. Đường tròn $C = \{(x,y) \in \mathbb{R}^2 \mid x^2 + y^2 = 1\}$
- C. Nửa mặt phẳng $H = \{(x,y) \in \mathbb{R}^2 \mid x + y \le 1\}$
- D. Góc phần tư thứ nhất $Q_1 = \{(x,y) \in \mathbb{R}^2 \mid x \ge 0, y \ge 0\}$

### Câu 30 (Tính toán - Kiểm tra tập lồi $y \le x^2$)
Xét tập $E = \{(x,y) \in \mathbb{R}^2 \mid y \le x^2\}$. Khẳng định nào sau đây ĐÚNG?
- A. $E$ là tập lồi vì đồ thị hàm $y = x^2$ là parabol.
- B. $E$ không phải là tập lồi (ví dụ đoạn nối $(-1, 1)$ và $(1, 1)$ chứa $(0, 1) \notin E$).
- C. $E$ là tập affine.
- D. $E$ là tập lồi đa diện.

### Câu 31 (Tính toán - Kiểm tra tập lồi $xy \le 1$)
Tập hợp $G = \{(x,y) \in \mathbb{R}^2 \mid xy \le 1\}$ có phải là tập lồi không? Vì sao?
- A. Có, vì $xy \le 1$ định ra bởi bất đẳng thức đơn giản.
- B. Không, vì lấy $x = (2, 0,1) \in G$ và $y = (0,1, 2) \in G$, trung điểm $(1,05, 1,05)$ có $1,05 \times 1,05 = 1,1025 > 1 \implies (1,05, 1,05) \notin G$.
- C. Có, vì mọi miền nằm dưới đường hyperbol đều lồi.
- D. Không, chỉ lồi khi $x > 0, y > 0$.

### Câu 32 (Lý thuyết - Tính chất giao các tập lồi)
Cho $S_1$ và $S_2$ là hai tập lồi trong $\mathbb{R}^n$. Khẳng định nào sau đây KHÔNG CHÍNH XÁC?
- A. Giao $S_1 \cap S_2$ luôn là tập lồi.
- B. Hợp $S_1 \cup S_2$ luôn luôn là tập lồi.
- C. Tổng Minkowski $S_1 + S_2$ là tập lồi.
- D. Tích $\lambda S_1$ (với $\lambda \in \mathbb{R}$) là tập lồi.

### Câu 33 (Lý thuyết - Hợp của hai tập lồi)
Hợp của hai tập lồi $S_1 \cup S_2$:
- A. Luôn luôn lồi.
- B. Nói chung không lồi (trừ khi một tập chứa tập kia hoặc thỏa mãn điều kiện đặc biệt).
- C. Luôn lồi nếu hai tập giao nhau khác rỗng.
- D. Không bao giờ lồi.

### Câu 34 (Lý thuyết - Định nghĩa Tổ hợp lồi)
Điểm $z = \theta_1 x_1 + \theta_2 x_2 + \dots + \theta_k x_k$ được gọi là một tổ hợp lồi của các điểm $x_1, x_2, \dots, x_k$ khi và chỉ khi:
- A. $\sum_{i=1}^k \theta_i = 1$ và $\theta_i \ge 0 \; \forall i=1,\dots,k$
- B. $\sum_{i=1}^k \theta_i = 0$
- C. $\theta_i \in \mathbb{R}$ tùy ý
- D. $\theta_1 = \theta_2 = \dots = \theta_k = \frac{1}{k}$

### Câu 35 (Lý thuyết - Bao lồi Convex Hull)
Bao lồi của tập hợp $C$, ký hiệu là $\text{conv } C$, được định nghĩa là:
- A. Giao của tất cả các tập lồi chứa $C$ (hoặc tập hợp tất cả các tổ hợp lồi của các điểm thuộc $C$).
- B. Hợp của tất cả các tập lồi có giao khác rỗng với $C$.
- C. Tập lồi lớn nhất nằm trong $C$.
- D. Biên ngoài của tập $C$.

### Câu 36 (Lý thuyết - Bao lồi của các tập điểm)
Bao lồi của 2 điểm phân biệt $x, y$ và bao lồi của 3 điểm không thẳng hàng trong $\mathbb{R}^2$ lần lượt là:
- A. Đường thẳng nối $x, y$; Hình tròn qua 3 điểm
- B. Đoạn thẳng nối $x, y$; Tam giác nhận 3 điểm làm đỉnh
- C. Đoạn thẳng nối $x, y$; Đường tròn ngoại tiếp tam giác
- D. Hai điểm $x, y$; Ba điểm đã cho

### Câu 37 (Lý thuyết - Dấu hiệu nhận biết tập lồi qua bao lồi)
Tập hợp $C \subset \mathbb{R}^n$ là tập lồi khi và chỉ khi:
- A. $\text{conv } C = C$
- B. $\text{conv } C \supsetneq C$
- C. $\text{conv } C = \emptyset$
- D. $\text{conv } C = \mathbb{R}^n$

### Câu 38 (Lý thuyết - Định nghĩa Tập Affine)
Tập $C \subset \mathbb{R}^n$ được gọi là tập affine nếu:
- A. Mọi đường thẳng nối 2 điểm bất kỳ thuộc $C$ đều nằm trọn trong $C$ (tức $\theta x + (1-\theta)y \in C \; \forall x,y \in C, \forall \theta \in \mathbb{R}$).
- B. Mọi đoạn thẳng nối 2 điểm thuộc $C$ nằm trong $C$.
- C. $C$ là một hình đa diện đóng bị chặn.
- D. $C$ chứa duy nhất gốc tọa độ.

### Câu 39 (Lý thuyết - Biểu diễn đại số tập Affine)
Mỗi tập affine trong $\mathbb{R}^n$ đều có thể biểu diễn dưới dạng tập nghiệm của:
- A. Một hệ phương trình tuyến tính $Ax = b$ (với $A \in \mathbb{R}^{m \times n}, b \in \mathbb{R}^m$).
- B. Một hệ bất đẳng thức tuyến tính $Ax \le b$.
- C. Một phương trình bậc hai $x^T P x = 1$.
- D. Tập các điểm có chuẩn $\|x\|_2 \le 1$.

### Câu 40 (Lý thuyết - Mối quan hệ giữa Tập Affine và Tập Lồi)
Khẳng định nào sau đây đúng khi so sánh Tập Affine và Tập Lồi?
- A. Mọi tập lồi đều là tập affine.
- B. Mọi tập affine đều là tập lồi.
- C. Tập affine và tập lồi là hai khái niệm hoàn toàn độc lập, không tập nào chứa tập nào.
- D. Chỉ có không gian $\mathbb{R}^n$ mới vừa lồi vừa affine.

### Câu 41 (Tính toán - Kiểm tra các tập Affine trong $\mathbb{R}^2$)
Tập hợp nào sau đây KHÔNG PHẢI là tập affine trong $\mathbb{R}^2$?
- A. $A_1 = \{(x,y) \in \mathbb{R}^2 \mid y = 2x + 1\}$
- B. $A_2 = \{(x,y) \in \mathbb{R}^2 \mid x^2 + y^2 \le 1\}$
- C. $A_3 = \{(x,y) \in \mathbb{R}^2 \mid x = 0\}$
- D. $A_4 = \{(\lambda, 1-\lambda) \mid \lambda \in \mathbb{R}\}$

### Câu 42 (Lý thuyết - Định nghĩa Siêu phẳng Hyperplane)
Một siêu phẳng trong không gian $\mathbb{R}^n$ là một tập hợp có dạng:
- A. $\{x \in \mathbb{R}^n \mid a^T x = b\}$ với $a \in \mathbb{R}^n, a \neq 0, b \in \mathbb{R}$.
- B. $\{x \in \mathbb{R}^n \mid a^T x \le b\}$ với $a \neq 0$.
- C. $\{x \in \mathbb{R}^n \mid \|x\|_2 = b\}$.
- D. $\{x \in \mathbb{R}^n \mid x^T A x = b\}$.

### Câu 43 (Lý thuyết - Định nghĩa Nửa không gian Half-space)
Một siêu phẳng $a^T x = b$ chia không gian $\mathbb{R}^n$ thành hai nửa không gian đóng có dạng:
- A. $\{x \in \mathbb{R}^n \mid a^T x \le b\}$ và $\{x \in \mathbb{R}^n \mid a^T x \ge b\}$
- B. $\{x \in \mathbb{R}^n \mid a^T x < b\}$ và $\{x \in \mathbb{R}^n \mid a^T x = b\}$
- C. $\{x \in \mathbb{R}^n \mid \|x\|_1 \le b\}$ và $\{x \in \mathbb{R}^n \mid \|x\|_1 \ge b\}$
- D. Cả A, B, C đều sai.

### Câu 44 (Lý thuyết - Tính lồi của Siêu phẳng và Nửa không gian)
Siêu phẳng và Nửa không gian đóng trong $\mathbb{R}^n$:
- A. Đều là các tập lồi.
- B. Siêu phẳng lồi nhưng nửa không gian không lồi.
- C. Nửa không gian lồi nhưng siêu phẳng không lồi.
- D. Cả hai đều không phải là tập lồi.

### Câu 45 (Lý thuyết - Định nghĩa Polyhedron Tập lồi đa diện)
Một Polyhedron (tập lồi đa diện) trong $\mathbb{R}^n$ được định nghĩa là:
- A. Tập nghiệm của một hệ gồm hữu hạn các đẳng thức và bất đẳng thức tuyến tính (giao hữu hạn các nửa không gian đóng).
- B. Tập hợp tất cả các điểm có chuẩn $\|x\|_2 \le R$.
- C. Bao lồi của một đường tròn.
- D. Tập nghiệm của phương trình bậc hai đa biến.

### Câu 46 (Lý thuyết - Định nghĩa Polytope Đa diện lồi)
Một Polyhedron được gọi là một Polytope khi và chỉ khi:
- A. Nó là một tập bị chặn.
- B. Nó chứa gốc tọa độ.
- C. Số đỉnh của nó bằng đúng $n+1$.
- D. Nó có thể mở rộng đến vô hạn.

### Câu 47 (Tính toán - Phân loại Polytope vs Polyhedron)
Cho tập $S_1 = \{x \in \mathbb{R}^2 \mid 0 \le x_1 \le 1, 0 \le x_2 \le 1\}$ và $S_3 = \{x \in \mathbb{R}^3 \mid x_1 \ge 0, x_2 \ge 0, x_3 \ge 0\}$. Phân loại đúng của $S_1$ và $S_3$ là:
- A. $S_1$ là Polytope (bị chặn); $S_3$ là Polyhedron không bị chặn.
- B. Cả $S_1$ và $S_3$ đều là Polytope.
- C. Cả $S_1$ và $S_3$ đều không phải Polyhedron.
- D. $S_1$ không bị chặn; $S_3$ bị chặn.

### Câu 48 (Lý thuyết - Khái niệm Điểm cực biên / Đỉnh)
Trong tập lồi đa diện $P$, mỗi đỉnh (vertex) của đa diện tương ứng với:
- A. Một điểm cực biên (extreme point) của $P$.
- B. Trung điểm của một đoạn thẳng thuộc $P$.
- C. Một điểm nằm hoàn toàn ở phần trong (interior) của $P$.
- D. Vectơ pháp tuyến của siêu phẳng.

### Câu 49 (Tính toán - Biểu diễn Siêu phẳng qua Nửa không gian)
Siêu phẳng $H = \{x \in \mathbb{R}^n \mid a^T x = b\}$ có thể được biểu diễn dưới dạng giao của hai nửa không gian đóng là:
- A. $H = \{x \mid a^T x \le b\} \cap \{x \mid a^T x \ge b\}$
- B. $H = \{x \mid a^T x < b\} \cup \{x \mid a^T x > b\}$
- C. $H = \{x \mid a^T x \le b\} \setminus \{x \mid a^T x = b\}$
- D. Không thể biểu diễn qua nửa không gian.

### Câu 50 (Thực tế - Ứng dụng phép toán Minkowski trong Robotics)
Trong điều khiển Robot di chuyển tránh vật cản, phép toán Minkowski nào được áp dụng để mở rộng vật cản (obstacle expansion) tương ứng với kích thước hình học của robot?
- A. Tổng Minkowski $O + (-R)$ giữa tập vật cản $O$ và tập hình học Robot $R$.
- B. Giao của hai tập hợp $O \cap R$.
- C. Phép nhân số thực $-1 \times O$.
- D. Phép chia không gian Euclide.

---

## Phần III: Hàm Lồi, Điều Kiện Cấp 1, Cấp 2 & Bài Toán Tối Ưu Lồi (Câu 51 – 75)

### Câu 51 (Lý thuyết - Miền xác định dom f)
Cho hàm số $f: \mathbb{R}^n \to \mathbb{R}$. Miền xác định (domain) $\text{dom } f$ được định nghĩa là:
- A. $\text{dom } f = \{x \in \mathbb{R}^n \mid f(x) < +\infty\}$
- B. $\text{dom } f = \{x \in \mathbb{R}^n \mid f(x) = 0\}$
- C. $\text{dom } f = \{(x, f(x)) \in \mathbb{R}^{n+1}\}$
- D. $\text{dom } f = \mathbb{R}^n$ với mọi hàm số.

### Câu 52 (Lý thuyết - Đồ thị và Trên đồ thị Epigraph)
Cho $f: \mathbb{R}^n \to \mathbb{R}$. Đồ thị $\text{gph } f$ và Trên đồ thị $\text{epi } f$ được định nghĩa lần lượt là:
- A. $\text{gph } f = \{(x, f(x)) \in \mathbb{R}^{n+1} \mid x \in \text{dom } f\}$; $\text{epi } f = \{(x, t) \in \mathbb{R}^{n+1} \mid x \in \text{dom } f, f(x) \le t\}$
- B. $\text{gph } f = \{(x, t) \mid f(x) \ge t\}$; $\text{epi } f = \{(x, f(x))\}$
- C. $\text{gph } f = \text{dom } f$; $\text{epi } f = \text{im } f$
- D. $\text{gph } f = \{(x, t) \mid f(x) = t\}$; $\text{epi } f = \{(x, t) \mid f(x) > t\}$

### Câu 53 (Tính toán - Kiểm tra tính lồi của miền xác định)
Xét hàm $f(x, y) = \sqrt{1 - x^2 - y^2}$. Miền xác định $\text{dom } f$ và tính lồi của nó là:
- A. $\text{dom } f = \{(x,y) \mid x^2 + y^2 \le 1\}$, là một tập lồi.
- B. $\text{dom } f = \{(x,y) \mid x^2 + y^2 \neq 1\}$, không lồi.
- C. $\text{dom } f = \mathbb{R}^2$, là tập lồi.
- D. $\text{dom } f = \{(x,y) \mid x^2 + y^2 \ge 1\}$, không lồi.

### Câu 54 (Tính toán - Kiểm tra dom f của hàm phân thức)
Xét hàm số $f(x, y) = \frac{1}{x^2 + y^2 - 1}$. Miền xác định $\text{dom } f$ có lồi không?
- A. Có lồi vì là toàn bộ $\mathbb{R}^2$.
- B. Không lồi vì $\text{dom } f = \mathbb{R}^2 \setminus \{(x,y) \mid x^2 + y^2 = 1\}$ bị loại bỏ đường tròn đơn vị.
- C. Có lồi vì bỏ đi đường tròn.
- D. Chỉ lồi khi $x > 0$.

### Câu 55 (Lý thuyết - Định nghĩa Hàm Lồi qua Bất đẳng thức Jensen)
Hàm số $f: \mathbb{R}^n \to \mathbb{R}$ được gọi là hàm lồi nếu $\text{dom } f$ lồi và với mọi $x, y \in \text{dom } f, \lambda \in (0, 1)$, bất đẳng thức nào sau đây thỏa mãn?
- A. $f(\lambda x + (1-\lambda)y) \le \lambda f(x) + (1-\lambda)f(y)$ (Bất đẳng thức Jensen)
- B. $f(\lambda x + (1-\lambda)y) \ge \lambda f(x) + (1-\lambda)f(y)$
- C. $f(x+y) \le f(x) + f(y)$
- D. $f(\lambda x) \le \lambda f(x)$

### Câu 56 (Lý thuyết - Hàm Lồi Chặt, Hàm Lõm)
Hàm $f$ được gọi là hàm lõm khi và chỉ khi:
- A. Hàm $-f$ là hàm lồi.
- B. Hàm $1/f$ là hàm lồi.
- C. Hàm $f^2$ là hàm lồi.
- D. Bất đẳng thức Jensen đổi chiều thành đẳng thức.

### Câu 57 (Lý thuyết - Điều kiện cần và đủ cấp 1)
Giả sử $f: \mathbb{R}^n \to \mathbb{R}$ khả vi. $f$ là hàm lồi khi và chỉ khi $\text{dom } f$ lồi và với mọi $x, y \in \text{dom } f$:
- A. $f(y) \ge f(x) + \nabla f(x)^T (y - x)$
- B. $f(y) \le f(x) + \nabla f(x)^T (y - x)$
- C. $f(y) = f(x) + \nabla f(x)^T (y - x)$
- D. $\nabla f(x)^T (y - x) \ge 0$

### Câu 58 (Lý thuyết - Ý nghĩa hình học của Điều kiện cấp 1)
Ý nghĩa hình học của điều kiện cần và đủ cấp 1 ($f(y) \ge f(x) + \nabla f(x)^T(y-x)$) là gì?
- A. Đồ thị của hàm lồi nằm hoàn toàn phía trên (hoặc chạm) tiếp tuyến / siêu phẳng tiếp xúc tại mọi điểm.
- B. Đồ thị hàm lồi nằm phía dưới tiếp tuyến.
- C. Đồ thị hàm lồi giao với tiếp tuyến tại ít nhất 2 điểm.
- D. Tiếp tuyến của hàm lồi luôn có hệ số góc bằng 0.

### Câu 59 (Lý thuyết - Điều kiện cần và đủ cấp 2)
Giả sử $f: \mathbb{R}^n \to \mathbb{R}$ khả vi đến cấp 2. $f$ là hàm lồi khi và chỉ khi $\text{dom } f$ lồi và Ma trận Hessian thỏa mãn:
- A. $\nabla^2 f(x) \succeq 0 \; \forall x \in \text{dom } f$ (nửa xác định dương).
- B. $\nabla^2 f(x) \prec 0 \; \forall x \in \text{dom } f$.
- C. $\det(\nabla^2 f(x)) = 0$.
- D. $\text{trace}(\nabla^2 f(x)) > 0$.

### Câu 60 (Lý thuyết - Điều kiện cấp 2 trường hợp 1 biến)
Với hàm 1 biến $f: \mathbb{R} \to \mathbb{R}$ khả vi cấp 2, điều kiện để $f$ lồi trên khoảng $I$ là:
- A. $f''(x) \ge 0 \; \forall x \in I$
- B. $f''(x) \le 0 \; \forall x \in I$
- C. $f'(x) = 0 \; \forall x \in I$
- D. $f''(x) < 0 \; \forall x \in I$

### Câu 61 (Tính toán - Kiểm tra hàm 1 biến $f(x) = e^{-x}$)
Hàm số $f(x) = e^{-x}$ có lồi trên $\mathbb{R}$ không?
- A. Có, vì $f''(x) = e^{-x} > 0 \; \forall x \in \mathbb{R}$.
- B. Không, vì có dấu trừ ở số mũ.
- C. Lõm trên $\mathbb{R}$.
- D. Chỉ lồi khi $x > 0$.

### Câu 62 (Tính toán - Kiểm tra hàm $f(x) = x \ln x$)
Xét hàm $f(x) = x \ln x$ trên $x > 0$. Khẳng định nào ĐÚNG?
- A. $f''(x) = \frac{1}{x} > 0 \implies f(x)$ lồi chặt trên $(0, +\infty)$.
- B. $f''(x) = -\frac{1}{x^2} < 0 \implies f(x)$ lõm.
- C. $f(x)$ không lồi cũng không lõm.
- D. $f(x)$ chỉ lồi khi $x > 1$.

### Câu 63 (Lý thuyết - Điều kiện Epigraph)
Khẳng định nào sau đây là định lý về mối quan hệ giữa Hàm lồi và Trên đồ thị Epigraph?
- A. Hàm số $f$ là lồi khi và chỉ khi trên đồ thị $\text{epi } f$ là một tập lồi trong $\mathbb{R}^{n+1}$.
- B. Hàm số $f$ lồi khi và chỉ khi đồ thị $\text{gph } f$ là tập lồi.
- C. Hàm số $f$ lồi khi và chỉ khi miền giá trị $\text{im } f$ lồi.
- D. Epigraph của hàm lồi luôn là một tập đa diện.

### Câu 64 (Lý thuyết - Hàm tuyến tính và Hàm Affine)
Hàm affine $f(x) = a^T x + b$ có tính chất lồi/lõm như thế nào?
- A. Vừa là hàm lồi, vừa là hàm lõm trên $\mathbb{R}^n$.
- B. Chỉ là hàm lồi, không phải hàm lõm.
- C. Chỉ là hàm lõm.
- D. Không lồi cũng không lõm.

### Câu 65 (Lý thuyết - Hàm toàn phương Quadratic Function)
Cho hàm toàn phương $f(x) = \frac{1}{2} x^T P x + q^T x + r$ với $P$ là ma trận đối xứng. $f(x)$ lồi khi và chỉ khi:
- A. $P \succeq 0$ (nửa xác định dương).
- B. $P \succ 0$ (xác định dương).
- C. $q = 0$.
- D. $P$ là ma trận đường chéo.

### Câu 66 (Tính toán - Kiểm tra tính lồi hàm toàn phương 2 biến)
Cho hàm $f(x, y) = x^2 + 3y^2 - 4xy$. Ma trận Hessian $\nabla^2 f$ và tính lồi của $f$ là:
- A. $\nabla^2 f = \begin{bmatrix} 2 & -4 \\ -4 & 6 \end{bmatrix}$, có $\Delta_2 = 12 - 16 = -4 < 0 \implies f$ KHÔNG lồi.
- B. $\nabla^2 f = \begin{bmatrix} 1 & -2 \\ -2 & 3 \end{bmatrix} \implies f$ lồi.
- C. $f$ lồi chặt vì hệ số $x^2, y^2 > 0$.
- D. $f$ lõm.

### Câu 67 (Tính toán - Hàm toàn phương $f(x, y) = x^2 - 2xy + y^2$)
Hàm số $f(x, y) = x^2 - 2xy + y^2 = (x - y)^2$:
- A. Lồi (nửa xác định dương vì Hessian có $\lambda_1 = 0, \lambda_2 = 4$).
- B. Lồi chặt.
- C. Lõm.
- D. Không xác định dấu.

### Câu 68 (Lý thuyết - Các phép toán bảo toàn tính lồi)
Khẳng định nào sau đây SAI về tính chất của hàm lồi?
- A. Nếu $f(x)$ lồi và $\alpha > 0$ thì $\alpha f(x)$ lồi.
- B. Nếu $f(x)$ và $g(x)$ lồi thì $f(x) + g(x)$ lồi.
- C. Nếu $f(x)$ và $g(x)$ lồi thì $h(x) = \max\{f(x), g(x)\}$ lồi.
- D. Nếu $f(x)$ và $g(x)$ lồi thì tích $f(x) \cdot g(x)$ luôn luôn là hàm lồi.

### Câu 69 (Lý thuyết - Tính liên tục của hàm lồi)
Nếu $f: \mathbb{R}^n \to \mathbb{R}$ là một hàm lồi thì:
- A. $f$ luôn liên tục trên phần trong (interior) của miền xác định $\text{dom } f$.
- B. $f$ phải khả vi trên toàn bộ $\mathbb{R}^n$.
- C. $f$ có thể bị gián đoạn tại mọi điểm.
- D. $f$ luôn bị chặn trên.

### Câu 70 (Lý thuyết - Bài toán Tối ưu lồi và Cực trị)
Trong bài toán tối ưu lồi $\min \{f(x) \mid x \in C\}$ (với $C$ là tập lồi và $f$ là hàm lồi), nghiệm tối ưu địa phương (local minimum):
- A. Cũng chính là nghiệm tối ưu toàn cục (global minimum).
- B. Chưa chắc là nghiệm tối ưu toàn cục.
- C. Đóng vai trò là điểm yên ngựa.
- D. Luôn nằm trên biên của $C$.

### Câu 71 (Tính toán - Nhận biết bài toán tối ưu KHÔNG lồi)
Bài toán tối ưu nào sau đây KHÔNG PHẢI là bài toán tối ưu lồi?
- A. $\min (x_1^2 + x_2^2)$ với điều kiện $x_1^2 + x_2^2 \ge 1, x_1 \ge 0, x_2 \ge 0$.
- B. $\min (2x_1 + 3x_2)$ với điều kiện $x_1 + x_2 \le 5, x_1 \ge 0, x_2 \ge 0$.
- C. $\min (x_1^2 + 2x_2^2)$ với điều kiện $x_1 + 2x_2 \le 6, x_1 \ge 0$.
- D. $\min (e^{x_1} + e^{x_2})$ với điều kiện $x_1 + x_2 = 1$.

### Câu 72 (Tính toán - Kiểm tra hàm $f(x, y) = x^2 / y$)
Xét hàm $f(x, y) = \frac{x^2}{y}$ trên miền $y > 0$. Hessian của hàm số là $\nabla^2 f = \begin{bmatrix} 2/y & -2x/y^2 \\ -2x/y^2 & 2x^2/y^3 \end{bmatrix}$. Kết luận nào đúng?
- A. $\Delta_1 = \frac{2}{y} > 0$ và $\Delta_2 = \frac{4x^2}{y^4} - \frac{4x^2}{y^4} = 0 \implies \nabla^2 f \succeq 0 \implies f$ lồi trên $\mathbb{R} \times (0, +\infty)$.
- B. $f$ không lồi vì có mẫu số $y$.
- C. $f$ lõm.
- D. $f$ chỉ lồi khi $x = 0$.

### Câu 73 (Tính toán - Hàm $f(x,y) = -\ln(xy)$ trên $\mathbb{R}^2_{++}$)
Cho hàm $f(x, y) = -\ln x - \ln y$ trên $x > 0, y > 0$. Hessian là $\nabla^2 f = \begin{bmatrix} 1/x^2 & 0 \\ 0 & 1/y^2 \end{bmatrix}$. Kết luận nào ĐÚNG?
- A. $\nabla^2 f \succ 0 \implies f(x, y)$ lồi chặt trên $\mathbb{R}^2_{++}$.
- B. $f$ lõm chặt.
- C. $f$ tuyến tính.
- D. $f$ không xác định dấu.

### Câu 74 (Tính toán - Hàm $f(x,y) = e^{x^2 + y^2}$)
Hàm số $f(x, y) = e^{x^2 + y^2}$ là:
- A. Hàm lồi chặt trên $\mathbb{R}^2$.
- B. Hàm lõm.
- C. Hàm tuyến tính.
- D. Hàm không lồi.

### Câu 75 (Tính toán - Hàm $f(x) = \max(x, -x) = |x|$)
Hàm số $f(x) = |x|$:
- A. Là hàm lồi trên $\mathbb{R}$ (do là cực đại của 2 hàm lồi/affine $x$ và $-x$).
- B. Không lồi tại $x = 0$ vì không có đạo hàm tại $x = 0$.
- C. Là hàm lõm.
- D. Là hàm lồi chặt.

---

## Phần IV: Vận Dụng & Tính Toán Nâng Cao (Câu 76 – 100)

### Câu 76 (Tính toán - Chuẩn vectơ trong $\mathbb{R}^4$)
Cho vectơ $x = (-2, 5, -1, 4)^T \in \mathbb{R}^4$. Giá trị của các chuẩn $\|x\|_1, \|x\|_2, \|x\|_\infty$ lần lượt là:
- A. $\|x\|_1 = 12,\; \|x\|_2 = \sqrt{46},\; \|x\|_\infty = 5$
- B. $\|x\|_1 = 10,\; \|x\|_2 = \sqrt{46},\; \|x\|_\infty = 5$
- C. $\|x\|_1 = 12,\; \|x\|_2 = \sqrt{44},\; \|x\|_\infty = 4$
- D. $\|x\|_1 = 8,\; \|x\|_2 = \sqrt{30},\; \|x\|_\infty = 5$

### Câu 77 (Tính toán - Sylvester ma trận $3 \times 3$)
Cho ma trận $A = \begin{bmatrix} 4 & 1 & 1 \\ 1 & 5 & 2 \\ 1 & 2 & 6 \end{bmatrix}$. Các leading principal minors và tính xác định dấu của $A$ là:
- A. $\Delta_1 = 4,\; \Delta_2 = 19,\; \Delta_3 = 97$, tất cả dương $\implies A \succ 0$ (xác định dương).
- B. $\Delta_1 = 4,\; \Delta_2 = 19,\; \Delta_3 = -97 \implies A$ không xác định dấu.
- C. $\Delta_1 = 4,\; \Delta_2 = 21,\; \Delta_3 = 97 \implies A \succ 0$.
- D. $\Delta_1 = 4,\; \Delta_2 = 19,\; \Delta_3 = 0 \implies A \succeq 0$ (nửa xác định dương).

### Câu 78 (Tính toán - Kiểm tra ma trận xác định âm)
Cho ma trận $B = \begin{bmatrix} -5 & 1 & 1 \\ 1 & -7 & 1 \\ 1 & 1 & -5 \end{bmatrix}$. Kết luận về tính xác định dấu của $B$ là:
- A. $B \succ 0$ (xác định dương) vì $|\Delta_3| > 0$.
- B. $B \prec 0$ (xác định âm), vì $\Delta_1 = -5 < 0,\; \Delta_2 = 34 > 0,\; \Delta_3 = -156 < 0$ (dấu đan xen).
- C. $B \succeq 0$ (nửa xác định dương).
- D. $B$ không xác định dấu vì $\Delta_1 < 0$ nhưng $\Delta_2 > 0$.

### Câu 79 (Tính toán - Phép toán Minkowski trên đoạn)
Cho $S_1 = [-2, 1]$, $S_2 = [1, 2]$ trong $\mathbb{R}$, $\lambda = -2$. Kết quả của $S_1 + S_2$, $S_1 - S_2$ và $\lambda S_1$ là:
- A. $S_1 + S_2 = [-1, 3],\; S_1 - S_2 = [-4, 0],\; \lambda S_1 = [-2, 4]$
- B. $S_1 + S_2 = [-1, 3],\; S_1 - S_2 = [-3, -1],\; \lambda S_1 = [4, -2]$
- C. $S_1 + S_2 = [0, 3],\; S_1 - S_2 = [-4, 1],\; \lambda S_1 = [-4, 2]$
- D. $S_1 + S_2 = [-2, 3],\; S_1 - S_2 = [-4, 0],\; \lambda S_1 = [2, 4]$

### Câu 80 (Lý thuyết - Giao họ tập lồi)
Cho $\{C_i\}_{i \in I}$ là họ bất kỳ (hữu hạn hoặc vô hạn) các tập lồi trong $\mathbb{R}^n$. Khẳng định nào sau đây ĐÚNG?
- A. Giao $\bigcap_{i \in I} C_i$ luôn là tập lồi (vì $\forall x, y \in \bigcap C_i,\, \theta \in [0,1]$: $\theta x + (1-\theta)y \in C_i\; \forall i \implies$ thuộc giao).
- B. Giao chỉ lồi khi họ $\{C_i\}$ là hữu hạn.
- C. Giao có thể không lồi khi họ $\{C_i\}$ là vô hạn.
- D. Giao luôn là tập rỗng khi họ vô hạn.

### Câu 81 (Tính toán - Kiểm tra tập lồi nửa mặt phẳng & hình tròn mở)
Cho $A = \{(x,y) \mid x + y \le 1\}$ và $B = \{(x,y) \mid x^2 + y^2 < 2\}$ trong $\mathbb{R}^2$. Khẳng định nào ĐÚNG?
- A. $A$ lồi (nửa mặt phẳng — tập nghiệm BĐT tuyến tính) và $B$ lồi (hình tròn mở bán kính $\sqrt{2}$).
- B. $A$ lồi nhưng $B$ không lồi vì là tập mở (không chứa biên).
- C. $A$ không lồi vì không bị chặn, $B$ lồi.
- D. Cả $A$ và $B$ đều không lồi.

### Câu 82 (Tính toán - Chứng minh đường tròn không lồi)
Cho $C = \{(x,y) \in \mathbb{R}^2 \mid x^2 + y^2 = 1\}$ (đường tròn đơn vị). Khẳng định nào ĐÚNG?
- A. $C$ là tập lồi vì là tập đóng và bị chặn.
- B. $C$ KHÔNG phải tập lồi. Phản ví dụ: $(1,0), (-1,0) \in C$ nhưng trung điểm $(0,0) \notin C$ vì $0^2 + 0^2 = 0 \neq 1$.
- C. $C$ là tập lồi vì mọi điểm trên $C$ cách gốc tọa độ bằng 1.
- D. $C$ là tập affine.

### Câu 83 (Tính toán - Bao lồi của 4 điểm)
Bao lồi $\text{conv } C$ của tập $C = \{(0,0), (1,0), (0,1), (1,1)\}$ trong $\mathbb{R}^2$ là:
- A. Hình vuông đơn vị $\{(x,y) \mid 0 \le x \le 1,\; 0 \le y \le 1\}$.
- B. Tam giác có đỉnh $(0,0), (1,0), (0,1)$.
- C. Đoạn thẳng nối $(0,0)$ và $(1,1)$.
- D. Hình tròn nội tiếp hình vuông đơn vị.

### Câu 84 (Tính toán - Tập nghiệm hệ PT tuyến tính là tập Affine)
Cho hệ $\begin{cases} x_1 + x_2 + x_3 = 1 \\ x_1 - x_2 = 0 \end{cases}$. Tập nghiệm $A \subset \mathbb{R}^3$ thuộc loại tập nào?
- A. Tập lồi nhưng không phải tập affine.
- B. Tập affine (vì là tập nghiệm hệ phương trình tuyến tính $Ax = b$), do đó cũng là tập lồi.
- C. Tập rỗng.
- D. Không phải tập lồi cũng không phải tập affine.

### Câu 85 (Tính toán - Siêu phẳng qua giao nửa không gian)
Siêu phẳng $H: 3x_1 - 2x_2 + 4x_3 = 7$ trong $\mathbb{R}^3$ được biểu diễn dưới dạng giao 2 nửa không gian đóng là:
- A. $H = \{x \mid 3x_1 - 2x_2 + 4x_3 \le 7\} \cap \{x \mid 3x_1 - 2x_2 + 4x_3 \ge 7\}$
- B. $H = \{x \mid 3x_1 - 2x_2 + 4x_3 < 7\} \cup \{x \mid 3x_1 - 2x_2 + 4x_3 > 7\}$
- C. $H = \{x \mid 3x_1 - 2x_2 + 4x_3 \le 7\} \cup \{x \mid 3x_1 - 2x_2 + 4x_3 \ge 7\}$
- D. Không thể biểu diễn siêu phẳng qua nửa không gian.

### Câu 86 (Tính toán - Phân loại Polytope & tìm đỉnh)
Cho $P = \{(x_1, x_2) \in \mathbb{R}^2 \mid x_1 \ge 0,\; x_2 \ge 0,\; 2x_1 + 3x_2 \le 6\}$. Phân loại $P$ và các đỉnh của nó là:
- A. $P$ là Polytope (bị chặn), đỉnh: $(0,0),\; (3,0),\; (0,2)$.
- B. $P$ là Polyhedron không bị chặn, đỉnh: $(0,0),\; (6,0),\; (0,3)$.
- C. $P$ là Polytope, đỉnh: $(0,0),\; (3,0),\; (0,3)$.
- D. $P$ là Polytope, đỉnh: $(0,0),\; (2,0),\; (0,3)$.

### Câu 87 (Tính toán - Gradient, Hessian & tính lồi)
Cho $f(x_1, x_2) = 2x_1^2 + x_1 x_2 + x_2^2 - 6x_1 - 10x_2 + 4$. Gradient, Hessian và tính lồi của $f$ là:
- A. $\nabla f = (4x_1 + x_2 - 6,\; x_1 + 2x_2 - 10)^T$, $\nabla^2 f = \begin{bmatrix} 4 & 1 \\ 1 & 2 \end{bmatrix}$, $\Delta_1 = 4 > 0,\; \Delta_2 = 7 > 0 \implies f$ lồi chặt.
- B. $\nabla f = (4x_1 + x_2,\; x_1 + 2x_2)^T$, $\nabla^2 f = \begin{bmatrix} 4 & 1 \\ 1 & 2 \end{bmatrix} \implies f$ lồi chặt.
- C. $\nabla f = (4x_1 + x_2 - 6,\; x_1 + 2x_2 - 10)^T$, $\nabla^2 f = \begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix}$, $\Delta_2 = 1 > 0 \implies f$ lồi chặt.
- D. $\nabla f = (2x_1 + x_2 - 6,\; x_1 + x_2 - 10)^T$, $\nabla^2 f = \begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix} \implies f$ lồi.

### Câu 88 (Tính toán - Tính lồi hàm ln(1+eˣ))
Cho $f(x) = \ln(1 + e^x)$. Đạo hàm cấp hai $f''(x)$ và tính lồi của $f$ trên $\mathbb{R}$ là:
- A. $f''(x) = \frac{e^x}{(1 + e^x)^2} > 0 \; \forall x \in \mathbb{R} \implies f$ lồi chặt trên $\mathbb{R}$.
- B. $f''(x) = -\frac{e^x}{(1 + e^x)^2} < 0 \implies f$ lõm trên $\mathbb{R}$.
- C. $f''(x) = \frac{1}{1 + e^x} > 0 \implies f$ lồi nhưng không lồi chặt.
- D. $f''(x) = \frac{e^{2x}}{(1 + e^x)^2} \implies f$ không xác định được tính lồi.

### Câu 89 (Tính toán - Hàm từng khúc & tính lồi)
Xét hàm $f(x) = \begin{cases} x^2 & \text{nếu } x < 0 \\ x & \text{nếu } x \ge 0 \end{cases}$. Khẳng định nào ĐÚNG?
- A. $f$ lồi trên $\mathbb{R}$ (kiểm tra BĐT Jensen: $f(0) = 0 < 1 = \frac{1}{2}f(-1) + \frac{1}{2}f(1)$, dù $f$ không khả vi tại $x = 0$).
- B. $f$ không lồi vì $f$ không khả vi tại $x = 0$.
- C. $f$ lồi chặt trên $\mathbb{R}$.
- D. $f$ lõm trên $\mathbb{R}$.

### Câu 90 (Tính toán - Hessian hàm 2 biến & Sylvester)
Cho $f(x, y) = 2x^2 + 2y^2 - 3xy$. Ma trận Hessian và tính lồi của $f$ là:
- A. $\nabla^2 f = \begin{bmatrix} 4 & -3 \\ -3 & 4 \end{bmatrix}$, $\Delta_1 = 4 > 0,\; \Delta_2 = 16 - 9 = 7 > 0 \implies f$ lồi chặt trên $\mathbb{R}^2$.
- B. $\nabla^2 f = \begin{bmatrix} 2 & -3 \\ -3 & 2 \end{bmatrix}$, $\Delta_2 = 4 - 9 = -5 < 0 \implies f$ không lồi.
- C. $\nabla^2 f = \begin{bmatrix} 4 & -3 \\ -3 & 4 \end{bmatrix}$, $\Delta_2 = 16 - 9 = -7 < 0 \implies f$ không lồi.
- D. $\nabla^2 f = \begin{bmatrix} 4 & -6 \\ -6 & 4 \end{bmatrix}$, $\Delta_2 = 16 - 36 = -20 < 0 \implies f$ không lồi.

### Câu 91 (Lý thuyết - Max của hai hàm lồi)
Cho $f_1(x), f_2(x)$ lồi trên $\mathbb{R}^n$. Hàm $h(x) = \max\{f_1(x), f_2(x)\}$:
- A. Lồi, vì $h(\lambda u + (1-\lambda)v) = \max\{f_i(\lambda u + (1-\lambda)v)\} \le \lambda h(u) + (1-\lambda)h(v)$.
- B. Lõm.
- C. Lồi chặt.
- D. Không lồi vì $\max$ không phải phép toán tuyến tính.

### Câu 92 (Tính toán - Epigraph của f(x) = x²)
Trên đồ thị (epigraph) $\text{epi } f$ của hàm $f(x) = x^2$ là tập nào và có lồi không?
- A. $\text{epi } f = \{(x, t) \in \mathbb{R}^2 \mid t \ge x^2\}$, là tập lồi (vì $f$ là hàm lồi).
- B. $\text{epi } f = \{(x, t) \mid t \le x^2\}$, là tập lồi.
- C. $\text{epi } f = \{(x, t) \mid t \ge x^2\}$, không phải tập lồi.
- D. $\text{epi } f = \{(x, t) \mid t = x^2\}$, là tập lồi.

### Câu 93 (Tính toán - Hessian hàm f(x,y) = xy)
Hàm $f(x, y) = xy$ có phải hàm lồi trên $\mathbb{R}^2$ không? Xét qua Hessian và giá trị riêng:
- A. $\nabla^2 f = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$, giá trị riêng $\lambda = \pm 1 \implies$ Hessian không xác định dấu $\implies f$ KHÔNG lồi, KHÔNG lõm.
- B. $\nabla^2 f = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$, giá trị riêng $\lambda = 0, 2 \implies f$ nửa xác định dương $\implies f$ lồi.
- C. $\nabla^2 f = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \implies f$ lồi chặt.
- D. $\nabla^2 f = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$, giá trị riêng $\lambda = \pm 1 \implies f$ lõm.

### Câu 94 (Tính toán - Nhận biết bài toán tối ưu lồi)
Bài toán $\min f(x_1, x_2) = 4x_1 + x_2 - x_1^2 - 2x_2^2$ với ĐK $2x_1 + x_2 \le 1,\; x_1 \ge 0,\; x_2 \ge 0$. Đây có phải bài toán tối ưu lồi không?
- A. Là bài toán tối ưu lồi vì miền ràng buộc lồi.
- B. KHÔNG phải tối ưu lồi, vì $\nabla^2 f = \begin{bmatrix} -2 & 0 \\ 0 & -4 \end{bmatrix} \prec 0$ nên $f$ lõm chặt; cực tiểu hóa hàm lõm không phải tối ưu lồi.
- C. KHÔNG phải tối ưu lồi vì miền ràng buộc không lồi.
- D. Là bài toán tối ưu lồi vì hàm mục tiêu là đa thức bậc 2.

### Câu 95 (Tính toán - Tính lồi hàm -log(x))
Hàm $f(x) = -\log(x)$ trên $(0, +\infty)$. Đạo hàm cấp hai và tính lồi:
- A. $f'(x) = -\frac{1}{x}$, $f''(x) = \frac{1}{x^2} > 0 \; \forall x > 0 \implies f$ lồi chặt trên $(0, +\infty)$.
- B. $f''(x) = -\frac{1}{x^2} < 0 \implies f$ lõm trên $(0, +\infty)$.
- C. $f''(x) = \frac{1}{x} > 0 \implies f$ lồi nhưng không lồi chặt.
- D. $f$ không lồi vì $\text{dom } f = (0, +\infty) \neq \mathbb{R}$.

### Câu 96 (Tính toán - Hessian hàm 3 biến & xác định dấu)
Cho $f(x_1, x_2, x_3) = x_1^2 + 4x_2^2 + 3x_3^2 - 6x_1 x_2$. Ma trận Hessian, leading principal minors và tính lồi:
- A. $\nabla^2 f = \begin{bmatrix} 2 & -6 & 0 \\ -6 & 8 & 0 \\ 0 & 0 & 6 \end{bmatrix}$, $\Delta_1 = 2 > 0,\; \Delta_2 = 16 - 36 = -20 < 0 \implies$ không xác định dấu $\implies f$ không lồi, không lõm.
- B. $\nabla^2 f = \begin{bmatrix} 2 & -6 & 0 \\ -6 & 8 & 0 \\ 0 & 0 & 6 \end{bmatrix}$, $\Delta_2 = 52 > 0 \implies f$ lồi chặt.
- C. $\nabla^2 f = \begin{bmatrix} 1 & -3 & 0 \\ -3 & 4 & 0 \\ 0 & 0 & 3 \end{bmatrix} \implies f$ lồi.
- D. $\nabla^2 f = \begin{bmatrix} 2 & -6 & 0 \\ -6 & 8 & 0 \\ 0 & 0 & 6 \end{bmatrix}$, $\Delta_1 = 2 > 0,\; \Delta_2 = -20 < 0 \implies f$ lõm.

### Câu 97 (Tính toán - Tổng Minkowski hai hình tròn)
Cho $S_1 = \{x \in \mathbb{R}^2 \mid \|x\|_2 \le 1\}$ và $S_2 = \{x \in \mathbb{R}^2 \mid \|x\|_2 \le 2\}$. Tổng Minkowski $S_1 + S_2$ là:
- A. $S_1 + S_2 = \{x \in \mathbb{R}^2 \mid \|x\|_2 \le 3\}$ (hình tròn bán kính 3).
- B. $S_1 + S_2 = \{x \in \mathbb{R}^2 \mid \|x\|_2 \le 2\}$ (hình tròn bán kính 2).
- C. $S_1 + S_2 = \{x \in \mathbb{R}^2 \mid \|x\|_2 \le \sqrt{5}\}$.
- D. $S_1 + S_2 = \{x \in \mathbb{R}^2 \mid \|x\|_2 \le 1\}$ (hình tròn bán kính 1).

### Câu 98 (Lý thuyết - Tập ma trận NXĐ dương là nón lồi)
Tập $\mathbb{S}^n_+$ gồm các ma trận nửa xác định dương cỡ $n \times n$. Khẳng định nào ĐÚNG?
- A. $\mathbb{S}^n_+$ là nón lồi (convex cone), vì $\forall A, B \in \mathbb{S}^n_+,\; \alpha, \beta \ge 0$: $x^T(\alpha A + \beta B)x = \alpha(x^T A x) + \beta(x^T B x) \ge 0$.
- B. $\mathbb{S}^n_+$ là tập lồi nhưng không phải nón lồi.
- C. $\mathbb{S}^n_+$ là nón nhưng không lồi.
- D. $\mathbb{S}^n_+$ không phải tập lồi.

### Câu 99 (Lý thuyết - ĐK tối ưu hàm toàn phương)
Cho $f(x) = \frac{1}{2} x^T P x + q^T x + r$ với $P$ đối xứng. Điều kiện cần và đủ để $f$ đạt giá trị nhỏ nhất toàn cục duy nhất tại $x^* = -P^{-1}q$ là:
- A. $P \succ 0$ (xác định dương), khi đó $f$ lồi chặt và $\nabla f(x^*) = Px^* + q = 0 \implies x^* = -P^{-1}q$ là cực tiểu toàn cục duy nhất.
- B. $P \succeq 0$ (nửa xác định dương).
- C. $P \prec 0$ (xác định âm).
- D. $\det(P) \neq 0$ (chỉ cần $P$ khả nghịch).

### Câu 100 (Lý thuyết - Tính duy nhất nghiệm tối ưu)
Trong bài toán $\min\{f(x) \mid x \in C\}$ với $f$ lồi chặt, $C$ lồi. Nếu nghiệm tối ưu toàn cục tồn tại thì:
- A. Nghiệm tối ưu toàn cục duy nhất (vì giả sử có $x^* \neq y^*$ cùng tối ưu, trung điểm $z \in C$ cho $f(z) < f(x^*)$, mâu thuẫn).
- B. Có thể có nhiều nghiệm tối ưu toàn cục.
- C. Nghiệm tối ưu toàn cục luôn tồn tại.
- D. Nghiệm tối ưu địa phương không nhất thiết là nghiệm toàn cục.

---

## Phần V: Bảng Đáp Án & Lời Giải Chi Tiết 100 Câu Hỏi

### Bảng Đáp Án Nhanh Trắc Nghiệm (100 Câu)

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | B | **21** | A | **41** | B | **61** | A | **81** | A |
| **2** | B | **22** | B | **42** | A | **62** | A | **82** | B |
| **3** | A | **23** | A | **43** | A | **63** | A | **83** | A |
| **4** | B | **24** | A | **44** | A | **64** | A | **84** | B |
| **5** | A | **25** | A | **45** | A | **65** | A | **85** | A |
| **6** | A | **26** | B | **46** | A | **66** | A | **86** | A |
| **7** | B | **27** | B | **47** | A | **67** | A | **87** | A |
| **8** | A | **28** | A | **48** | A | **68** | D | **88** | A |
| **9** | B | **29** | B | **49** | A | **69** | A | **89** | A |
| **10** | A | **30** | B | **50** | A | **70** | A | **90** | A |
| **11** | B | **31** | B | **51** | A | **71** | A | **91** | A |
| **12** | A | **32** | B | **52** | A | **72** | A | **92** | A |
| **13** | A | **33** | B | **53** | A | **73** | A | **93** | A |
| **14** | A | **34** | A | **54** | B | **74** | A | **94** | B |
| **15** | A | **35** | A | **55** | A | **75** | A | **95** | A |
| **16** | A | **36** | B | **56** | A | **76** | A | **96** | A |
| **17** | B | **37** | A | **57** | A | **77** | A | **97** | A |
| **18** | B | **38** | A | **58** | A | **78** | B | **98** | A |
| **19** | A | **39** | A | **59** | A | **79** | A | **99** | A |
| **20** | B | **40** | B | **60** | A | **80** | A | **100** | A |

---

### Hướng Dẫn Giải Chi Tiết (Câu 76 – 100)

- **Câu 76:** 
  - $\|x\|_1 = |-2| + |5| + |-1| + |4| = 2 + 5 + 1 + 4 = 12$.
  - $\|x\|_2 = \sqrt{(-2)^2 + 5^2 + (-1)^2 + 4^2} = \sqrt{4 + 25 + 1 + 16} = \sqrt{46} \approx 6,78$.
  - $\|x\|_\infty = \max(|-2|, |5|, |-1|, |4|) = 5$.

- **Câu 77:**
  - Leading principal minors:
    - $\Delta_1 = 4 > 0$.
    - $\Delta_2 = \det \begin{bmatrix} 4 & 1 \\ 1 & 5 \end{bmatrix} = 20 - 1 = 19 > 0$.
    - $\Delta_3 = \det A = 4(30 - 4) - 1(6 - 2) + 1(2 - 5) = 4(26) - 4 - 3 = 104 - 7 = 97 > 0$.
  - Vì mọi $\Delta_k > 0$, theo tiêu chuẩn Sylvester ma trận $A \succ 0$ (xác định dương).

- **Câu 78:**
  - Leading principal minors:
    - $\Delta_1 = -5 < 0$.
    - $\Delta_2 = \det \begin{bmatrix} -5 & 1 \\ 1 & -7 \end{bmatrix} = 35 - 1 = 34 > 0$.
    - $\Delta_3 = \det B = -5(35 - 1) - 1(-5 - 1) + 1(1 + 7) = -5(34) + 6 + 8 = -170 + 14 = -156 < 0$.
  - Các định thức con chính có dấu đan xen: $\Delta_1 < 0, \Delta_2 > 0, \Delta_3 < 0$. Do đó $B \prec 0$ (xác định âm).

- **Câu 79:**
  - $S_1 + S_2 = \{x + y \mid x \in [-2, 1], y \in [1, 2]\} = [-2+1, 1+2] = [-1, 3]$.
  - $S_1 - S_2 = \{x - y \mid x \in [-2, 1], y \in [1, 2]\} = [-2-2, 1-1] = [-4, 0]$.
  - $\lambda S_1 = -2 [-2, 1] = [-2(1), -2(-2)] = [-2, 4]$.

- **Câu 80:**
  - Lấy $x, y \in \bigcap_{i \in I} C_i$ và $\theta \in [0, 1]$.
  - Vì $x, y \in C_i \; \forall i \in I$ và từng $C_i$ lồi, ta có $\theta x + (1-\theta)y \in C_i \; \forall i \in I$.
  - Suy ra $\theta x + (1-\theta)y \in \bigcap_{i \in I} C_i$. Vậy giao của họ các tập lồi là tập lồi.

- **Câu 81:**
  - $A$ là nửa mặt phẳng $x+y \le 1$ (tập nghiệm bất đẳng thức tuyến tính) $\implies$ lồi.
  - $B$ là hình tròn mở bán kính $\sqrt{2}$. Với hai điểm $u, v \in B$, $\|u\|_2 < \sqrt{2}, \|v\|_2 < \sqrt{2}$. Khi đó $\|\theta u + (1-\theta)v\|_2 \le \theta \|u\|_2 + (1-\theta)\|v\|_2 < \sqrt{2} \implies \theta u + (1-\theta)v \in B \implies B$ lồi.

- **Câu 82:**
  - Chọn $u = (1, 0) \in C$ và $v = (-1, 0) \in C$.
  - Trung điểm $w = \frac{1}{2}u + \frac{1}{2}v = (0, 0)$.
  - Ta có $0^2 + 0^2 = 0 \neq 1 \implies w \notin C$. Do đó đường tròn $C$ không phải là tập lồi.

- **Câu 83:**
  - Tập $C$ gồm 4 đỉnh của hình vuông đơn vị $[0, 1] \times [0, 1]$.
  - Bao lồi $\text{conv } C = \{(x, y) \in \mathbb{R}^2 \mid 0 \le x \le 1, 0 \le y \le 1\}$ (chính là hình vuông đóng đơn vị).

- **Câu 84:**
  - Viết hệ dưới dạng ma trận $Ax = b$ với $A = \begin{bmatrix} 1 & 1 & 1 \\ 1 & -1 & 0 \end{bmatrix}$ và $b = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$.
  - Tập nghiệm $A = \{x \in \mathbb{R}^3 \mid Ax = b\}$ là tập affine theo định lý đại số biểu diễn tập affine.

- **Câu 85:**
  - Siêu phẳng $H: 3x_1 - 2x_2 + 4x_3 = 7$.
  - Biểu diễn: $H = \{x \in \mathbb{R}^3 \mid 3x_1 - 2x_2 + 4x_3 \le 7\} \cap \{x \in \mathbb{R}^3 \mid 3x_1 - 2x_2 + 4x_3 \ge 7\}$.

- **Câu 86:**
  - Miền $P$ giới hạn bởi $x_1 \ge 0, x_2 \ge 0$ và $2x_1 + 3x_2 \le 6$.
  - Đây là tam giác đóng bị chặn trong $\mathbb{R}^2 \implies P$ là một Polytope.
  - Các đỉnh của tam giác $P$ thu được bằng giao điểm các đường biên: $(0,0)$, $(3,0)$ và $(0,2)$.

- **Câu 87:**
  - $\nabla f(x_1, x_2) = \begin{bmatrix} \frac{\partial f}{\partial x_1} \\ \frac{\partial f}{\partial x_2} \end{bmatrix} = \begin{bmatrix} 4x_1 + x_2 - 6 \\ x_1 + 2x_2 - 10 \end{bmatrix}$.
  - Ma trận Hessian $\nabla^2 f(x_1, x_2) = \begin{bmatrix} 4 & 1 \\ 1 & 2 \end{bmatrix}$.
  - Định thức $\Delta_1 = 4 > 0, \Delta_2 = 8 - 1 = 7 > 0 \implies \nabla^2 f \succ 0 \implies f$ lồi chặt.

- **Câu 88:**
  - $f'(x) = \frac{e^x}{1 + e^x} = 1 - \frac{1}{1 + e^x}$.
  - $f''(x) = \frac{e^x (1 + e^x) - e^{2x}}{(1 + e^x)^2} = \frac{e^x}{(1 + e^x)^2} > 0 \; \forall x \in \mathbb{R}$.
  - Vì $f''(x) > 0 \; \forall x \in \mathbb{R}$, $f(x) = \ln(1+e^x)$ lồi chặt trên $\mathbb{R}$.

- **Câu 89:**
  - Đạo hàm hàm cho từng khoảng: Với $x < 0, f'(x) = 2x, f''(x) = 2 > 0$. Với $x > 0, f'(x) = 1, f''(x) = 0$.
  - Xét tại $x = 0$: $f'_{-}(0) = 0$, $f'_{+}(0) = 1 \implies f$ không có đạo hàm tại $x=0$.
  - Đồ thị: Đoạn nối điểm $(-1, 1)$ và $(1, 1)$ có trung điểm $(0, 1)$, mà $f(0) = 0 < 1$. Kiểm tra bất đẳng thức Jensen tổng quát: $f$ là hàm lồi trên $\mathbb{R}$.

- **Câu 90:**
  - Hessian $\nabla^2 f = \begin{bmatrix} 4 & -3 \\ -3 & 4 \end{bmatrix}$.
  - Các leading principal minors: $\Delta_1 = 4 > 0$, $\Delta_2 = 16 - 9 = 7 > 0$.
  - Do đó $\nabla^2 f \succ 0 \implies f(x, y) = 2x^2 + 2y^2 - 3xy$ lồi chặt trên $\mathbb{R}^2$.

- **Câu 91:**
  - Cho $u, v \in \mathbb{R}^n, \lambda \in [0, 1]$.
  - $f_1(\lambda u + (1-\lambda)v) \le \lambda f_1(u) + (1-\lambda)f_1(v) \le \lambda h(u) + (1-\lambda)h(v)$.
  - $f_2(\lambda u + (1-\lambda)v) \le \lambda f_2(u) + (1-\lambda)f_2(v) \le \lambda h(u) + (1-\lambda)h(v)$.
  - Lấy $\max$ hai vế thu được $h(\lambda u + (1-\lambda)v) \le \lambda h(u) + (1-\lambda)h(v) \implies h(x)$ lồi.

- **Câu 92:**
  - $\text{epi } f = \{(x, t) \in \mathbb{R}^2 \mid t \ge x^2\}$.
  - Lấy $(x_1, t_1), (x_2, t_2) \in \text{epi } f \implies t_1 \ge x_1^2, t_2 \ge x_2^2$.
  - Xét $\lambda (x_1, t_1) + (1-\lambda)(x_2, t_2) = (\lambda x_1 + (1-\lambda)x_2, \lambda t_1 + (1-\lambda)t_2)$.
  - Do $f(x)=x^2$ lồi: $(\lambda x_1 + (1-\lambda)x_2)^2 \le \lambda x_1^2 + (1-\lambda)x_2^2 \le \lambda t_1 + (1-\lambda)t_2$.
  - Do đó tổ hợp lồi thuộc $\text{epi } f \implies \text{epi } f$ lồi.

- **Câu 93:**
  - Hessian $\nabla^2 f = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$.
  - Phương trình đặc trưng: $\det(\nabla^2 f - \lambda I) = \lambda^2 - 1 = 0 \implies \lambda = \pm 1$.
  - Vì có 1 giá trị riêng âm ($\lambda = -1$) và 1 giá trị riêng dương ($\lambda = 1$), ma trận Hessian không xác định dấu $\implies f(x, y) = xy$ KHÔNG PHẢI hàm lồi (và cũng không phải hàm lõm).

- **Câu 94:**
  - Hàm mục tiêu $f(x_1, x_2) = 4x_1 + x_2 - x_1^2 - 2x_2^2$ có ma trận Hessian $\nabla^2 f = \begin{bmatrix} -2 & 0 \\ 0 & -4 \end{bmatrix} \prec 0$.
  - Do đó $f(x_1, x_2)$ là hàm lõm chặt (concave). Bài toán cực tiểu hóa hàm lõm KHÔNG PHẢI là bài toán tối ưu lồi.

- **Câu 95:**
  - $f(x) = -\log x$ với $x > 0$.
  - $f'(x) = -\frac{1}{x}$, $f''(x) = \frac{1}{x^2} > 0 \; \forall x > 0$.
  - Vì $f''(x) > 0 \; \forall x > 0$, $f(x) = -\log x$ lồi chặt trên $(0, +\infty)$.

- **Câu 96:**
  - $f(x_1, x_2, x_3) = x_1^2 + 4x_2^2 + 3x_3^2 - 6x_1 x_2$.
  - Hessian $\nabla^2 f = \begin{bmatrix} 2 & -6 & 0 \\ -6 & 8 & 0 \\ 0 & 0 & 6 \end{bmatrix}$.
  - Leading principal minors: $\Delta_1 = 2 > 0$, $\Delta_2 = 16 - 36 = -20 < 0$.
  - Vì $\Delta_2 < 0$, ma trận Hessian không xác định dấu $\implies f$ không lồi cũng không lõm.

- **Câu 97:**
  - $S_1 = B(0, 1)$ (hình tròn bán kính 1), $S_2 = B(0, 2)$ (hình tròn bán kính 2).
  - Tổng Minkowski $S_1 + S_2 = \{u + v \mid \|u\|_2 \le 1, \|v\|_2 \le 2\} = \{x \in \mathbb{R}^2 \mid \|x\|_2 \le 3\} = B(0, 3)$ (hình tròn bán kính 3).

- **Câu 98:**
  - Cho $A, B \in \mathbb{S}^n_+$ (tức $x^T A x \ge 0$ và $x^T B x \ge 0 \; \forall x$).
  - Với $\alpha, \beta \ge 0$, ta có $x^T (\alpha A + \beta B) x = \alpha (x^T A x) + \beta (x^T B x) \ge 0 \; \forall x$.
  - Do đó $\alpha A + \beta B \in \mathbb{S}^n_+$, suy ra $\mathbb{S}^n_+$ là một nón lồi (convex cone).

- **Câu 99:**
  - Hàm $f(x) = \frac{1}{2} x^T P x + q^T x + r$ lồi chặt khi và chỉ khi ma trận đối xứng $P \succ 0$ (xác định dương).
  - Điều kiện cần bậc nhất $\nabla f(x^*) = P x^* + q = 0 \implies x^* = -P^{-1} q$.
  - Vì $P \succ 0$, $x^*$ là điểm cực tiểu toàn cục duy nhất của $f(x)$ trên $\mathbb{R}^n$.

- **Câu 100:**
  - Giả sử bài toán có 2 nghiệm tối ưu toàn cục phân biệt $x^*, y^* \in C$ với $x^* \neq y^*$ và $f(x^*) = f(y^*) = p^*$.
  - Vì $C$ lồi, điểm trung điểm $z = \frac{1}{2}x^* + \frac{1}{2}y^* \in C$.
  - Vì $f$ lồi chặt, $f(z) < \frac{1}{2} f(x^*) + \frac{1}{2} f(y^*) = \frac{1}{2} p^* + \frac{1}{2} p^* = p^*$.
  - Điều này mâu thuẫn với giả thiết $p^*$ là giá trị nhỏ nhất toàn cục của $f$ trên $C$.
  - Do đó, nghiệm tối ưu toàn cục (nếu có) phải là duy nhất.
