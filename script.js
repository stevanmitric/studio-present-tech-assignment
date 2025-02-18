document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slides img").length;
    
    function moveSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    setInterval(moveSlide, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let index = 1;
    function updateSlides() {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }
    document.querySelector(".next").addEventListener("click", function () {
        index = (index + 1) % slides.length;
        updateSlides();
    });
    document.querySelector(".prev").addEventListener("click", function () {
        index = (index - 1 + slides.length) % slides.length;
        updateSlides();
    });
});

function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('open');
  }