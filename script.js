document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide'); 
    const slides = document.querySelectorAll('.carousel-slide img'); 
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0; 
        } else if (index < 0) {
            currentSlide = totalSlides - 1; 
        } else {
            currentSlide = index;
        }

        const offset = -currentSlide * 100;
        carouselSlide.style.transform = `translateX(${offset}%)`;
    }

    
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });
    showSlide(currentSlide);
});
