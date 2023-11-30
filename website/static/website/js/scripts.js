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

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('fill-rule', 'evenodd');
    svg.setAttribute('clip-rule', 'evenodd');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '0 0 24 24');
    // <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>

  
    // Create an SVG path element with custom path data
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M12 0l8 9h-6v15h-4v-15h-6z');

  
    // Append the path to the SVG element
    svg.appendChild(path);
  
    // Append the SVG element to the button
    backToTopButton.appendChild(svg);
  
    // backToTopButton.innerText = '↑';
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
