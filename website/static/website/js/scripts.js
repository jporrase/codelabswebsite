// Wait for the DOM to fully load before running the scripts
document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Responsive navigation toggle
    const navToggle = document.createElement('button');
    navToggle.innerText = 'Menu';
    navToggle.classList.add('nav-toggle');
    const nav = document.querySelector('nav');
    nav.parentNode.insertBefore(navToggle, nav);

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Back to top button functionality
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = '↑';
    backToTopButton.classList.add('back-to-top');
    backToTopButton.style.display = 'none'; // Hide the button initially
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) { // Show back to top button after scrolling down 500px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Animate testimonials on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
            } else {
                entry.target.classList.remove('slide-in'); // You can add this line to remove the class if it goes out of view
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // You may want to experiment with this value
    });

    document.querySelectorAll('.testimonial').forEach(testimonial => {
        observer.observe(testimonial);
    });
});

// You might need to add some CSS for .nav-toggle, .back-to-top, and .slide-in
