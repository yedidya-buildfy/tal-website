// ==========================================
// mantra studio - Main JavaScript
// Interactive Features & Animations
// ==========================================

// ==========================================
// 1. Reading Progress Bar
// ==========================================
function initProgressBar() {
    const progressBar = document.getElementById('progressBar');

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;

        progressBar.style.width = `${progress}%`;
    });
}
// ==========================================
// 2. Interactive Image Carousel (RTL Support)
// ==========================================
function initCarousel() {
    const carousel = document.getElementById('carousel');
    if (!carousel) return;

    const track = document.getElementById('carouselTrack');
    const dotsContainer = document.getElementById('carouselDots');
    const items = track.querySelectorAll('.carousel-item');

    let currentIndex = 0;
    let startPos = 0;
    let isDragging = false;

    // Create dots
    items.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    // Update active dot
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Go to specific slide with smooth transition
    function goToSlide(index) {
        if (index < 0) index = items.length - 1;
        if (index >= items.length) index = 0;

        currentIndex = index;
        const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(track).gap);
        const translateValue = -currentIndex * itemWidth;

        track.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        track.style.transform = `translateX(${translateValue}px)`;
        updateDots();
    }

    // Touch/Mouse drag events
    function handleDragStart(e) {
        isDragging = true;
        startPos = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        track.style.transition = 'none';
        track.style.cursor = 'grabbing';
    }

    function handleDragMove(e) {
        if (!isDragging) return;
        e.preventDefault();

        const currentPosition = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        const diff = currentPosition - startPos;
        const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(track).gap);
        const currentTranslate = -currentIndex * itemWidth + diff;

        track.style.transform = `translateX(${currentTranslate}px)`;
    }

    function handleDragEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        track.style.cursor = 'grab';

        const endPos = e.type.includes('mouse') ? e.pageX : e.changedTouches[0].clientX;
        const diff = endPos - startPos;

        // RTL: Swipe right (positive diff) = next slide, Swipe left (negative diff) = prev slide
        if (diff > 50) {
            // Swiped right - go to next in RTL
            goToSlide(currentIndex + 1);
        } else if (diff < -50) {
            // Swiped left - go to prev in RTL
            goToSlide(currentIndex - 1);
        } else {
            // Snap back to current
            goToSlide(currentIndex);
        }
    }

    // Add event listeners
    track.addEventListener('mousedown', handleDragStart);
    track.addEventListener('mousemove', handleDragMove);
    track.addEventListener('mouseup', handleDragEnd);
    track.addEventListener('mouseleave', handleDragEnd);

    track.addEventListener('touchstart', handleDragStart, { passive: true });
    track.addEventListener('touchmove', handleDragMove, { passive: false });
    track.addEventListener('touchend', handleDragEnd);

    // Handle resize
    window.addEventListener('resize', () => {
        goToSlide(currentIndex);
    });

    // Initialize
    goToSlide(0);
}

// ==========================================
// 3. Mobile Navigation Toggle
// ==========================================
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// ==========================================
// 4. Lead Form Submission (Removed - Using WhatsApp Contact)
// ==========================================
function initLeadForm() {
    // Form removed - users now contact directly via WhatsApp
    console.log('Contact via WhatsApp enabled');
}

// ==========================================
// 5. Scroll Animations (Fade In on Scroll)
// ==========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// ==========================================
// 6. Smooth Scroll for Anchor Links
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// ==========================================
// 7. Dynamic Logo Movement on Mobile
// ==========================================
function initDynamicLogo() {
    // Only run on mobile devices
    if (window.innerWidth > 768) return;

    const heroLogo = document.querySelector('.hero-logo');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const hero = document.querySelector('.hero');

    if (!heroLogo || !hero) return;

    function updateLogoPosition() {
        // Only apply on mobile
        if (window.innerWidth > 768) {
            heroLogo.style.removeProperty('--logo-translate-y');
            if (heroSubtitle) heroSubtitle.style.removeProperty('--subtitle-translate-y');
            return;
        }

        const scrollY = window.scrollY;
        const heroHeight = hero.offsetHeight;

        // Start position: 70px (under the header)
        const startPos = 70;
        // End position: middle of hero image (approx 50% of viewport height)
        const endPos = heroHeight * 0.45;

        // Calculate scroll progress (0 to 1)
        // Logo moves down as user scrolls within first 300px
        const scrollRange = 300;
        const scrollProgress = Math.min(scrollY / scrollRange, 1);

        // Calculate current position
        const currentPos = startPos + (endPos - startPos) * scrollProgress;

        // Update CSS custom property
        heroLogo.style.setProperty('--logo-translate-y', `${currentPos}px`);
        if (heroSubtitle) {
            heroSubtitle.style.setProperty('--subtitle-translate-y', `${currentPos}px`);
        }
    }

    // Update on scroll
    window.addEventListener('scroll', updateLogoPosition, { passive: true });

    // Update on resize
    window.addEventListener('resize', updateLogoPosition);

    // Initial position
    updateLogoPosition();
}

// ==========================================
// 8. Arbox Schedule Integration (Placeholder)
// ==========================================
function initArboxSchedule() {
    // TODO: Implement Arbox API integration for class schedule
    /*
    async function fetchSchedule() {
        try {
            const response = await fetch('YOUR_ARBOX_SCHEDULE_API_ENDPOINT', {
                headers: {
                    'Authorization': 'Bearer YOUR_API_KEY'
                }
            });

            const scheduleData = await response.json();
            renderSchedule(scheduleData);
        } catch (error) {
            console.error('Error fetching schedule:', error);
        }
    }

    function renderSchedule(data) {
        const container = document.getElementById('scheduleContainer');
        // Render schedule data here
    }

    fetchSchedule();
    */

    console.log('Arbox schedule integration ready for implementation');
}

// ==========================================
// Initialize All Functions on DOM Load
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initProgressBar();
    initCarousel();
    initMobileNav();
    initLeadForm();
    initScrollAnimations();
    initSmoothScroll();
    initDynamicLogo();
    initArboxSchedule();

    console.log('mantra studio website initialized successfully ✨');
});

// ==========================================
// Window Resize Handler
// ==========================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Reinitialize carousel and dynamic logo on resize
        initCarousel();

        // Reset dynamic logo for mobile/desktop switch
        const heroLogo = document.querySelector('.hero-logo');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (window.innerWidth > 768) {
            if (heroLogo) heroLogo.style.removeProperty('--logo-translate-y');
            if (heroSubtitle) heroSubtitle.style.removeProperty('--subtitle-translate-y');
        }
    }, 250);
});
