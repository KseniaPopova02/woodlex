document.addEventListener("DOMContentLoaded", (event) => {
  const burgerMenu = document.getElementById("burger-menu");
  const fullScreenMenu = document.getElementById("full-screen-menu");
  const closeMenu = document.getElementById("close-menu");

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("open");
    fullScreenMenu.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
  });

  closeMenu.addEventListener("click", () => {
    burgerMenu.classList.remove("open");
    fullScreenMenu.classList.remove("open");
    document.body.classList.remove("no-scroll");
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const smoothScroll = (target, duration) => {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    let startTime = null;

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const button = document.querySelector('.button[href="#footer"]');
  button.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("#footer", 1000);
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const fadeInElements = document.querySelectorAll(".fade-in");

  const checkVisibility = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;

    fadeInElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        element.classList.add("appear");
      } else {
        element.classList.remove("appear");
      }
    });
  };

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
