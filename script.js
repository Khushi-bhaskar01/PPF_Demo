/* ============================================
   PPF MASTER ENGINE 2024
   Blended Logic: GSAP + ScrollTrigger
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initializer
    initLoader();
    initScrollLogic();
    initAboutCarousel();
    initCustomCursor();
    initAboutImageCarousel();
    // ===== CUSTOM INTERACTIVE CURSOR =====
    function initCustomCursor() {
        const cursor = document.getElementById('custom-cursor');
        const follower = document.getElementById('cursor-follower');

        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.3 });
        });

        // Hover effect for links
        const targets = document.querySelectorAll('a, button, .insight-item, .event-card-premium');
        targets.forEach(target => {
            target.addEventListener('mouseenter', () => {
                cursor.classList.add('active');
                follower.classList.add('active');
            });
            target.addEventListener('mouseleave', () => {
                cursor.classList.remove('active');
                follower.classList.remove('active');
            });
        });
    }

    // ===== ABOUT US PHOTO CAROUSEL =====
    function initAboutCarousel() {
        const track = document.getElementById('heartTrack');
        if (!track) return;
        let index = 0;
        const total = track.children.length;
        setInterval(() => {
            index = (index + 1) % total;
            track.style.transform = `translateX(-${index * 100}%)`;
        }, 4000);
    }

    // ===== MASTER LOADER & HERO ENTRANCE =====
    function initLoader() {
        const tl = gsap.timeline();

        // Hide loader and show content
        tl.to('.loader-content', { opacity: 1, y: 0, duration: 1.2 })
            .to('.loader', { y: '-100%', duration: 1.5, delay: 2, ease: 'expo.inOut' })
            .to('#main-content', { opacity: 1, duration: 1 }, '-=0.8')
            // Hero text entry
            .to('.animate-in', {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.3,
                ease: 'power3.out'
            }, '-=0.5');
    }

    // Smooth Scroll Implementation
    function initScrollLogic() {
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        if (hamburger) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }
    }

    // ===== MOBILE MENU TOGGLE =====
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('.n-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Smooth Scroll Implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const element = document.querySelector(href);
                const offset = 100;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
function initAboutImageCarousel() {
    const track = document.getElementById('aboutTrack');
    const slides = document.querySelectorAll('.about-slide');
    const nextBtn = document.getElementById('aboutNext');
    const prevBtn = document.getElementById('aboutPrev');
    const dotsContainer = document.getElementById('aboutDots');

    if (!track) return;

    let index = 0;
    let interval;

    // Create dots
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);

        dot.addEventListener('click', () => {
            index = i;
            updateCarousel();
        });
    });

    const dots = dotsContainer.querySelectorAll('span');

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto slide
    function startAutoSlide() {
        interval = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    track.addEventListener('mouseenter', stopAutoSlide);
    track.addEventListener('mouseleave', startAutoSlide);

    startAutoSlide();
}