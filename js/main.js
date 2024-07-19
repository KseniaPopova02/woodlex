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

document
  .getElementById("language-selector")
  .addEventListener("click", function () {
    let dropdown = this.querySelector(".dropdown");
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });

document.querySelectorAll(".dropdown div").forEach(function (element) {
  element.addEventListener("click", function () {
    let selectedLang = this.getAttribute("data-lang");
    let currentLang = document
      .getElementById("language-selector")
      .childNodes[0].nodeValue.trim();
    document.getElementById("language-selector").childNodes[0].nodeValue =
      selectedLang + " ";
    this.setAttribute("data-lang", currentLang);
    this.innerText = currentLang;
    this.parentElement.style.display = "none";

    changeLanguage(selectedLang);
  });
});

window.onclick = function (event) {
  if (!event.target.matches(".button-language")) {
    let dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(function (dropdown) {
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      }
    });
  }
};

const translations = {
  EN: {
    headerText: "INTERIOR AND EXTERIOR DESIGN STUDIO",
    orderButton: "Order",
    submitButton: "SUBSCRIBE FOR CONSULTATION",
    main: "Home",
    projects: "Projects",
    terasi: "Terraces",
    termososna: "Thermo Pine",
    termoyasen: "Thermo Ash",
    ekzotika: "Exotic",
    fasadi: "Facades",
    pidshivka: "Soffits",
    interyeri: "Interiors",
    portfolio: "Portfolio",
    eksklyuzivniVirobi: "Exclusive Products",
  },
  UA: {
    headerText: "СТУДІЯ ДИЗАЙНУ ІНТЕР'ЄРУ ТА ЕКСТЕР'ЄРУ",
    orderButton: "Замовити",
    submitButton: "ЗАПИСАТИСЬ НА КОНСУЛЬТАЦІЮ",
    main: "ГОЛОВНА",
    projects: "ПРОЄКТИ",
    terasi: "ТЕРАСИ",
    termososna: "Термососна",
    termoyasen: "Термоясен",
    ekzotika: "Екзотика",
    fasadi: "ФАСАДИ",
    pidshivka: "ПІДШИВКА",
    interyeri: "ІНТЕР’ЄРИ",
    portfolio: "Портфоліо",
    eksklyuzivniVirobi: "ЕКСКЛЮЗИВНІ ВИРОБИ",
  },
};

function changeLanguage(lang) {
  if (!translations[lang]) {
    return;
  }

  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.getAttribute("data-lang");

    if (!translations[lang][key]) {
      return;
    }

    element.innerText = translations[lang][key];
  });
}
