// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

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
document.querySelectorAll('.menu-nordic a').forEach(link => {
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

// Banner Slideshow functionality with slide effect
let currentSlide = 0;
const slidesContainer = document.getElementById('slidesContainer');
const slides = document.querySelectorAll('.banner-slideshow .slide');
const dots = document.querySelectorAll('.slide-dot');
const totalSlides = slides.length;

function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    
    currentSlide = index;
}

function nextSlide() {
    let nextIndex = (currentSlide + 1) % totalSlides;
    showSlide(nextIndex);
}

// Add event listeners for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

// Auto slide every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Pause slideshow when user interacts with dots
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    });
});

// Video Slideshow functionality
let currentVideoSlide = 0;
const videoSlides = document.querySelectorAll('.video-slide');
const totalVideoSlides = videoSlides.length;

function nextVideoSlide() {
    videoSlides[currentVideoSlide].classList.remove('active');
    currentVideoSlide = (currentVideoSlide + 1) % totalVideoSlides;
    videoSlides[currentVideoSlide].classList.add('active');
}

// Auto change video slide every 6 seconds
setInterval(nextVideoSlide, 6000);

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

// Scroll Animation Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-in').forEach(el => {
        observer.observe(el);
    });
}

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