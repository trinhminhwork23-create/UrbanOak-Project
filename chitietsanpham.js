document.addEventListener('DOMContentLoaded', function() {
    let id = new URLSearchParams(window.location.search).get('id');
    
    // Nếu không có ID, lấy product đầu tiên
    if (!id) {
        const allProducts = getAllProducts();
        id = allProducts.length > 0 ? allProducts[0].id : null;
    }
    
    const product = getProductById(id);
    
    if (!product) {
        document.querySelector('.product-detail').innerHTML = `
            <div class="container">
                <div style="text-align: center; padding: 100px 0;">
                    <h2>Sản phẩm không tồn tại</h2>
                    <p>Sản phẩm bạn tìm kiếm không có trong hệ thống.</p>
                    <a href="danhmuc.html" class="btn btn-primary">Quay lại danh mục</a>
                </div>
            </div>
        `;
        return;
    }

    // Update product info
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('breadcrumb-product').textContent = product.categoryName;
    document.getElementById('current-price').textContent = formatCurrency(product.price);
    document.getElementById('product-description').innerHTML = `<p>${product.shortDesc}</p>`;
    document.getElementById('story-text').innerHTML = `<p>${product.story}</p>`;
    
    // Update SKU
    document.getElementById('product-sku').textContent = `SKU: ${product.id.toUpperCase()}`;

    // Main image
    const mainImage = document.getElementById('main-product-image');
    if (product.gallery && product.gallery.length > 0) {
        mainImage.src = product.gallery[0];
        mainImage.alt = product.name;
        mainImage.style.objectFit = 'cover';
    }

    // Gallery thumbnails
    const galleryThumbs = document.getElementById('gallery-thumbs');
    if (product.gallery) {
        galleryThumbs.innerHTML = '';
        product.gallery.forEach((imageUrl, index) => {
            const thumb = document.createElement('div');
            thumb.className = 'thumb-item';
            thumb.innerHTML = `<img src="${imageUrl}" alt="Product view ${index + 1}">`;
            thumb.addEventListener('click', () => {
                mainImage.src = imageUrl;
            });
            galleryThumbs.appendChild(thumb);
        });
    }

    // Product specs
    const specsGrid = document.querySelector('.specs-grid');
    if (product.specs && specsGrid) {
        specsGrid.innerHTML = '';
        for (const [key, value] of Object.entries(product.specs)) {
            const specItem = document.createElement('div');
            specItem.className = 'spec-item';
            specItem.innerHTML = `
                <div class="spec-label">${key}</div>
                <div class="spec-value">${value}</div>
            `;
            specsGrid.appendChild(specItem);
        }
    }

    // Image badge
    const imageBadge = document.getElementById('image-badge');
    if (product.badges && product.badges.length > 0) {
        imageBadge.querySelector('span').textContent = product.badges[0];
    }

    // Related products - show different category products for variety
    const allProducts = getAllProducts();
    const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 3);
    const relatedGrid = document.getElementById('related-products');
    if (relatedGrid && relatedProducts.length > 0) {
        relatedGrid.innerHTML = '';
        relatedProducts.forEach(relatedProduct => {
            const relatedItem = document.createElement('div');
            relatedItem.className = 'related-item';
            relatedItem.innerHTML = `
                <div class="related-thumb">
                    <a href="chitietsanpham.html?id=${relatedProduct.id}">
                        <img src="${relatedProduct.thumb}" alt="${relatedProduct.name}" style="object-fit: cover;">
                    </a>
                </div>
                <div class="related-info">
                    <div class="related-category">${relatedProduct.categoryName}</div>
                    <h4 class="related-name">${relatedProduct.name}</h4>
                    <div class="related-price">${formatCurrency(relatedProduct.price)}</div>
                    <a href="chitietsanpham.html?id=${relatedProduct.id}" class="btn btn-primary" style="margin-top: 15px; padding: 8px 16px; font-size: 12px;">Xem chi tiết</a>
                </div>
            `;
            relatedGrid.appendChild(relatedItem);
        });
    }
});