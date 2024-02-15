let slideIndex = 1; // Set the initial slide index to 1
let touchStartX = 0;
let touchEndX = 0;
// Function to set the current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function toggleNavbar() {
    const navbarLinks = document.getElementById("navbar");
    navbarLinks.style.display = (navbarLinks.style.display === "flex") ? "none" : "flex";
}


function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
}

function handleTouchEnd() {
    const threshold = 50;

    if (touchStartX - touchEndX > threshold) {
        nextSlide();
    } else if (touchEndX - touchStartX > threshold) {
        prevSlide();
    }
}

function nextSlide() {
    slideIndex++;
    if (slideIndex > 3) {
        slideIndex = 1;
    }
    showSlides();
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 1) {
        slideIndex = 3;
    }
    showSlides();
}

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
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
