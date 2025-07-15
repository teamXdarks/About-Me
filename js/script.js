document.addEventListener('DOMContentLoaded', () => {
    // Content Protection
    function protectContent() {
        // Disable right-click
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            showProtectionMessage('Right-click is disabled');
        });

        // Disable copy
        document.addEventListener('copy', (e) => {
            e.preventDefault();
            showProtectionMessage('Copying is disabled');
        });

        // Disable keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+A, F12
            if (
                (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'x' || e.key === 'a')) ||
                e.key === 'F12'
            ) {
                e.preventDefault();
                showProtectionMessage('This action is not allowed');
            }
        });

        // Add protection message function
        function showProtectionMessage(message) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'protection-message';
            messageDiv.textContent = message;
            document.body.appendChild(messageDiv);

            // Remove message after 2 seconds
            setTimeout(() => {
                messageDiv.remove();
            }, 2000);
        }

        // Add CSS for protection message
        const style = document.createElement('style');
        style.textContent = `
            .protection-message {
                position: fixed;
                top: 20px;
                right: 20px;
                background: rgba(0, 255, 255, 0.1);
                color: #0ff;
                padding: 10px 20px;
                border: 1px solid #0ff;
                border-radius: 5px;
                font-family: 'Orbitron', sans-serif;
                animation: fadeInOut 2s ease-in-out;
                z-index: 9999;
            }

            @keyframes fadeInOut {
                0% { opacity: 0; transform: translateY(-20px); }
                20% { opacity: 1; transform: translateY(0); }
                80% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(-20px); }
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize content protection
    protectContent();

    // Initialize TypedJS for the tagline
    const typingOptions = {
        strings: [
            'Full-Stack Developer',
            'Python Expert',
            'Node.js Developer',
            'Telegram Bot Creator',
            'UI/UX Visionary',
            'E-Commerce Expert',
            'The Next Tech Pioneer',
            'Automation Specialist'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: false
    };

    new Typed('.typing-effect', typingOptions);

    // Initialize tilt effect for project cards and social links
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        gyroscope: true
    });

    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#0ff', '#f0f', '#0f6']
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#0ff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    // Navigation active class toggle
    const navItems = document.querySelectorAll('.cyber-nav li');
    const sections = document.querySelectorAll('section');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-section');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }

            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Highlight active section on scroll
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === current) {
                item.classList.add('active');
            }
        });
    });

    // Initialize skill progress animations
    const skillProgress = document.querySelectorAll('.skill-progress');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.width = entry.target.style.width;
                }, 200);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillProgress.forEach(progress => {
        const originalWidth = progress.style.width;
        progress.style.width = '0%';
        setTimeout(() => {
            observer.observe(progress);
        }, 500);
    });

    // Matrix rain effect in footer
    const createMatrixRain = () => {
        const matrixContainer = document.querySelector('.matrix-code');
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$><{};[]?/\\|=+-*:%#&^';
        const columns = Math.floor(matrixContainer.offsetWidth / 15);

        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.className = 'matrix-column';
            column.style.left = i * 15 + 'px';

            const columnHeight = Math.random() * 20 + 5;
            for (let j = 0; j < columnHeight; j++) {
                const char = document.createElement('div');
                char.className = 'matrix-char';
                char.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
                char.style.animationDelay = j * 0.1 + 's';
                char.style.color = j === 0 ? '#0ff' : 'rgba(0, 255, 255, ' + (1 - j / columnHeight) + ')';

                column.appendChild(char);
            }

            matrixContainer.appendChild(column);
        }
    };

    createMatrixRain();

    // Cyber glitch effect on scroll
    window.addEventListener('scroll', () => {
        const glitchElements = document.querySelectorAll('.glitch');

        glitchElements.forEach(el => {
            if (Math.random() > 0.95) {
                el.style.animation = 'none';
                void el.offsetWidth; // Trigger reflow
                el.style.animation = '';
            }
        });
    });

    // Button hover effects for form
    const cyberButton = document.querySelector('.cyber-button');

    cyberButton.addEventListener('mouseenter', function() {
        this.querySelector('.button-glitch').style.left = '-100%';
        setTimeout(() => {
            this.querySelector('.button-glitch').style.left = '100%';
        }, 50);
    });

    // Contact form functionality with EmailJS
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.querySelector('.form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Display sending message
            formStatus.innerHTML = '<p class="sending">Sending message...</p>';

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Send the email using EmailJS
            emailjs.send('service_hkqnurn', 'template_oufdpek', {
                    ...formData,
                    template: emailTemplate
                })
                .then(function(response) {
                    // Show success message
                    formStatus.innerHTML = '<p class="success">Message sent successfully!</p>';

                    // Reset form fields
                    contactForm.reset();

                    // Clear success message after 5 seconds
                    setTimeout(() => {
                        formStatus.innerHTML = '';
                    }, 5000);
                }, function(error) {
                    // Show error message
                    formStatus.innerHTML = '<p class="error">Failed to send message. Please try again.</p>';
                    console.error('EmailJS error:', error);

                    // Clear error message after 5 seconds
                    setTimeout(() => {
                        formStatus.innerHTML = '';
                    }, 5000);
                });
        });
    }

    // Rotating quotes
    const quotes = [
        "I don't hack to destroy. I hack to reveal.",
        "Firewalls don’t scare me — ignorance does.",
        "Code is my weapon. Logic is my armor.",
        "Not a criminal. Not a hero. Just a mind they can’t control..",
        "One line of code can change the world."
    ];

    const quoteText = document.getElementById('quote-text');
    let currentQuote = 0;

    const changeQuote = () => {
        quoteText.style.opacity = 0;

        setTimeout(() => {
            currentQuote = (currentQuote + 1) % quotes.length;
            quoteText.textContent = quotes[currentQuote];
            quoteText.style.opacity = 1;
        }, 500);
    };

    setInterval(changeQuote, 5000);

    // Interest tags hover effect
    const interestTags = document.querySelectorAll('.interest-tags span');

    interestTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'translateY(-5px)';
        });

        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'translateY(0)';
        });
    });
});
