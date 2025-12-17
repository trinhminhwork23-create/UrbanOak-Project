/* Common site JS: loader hide, header toggle, mobile menu, floating buttons,
	 image-zoom modal and safe MagicCursor init (fallback if class missing). */
/* assets/js/common.js - CLEAN VERSION */

document.addEventListener("DOMContentLoaded", function() {
    // 1. Kích hoạt logic Header (Tự động nhận diện Trang chủ/Trang con)
    handleHeaderStyle();
    
    // 2. Kích hoạt Mobile Menu
    initMobileMenu();

    // 3. Kích hoạt nút nổi (Floating Buttons)
    initFloatingButtons();

    // 4. Kích hoạt Zoom ảnh
    initImageZoom();
});

/* --- 1. LOGIC HEADER THÔNG MINH --- */
function handleHeaderStyle() {
    const header = document.getElementById('header');
    if (!header) return;

    // Kiểm tra xem có phải trang chủ không
    const path = window.location.pathname;
    const isHome = path.includes("index.html") || path.includes("trangchu.html") || path === "/" || path.endsWith("/");

    if (isHome) {
        // === TRANG CHỦ: Ban đầu trong suốt, cuộn xuống thì trắng ===
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
        // === TRANG KHÁC: Luôn nền trắng ===
        header.classList.add('header-solid');
        header.classList.remove('header-transparent');
    }
}

/* --- 2. LOGIC MOBILE MENU --- */
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            document.body.classList.toggle('mobile-menu-open');
        });
    }
}

/* --- 3. LOGIC FLOATING BUTTONS --- */
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

/* --- 4. LOGIC ZOOM ẢNH --- */
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
(function(){
	// Hide loading screen on full load
	window.addEventListener('load', function(){
		const loading = document.getElementById('loading-screen');
		if(loading) loading.classList.add('hidden');

		// Init custom cursor if present
		try{
			if(window.innerWidth <= 992) return;
			const ball = document.getElementById('ball');
			if(!ball) return;

			if(typeof window.MagicCursor !== 'undefined'){
				// Some pages may expose MagicCursor class globally
				new window.MagicCursor();
				return;
			}

			// Fallback implementation (lightweight)
			class FallbackCursor{
				constructor(){
					this.ball = ball;
					this.init();
				}
				init(){
					window.addEventListener('mousemove', e => {
						this.ball.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
					});
					this.initClickables();
					initMagnetics();
				}
				initClickables(){
					const clickables = document.querySelectorAll('a,button,.btn,input,textarea,.partner-logo,.header-actions i');
					clickables.forEach(el => {
						el.addEventListener('mouseenter', ()=>{
							this.ball.classList.add('explore');
							this.ball.innerHTML = '<span>Explore</span>';
						});
						el.addEventListener('mouseleave', ()=>{
							this.ball.classList.remove('explore');
							this.ball.innerHTML = '';
						});
					});
				}
			}

			new FallbackCursor();
		}catch(e){console.warn('cursor init error', e)}
	});


// --- Magnetic button gravity effect ---
let __mousePos = {x:0,y:0};
document.addEventListener('mousemove', (e)=>{ __mousePos.x = e.clientX; __mousePos.y = e.clientY; });

function initMagnetics(selectorList){
	const sel = selectorList || 'button, .btn, .floating-btn, .call-btn, .fb-btn, .zalo-btn';
	const magnets = Array.from(document.querySelectorAll(sel));
	if(!magnets.length) return;

	magnets.forEach(el=>{
		// ensure smooth transition
		if(!el.style.transition) el.style.transition = 'transform 0.28s cubic-bezier(.2,1,.3,1)';
		el.dataset.__origTransform = el.style.transform || '';
	});

	function onMove(){
		const mx = __mousePos.x;
		const my = __mousePos.y;
		const threshold = 140; // px
		const maxTranslate = 14; // px

		magnets.forEach(el=>{
			const r = el.getBoundingClientRect();
			const cx = r.left + r.width/2;
			const cy = r.top + r.height/2;
			const dx = mx - cx;
			const dy = my - cy;
			const dist = Math.sqrt(dx*dx + dy*dy);
			if(dist < threshold){
				const strength = (threshold - dist)/threshold; // 0..1
				const tx = (dx/dist || 0) * strength * maxTranslate;
				const ty = (dy/dist || 0) * strength * maxTranslate;
				el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
			} else {
				// reset
				el.style.transform = el.dataset.__origTransform || '';
			}
		});
	}

	// run on mousemove with requestAnimationFrame throttle
	let rafId = null;
	document.addEventListener('mousemove', ()=>{
		if(rafId) cancelAnimationFrame(rafId);
		rafId = requestAnimationFrame(()=>{ onMove(); rafId = null; });
	});
}

	// Header scroll toggle
	const header = document.getElementById('header');
	function onScroll(){
		if(!header) return;
		if(window.scrollY > 50) header.classList.add('scrolled'); else header.classList.remove('scrolled');
	}
	window.addEventListener('scroll', onScroll);
	onScroll();

	// Mobile menu toggle
	const mobileBtn = document.getElementById('mobileMenuBtn');
	if(mobileBtn){
		mobileBtn.addEventListener('click', ()=>{
			document.body.classList.toggle('mobile-menu-open');
		});
	}

	// Floating buttons actions (delegated)
	document.addEventListener('click', function(e){
		const btn = e.target.closest('.scroll-top-btn, .call-btn, .fb-btn, .zalo-btn');
		if(!btn) return;
		if(btn.classList.contains('scroll-top-btn')){
			window.scrollTo({top:0,behavior:'smooth'});
		} else if(btn.classList.contains('call-btn')){
			window.location.href = 'tel:0901234567';
		} else if(btn.classList.contains('fb-btn')){
			window.open('https://facebook.com','_blank');
		}
	});

	// Image zoom modal
	const zoomModal = document.getElementById('imageZoomModal');
	if(zoomModal){
		document.addEventListener('click', function(e){
			const trigger = e.target.closest('.img-hover-zoom, [data-zoom-src]');
			if(!trigger) return;
			const img = trigger.querySelector('img') || trigger;
			if(!img) return;
			const src = img.dataset.zoomSrc || img.src;
			const zoomImage = document.getElementById('zoomImage');
			if(zoomImage){ zoomImage.src = src; zoomModal.style.display = 'flex'; document.body.classList.add('no-scroll'); }
		});
		zoomModal.querySelector('.close-zoom')?.addEventListener('click', ()=>{ zoomModal.style.display='none'; document.body.classList.remove('no-scroll'); });
		zoomModal.addEventListener('click', (e)=>{ if(e.target === zoomModal){ zoomModal.style.display='none'; document.body.classList.remove('no-scroll'); } });
	}

})();

// mark common initialized to prevent duplicate init in page scripts
window.__COMMON_INITIALIZED = true;
/* LOGIC HEADER TỰ ĐỘNG (Dán vào assets/js/common.js) */

document.addEventListener("DOMContentLoaded", function() {
    handleHeaderStyle(); // Chạy ngay khi vào trang
});

function handleHeaderStyle() {
    const header = document.getElementById('header');
    if (!header) return;

    // 1. Kiểm tra xem có phải trang chủ không
    const path = window.location.pathname;
    const isHome = path.includes("index.html") || path.includes("trangchu.html") || path === "/" || path.endsWith("/");

    if (isHome) {
        // === TRƯỜNG HỢP 1: TRANG CHỦ ===
        // Ban đầu set trong suốt
        header.classList.add('header-transparent');
        header.classList.remove('header-solid');

        // Khi cuộn xuống thì đổi màu
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
        // === TRƯỜNG HỢP 2: CÁC TRANG KHÁC (Shop, About...) ===
        // Ép luôn nền trắng, chữ đen
        header.classList.add('header-solid');
        header.classList.remove('header-transparent');
        
        // (Không cần sự kiện scroll đổi màu nữa vì nó luôn trắng rồi)
    }
}
/* ======================================================
   MAGIC CURSOR LOGIC - NO DELAY
   ====================================================== */

class MagicCursor {
    constructor() {
        // Chỉ chạy trên PC
        if (window.innerWidth <= 992) return;

        this.ball = document.getElementById("ball");
        // Nếu tìm thấy thẻ ball thì mới chạy
        if (this.ball) {
            this.init();
        }
    }

    init() {
        // 1. Di chuyển con trỏ (Dùng transform translate3d cho mượt)
        window.addEventListener("mousemove", (e) => {
            this.ball.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        });

        // 2. Kích hoạt hiệu ứng Explore
        this.initClickables();

        // 3. Xử lý khi chuột rời khỏi màn hình (Ẩn đi cho đỡ ngứa mắt)
        document.addEventListener("mouseleave", () => {
            this.ball.style.opacity = "0";
        });
        document.addEventListener("mouseenter", () => {
            this.ball.style.opacity = "1";
        });
    }

    initClickables() {
        // Danh sách các thẻ cần hiện chữ Explore
        const selectors = [
            'a', 'button', '.btn', 'input', 'textarea', 
            '.partner-logo', '.header-actions i', '.floating-btn', 
            '.menu-luxury a', '.project-card', '.category-card'
        ];
        
        // Gộp các selector lại thành chuỗi
        const clickables = document.querySelectorAll(selectors.join(', '));
        
        clickables.forEach(el => {
            el.addEventListener("mouseenter", () => {
                this.ball.classList.add('explore');
                // Nếu không phải ô nhập liệu thì hiện chữ
                if (!el.matches('input, textarea')) {
                    this.ball.innerHTML = '<span>Explore</span>';
                }
            });

            el.addEventListener("mouseleave", () => {
                this.ball.classList.remove('explore');
                this.ball.innerHTML = '';
            });
        });
    }
}

// Chạy ngay khi trang tải xong
window.addEventListener('load', () => {
    new MagicCursor();
});