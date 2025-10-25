document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Show header with fade-in animation
    setTimeout(() => {
        header.classList.add('visible');
    }, 300);
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
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
    
    // Header scroll effect
    let lastScroll = 0;
    
    const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        
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
            // Scroll down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
        
        // Update active section in navigation
        updateActiveSection();
        // Trigger scroll animations
        animateOnScroll();
    };
    
    // Update active section in navigation
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
    
    // Scroll reveal animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.style.visibility = 'visible';
            }
        });
    };
    
    // Initialize active section on page load
    updateActiveSection();
    animateOnScroll(); // Run once on page load
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Prevent body scroll when mobile menu is open
    navMenu.addEventListener('touchmove', (e) => {
        if (navMenu.classList.contains('active')) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Add smooth scroll behavior for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Fallback for browsers that don't support scrollBehavior
    if (!('scrollBehavior' in document.documentElement.style)) {
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
                    setTimeout(animateScroll, increment);
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
