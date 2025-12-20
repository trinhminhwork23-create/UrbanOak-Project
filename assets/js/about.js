/* ======================================================
   ASSETS/JS/ABOUT.JS - FIXED VERSION
   ====================================================== */

document.addEventListener("DOMContentLoaded", function() {
    // 1. Kiểm tra GSAP
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    } else {
        console.warn("GSAP chưa load! Kiểm tra lại mạng hoặc link CDN.");
        return;
    }

    // 2. Chạy các hiệu ứng
    initSoulLine();           // Đường vân gỗ
    initRevealContent();      // Fade in nội dung
    initCounter();            // Số nhảy
    initParallax();           // Parallax ảnh
    initKineticTypography();  // Chữ chạy
    
    // Đợi 1 chút để ảnh load xong mới tính toán cuộn ngang
    window.addEventListener("load", initToolkitScroll);
});

/* --- 1. SOUL LINE --- */
function initSoulLine() {
    const path = document.querySelector("#woodPath");
    if (!path) return;
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    gsap.to(path, {
        strokeDashoffset: 0, ease: "none",
        scrollTrigger: {
            trigger: ".timeline-container", start: "top center", end: "bottom bottom", scrub: 1
        }
    });
}

/* --- 2. REVEAL CONTENT --- */
function initRevealContent() {
    document.querySelectorAll(".stage").forEach(stage => {
        const text = stage.querySelector(".stage-content");
        const visual = stage.querySelector(".stage-visual");

        if (text) {
            gsap.fromTo(text, { y: 50, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1, ease: "power2.out",
                scrollTrigger: { trigger: stage, start: "top 75%" }
            });
        }
        if (visual) {
            gsap.fromTo(visual, { scale: 0.9, opacity: 0 }, {
                scale: 1, opacity: 1, duration: 1.2, ease: "power2.out",
                scrollTrigger: { trigger: stage, start: "top 70%" }
            });
        }
    });
}

/* --- 3. COUNTER --- */
function initCounter() {
    document.querySelectorAll(".stat-num").forEach(stat => {
        const target = +stat.getAttribute("data-target");
        gsap.to(stat, {
            innerHTML: target, duration: 2.5, ease: "power1.out",
            snap: { innerHTML: 1 },
            scrollTrigger: { trigger: stat, start: "top 85%", once: true }
        });
    });
}

/* --- 4. PARALLAX --- */
function initParallax() {
    document.querySelectorAll(".img-frame img").forEach(img => {
        gsap.to(img, {
            yPercent: 15, ease: "none",
            scrollTrigger: {
                trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true
            }
        });
    });
}

/* --- 5. KINETIC TYPOGRAPHY --- */
function initKineticTypography() {
    const quote = document.querySelector(".kinetic-quote");
    if (!quote) return;
    const words = quote.querySelectorAll(".k-word");
    gsap.to(words, {
        y: 0, opacity: 1, duration: 1, ease: "power4.out", stagger: 0.05,
        scrollTrigger: { trigger: quote, start: "top 80%" }
    });
}

/* --- 6. HORIZONTAL SCROLL (FIXED) --- */
function initToolkitScroll() {
    const section = document.querySelector(".toolkit-wrapper");
    const track = document.querySelector(".toolkit-track");

    if (!section || !track) return;

    // Tính toán khoảng cách cần cuộn
    // (Chiều dài tổng của track - Chiều rộng màn hình)
    // Dùng function để tính lại nếu resize
    function getScrollAmount() {
        let trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth);
    }

    gsap.to(track, {
        x: getScrollAmount, // Di chuyển sang trái
        ease: "none",
        scrollTrigger: {
            trigger: section,
            pin: true,       // Ghim màn hình lại
            scrub: 1,        // Cuộn mượt theo chuột
            start: "top top", 
            end: () => "+=" + (track.scrollWidth - window.innerWidth), // Độ dài scroll ảo
            invalidateOnRefresh: true
        }
    });
}


/* --- XỬ LÝ NÚT BẬT/TẮT TIẾNG (ABOUT PAGE) --- */
const aboutVideo = document.getElementById('aboutVideo');
const soundBtn = document.getElementById('aboutSoundBtn');

if (aboutVideo && soundBtn) {
    soundBtn.addEventListener('click', function() {
        if (aboutVideo.muted) {
            aboutVideo.muted = false;
            this.innerHTML = '<i class="fas fa-volume-up"></i>';
            this.style.background = "#fff";
            this.style.color = "#000";
        } else {
            aboutVideo.muted = true;
            this.innerHTML = '<i class="fas fa-volume-mute"></i>';
            this.style.background = "rgba(255,255,255,0.1)";
            this.style.color = "#fff";
        }
    });
}
