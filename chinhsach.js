// ===== CHINHSACH.JS - The UrbanOak Standard =====

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Custom Cursor (from cursor-fix.css)
    const ball = document.getElementById('ball');
    if (ball) {
        document.addEventListener('mousemove', (e) => {
            ball.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        });
        
        document.querySelectorAll('a, button, .btn, input, textarea, select').forEach(el => {
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
    
    // 2. Fade-in animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // 3. Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 4. Warranty card hover effects
    const warrantyCards = document.querySelectorAll('.warranty-card');
    warrantyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 5. Service item animation
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // 6. Number counter animation for warranty years
    const animateNumber = (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    };

    // Trigger number animation when warranty cards are visible
    const warrantyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const yearElement = entry.target.querySelector('.warranty-years');
                const targetNumber = parseInt(yearElement.textContent);
                
                if (!isNaN(targetNumber)) {
                    yearElement.textContent = '0';
                    animateNumber(yearElement, targetNumber, 1500);
                    entry.target.dataset.animated = 'true';
                }
            }
        });
    }, { threshold: 0.5 });

    warrantyCards.forEach(card => {
        warrantyObserver.observe(card);
    });

    // 7. Fit number animation
    const fitCards = document.querySelectorAll('.fit-card');
    const fitObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const numberElement = entry.target.querySelector('.fit-number');
                const text = numberElement.textContent.trim();
                
                if (text === '3') {
                    numberElement.textContent = '0';
                    animateNumber(numberElement, 3, 1000);
                } else if (text === '100%') {
                    numberElement.textContent = '0%';
                    let current = 0;
                    const timer = setInterval(() => {
                        current += 2;
                        if (current >= 100) {
                            numberElement.textContent = '100%';
                            clearInterval(timer);
                        } else {
                            numberElement.textContent = current + '%';
                        }
                    }, 20);
                }
                entry.target.dataset.animated = 'true';
            }
        });
    }, { threshold: 0.5 });

    fitCards.forEach(card => {
        fitObserver.observe(card);
    });

    // 8. Initial fade-in for hero
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }, 100);
});