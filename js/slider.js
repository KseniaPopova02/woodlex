document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  let autoSlideInterval;

  let startX, endX;

  const updateSlider = (index) => {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  };

  const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider(currentIndex);
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
  };

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
    stopAutoSlide();
  };

  const handleTouchMove = (e) => {
    endX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX > endX + 50) {
      currentIndex = (currentIndex + 1) % slides.length;
    } else if (startX < endX - 50) {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
    updateSlider(currentIndex);
    startAutoSlide();
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAutoSlide();
      currentIndex = index;
      updateSlider(currentIndex);
      startAutoSlide();
    });
  });

  const sliderWrapper = document.querySelector(".slider-wrapper");
  sliderWrapper.addEventListener("touchstart", handleTouchStart);
  sliderWrapper.addEventListener("touchmove", handleTouchMove);
  sliderWrapper.addEventListener("touchend", handleTouchEnd);

  updateSlider(currentIndex);
  startAutoSlide();
});
