/**
 * Vintours & Travels 
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // 1. Sticky Navbar on Scroll
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top button visibility
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    // Initial check for sticky navbar (if page is reloaded halfway down)
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }

    // 2. Mobile Navbar auto-close on link click
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                // Initialize Bootstrap Collapse instance if it exists, then hide it
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // 3. Scroll Reveal Animations using IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
                
                // If it's the stats section, trigger counters
                if (entry.target.querySelector('.counter')) {
                    startCounters(entry.target);
                }
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 4. Animated Statistics Counters
    let countersStarted = false;

    function startCounters(section) {
        if (countersStarted) return;
        countersStarted = true;
        
        const counters = section.querySelectorAll('.counter');
        const speed = 200; // lower is slower

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    // 5. Gallery Modal Image Setter
    const galleryModal = document.getElementById('galleryModal');
    if (galleryModal) {
        galleryModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const imgSrc = button.getAttribute('data-img');
            const modalImg = galleryModal.querySelector('#modalImage');
            modalImg.src = imgSrc;
        });
    }

    // 6. Back to Top Button smooth scroll
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 7. Form Validation & Submission
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            
            if (!contactForm.checkValidity()) {
                event.stopPropagation();
                contactForm.classList.add('was-validated');
            } else {
                // Form is valid - simulate AJAX request
                const submitBtn = document.getElementById('submitBtn');
                const originalText = submitBtn.innerText;
                
                // Loading state
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...';
                
                // Simulate network request delay
                setTimeout(() => {
                    // Reset form
                    contactForm.reset();
                    contactForm.classList.remove('was-validated');
                    
                    // Show success message
                    formSuccess.classList.remove('d-none');
                    
                    // Reset button
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalText;
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        formSuccess.classList.add('d-none');
                    }, 5000);
                    
                }, 1500);
            }
        }, false);
    }

    // 8. Dynamic Copyright Year in Footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }
});
