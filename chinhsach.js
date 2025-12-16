// ===== CHINHSACH.JS - Policy Page JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Loading Screen
    const loader = document.getElementById('loading-screen');
    const fades = document.querySelectorAll('.fade-in');
    
    setTimeout(() => {
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                fades.forEach(el => el.classList.add('visible'));
            }, 300);
        }
    }, 300);

    // 2. Custom Cursor
    const ball = document.getElementById('ball');
    if (ball && window.innerWidth > 992) {
        document.addEventListener('mousemove', (e) => {
            ball.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        });
        
        document.querySelectorAll('a, button, .btn').forEach(el => {
            el.addEventListener('mouseenter', () => {
                ball.classList.add('explore');
                ball.innerHTML = '<span>Explore</span>';
            });
            el.addEventListener('mouseleave', () => {
                ball.classList.remove('explore');
                ball.innerHTML = '';
            });
        });
    }

    // 3. Mobile Menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('menu');
    if (mobileBtn && menu) {
        mobileBtn.addEventListener('click', () => {
            menu.classList.toggle('active');
            mobileBtn.innerHTML = menu.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }

    // 4. Policy Navigation
    const policyLinks = document.querySelectorAll('.policy-link');
    const policySections = document.querySelectorAll('.policy-section');
    
    policyLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links and sections
            policyLinks.forEach(l => l.classList.remove('active'));
            policySections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show corresponding section
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // Smooth scroll to section (for mobile)
            if (window.innerWidth <= 992) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // 5. Header Scroll Effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 6. Floating Buttons
    const scrollTopBtn = document.querySelector('.scroll-top-btn');
    const callBtn = document.querySelector('.call-btn');
    const fbBtn = document.querySelector('.fb-btn');
    
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    if (callBtn) {
        callBtn.addEventListener('click', () => {
            window.location.href = 'tel:02412345678';
        });
    }
    
    if (fbBtn) {
        fbBtn.addEventListener('click', () => {
            window.open('https://facebook.com/urbanoak', '_blank');
        });
    }

    // 7. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 8. Auto-highlight Navigation on Scroll
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 200;
        
        policySections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active from all links
                policyLinks.forEach(link => link.classList.remove('active'));
                
                // Add active to corresponding link
                const correspondingLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    });
});