// script.js

document.addEventListener('DOMContentLoaded', function() {

    // 1. Navigation Link Hover Animation (Enhanced)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#ffd700';
            this.style.transform = 'scale(1.1)'; // Slight scale-up
            this.style.transition = 'color 0.3s ease, transform 0.3s ease';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '#ffffff';
            this.style.transform = 'scale(1)'; // Reset scale
        });
    });

    // 2. Article Fade-In & Slide-Up Animation
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        article.style.opacity = 0;
        article.style.transform = 'translateY(50px)'; // Start below its original position
        article.style.transition = 'opacity 1s ease, transform 1s ease';

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    article.style.opacity = 1;
                    article.style.transform = 'translateY(0)'; // Slide up to its original position
                    observer.unobserve(article);
                }
            });
        }, options);

        observer.observe(article);
    });

    // 3. Logo Pulse Animation
    const logo = document.querySelector('header img');
    if (logo) {
        logo.style.transition = 'transform 0.5s ease-in-out';
        logo.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)'; // Pulse effect on hover
        });
        logo.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // 4. Scroll to Top Button (Appears on scroll)
    const scrollButton = document.createElement('button');
    scrollButton.textContent = '↑ Scroll to Top';
    scrollButton.style.position = 'fixed';
    scrollButton.style.bottom = '20px';
    scrollButton.style.right = '20px';
    scrollButton.style.display = 'none'; // Initially hidden
    scrollButton.style.padding = '10px 15px';
    scrollButton.style.backgroundColor = 'rgba(32, 149, 112, 0.8)';
    scrollButton.style.color = 'white';
    scrollButton.style.border = 'none';
    scrollButton.style.borderRadius = '5px';
    scrollButton.style.cursor = 'pointer';
    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    scrollButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// script.js

document.addEventListener('DOMContentLoaded', function() {
    // ... (Your existing JavaScript code)

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved preference
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Toggle Light Mode';
        darkModeToggle.classList.add('dark')
    }

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.textContent = 'Toggle Light Mode';
            darkModeToggle.classList.add('dark')
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.textContent = 'Toggle Dark Mode';
            darkModeToggle.classList.remove('dark')
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved preference
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Toggle Light Mode';
        darkModeToggle.classList.add('dark');
    }

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.textContent = 'Toggle Light Mode';
            darkModeToggle.classList.add('dark');
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.textContent = 'Toggle Dark Mode';
            darkModeToggle.classList.remove('dark');
        }
    });
});