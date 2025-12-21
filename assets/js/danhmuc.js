document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const filterButtons = document.querySelectorAll('#category-filters .category-card');
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const priceFilter = document.getElementById('priceFilter');
    const resetBtn = document.getElementById('resetFilters');
    const badgeFiltersContainer = document.getElementById('badgeFilters');

    let currentCategory = 'all';
    let currentSearch = '';
    let currentSort = 'default';
    let currentPriceRange = 'all';
    let selectedBadges = [];

    // Lấy tất cả badges từ sản phẩm
    function getAllBadges() {
        const badges = new Set();
        getAllProducts().forEach(product => {
            product.badges.forEach(badge => badges.add(badge));
        });
        return Array.from(badges);
    }

    // Hiển thị badge filters
    function renderBadgeFilters() {
        const badges = getAllBadges();
        badgeFiltersContainer.innerHTML = '<span style="margin-right: 10px; color: var(--text-muted);">Lọc theo nhãn:</span>';
        badges.forEach(badge => {
            const badgeBtn = document.createElement('button');
            badgeBtn.className = 'badge-filter-btn';
            badgeBtn.textContent = badge;
            badgeBtn.onclick = () => toggleBadge(badge, badgeBtn);
            badgeFiltersContainer.appendChild(badgeBtn);
        });
    }

    function toggleBadge(badge, btn) {
        if (selectedBadges.includes(badge)) {
            selectedBadges = selectedBadges.filter(b => b !== badge);
            btn.classList.remove('active');
        } else {
            selectedBadges.push(badge);
            btn.classList.add('active');
        }
        applyFilters();
    }

    function displayProducts(productsToShow) {
        productList.innerHTML = '';
        
        if (productsToShow.length === 0) {
            productList.innerHTML = '<div style="text-align: center; padding: 60px 0; color: var(--text-muted); grid-column: 1/-1;"><h3>Không có sản phẩm nào phù hợp với bộ lọc</h3></div>';
            return;
        }
        
        productsToShow.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.style.cursor = 'pointer';
            productCard.onclick = () => window.location.href = `chitietsanpham.html?id=${product.id}`;
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
                </div>
            `;
            productList.appendChild(productCard);
        });
    }

    function applyFilters() {
        let filtered = getAllProducts();

        // Lọc theo danh mục
        if (currentCategory !== 'all') {
            filtered = filtered.filter(p => p.category === currentCategory);
        }

        // Lọc theo tìm kiếm
        if (currentSearch) {
            filtered = filtered.filter(p => 
                p.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                p.shortDesc.toLowerCase().includes(currentSearch.toLowerCase())
            );
        }

        // Lọc theo giá
        if (currentPriceRange !== 'all') {
            const [min, max] = currentPriceRange.split('-').map(v => parseFloat(v) * 1000000);
            if (max) {
                filtered = filtered.filter(p => p.price >= min && p.price <= max);
            } else {
                filtered = filtered.filter(p => p.price >= min);
            }
        }

        // Lọc theo badges
        if (selectedBadges.length > 0) {
            filtered = filtered.filter(p => 
                selectedBadges.some(badge => p.badges.includes(badge))
            );
        }

        // Sắp xếp
        switch(currentSort) {
            case 'price-asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filtered.sort((a, b) => b.name.localeCompare(a.name));
                break;
        }

        displayProducts(filtered);
    }

    // Event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentCategory = this.getAttribute('data-category');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            applyFilters();
        });
    });

    searchInput.addEventListener('input', function() {
        currentSearch = this.value;
        applyFilters();
    });

    sortSelect.addEventListener('change', function() {
        currentSort = this.value;
        applyFilters();
    });

    priceFilter.addEventListener('change', function() {
        currentPriceRange = this.value;
        applyFilters();
    });

    resetBtn.addEventListener('click', function() {
        currentCategory = 'all';
        currentSearch = '';
        currentSort = 'default';
        currentPriceRange = 'all';
        selectedBadges = [];
        
        searchInput.value = '';
        sortSelect.value = 'default';
        priceFilter.value = 'all';
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        filterButtons[0].classList.add('active');
        
        document.querySelectorAll('.badge-filter-btn').forEach(btn => btn.classList.remove('active'));
        
        applyFilters();
    });

    // Khởi tạo
    renderBadgeFilters();
    applyFilters();
});