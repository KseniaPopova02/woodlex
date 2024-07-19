document.addEventListener("DOMContentLoaded", (event) => {
  const burgerMenu = document.getElementById("burger-menu");
  const fullScreenMenu = document.getElementById("full-screen-menu");
  const closeMenu = document.getElementById("close-menu");

  const toggleMenu = () => {
    burgerMenu.classList.toggle("open");
    fullScreenMenu.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
  };

  burgerMenu.addEventListener("click", toggleMenu);

  closeMenu.addEventListener("click", () => {
    if (burgerMenu.classList.contains("open")) {
      // Добавляем небольшую задержку перед закрытием меню
      setTimeout(() => {
        toggleMenu();
        // Принудительно обновляем видимость бургер меню
        burgerMenu.style.display = "none";
        // Используем requestAnimationFrame для принудительной перерисовки
        requestAnimationFrame(() => {
          burgerMenu.style.display = "";
        });
      }, 10);
    }
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
    submitButton: "BOOK A CONSULTATION",
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
    namePlaceholder: "Name",
    phonePlaceholder: "Phone",
    emailPlaceholder: "E-mail",
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
    namePlaceholder: "Ім’я",
    phonePlaceholder: "Телефон",
    emailPlaceholder: "E-mail",
  },
};

function changeLanguage(lang) {
  if (!translations[lang]) {
    console.error(`Translation for language ${lang} not found.`);
    return;
  }

  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.getAttribute("data-lang");

    if (!translations[lang][key]) {
      return;
    }

    element.innerText = translations[lang][key];
  });

  document.querySelectorAll("[data-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-placeholder");

    if (!translations[lang][key]) {
      return;
    }

    element.setAttribute("placeholder", translations[lang][key]);
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  const sections = document.querySelectorAll(
    ".full-screen-menu-left .portfolio-section-title"
  );

  sections.forEach((section) => {
    section.addEventListener("click", () => {
      const content = section.nextElementSibling;
      if (content.classList.contains("open")) {
        content.classList.remove("open");
      } else {
        document
          .querySelectorAll(
            ".full-screen-menu-left .portfolio-section-variants-left-col.open"
          )
          .forEach((openSection) => {
            openSection.classList.remove("open");
          });
        content.classList.add("open");
      }
    });
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var form = event.target;
    var status = document.getElementById("form-status");
    var data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          status.innerHTML = "Повідомлення успішно надіслано!";
          form.reset();
        } else {
          response.json().then((data) => {
            if (data.errors) {
              status.innerHTML = data.errors
                .map((error) => error.message)
                .join(", ");
            } else {
              status.innerHTML = "Ошибка при отправке сообщения.";
            }
          });
        }
      })
      .catch((error) => {
        status.innerHTML = "Ошибка при отправке сообщения.";
      });
  });
