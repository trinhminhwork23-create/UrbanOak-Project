/* assets/js/about.js - Final Version with Kinetic Typography */

document.addEventListener("DOMContentLoaded", function() {
    // 1. Đăng ký Plugin của GSAP
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    } else {
        console.warn("GSAP chưa được load!");
        return;
    }

    // 2. Kích hoạt toàn bộ hiệu ứng
    initSoulLine();           // Vẽ đường vân gỗ
    initRevealContent();      // Hiện nội dung các bước
    initCounter();            // Số nhảy
    initParallax();           // Trượt ảnh chiều sâu
    initKineticTypography();  // <--- Ý TƯỞNG 1: Chữ chạy nghệ thuật
    initToolkitScroll();      // <--- Ý TƯỞNG 2: Cuộn ngang công cụ
});

/* --- 1. VẼ ĐƯỜNG VÂN GỖ (Soul Line) --- */
function initSoulLine() {
    const path = document.querySelector("#woodPath");
    if (!path) return;

    const length = path.getTotalLength();
    
    // Ẩn nét vẽ ban đầu
    gsap.set(path, { 
        strokeDasharray: length, 
        strokeDashoffset: length 
    });

    // Vẽ khi cuộn
    gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
            trigger: ".timeline-container",
            start: "top center",   
            end: "bottom bottom",  
            scrub: 1               
        }
    });
}

/* --- 2. HIỆN NỘI DUNG (Fade In Up) --- */
function initRevealContent() {
    const stages = document.querySelectorAll(".stage");
    
    stages.forEach(stage => {
        const text = stage.querySelector(".stage-content");
        const visual = stage.querySelector(".stage-visual");

        // Chữ bay lên
        if (text) {
            gsap.fromTo(text, 
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, ease: "power2.out",
                    scrollTrigger: {
                        trigger: stage,
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Ảnh/Video phóng to nhẹ
        if (visual) {
            gsap.fromTo(visual, 
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1, opacity: 1, duration: 1.2, ease: "power2.out",
                    scrollTrigger: {
                        trigger: stage,
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }
    });
}

/* --- 3. SỐ LIỆU CHẠY (Counter) --- */
function initCounter() {
    const stats = document.querySelectorAll(".stat-num");
    
    stats.forEach(stat => {
        const target = +stat.getAttribute("data-target"); 
        
        gsap.to(stat, {
            innerHTML: target,
            duration: 2.5,
            ease: "power1.out",
            snap: { innerHTML: 1 }, 
            scrollTrigger: {
                trigger: stat,
                start: "top 85%",
                once: true 
            },
            onUpdate: function() {
                this.targets()[0].innerHTML = Math.ceil(this.targets()[0].innerHTML);
            }
        });
    });
}

/* --- 4. PARALLAX ẢNH --- */
function initParallax() {
    const images = document.querySelectorAll(".parallax-img img");
    
    images.forEach(img => {
        gsap.to(img, {
            yPercent: 15, 
            ease: "none",
            scrollTrigger: {
                trigger: img.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });
}

/* --- 5. KINETIC TYPOGRAPHY (MỚI) --- */
function initKineticTypography() {
    const quote = document.querySelector(".kinetic-quote");
    if (!quote) return;

    // Tìm tất cả các từ khóa (.k-word)
    const words = quote.querySelectorAll(".k-word");

    // Hiệu ứng chữ trượt từ dưới lên
    gsap.to(words, {
        y: 0,          // Về vị trí gốc
        opacity: 1,    // Hiện rõ
        duration: 1,
        ease: "power4.out",
        stagger: 0.05,  // Chữ sau chạy chậm hơn chữ trước chút xíu
        scrollTrigger: {
            trigger: quote,
            start: "top 80%", // Chạy khi cuộn tới
            toggleActions: "play none none reverse"
        }
    });
}
/* --- 6. HORIZONTAL SCROLL (TOOLKIT) --- */
function initToolkitScroll() {
    const section = document.querySelector(".toolkit-wrapper");
    const track = document.querySelector(".toolkit-track");

    if (!section || !track) return;

    // Tính toán độ dài cần cuộn = Chiều dài track - Chiều rộng màn hình
    // Để khi cuộn hết thì mép phải của track chạm mép phải màn hình
    const scrollDistance = track.offsetWidth - window.innerWidth;

    gsap.to(track, {
        x: -scrollDistance, // Di chuyển track sang trái
        ease: "none",
        scrollTrigger: {
            trigger: section,
            pin: true,     // Ghim section lại không cho trôi đi
            scrub: 1,      // Mượt mà
            start: "top top", // Bắt đầu khi section chạm đỉnh màn hình
            end: () => "+=" + track.offsetWidth, // Độ dài cuộn ảo = chiều dài của track
            invalidateOnRefresh: true // Tính lại khi resize trình duyệt
        }
    });
}