document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  let autoSlideInterval;

  let startX = 0;
  let endX = 0;
  let isSwiping = false;

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
    isSwiping = true;
    stopAutoSlide();
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    endX = e.touches[0].clientX;
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    if (!isSwiping) return;
    isSwiping = false;
    if (startX > endX + 50) {
      currentIndex = (currentIndex + 1) % slides.length;
    } else if (startX < endX - 50) {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
    updateSlider(currentIndex);
    startAutoSlide();
  };

  const handleTouchCancel = () => {
    isSwiping = false;
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
  sliderWrapper.addEventListener("touchstart", handleTouchStart, {
    passive: true,
  });
  sliderWrapper.addEventListener("touchmove", handleTouchMove, {
    passive: false,
  });
  sliderWrapper.addEventListener("touchend", handleTouchEnd, { passive: true });
  sliderWrapper.addEventListener("touchcancel", handleTouchCancel);

  updateSlider(currentIndex);
  startAutoSlide();
});
