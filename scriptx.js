document.addEventListener('DOMContentLoaded', function() {
    // ===== DOM Elements =====
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const themeToggle = document.querySelector('.theme-toggle');
    const skillTags = document.querySelectorAll('.skill-tag');
    const contactForm = document.querySelector('.contact-form');
    const formStatus = document.querySelector('.form-status');
    
    // ===== Theme Management =====
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 
                          (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }
    
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }
    
    function updateThemeIcon(theme) {
        if (!themeToggle) return;
        
        const icon = themeToggle.querySelector('i');
        if (!icon) return;
        
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
    
    // ===== Header & Navigation =====
    function initHeader() {
        // Show header with fade-in animation
        setTimeout(() => {
            header.classList.add('visible');
        }, 300);
        
        // Handle scroll events
        let lastScroll = 0;
        
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            
            // Add/remove scrolled class based on scroll position
            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Hide header on scroll down, show on scroll up
            if (currentScroll <= 0) {
                header.classList.remove('scroll-up');
                return;
            }
            
            if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
                header.classList.remove('scroll-up');
                header.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
                header.classList.remove('scroll-down');
                header.classList.add('scroll-up');
            }
            
            lastScroll = currentScroll;
            
            // Update active section in navigation
            updateActiveSection();
            // Trigger scroll animations
            animateOnScroll();
        };
        
        // Mobile menu toggle
        const toggleMenu = () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        };
        
        // Close mobile menu when clicking a link
        const closeMenu = () => {
            if (navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        };
        
        // Event listeners
        menuToggle.addEventListener('click', toggleMenu);
        
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        
        window.addEventListener('scroll', handleScroll);
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('nav') && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
        
        // Prevent body scroll when mobile menu is open
        navMenu.addEventListener('touchmove', (e) => {
            if (navMenu.classList.contains('active')) {
                e.preventDefault();
            }
        }, { passive: false });
    }
    
    // ===== Smooth Scrolling =====
    function initSmoothScrolling() {
        // Modern browsers with smooth scrolling support
        if ('scrollBehavior' in document.documentElement.style) {
            document.documentElement.style.scrollBehavior = 'smooth';
            
            // Handle anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        const headerHeight = header.offsetHeight;
                        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - headerHeight;
                        
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Update URL without page jump
                        history.pushState(null, null, targetId);
                    }
                });
            });
        } else {
            // Fallback for browsers without smooth scrolling support
            const scrollTo = (element, to, duration) => {
                const start = element.scrollTop;
                const change = to - start;
                let currentTime = 0;
                const increment = 20;
                
                // Easing function
                const easeInOutQuad = (t, b, c, d) => {
                    t /= d/2;
                    if (t < 1) return c/2*t*t + b;
                    t--;
                    return -c/2 * (t*(t-2) - 1) + b;
                };
                
                const animateScroll = () => {
                    currentTime += increment;
                    const val = easeInOutQuad(currentTime, start, change, duration);
                    element.scrollTop = val;
                    if (currentTime < duration) {
                        requestAnimationFrame(animateScroll);
                    }
                };
                
                animateScroll();
            };
            
            // Apply smooth scroll to all anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const targetId = this.getAttribute('href');
                    if (targetId === '#' || targetId === '') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        const headerHeight = document.querySelector('header').offsetHeight;
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                        
                        scrollTo(document.documentElement, targetPosition, 800);
                        
                        // Update URL
                        history.pushState(null, null, targetId);
                    }
                });
            });
        }
    }
    
    // ===== Active Section Detection =====
    function updateActiveSection() {
        let current = '';
        const scrollPosition = window.scrollY + 200; // Adjust this value as needed
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    }
    
    // ===== Scroll Animations =====
    function animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right, .research-card, .skill-category');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
                
                // Add staggered animations for cards
                if (element.classList.contains('research-card') || element.classList.contains('skill-category')) {
                    const index = Array.from(element.parentElement.children).indexOf(element);
                    element.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }
    
    // ===== Skill Tags Interaction =====
    function initSkillTags() {
        skillTags.forEach(tag => {
            tag.addEventListener('click', function() {
                const skillName = this.textContent.trim();
                navigator.clipboard.writeText(skillName).then(() => {
                    // Visual feedback
                    this.classList.add('copied');
                    this.setAttribute('aria-label', 'Copied to clipboard!');
                    
                    setTimeout(() => {
                        this.classList.remove('copied');
                        this.removeAttribute('aria-label');
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            });
        });
    }
    
    // ===== Contact Form Handling =====
    function initContactForm() {
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            try {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                
                // Simulate API call (replace with actual API call)
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Show success message
                formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                formStatus.className = 'form-status success';
                formStatus.style.display = 'block';
                
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
                
            } catch (error) {
                console.error('Error:', error);
                formStatus.textContent = 'Oops! Something went wrong. Please try again later.';
                formStatus.className = 'form-status error';
                formStatus.style.display = 'block';
            } finally {
                // Reset button state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        });
    }
    
    // ===== Initialize Everything =====
    function init() {
        initTheme();
        initHeader();
        initSmoothScrolling();
        initSkillTags();
        initContactForm();
        
        // Initial animations
        updateActiveSection();
        animateOnScroll();
        
        // Theme toggle
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
    }
    
    // Start the app
    init();

    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'flex';
                    // Trigger reflow for animation
                    void card.offsetWidth;
                    card.classList.add('fade-in-up');
                } else {
                    card.style.display = 'none';
                    card.classList.remove('fade-in-up');
                }
            });
        });
    });

    // Initialize animations
    function animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in-up:not(.animated)');
        
        elements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                // Add delay based on index for staggered animation
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                    element.classList.add('animated');
                }, index * 100);
            }
        });
    }

    // Set initial styles for animation
    function initializeAnimations() {
        const animatedElements = [
            ...document.querySelectorAll('.research-card'),
            ...document.querySelectorAll('.project-card'),
            ...document.querySelectorAll('.skill-category'),
            ...document.querySelectorAll('.achievement-card'),
            ...document.querySelectorAll('.contact-card')
        ];
        
        animatedElements.forEach((element, index) => {
            element.classList.add('fade-in-up');
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.transitionDelay = `${index * 0.1}s`;
        });
        
        // Trigger initial animation
        setTimeout(animateOnScroll, 100);
    }

    // Initialize everything
    initializeAnimations();
    highlightNav();
    
    // Event listeners
    window.addEventListener('scroll', () => {
        highlightNav();
        animateOnScroll();
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const targetId = window.location.hash;
        if (targetId) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });

    // Add hover effect for project cards on touch devices
    if ('ontouchstart' in window) {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('touchstart', function() {
                this.classList.toggle('hover');
            });
        });
    }
});
