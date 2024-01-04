let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 10000); // Change slide every 2 seconds (adjust as needed)
}

// Function to set the current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function toggleNavbar() {
    const navbarLinks = document.getElementById("navbar");
    navbarLinks.style.display = (navbarLinks.style.display === "flex") ? "none" : "flex";
}

// Wait for the DOM to fully load before running the scripts
document.addEventListener('DOMContentLoaded', (event) => {

    showSlides();
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
