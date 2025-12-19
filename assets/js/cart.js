// Cart JavaScript - Chỉ giao diện
document.addEventListener('DOMContentLoaded', function() {
    showEmptyCart();
});

function showEmptyCart() {
    const cartContainer = document.getElementById('cart-items');
    const emptyMessage = document.getElementById('empty-message');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    // Hiển thị thông báo giỏ hàng trống
    cartContainer.innerHTML = '';
    emptyMessage.classList.remove('d-none');
    checkoutBtn.disabled = true;
    
    // Cập nhật tổng cộng
    document.getElementById('total-quantity').textContent = '0';
    document.getElementById('total-price').textContent = '0đ';
}

function thanhToan() {
    alert('Giỏ hàng trống! Vui lòng thêm sản phẩm trước khi thanh toán.');
}