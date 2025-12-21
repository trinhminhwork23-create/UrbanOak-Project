/* =========================================
   TRANGCHU.JS - CLEANED VERSION
   ========================================= */

// 1. SMOOTH SCROLL (LENIS)
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

// 2. SCROLL ANIMATIONS
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-in, .fade-in-up, .reveal-image').forEach(el => {
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);

// 3. HORIZONTAL SCROLL NAVIGATION
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
    
    productsTrack.addEventListener('scroll', () => {
        const scrollProgress = document.getElementById('scrollProgressFill');
        if (scrollProgress) {
            const scrollPercentage = (productsTrack.scrollLeft / (productsTrack.scrollWidth - productsTrack.clientWidth)) * 100;
            scrollProgress.style.width = scrollPercentage + '%';
        }
    });
}

// 4. VIDEO SOUND TOGGLE
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('materialVideo');
    const btn = document.getElementById('soundToggleBtn');
    
    if(video && btn) {
        const icon = btn.querySelector('i');
        btn.addEventListener('click', function() {
            if(video.muted) {
                video.muted = false;
                icon.className = 'fas fa-volume-up';
                video.volume = 0.5;
            } else {
                video.muted = true;
                icon.className = 'fas fa-volume-mute';
            }
        });
    }
});

// 5. MAGIC CURSOR
class MagicCursor {
    constructor() {
        if (window.innerWidth <= 992) return;
        
        this.ball = document.getElementById("ball");
        if (this.ball) this.init();
    }

    init() {
        window.addEventListener("mousemove", (e) => {
            this.ball.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        });

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

window.addEventListener('load', () => new MagicCursor());
