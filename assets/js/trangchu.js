// Hide loading immediately
const loadingScreen = document.getElementById('loading-screen');
if (loadingScreen) {
    loadingScreen.style.display = 'none';
}

// Header scroll effect for transparent header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (!header) return;
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
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        const menu = document.getElementById('menu');
        if (!menu) return;
        menu.classList.toggle('active');
        this.innerHTML = menu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
} 

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
        const menuEl = document.getElementById('menu');
        if (menuEl && menuEl.classList.contains('active')) {
            menuEl.classList.remove('active');
            const mobileBtnEl = document.getElementById('mobileMenuBtn');
            if (mobileBtnEl) mobileBtnEl.innerHTML = '<i class="fas fa-bars"></i>';
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
const scrollTopBtn = document.querySelector('.scroll-top-btn');
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
} 

// Social buttons functionality
const fbBtn = document.querySelector('.fb-btn');
if (fbBtn) {
    fbBtn.addEventListener('click', function() {
        window.open('https://facebook.com/urbanoak', '_blank');
    });
}

const zaloBtn = document.querySelector('.zalo-btn');
if (zaloBtn) {
    zaloBtn.addEventListener('click', function() {
        window.open('https://zalo.me/0901234567', '_blank');
    });
}

const callBtn = document.querySelector('.call-btn');
if (callBtn) {
    callBtn.addEventListener('click', function() {
        window.location.href = 'tel:02412345678';
    });
} 



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
    if (!scrollProgress) return;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Smooth Scroll for Back to Top
const smoothBackBtn = document.querySelector('.scroll-top-btn');
if (smoothBackBtn) {
    smoothBackBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Image Zoom Modal
const imageZoomModal = document.getElementById('imageZoomModal');
const zoomImage = document.getElementById('zoomImage');
const closeZoom = document.querySelector('.close-zoom');

if (imageZoomModal && zoomImage && closeZoom) {
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
} 

// Product Comparison
let comparisonList = [];
const comparisonPanel = document.getElementById('comparison-panel');
const comparisonItems = document.getElementById('comparison-items');
const compareBtn = document.getElementById('compare-btn');
const clearComparison = document.getElementById('clear-comparison');

if (comparisonPanel && comparisonItems && compareBtn && clearComparison) {
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
} 

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
/* --- LOGIC BẬT/TẮT TIẾNG VIDEO --- */
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('materialVideo');
    const btn = document.getElementById('soundToggleBtn');
    const icon = btn.querySelector('i');

    if(video && btn) {
        btn.addEventListener('click', function() {
            if(video.muted) {
                // Đang tắt -> Bật tiếng
                video.muted = false;
                icon.className = 'fas fa-volume-up'; // Đổi icon thành loa bật
                // Có thể chỉnh âm lượng vừa phải (50%)
                video.volume = 0.5; 
            } else {
                // Đang bật -> Tắt tiếng
                video.muted = true;
                icon.className = 'fas fa-volume-mute'; // Đổi icon thành loa tắt
            }
        });
    }
});