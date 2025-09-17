document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const progressBars = document.querySelectorAll('.progress-bar .progress');
    const totalSlides = slides.length;
    let currentSlide = 0;
    
    function updateProgressBars() {
      const progress = ((currentSlide + 1) / totalSlides) * 100;
    
      progressBars.forEach((bar) => {
        bar.style.width = `${progress}%`;
      });
    }
    
    function moveToSlide(slideIndex) {
      if (slideIndex < 0 || slideIndex >= totalSlides) return;
      currentSlide = slideIndex;
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
      updateProgressBars();
    }
    
    function nextSlide() {
      if (currentSlide < totalSlides - 1) {
        moveToSlide(currentSlide + 1);
      } else {
        moveToSlide(0);
      }
    }
    
    setInterval(nextSlide, 3000);
});