// Cart JavaScript - Load sản phẩm từ localStorage
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
});

function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('UrbanOakCart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const emptyMessage = document.getElementById('empty-message');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (cartItems.length === 0) {
        // Hiển thị thông báo giỏ hàng trống
        cartContainer.innerHTML = '';
        emptyMessage.classList.remove('d-none');
        checkoutBtn.disabled = true;
        updateTotals(0, 0);
        return;
    }
    
    // Có sản phẩm trong giỏ hàng
    emptyMessage.classList.add('d-none');
    checkoutBtn.disabled = false;
    cartContainer.innerHTML = '';
    
    cartItems.forEach((item, index) => {
        const price = parseInt(item.price.replace(/[^\d]/g, ''));
        const itemTotal = price * item.quantity;
        
        const cartItemHTML = `
            <div class="cart-item" data-index="${index}">
                <div class="row align-items-center">
                    <div class="col-md-2 col-3">
                        <img src="${item.img}" alt="${item.title}" class="product-image" 
                             onclick="${item.id ? `window.location.href='chitietsanpham.html?id=${item.id}'` : ''}" 
                             style="width: 100px; height: 100px; object-fit: cover; border-radius: 8px; ${item.id ? 'cursor: pointer;' : ''}">
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="product-info">
                            <h6 onclick="${item.id ? `window.location.href='chitietsanpham.html?id=${item.id}'` : ''}" 
                                style="${item.id ? 'cursor: pointer; color: #333; transition: color 0.3s ease;' : ''}" 
                                onmouseover="${item.id ? 'this.style.color="#007bff"' : ''}" 
                                onmouseout="${item.id ? 'this.style.color="#333"' : ''}">${item.title}</h6>
                            <div class="product-price">${price.toLocaleString('vi-VN')}đ</div>
                        </div>
                    </div>
                    <div class="col-md-3 col-12 mt-2 mt-md-0">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="decreaseQuantity(${index})">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" 
                                   min="1" onchange="updateQuantity(${index}, this.value)">
                            <button class="quantity-btn" onclick="increaseQuantity(${index})">+</button>
                        </div>
                    </div>
                    <div class="col-md-2 col-6 mt-2 mt-md-0">
                        <div class="fw-bold text-primary">${itemTotal.toLocaleString('vi-VN')}đ</div>
                    </div>
                    <div class="col-md-1 col-6 mt-2 mt-md-0 text-end">
                        <button class="remove-btn" onclick="removeItem(${index})" title="Xóa sản phẩm">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        cartContainer.innerHTML += cartItemHTML;
    });
    
    calculateTotals();
}

function increaseQuantity(index) {
    const cartItems = JSON.parse(localStorage.getItem('UrbanOakCart')) || [];
    cartItems[index].quantity++;
    localStorage.setItem('UrbanOakCart', JSON.stringify(cartItems));
    loadCart();
}

function decreaseQuantity(index) {
    const cartItems = JSON.parse(localStorage.getItem('UrbanOakCart')) || [];
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
        localStorage.setItem('UrbanOakCart', JSON.stringify(cartItems));
        loadCart();
    }
}

function updateQuantity(index, newQuantity) {
    const quantity = parseInt(newQuantity);
    if (quantity < 1) return;
    
    const cartItems = JSON.parse(localStorage.getItem('UrbanOakCart')) || [];
    cartItems[index].quantity = quantity;
    localStorage.setItem('UrbanOakCart', JSON.stringify(cartItems));
    loadCart();
}

function removeItem(index) {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
        const cartItems = JSON.parse(localStorage.getItem('UrbanOakCart')) || [];
        cartItems.splice(index, 1);
        localStorage.setItem('UrbanOakCart', JSON.stringify(cartItems));
        loadCart();
    }
}

function calculateTotals() {
    const cartItems = JSON.parse(localStorage.getItem('UrbanOakCart')) || [];
    let totalQuantity = 0;
    let totalPrice = 0;
    
    cartItems.forEach(item => {
        const price = parseInt(item.price.replace(/[^\d]/g, ''));
        totalQuantity += item.quantity;
        totalPrice += price * item.quantity;
    });
    
    updateTotals(totalQuantity, totalPrice);
}

function updateTotals(quantity, price) {
    document.getElementById('total-quantity').textContent = quantity;
    document.getElementById('total-price').textContent = price.toLocaleString('vi-VN') + 'đ';
}

function thanhToan() {
    const cartItems = JSON.parse(localStorage.getItem('UrbanOakCart')) || [];
    
    if (cartItems.length === 0) {
        alert('Giỏ hàng trống! Vui lòng thêm sản phẩm trước khi thanh toán.');
        return;
    }
    
    // Chuyển đến trang checkout
    window.location.href = 'checkout.html';
}