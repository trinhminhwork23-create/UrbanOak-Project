// ===== LIENHE.JS - The Visionary's Desk =====

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
    
    // 2. Fade-in animations
    const fades = document.querySelectorAll('.fade-in');
    setTimeout(() => {
        fades.forEach(el => el.classList.add('visible'));
    }, 100);

    // 3. Scroll Indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.querySelector('.contact-main').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    // 4. Tab Switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const forms = document.querySelectorAll('.contact-form');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            
            // Remove active class
            tabBtns.forEach(b => b.classList.remove('active'));
            forms.forEach(f => f.classList.remove('active'));
            
            // Add active class
            btn.classList.add('active');
            document.getElementById(`${targetTab}-form`).classList.add('active');
        });
    });

    // 5. Form Submission - Business Form
    const businessForm = document.getElementById('business-form');
    if (businessForm) {
        businessForm.addEventListener('submit', handleBusinessSubmit);
    }

    function handleBusinessSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(businessForm);
        const submitBtn = businessForm.querySelector('.btn-submit');
        
        // Validation
        const inputs = businessForm.querySelectorAll('[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderBottomColor = '#e74c3c';
            } else {
                input.style.borderBottomColor = '#E9ECEF';
            }
        });
        
        if (!isValid) {
            showNotification('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
            return;
        }
        
        // Submit animation
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Cảm ơn bạn! Chúng tôi sẽ liên hệ trong vòng 2 giờ làm việc.', 'success');
            businessForm.reset();
            submitBtn.innerHTML = 'Nhận tư vấn giải pháp & Báo giá <i class="fas fa-arrow-right"></i>';
            submitBtn.disabled = false;
        }, 2000);
    }

    // 5. Form Submission - Partner Form
    const partnerForm = document.getElementById('partner-form');
    if (partnerForm) {
        partnerForm.addEventListener('submit', handlePartnerSubmit);
    }

    function handlePartnerSubmit(e) {
        e.preventDefault();
        
        const submitBtn = partnerForm.querySelector('.btn-submit');
        
        // Validation
        const inputs = partnerForm.querySelectorAll('[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderBottomColor = '#e74c3c';
            } else {
                input.style.borderBottomColor = '#E9ECEF';
            }
        });
        
        if (!isValid) {
            showNotification('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
            return;
        }
        
        // Submit animation
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang kết nối...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Yêu cầu đã được gửi! Bộ phận Dự án sẽ liên hệ sớm nhất.', 'success');
            partnerForm.reset();
            submitBtn.innerHTML = 'Kết nối với bộ phận Dự án <i class="fas fa-arrow-right"></i>';
            submitBtn.disabled = false;
        }, 2000);
    }

    // 6. Private Tour Button
    const privateTourBtn = document.querySelector('.btn-private-tour');
    if (privateTourBtn) {
        privateTourBtn.addEventListener('click', () => {
            showNotification('Tính năng đặt lịch đang được phát triển. Vui lòng gọi hotline!', 'info');
        });
    }

    // 7. Download Button
    const downloadBtn = document.querySelector('.btn-download');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            showNotification('Tài liệu đang được chuẩn bị. Vui lòng liên hệ qua email!', 'info');
        });
    }

    // 8. Click-to-Action for contact info
    const phoneElement = document.querySelector('.highlight-phone');
    if (phoneElement) {
        phoneElement.style.cursor = 'pointer';
        phoneElement.addEventListener('click', () => {
            window.location.href = 'tel:02412345678';
        });
    }

    // 9. Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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
});

// Utility Functions
function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        info: 'info-circle'
    };
    
    const colors = {
        success: '#8B7355',
        error: '#e74c3c',
        info: '#3498db'
    };
    
    notification.innerHTML = `
        <i class="fas fa-${icons[type]}"></i>
        <span>${message}</span>
    `;
    
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: colors[type],
        color: 'white',
        padding: '15px 20px',
        borderRadius: '8px',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        maxWidth: '400px'
    });
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}