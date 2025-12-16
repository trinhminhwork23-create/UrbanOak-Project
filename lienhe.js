// ===== LIENHE.JS - Contact Page JavaScript =====

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
        
        document.querySelectorAll('a, button, .btn, input, textarea').forEach(el => {
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

    // 4. Form Validation & Submit
    const form = document.querySelector('.contact-form-box form');
    const submitBtn = form?.querySelector('button[type="button"]');
    
    if (form && submitBtn) {
        submitBtn.addEventListener('click', handleFormSubmit);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        
        const name = form.querySelector('input[placeholder*="Họ tên"]').value.trim();
        const phone = form.querySelector('input[placeholder*="Số điện thoại"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector('textarea').value.trim();
        
        // Validation
        if (!name || !phone || !email || !message) {
            showNotification('Vui lòng điền đầy đủ thông tin!', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Email không hợp lệ!', 'error');
            return;
        }
        
        if (!isValidPhone(phone)) {
            showNotification('Số điện thoại không hợp lệ!', 'error');
            return;
        }
        
        // Submit animation
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ĐANG GỬI...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            showNotification('Gửi thành công! Chúng tôi sẽ liên hệ sớm nhất.', 'success');
            form.reset();
            submitBtn.innerHTML = 'GỬI YÊU CẦU';
            submitBtn.disabled = false;
        }, 2000);
    }

    // 5. Click-to-Action Features
    const phoneNumbers = document.querySelectorAll('[href^="tel:"], .contact-item p');
    const emailAddresses = document.querySelectorAll('[href^="mailto:"]');
    
    // Make phone clickable
    phoneNumbers.forEach(phone => {
        if (phone.textContent.includes('024 1234 5678') || phone.textContent.includes('0901 234 567')) {
            phone.style.cursor = 'pointer';
            phone.addEventListener('click', () => {
                window.location.href = 'tel:02412345678';
            });
        }
    });
    
    // Make email clickable
    emailAddresses.forEach(email => {
        email.addEventListener('click', () => {
            window.location.href = 'mailto:info@urbanoak.vn';
        });
    });

    // 6. Copy Address Feature
    const addressElement = document.querySelector('.info-group p');
    if (addressElement && addressElement.textContent.includes('Tầng 5')) {
        addressElement.style.cursor = 'pointer';
        addressElement.title = 'Click để copy địa chỉ';
        
        addressElement.addEventListener('click', () => {
            const address = 'Tầng 5, Tòa nhà Icon4, 243A Đê La Thành, Đống Đa, Hà Nội';
            copyToClipboard(address);
            showNotification('Đã copy địa chỉ!', 'success');
        });
    }

    // 7. Header Scroll Effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 8. Floating Buttons
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
});

// ===== UTILITY FUNCTIONS =====

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^[0-9\s\-\+\(\)]{10,15}$/.test(phone.replace(/\s/g, ''));
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? 'var(--accent)' : type === 'error' ? '#e74c3c' : '#3498db',
        color: 'white',
        padding: '15px 20px',
        borderRadius: '5px',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}