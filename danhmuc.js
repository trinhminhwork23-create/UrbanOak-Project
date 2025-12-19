document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const filterButtons = document.querySelectorAll('#category-filters .category-card');

    function displayProducts(productsToShow) {
        productList.innerHTML = '';
        
        if (productsToShow.length === 0) {
            productList.innerHTML = '<div style="text-align: center; padding: 60px 0; color: var(--text-muted);"><h3>Không có sản phẩm nào trong danh mục này</h3></div>';
            return;
        }
        
        productsToShow.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="card-thumb">
                    <img src="${product.thumb}" alt="${product.name}" style="object-fit: cover;">
                    <div class="card-overlay">
                        <div class="overlay-content">
                            <h3>${product.name}</h3>
                            <span class="price">${formatCurrency(product.price)}</span>
                        </div>
                    </div>
                </div>
                <div class="card-info">
                    <div class="card-badges">
                        ${product.badges.map(badge => `<span class="badge">${badge}</span>`).join('')}
                    </div>
                    <div class="card-category">${product.categoryName}</div>
                    <h3 class="card-name">${product.name}</h3>
                    <p class="card-description">${product.shortDesc}</p>
                    <div class="card-price">${formatCurrency(product.price)}</div>
                    <a href="chitietsanpham.html?id=${product.id}" class="btn btn-primary" style="width: 100%; text-align: center;">Xem chi tiết</a>
                </div>
            `;
            productList.appendChild(productCard);
        });
    }

    function filterProducts(category) {
        const filteredProducts = getProductsByCategory(category);
        displayProducts(filteredProducts);
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            filterProducts(category);
        });
    });

    // Initial load
    filterProducts('all');
});