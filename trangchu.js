// Hide loading immediately
const loadingScreen = document.getElementById('loading-screen');
if (loadingScreen) {
    loadingScreen.style.display = 'none';
}

// Header scroll effect for transparent header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Video Slideshow functionality
let currentVideoSlide = 0;
const videoSlides = document.querySelectorAll('.video-slide');
const totalVideoSlides = videoSlides.length;

if (videoSlides.length > 0) {
    function nextVideoSlide() {
        videoSlides[currentVideoSlide].classList.remove('active');
        currentVideoSlide = (currentVideoSlide + 1) % totalVideoSlides;
        videoSlides[currentVideoSlide].classList.add('active');
    }
    // Auto change video slide every 6 seconds
    setInterval(nextVideoSlide, 6000);
}

// Mobile menu toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
    this.innerHTML = menu.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Mobile dropdown menu functionality
document.querySelectorAll('.has-dropdown > a').forEach(dropdownToggle => {
    dropdownToggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            const dropdown = this.parentElement;
            dropdown.classList.toggle('active');
        }
    });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.menu-luxury a').forEach(link => {
    link.addEventListener('click', function() {
        if (document.getElementById('menu').classList.contains('active')) {
            document.getElementById('menu').classList.remove('active');
            document.getElementById('mobileMenuBtn').innerHTML = '<i class="fas fa-bars"></i>';
        }
        
        // Close dropdowns on mobile
        if (window.innerWidth <= 992) {
            document.querySelectorAll('.has-dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top button
document.querySelector('.scroll-top-btn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Social buttons functionality
document.querySelector('.fb-btn').addEventListener('click', function() {
    window.open('https://facebook.com/urbanoak', '_blank');
});

document.querySelector('.zalo-btn').addEventListener('click', function() {
    window.open('https://zalo.me/0901234567', '_blank');
});

document.querySelector('.call-btn').addEventListener('click', function() {
    window.location.href = 'tel:02412345678';
});



// Loading Animation & Scroll to top on reload
window.addEventListener('load', function() {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 300);
    }
});

// Also scroll to top on page refresh
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

// Scroll Progress Bar
window.addEventListener('scroll', function() {
    const scrollProgress = document.getElementById('scroll-progress');
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Smooth Scroll for Back to Top
document.querySelector('.scroll-top-btn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Image Zoom Modal
const imageZoomModal = document.getElementById('imageZoomModal');
const zoomImage = document.getElementById('zoomImage');
const closeZoom = document.querySelector('.close-zoom');

// Add click event to all category images
document.querySelectorAll('.category-img img').forEach(img => {
    img.addEventListener('click', function() {
        imageZoomModal.style.display = 'block';
        zoomImage.src = this.src;
        zoomImage.alt = this.alt;
    });
});

// Close zoom modal
closeZoom.addEventListener('click', function() {
    imageZoomModal.style.display = 'none';
});

imageZoomModal.addEventListener('click', function(e) {
    if (e.target === imageZoomModal) {
        imageZoomModal.style.display = 'none';
    }
});

// Product Comparison
let comparisonList = [];
const comparisonPanel = document.getElementById('comparison-panel');
const comparisonItems = document.getElementById('comparison-items');
const compareBtn = document.getElementById('compare-btn');
const clearComparison = document.getElementById('clear-comparison');

// Add comparison buttons to products (example)
function addToComparison(product) {
    if (comparisonList.length < 3 && !comparisonList.find(p => p.id === product.id)) {
        comparisonList.push(product);
        updateComparisonPanel();
    }
}

function removeFromComparison(productId) {
    comparisonList = comparisonList.filter(p => p.id !== productId);
    updateComparisonPanel();
}

function updateComparisonPanel() {
    if (comparisonList.length > 0) {
        comparisonPanel.classList.add('active');
        comparisonItems.innerHTML = '';
        
        comparisonList.forEach(product => {
            const item = document.createElement('div');
            item.className = 'comparison-item';
            item.innerHTML = `
                <button class="remove-item" onclick="removeFromComparison('${product.id}')">&times;</button>
                <img src="${product.image}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p class="price">${product.price}</p>
            `;
            comparisonItems.appendChild(item);
        });
        
        compareBtn.style.display = comparisonList.length >= 2 ? 'block' : 'none';
    } else {
        comparisonPanel.classList.remove('active');
        comparisonItems.innerHTML = '<p>Chưa có sản phẩm nào để so sánh</p>';
        compareBtn.style.display = 'none';
    }
}

clearComparison.addEventListener('click', function() {
    comparisonList = [];
    updateComparisonPanel();
});

compareBtn.addEventListener('click', function() {
    alert('Chức năng so sánh sẽ được triển khai!');
});

// Example: Add comparison buttons to category cards
document.querySelectorAll('.category-card').forEach((card, index) => {
    const compareBtn = document.createElement('button');
    compareBtn.innerHTML = 'So sánh';
    compareBtn.className = 'btn btn-secondary';
    compareBtn.style.cssText = 'position:absolute;top:10px;right:10px;padding:5px 10px;font-size:12px;';
    
    compareBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const img = card.querySelector('img');
        const title = card.querySelector('h3').textContent;
        
        addToComparison({
            id: 'product-' + index,
            name: title,
            image: img.src,
            price: '15.500.000₫'
        });
    });
    
    card.style.position = 'relative';
    card.appendChild(compareBtn);
});

// Scroll Animation Observer (Cập nhật)
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15, // Kích hoạt khi hiện 15%
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Quan sát các class cũ và class mới (reveal-image)
    document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-in, .fade-in-up, .reveal-image').forEach(el => {
        observer.observe(el);
    });
}

// Khởi chạy khi DOM load xong
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
    initScrollAnimations();
}

// Horizontal Scroll Navigation
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');
const productsTrack = document.getElementById('featuredProductsTrack');

if (scrollLeftBtn && scrollRightBtn && productsTrack) {
    scrollLeftBtn.addEventListener('click', () => {
        productsTrack.scrollBy({ left: -400, behavior: 'smooth' });
    });
    
    scrollRightBtn.addEventListener('click', () => {
        productsTrack.scrollBy({ left: 400, behavior: 'smooth' });
    });
    
    // Update progress bar
    productsTrack.addEventListener('scroll', () => {
        const scrollProgress = document.getElementById('scrollProgressFill');
        if (scrollProgress) {
            const scrollPercentage = (productsTrack.scrollLeft / (productsTrack.scrollWidth - productsTrack.clientWidth)) * 100;
            scrollProgress.style.width = scrollPercentage + '%';
        }
    });
}l => {
        observer.observe(el);
    };


// Initialize scroll animations after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    
    // Hide loading faster if DOM is ready
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 200);
        }, 100);
    }
});

// Also initialize after window load for safety
window.addEventListener('load', function() {
    initScrollAnimations();
    
    // Ensure loading is hidden
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen && loadingScreen.style.display !== 'none') {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 100);
    }
});
/* --- LOGIC MỚI CHO HEADER --- */
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    
    // Nếu cuộn xuống quá 50px
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        // Nếu ở trên cùng
        header.classList.remove('scrolled');
    }
});
/* =========================================
   FINAL UPGRADES JS
   ========================================= */

// 1. INIT SMOOTH SCROLL (LENIS)
const lenis = new Lenis({
    duration: 0.8,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);



/* =========================================
   HYBRID LUXURY CURSOR JS
   ========================================= */

class MagicCursor {
    constructor() {
        if (window.innerWidth <= 992) return;
        
        this.ball = document.getElementById("ball");
        
        if (this.ball) {
            this.init();
        }
    }

    init() {
        window.addEventListener("mousemove", (e) => {
            this.ball.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        });

        this.initClickables();
    }

    initClickables() {
        const clickables = document.querySelectorAll('a, button, .btn, input, textarea, .partner-logo, .header-actions i');
        
        clickables.forEach(el => {
            el.addEventListener("mouseenter", () => {
                this.ball.classList.add('explore');
                this.ball.innerHTML = '<span>Explore</span>';
            });

            el.addEventListener("mouseleave", () => {
                this.ball.classList.remove('explore');
                this.ball.innerHTML = '';
            });
        });
    }
}

window.addEventListener('load', () => {
    new MagicCursor();
});

// Scroll Progress Indicator
const sections = document.querySelectorAll('section[id]');
const indicatorDots = document.querySelectorAll('.indicator-dot');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = index;
        }
    });

    indicatorDots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === current) {
            dot.classList.add('active');
        }
    });
});

indicatorDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        if (sections[index]) {
            sections[index].scrollIntoView({ behavior: 'smooth' });
        }
    });
});
/* ======================================================
   RENDER & LOGIC CHO PHẦN CUỘN NGANG SẢN PHẨM
   ====================================================== */

// 1. DATA (Dữ liệu gốc bạn cung cấp)
const products = [
    {
        id: 'chair-winston-vip',
        name: 'Ghế Giám Đốc WINSTON', // Rút gọn tên cho đẹp card
        fullName: 'Ghế Giám Đốc WINSTON – Quyền uy dẫn lối thành công',
        category: 'chair',
        categoryName: 'Ghế Chủ Tịch',
        price: 28900000,
        badges: ['Best Seller', 'Da Nappa'],
        thumb: 'https://images.unsplash.com/photo-1598590453372-bfc0e4b4e6b5?w=800&q=100',
    },
    {
        id: 'chair-lumina-pro',
        name: 'Ghế Văn Phòng LUMINA PRO',
        category: 'chair',
        categoryName: 'Ghế Ergonomic',
        price: 15500000,
        badges: ['Ergonomic', 'ISO9001'],
        thumb: 'https://images.unsplash.com/photo-1598300056681-f8e0f05a9a99?w=800&q=100',
    },
    {
        id: 'desk-concorde-vip',
        name: 'Bàn Giám Đốc CONCORDE',
        category: 'desk',
        categoryName: 'Bàn Giám Đốc',
        price: 45000000,
        badges: ['Gỗ Nguyên Tấm', 'Limited'],
        thumb: 'https://images.unsplash.com/photo-1593642632623-8f785e4fb5b0?w=800&q=100',
    },
    {
        id: 'desk-executive-slim',
        name: 'Bàn EXECUTIVE SLIM',
        category: 'desk',
        categoryName: 'Bàn Hiện Đại',
        price: 28500000,
        badges: ['Modern', 'Modular'],
        thumb: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=100',
    },
    {
        id: 'lamp-aurora-vip',
        name: 'Đèn Bàn AURORA',
        category: 'lamp',
        categoryName: 'Đèn Hoàng Gia',
        price: 18500000,
        badges: ['Smart IoT', 'Handmade'],
        thumb: 'https://images.unsplash.com/photo-1565636192335-14c66f859066?w=800&q=100',
    },
    {
        id: 'accessory-sovereign-vip',
        name: 'Bộ Phụ Kiện SOVEREIGN',
        category: 'accessory',
        categoryName: 'Phụ Kiện Luxury',
        price: 12800000,
        badges: ['Luxury Set', 'Italian Leather'],
        thumb: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=100',
    },
    {
        id: 'shelf-wisdom-tower',
        name: 'Kệ Sách WISDOM TOWER',
        category: 'shelf',
        categoryName: 'Kệ Sách',
        price: 22000000,
        badges: ['Modular', 'Minimalist'],
        thumb: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=100',
    }
];

// Hàm format tiền
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// 2. RENDER PRODUCTS
document.addEventListener("DOMContentLoaded", function() {
    const track = document.getElementById('featuredProductsTrack');
    const progressBar = document.getElementById('scrollProgressFill');
    const wrapper = document.getElementById('productTrackWrapper');
    
    if (!track) return;

    // Generate HTML
    const html = products.map(product => {
        // Tạo badges HTML
        const badgesHtml = product.badges.map(b => `<span class="p-badge">${b}</span>`).join('');
        
        return `
            <div class="prod-card-luxury">
                <div class="prod-img-box">
                    <div class="prod-badges">${badgesHtml}</div>
                    <img src="${product.thumb}" alt="${product.name}" loading="lazy">
                </div>
                <div class="prod-info-overlay">
                    <span class="prod-cat">${product.categoryName}</span>
                    <h3 class="prod-title">${product.name}</h3>
                    <div class="prod-price">${formatCurrency(product.price)}</div>
                    <a href="product-detail.html?id=${product.id}" class="btn-view-prod">Xem Chi Tiết &rarr;</a>
                </div>
            </div>
        `;
    }).join('');

    track.innerHTML = html;

    // 3. LOGIC SCROLL & PROGRESS BAR
    const updateProgress = () => {
        // Tính toán % đã cuộn
        // scrollLeft: vị trí hiện tại
        // scrollWidth - clientWidth: tổng khoảng cách có thể cuộn
        const maxScroll = track.scrollWidth - track.clientWidth;
        const percent = (track.scrollLeft / maxScroll) * 100;
        
        if (progressBar) {
            progressBar.style.width = `${percent}%`;
        }
    };

    // Lắng nghe sự kiện cuộn
    track.addEventListener('scroll', updateProgress);

    // 4. LOGIC DRAG TO SCROLL (Kéo chuột để cuộn trên PC)
    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener('mousedown', (e) => {
        isDown = true;
        track.classList.add('active');
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    });
    
    track.addEventListener('mouseleave', () => { isDown = false; track.classList.remove('active'); });
    track.addEventListener('mouseup', () => { isDown = false; track.classList.remove('active'); });
    
    track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 2; // Tốc độ kéo
        track.scrollLeft = scrollLeft - walk;
    });

    // 5. NÚT ĐIỀU HƯỚNG
    document.getElementById('scrollLeft').addEventListener('click', () => {
        track.scrollBy({ left: -400, behavior: 'smooth' });
    });
    document.getElementById('scrollRight').addEventListener('click', () => {
        track.scrollBy({ left: 400, behavior: 'smooth' });
    });
});
// End of trangchu.js