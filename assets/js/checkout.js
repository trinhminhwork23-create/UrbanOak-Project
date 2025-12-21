// Checkout JavaScript - Luxury Office Furniture
document.addEventListener('DOMContentLoaded', function() {
    
    // Danh sách tỉnh thành Việt Nam
    const vietnamProvinces = [
        'Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ',
        'An Giang', 'Bà Rịa - Vũng Tàu', 'Bắc Giang', 'Bắc Kạn', 'Bạc Liêu',
        'Bắc Ninh', 'Bến Tre', 'Bình Định', 'Bình Dương', 'Bình Phước',
        'Bình Thuận', 'Cà Mau', 'Cao Bằng', 'Đắk Lắk', 'Đắk Nông',
        'Điện Biên', 'Đồng Nai', 'Đồng Tháp', 'Gia Lai', 'Hà Giang',
        'Hà Nam', 'Hà Tĩnh', 'Hải Dương', 'Hậu Giang', 'Hòa Bình',
        'Hưng Yên', 'Khánh Hòa', 'Kiên Giang', 'Kon Tum', 'Lai Châu',
        'Lâm Đồng', 'Lạng Sơn', 'Lào Cai', 'Long An', 'Nam Định',
        'Nghệ An', 'Ninh Bình', 'Ninh Thuận', 'Phú Thọ', 'Phú Yên',
        'Quảng Bình', 'Quảng Nam', 'Quảng Ngãi', 'Quảng Ninh', 'Quảng Trị',
        'Sóc Trăng', 'Sơn La', 'Tây Ninh', 'Thái Bình', 'Thái Nguyên',
        'Thanh Hóa', 'Thừa Thiên Huế', 'Tiền Giang', 'Trà Vinh', 'Tuyên Quang',
        'Vĩnh Long', 'Vĩnh Phúc', 'Yên Bái'
    ];

    // Elements
    const countrySelect = document.getElementById('country');
    const cityGroup = document.getElementById('city-group');
    const citySelect = document.getElementById('city');
    const checkoutForm = document.querySelector('form');

    // Xử lý khi chọn quốc gia
    countrySelect.addEventListener('change', function() {
        if (this.value === 'Vietnam') {
            // Hiển thị dropdown tỉnh thành
            cityGroup.style.display = 'block';
            citySelect.required = true;
            
            // Xóa options cũ
            citySelect.innerHTML = '<option value="">Chọn tỉnh/thành phố...</option>';
            
            // Thêm các tỉnh thành Việt Nam
            vietnamProvinces.forEach(province => {
                const option = document.createElement('option');
                option.value = province;
                option.textContent = province;
                citySelect.appendChild(option);
            });
        } else {
            // Ẩn dropdown tỉnh thành
            cityGroup.style.display = 'none';
            citySelect.required = false;
        }
    });

    // Hiển thị sản phẩm từ giỏ hàng
    loadCheckoutItems();

    function loadCheckoutItems() {
        const cartItems = JSON.parse(localStorage.getItem('UrbanOakCart')) || [];
        const listContainer = document.querySelector('.list');
        const totalQuantityEl = document.querySelector('.totalQuantity');
        const totalPriceEl = document.querySelector('.totalPrice');
        
        if (cartItems.length === 0) {
            listContainer.innerHTML = '<p class="text-muted text-center py-4">Giỏ hàng trống</p>';
            totalQuantityEl.textContent = '0';
            totalPriceEl.textContent = '0đ';
            return;
        }
        
        let totalQuantity = 0;
        let totalPrice = 0;
        
        listContainer.innerHTML = '';
        
        cartItems.forEach(item => {
            const price = parseInt(item.price.replace(/[^\d]/g, ''));
            const itemTotal = price * item.quantity;
            totalQuantity += item.quantity;
            totalPrice += itemTotal;
            
            const itemHTML = `
                <div class="checkout-item d-flex align-items-center mb-4 p-4 border rounded">
                    <img src="${item.img}" alt="${item.title}" class="me-4" style="width: 100px; height: 100px; object-fit: cover; border-radius: 8px;">
                    <div class="flex-grow-1">
                        <h5 class="mb-2">${item.title}</h5>
                        <div class="text-muted fs-6">${price.toLocaleString('vi-VN')}đ</div>
                    </div>
                    <div class="text-center mx-4">
                        <span class="badge bg-secondary fs-6 px-3 py-2">x${item.quantity}</span>
                    </div>
                    <div class="text-end">
                        <div class="fw-bold text-primary fs-5">${itemTotal.toLocaleString('vi-VN')}đ</div>
                    </div>
                </div>
            `;
            
            listContainer.innerHTML += itemHTML;
        });
        
        totalQuantityEl.textContent = totalQuantity;
        totalPriceEl.textContent = totalPrice.toLocaleString('vi-VN') + 'đ';
    }

    // Xử lý form submit
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!checkoutForm.checkValidity()) {
            checkoutForm.classList.add('was-validated');
            return;
        }
        
        // Lấy thông tin form
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            country: document.getElementById('country').value,
            city: document.getElementById('city').value,
            cart: JSON.parse(localStorage.getItem('UrbanOakCart')) || [],
            orderDate: new Date().toISOString(),
            totalAmount: document.querySelector('.totalPrice').textContent
        };
        
        // Lưu đơn hàng
        console.log('Đơn hàng:', formData);
        
        // Hiển thị popup thành công
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
        
        // Xóa giỏ hàng sau khi đặt hàng thành công
        localStorage.removeItem('UrbanOakCart');
    });

    // Function chuyển về trang chủ
    window.goToHomePage = function() {
        // Cập nhật lại icon giỏ hàng về 0
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = '0';
            cartCount.style.display = 'none';
        }
        window.location.href = 'index.html';
    };
    
    // Thêm animation cho form elements
    const formElements = document.querySelectorAll('.form-control, .form-select');
    formElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });
        
        element.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
});