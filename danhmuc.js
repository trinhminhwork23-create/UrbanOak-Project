document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('product-list');
    const filterBtns = document.querySelectorAll('.filter-bar li');

    const imageMap = {
        'chair': 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800',
        'desk': 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
        'shelf': 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800',
        'lamp': 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800',
        'accessory': 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800'
    };

    function renderProducts(list) {
        grid.innerHTML = '';

        if (list.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding:60px;">Không tìm thấy sản phẩm nào.</p>';
            return;
        }

        list.forEach(item => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.onclick = () => window.location.href = `chitietsanpham.html?id=${item.id}`;

            const imgSrc = imageMap[item.category] || item.thumb;

            card.innerHTML = `
                <div class="card-thumb">
                    <img src="${imgSrc}" alt="${item.name}">
                </div>
                <div class="card-info">
                    <h3 class="card-name">${item.name}</h3>
                    <div class="card-price">${formatCurrency(item.price)}</div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const cat = this.dataset.category;
            const filteredData = getProductsByCategory(cat);
            renderProducts(filteredData);
        });
    });

    renderProducts(getAllProducts());
});
