/* ======================================================
   COMMON.JS - GLOBAL SITE LOGIC
   ====================================================== */

/**
 * Khởi tạo tất cả chức năng chung khi DOM load xong
 */
document.addEventListener("DOMContentLoaded", function() {
    injectHeaderFooter();
    handleHeaderStyle();
    initMobileMenu();
    initFloatingButtons();
    initImageZoom();
    initUserDisplay();
    initCartDisplay();
    initSearch();
});

/* --- INJECT HEADER & FOOTER --- */
/**
 * Tự động chèn Header và Footer vào trang
 */
function injectHeaderFooter() {
    if (document.getElementById('header')) return;
    
    const currentUser = JSON.parse(localStorage.getItem('UrbanOak_User'));
    const userDisplay = currentUser 
        ? `<a href="#" id="userDisplay" title="${currentUser.fullname}">
            <i class="fas fa-user"></i> <span>${currentUser.username}</span>
           </a>` 
        : `<a href="login.html" id="userDisplay">
            <i class="fas fa-user"></i> <span>Đăng nhập</span>
           </a>`;
    
    const headerHTML = `
    <header id="header" class="header-transparent">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <a href="trangchu.html">
                        <h1 class="brand-logo" style="font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700;">URBANOAK.</h1>
                    </a>
                </div>
                
                <nav class="menu-luxury" id="menu">
                    <ul>
                        <li><a href="trangchu.html">Trang chủ</a></li>
                        <li><a href="about.html">Giới thiệu</a></li>
                        <li><a href="danhmuc.html">Sản phẩm</a></li>
                        <li><a href="chinhsach.html">Chính sách</a></li>
                        <li><a href="lienhe.html">Liên hệ</a></li>
                    </ul>
                </nav>
                
                <div class="header-actions">
                    <div class="search-container">
                        <button class="search-btn" type="button">
                            <i class="fas fa-search"></i>
                        </button>
                        <div class="search-input-wrapper">
                            <input type="text" class="search-input" placeholder="Tìm kiếm...">
                        </div>
                    </div>
                    
                    ${userDisplay}
                    
                    <div class="cart-container">
                        <a href="cart.html" id="cartIcon">
                            <i class="fas fa-shopping-bag"></i>
                            <span class="cart-count" id="cartCount">0</span>
                        </a>
                    </div>
                    
                    <button class="mobile-menu-btn" id="mobileMenuBtn">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
    `;
    
    const footerHTML = `
    <footer class="staircase-footer">
        <div class="footer-bg-text">
            <div class="marquee-track">URBANOAK — MASTERPIECE — URBANOAK — MASTERPIECE —</div>
        </div>

        <div class="container footer-container">
            <div class="footer-main-content">
                <nav class="staircase-nav">
                    <a href="trangchu.html" class="stair-link"><span class="num">01</span> Trang chủ <div class="line"></div></a>
                    <a href="danhmuc.html" class="stair-link"><span class="num">02</span> Sản phẩm <div class="line"></div></a>
                    <a href="about.html" class="stair-link"><span class="num">03</span> Giới thiệu <div class="line"></div></a>
                    <a href="chinhsach.html" class="stair-link"><span class="num">04</span> Chính&nbsp;sách <div class="line"></div></a>
                    <a href="lienhe.html" class="stair-link"><span class="num">05</span> Liên hệ <div class="line"></div></a>
                </nav>

                <div class="footer-about">
                    <h4>URBANOAK – Kiến tạo không gian lãnh đạo đẳng cấp.</h4>
                    <p>Là thương hiệu tiên phong trong lĩnh vực nội thất văn phòng hạng sang, URBANOAK lấy cảm hứng từ vẻ đẹp trường tồn của gỗ tự nhiên kết hợp với tư duy thiết kế hiện đại. Chúng tôi không chỉ cung cấp nội thất, mà còn kiến tạo nên vị thế và quyền lực cho người đứng đầu. Từng sản phẩm đều được tinh chỉnh tỉ mỉ về công năng và thẩm mỹ, đảm bảo sự tiện nghi tối đa và phù hợp hoàn hảo với vóc dáng người Việt.</p>
                    <div class="footer-contact">
                        <strong>Trụ sở & Showroom:</strong>
                        Số 88 Tô Vĩnh Diện, P. Khương Trung, Q. Thanh Xuân, Hà Nội
                        <strong>Hotline:</strong> 0353.670.128
                    </div>
                </div>
            </div>

            <div class="footer-bottom-info">
                <div class="policy-links" id="footerUserGreeting">
                    ${currentUser ? `<span>Chào mừng, ${currentUser.fullname}</span>` : '<span>Chào mừng bạn đến với UrbanOak</span>'}
                </div>
                
                <div class="social-connect">
                    <span class="label">Connect:</span>
                    <div class="icons">
                        <a href="#" class="s-icon"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="s-icon"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="s-icon"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="footer-copyright">
                <p>© 2014 - 2025 UrbanOak. All Rights Reserved. | Designed by MDPA Team</p>
            </div>
        </div>
    </footer>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

/* --- HEADER STYLE LOGIC --- */
/**
 * Xử lý style header (transparent/solid) dựa vào trang
 */
function handleHeaderStyle() {
    const header = document.getElementById('header');
    if (!header) return;

    const path = window.location.pathname;
    const isHome = path.includes("index.html") || path.includes("trangchu.html") || path === "/" || path.endsWith("/");

    if (isHome) {
        header.classList.add('header-transparent');
        header.classList.remove('header-solid');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.remove('header-transparent');
                header.classList.add('header-solid');
            } else {
                header.classList.add('header-transparent');
                header.classList.remove('header-solid');
            }
        });
    } else {
        header.classList.add('header-solid');
        header.classList.remove('header-transparent');
    }
}

/* --- MOBILE MENU --- */
/**
 * Khởi tạo mobile menu toggle
 */
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            document.body.classList.toggle('mobile-menu-open');
        });
    }
}

/* --- FLOATING BUTTONS --- */
/**
 * Xử lý các nút floating (scroll top, call, fb, zalo)
 */
function initFloatingButtons() {
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('.scroll-top-btn, .call-btn, .fb-btn, .zalo-btn');
        if (!btn) return;
        
        if (btn.classList.contains('scroll-top-btn')) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (btn.classList.contains('call-btn')) {
            window.location.href = 'tel:0901234567';
        } else if (btn.classList.contains('fb-btn')) {
            window.open('https://facebook.com', '_blank');
        } else if (btn.classList.contains('zalo-btn')) {
             window.open('https://zalo.me/0901234567', '_blank');
        }
    });
}

/* --- IMAGE ZOOM MODAL --- */
/**
 * Khởi tạo modal zoom ảnh
 */
function initImageZoom() {
    const zoomModal = document.getElementById('imageZoomModal');
    if (zoomModal) {
        document.addEventListener('click', function(e) {
            const trigger = e.target.closest('.img-hover-zoom, [data-zoom-src]');
            if (!trigger) return;
            
            const img = trigger.querySelector('img') || trigger;
            if (!img) return;
            
            const src = img.dataset.zoomSrc || img.src;
            const zoomImage = document.getElementById('zoomImage');
            
            if (zoomImage) {
                zoomImage.src = src;
                zoomModal.style.display = 'flex';
                document.body.classList.add('no-scroll');
            }
        });

        const closeModal = () => {
            zoomModal.style.display = 'none';
            document.body.classList.remove('no-scroll');
        };

        zoomModal.querySelector('.close-zoom')?.addEventListener('click', closeModal);
        zoomModal.addEventListener('click', (e) => {
            if (e.target === zoomModal) closeModal();
        });
    }
}

/* --- USER DISPLAY LOGIC --- */
/**
 * Xử lý hiển thị user và logout
 */
function initUserDisplay() {
    const userDisplay = document.getElementById('userDisplay');
    if (!userDisplay) return;
    
    const currentUser = JSON.parse(localStorage.getItem('UrbanOak_User'));
    if (currentUser) {
        userDisplay.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm(`Xin chào ${currentUser.fullname}!\nBạn có muốn đăng xuất?`)) {
                localStorage.removeItem('UrbanOak_User');
                window.location.reload();
            }
        });
    }
}

/* --- CART DISPLAY LOGIC --- */
/**
 * Hiển thị số lượng sản phẩm trong giỏ hàng
 */
function initCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    if (!cartCount) return;
    
    const cart = JSON.parse(localStorage.getItem('UrbanOakCart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    cartCount.textContent = totalItems;
    
    if (totalItems > 0) {
        cartCount.style.display = 'flex';
    } else {
        cartCount.style.display = 'none';
    }
}

/* --- SEARCH FUNCTIONALITY --- */
/**
 * Xử lý tìm kiếm sản phẩm với gợi ý
 */
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const searchWrapper = document.querySelector('.search-input-wrapper');
    
    if (!searchInput || !searchBtn) return;
    
    let suggestionsBox = document.querySelector('.search-suggestions');
    if (!suggestionsBox) {
        suggestionsBox = document.createElement('div');
        suggestionsBox.className = 'search-suggestions';
        searchWrapper.appendChild(suggestionsBox);
    }
    
    const performSearch = () => {
        const keyword = searchInput.value.trim();
        if (keyword) {
            window.location.href = `danhmuc.html?search=${encodeURIComponent(keyword)}`;
        }
    };
    
    const showSuggestions = (keyword) => {
        if (!keyword || keyword.length < 2) {
            suggestionsBox.style.display = 'none';
            return;
        }
        
        const allProducts = typeof getAllProducts === 'function' ? getAllProducts() : [];
        const matches = allProducts.filter(p => 
            p.name.toLowerCase().includes(keyword.toLowerCase()) ||
            p.categoryName.toLowerCase().includes(keyword.toLowerCase())
        ).slice(0, 5);
        
        if (matches.length === 0) {
            suggestionsBox.style.display = 'none';
            return;
        }
        
        suggestionsBox.innerHTML = matches.map(p => `
            <a href="chitietsanpham.html?id=${p.id}" class="suggestion-item">
                <img src="${p.thumb}" alt="${p.name}">
                <div class="suggestion-info">
                    <div class="suggestion-name">${p.name}</div>
                    <div class="suggestion-price">${formatCurrency(p.price)}</div>
                </div>
            </a>
        `).join('');
        
        suggestionsBox.style.display = 'block';
    };
    
    searchInput.addEventListener('input', (e) => {
        showSuggestions(e.target.value.trim());
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });
    
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (searchInput.value.trim()) {
            performSearch();
        }
    });
    
    document.addEventListener('click', (e) => {
        if (!searchWrapper.contains(e.target)) {
            suggestionsBox.style.display = 'none';
        }
    });
}

/* --- LOADING SCREEN --- */
window.addEventListener('load', function() {
    const loading = document.getElementById('loading-screen');
    if (loading) loading.classList.add('hidden');
    
    initMagicCursor();
});

/* --- MAGIC CURSOR --- */
/**
 * Khởi tạo con trỏ chuột tùy chỉnh
 */
function initMagicCursor() {
    if (window.innerWidth <= 992) return;
    
    const ball = document.getElementById('ball');
    if (!ball) return;
    
    window.addEventListener('mousemove', (e) => {
        ball.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    });
    
    const clickables = document.querySelectorAll('a, button, .btn, input, textarea, .partner-logo, .header-actions i, .floating-btn, .menu-luxury a');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            ball.classList.add('explore');
            if (!el.matches('input, textarea')) {
                ball.innerHTML = '<span>Explore</span>';
            }
        });
        el.addEventListener('mouseleave', () => {
            ball.classList.remove('explore');
            ball.innerHTML = '';
        });
    });
    
    document.addEventListener('mouseleave', () => ball.style.opacity = '0');
    document.addEventListener('mouseenter', () => ball.style.opacity = '1');
}

window.__COMMON_INITIALIZED = true;
/* MAGNETIC BUTTON EFFECT CHO FOOTER SOCIAL */
const socialBtns = document.querySelectorAll('.social-icon');

socialBtns.forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
        const x = e.offsetX;
        const y = e.offsetY;
        const btnWidth = this.clientWidth;
        const btnHeight = this.clientHeight;
        
        // Di chuyển nút nhẹ theo chuột
        const transX = (x - btnWidth / 2);
        const transY = (y - btnHeight / 2);
        
        this.style.transform = `translate(${transX}px, ${transY}px)`;
    });
    
    btn.addEventListener('mouseout', function() {
        this.style.transform = ''; // Trả về vị trí cũ
    });
});