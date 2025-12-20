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

    // Hiển thị giỏ hàng trống
    const listContainer = document.querySelector('.list');
    listContainer.innerHTML = '<p class="text-muted text-center py-4">Giỏ hàng trống</p>';

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
            cart: JSON.parse(localStorage.getItem('cartProducts')) || [],
            orderDate: new Date().toISOString(),
            totalAmount: document.querySelector('.totalPrice').textContent
        };
        
        // Lưu đơn hàng
        console.log('Đơn hàng:', formData);
        
        // Hiển thị thông báo thành công
        alert('Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
        
        // Chuyển về trang chủ
        window.location.href = 'trangchu.html';
    });

    
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