document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CẤU HÌNH & SELECTORS ---
    const tabs = document.querySelectorAll('.tab');
    const forms = document.querySelectorAll('.form');
    const switchLinks = document.querySelectorAll('[data-switch]');
    
    // Selectors cho phần Password Real-time
    const regPasswordInput = document.getElementById('regPassword');
    const reqLen = document.getElementById('req-len');
    const reqCap = document.getElementById('req-cap');
    const reqlower = document.getElementById('req-lower');
    const reqNum = document.getElementById('req-num');

    // --- 2. CHUYỂN ĐỔI TAB (ĐĂNG NHẬP / ĐĂNG KÝ) ---
    function switchTab(tabName) {
        // Active Tab
        tabs.forEach(tab => {
            if (tab.dataset.tab === tabName) tab.classList.add('active');
            else tab.classList.remove('active');
        });

        // Show Form
        forms.forEach(form => {
            form.classList.remove('active');
        });
        
        const activeForm = document.getElementById(tabName === 'login' ? 'loginForm' : 'registerForm');
        activeForm.classList.add('active');

        // Ẩn thông báo cũ khi chuyển tab
        const msgs = document.querySelectorAll('.message');
        msgs.forEach(m => {
            m.style.display = 'none';
            m.textContent = '';
        });
    }

    // Sự kiện Click Tab
    tabs.forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    // Sự kiện Click Link chuyển đổi
    switchLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(link.dataset.switch);
        });
    });

    // --- 3. KIỂM TRA MẬT KHẨU REAL-TIME (QUAN TRỌNG) ---
    // Phần này giúp các dòng "Yêu cầu mật khẩu" chuyển xanh khi nhập đúng
    if (regPasswordInput) {
        regPasswordInput.addEventListener('input', function() {
            const val = this.value;

            // 1. Kiểm tra độ dài >= 6
            if (val.length >= 6) setValid(reqLen);
            else setInvalid(reqLen);

            // 2. Kiểm tra chữ hoa
            if (/[A-Z]/.test(val)) setValid(reqCap);
            else setInvalid(reqCap);

            // 3. Kiểm tra chữ thường (a-z) <--- MỚI THÊM LOGIC NÀY
            if (/[a-z]/.test(val)) setValid(reqlower);
            else setInvalid(reqlower);

            // 3. Kiểm tra số
            if (/\d/.test(val)) setValid(reqNum);
            else setInvalid(reqNum);
        });
    }

    function setValid(element) {
        element.classList.add('valid');
        const icon = element.querySelector('i');
        if(icon) icon.className = 'fas fa-check-circle';
    }

    function setInvalid(element) {
        element.classList.remove('valid');
        const icon = element.querySelector('i');
        if(icon) icon.className = 'far fa-circle';
    }

    // Hàm hiển thị thông báo chung
    function showMessage(elementId, message, isSuccess = false) {
        const element = document.getElementById(elementId);
        element.textContent = message;
        element.className = "message " + (isSuccess ? "success" : "error");
        element.style.display = "block";
    }

    // --- 4. XỬ LÝ ĐĂNG KÝ ---
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Lấy giá trị từ ID (khớp với HTML)
            const email = document.getElementById('regEmail').value.trim();
            const fullname = document.getElementById('regFullname').value.trim();
            const username = document.getElementById('regUsername').value.trim();
            const password = document.getElementById('regPassword').value;

            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('regMessage', "Email không hợp lệ!");
                return;
            }

            // Validate Mật khẩu (Check lại lần cuối khi bấm nút)
            if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
                showMessage('regMessage', "Mật khẩu chưa đủ điều kiện!");
                return;
            }

            // Lấy dữ liệu cũ
            const users = JSON.parse(localStorage.getItem('usersDB')) || [];
            
            // Kiểm tra trùng username
            if (users.some((u) => u.username === username)) {
                showMessage('regMessage', "Tên đăng nhập đã tồn tại!");
                return;
            }

            // Lưu user mới
            users.push({ email, fullname, username, password });
            localStorage.setItem('usersDB', JSON.stringify(users));

            showMessage('regMessage', "Đăng ký thành công! Đang chuyển sang đăng nhập...", true);
            this.reset(); // Xóa trắng form

            // Chuyển tab sau 1.5s
            setTimeout(() => {
                switchTab('login');
                // Điền sẵn username để tiện đăng nhập
                document.getElementById('loginUsername').value = username;
            }, 1500);
        });
    }

    // --- 5. XỬ LÝ ĐĂNG NHẬP ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const username = document.getElementById('loginUsername').value.trim();
            const password = document.getElementById('loginPassword').value;

            if (!username || !password) {
                showMessage('loginMessage', "Vui lòng điền đầy đủ thông tin!");
                return;
            }

            const users = JSON.parse(localStorage.getItem('usersDB')) || [];
            const user = users.find((u) => u.username === username && u.password === password);

            if (!user) {
                showMessage('loginMessage', "Tài khoản hoặc mật khẩu không chính xác!");
                return;
            }

            // Đăng nhập thành công
            showMessage('loginMessage', "Đăng nhập thành công! Đang vào UrbanOak...", true);
            localStorage.setItem('UrbanOak_User', JSON.stringify(user));

            // Chuyển hướng về trang chủ
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }


});