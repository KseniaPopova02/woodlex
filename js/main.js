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
      setTimeout(() => {
        toggleMenu();

        burgerMenu.style.display = "none";

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
    pidshivka: "Filling",
    interyeri: "Interiors",
    portfolio: "Portfolio",
    eksklyuzivniVirobi: "Exclusive Products",
    namePlaceholder: "Name",
    phonePlaceholder: "Phone",
    emailPlaceholder: "E-mail",
    proNas: "ABOUT US",
    proNas1:
      "We firmly believe that ergonomics, plenty of light, and simplicity should come first in interior design - nothing unnecessary.",
    proNas2:
      "Woodlex Group began its activities in 2011. Since then, we have completed more than 200 projects. Today, we provide a full range of services from architectural design to comprehensive installation. Thanks to extensive experience, dozens of mistakes, and hundreds of completed projects, we can offer the right solutions even for the boldest architectural ideas. And the proof of this is the extensive warranty obligations on our products.",
    proNas3:
      "We use only natural materials. We understand that walking barefoot on your terrace is more enjoyable when you step on a natural surface. The temperature of the board, the aroma, the external aesthetics - all these elements create impressions and mood. And we are responsible for that.",
    proces: "PROCESS",
    kakMiRobimo: "THIS IS HOW WE DO IT",
    NashiPartneri: "OUR PARTNERS",
    ZKimPrazuemo: "WHO WE WORK WITH",
    aboutUsTitle: "Our guiding principle is «functionalism and space».",
    thermoAshFillingMatherialFunction: "THERMO-ASH FILLING",
    contactUActionText: "PLEASE, CONTACT US FOR ALL DETAILS",
    thermoAshFillingTextAndImageTitle:
      "ECO-FRIENDLINESS AND DURABILITY OF THE MATERIAL",
    thermoAshFillingTextAndImageMainText1:
      "Thermo-ash filling is a very popular choice among many of our clients. Why is that? Because thermo-ash has many advantages and has proven itself well over many years of use.",
    thermoAshFillingTextAndImageMainText2:
      "The main advantages of the material:",
    thermoAshFillingTextAndImageMainText3:
      "Thermal insulation: Thermo-ash has high thermal insulation properties, which allows keeping the room warm.",
    thermoAshFillingTextAndImageMainText4:
      "Eco-friendliness: Thermo-ash is a natural material that does not contain harmful substances and does not release harmful substances.",
    thermoAshFillingTextAndImageMainText5:
      "Durability: Thermo-ash holds up well, has high resistance to atmospheric conditions and mechanical damage.",
    thermoAshFillingTextAndImageMainText6:
      "Aesthetics: Thermo-ash filling has a natural wooden look, adding naturalness and comfort to the interior.",
    thermoAshFillingTextAndImageMainText7:
      "Sound insulation: Thermo-ash absorbs sounds well, allowing for a comfortable acoustic environment in the room.",
    thermoAshFillingTextAndImageMainText8:
      "Ease of installation: Thermo-ash is easy to cut and install, simplifying the installation process.",
    thermoAshFillingTextAndImageMainText9:
      "Moisture regulation: Thermo-ash has the property of regulating moisture in the room, creating comfortable conditions for the inhabitants.",
    thermoAshFillingTextAndImageMainText10:
      "High antiseptic properties: Thermo-ash has excellent antiseptic properties, allowing to maintain the health of the room.",
    thermoAshFillingTextAndImageMainText11:
      "Choosing thermo-ash filling can be an excellent solution for creating a comfortable and aesthetic interior in your room.",
    thermoAshFillingImageAndTextTitle:
      "MULTIFUNCTIONALITY AND COMFORTABLE INSTALLATION",
    thermoAshFillingImageAndTextMainText1:
      "Thermo-ash filling can be used for finishing various types of rooms, making it a versatile choice for any design projects.",
    thermoAshFillingImageAndTextMainText2:
      "Installation can be faster compared to other types of filling, saving time during renovation or construction, as the material is lightweight and has a convenient shape for cutting and installation.",
    thermoAshFillingImageAndTextMainText3:
      "Thermo-ash material can be painted or treated to achieve the desired design and color. Also, the use of such filling can improve the energy efficiency of the room by retaining heat and reducing heating costs.",
    thermoPineFillingMatherialFunction: "THERMO-PINE FILLING",
    thermoPineFillingTextAndImageTitle:
      "FEATURES AND ADVANTAGES OF THE MATERIAL",
    thermoPineFillingTextAndImageMainText1:
      "Thermo-pine cladding has several advantages, including:",
    thermoPineFillingTextAndImageMainText2:
      "Moisture resistance: Thermo-pine has high moisture resistance, making it an ideal material for finishing rooms with high humidity, such as bathrooms or kitchens.",
    thermoPineFillingTextAndImageMainText3:
      "Durability: The long service life of thermo-pine allows you to use the cladding for many years without the need for frequent updates.",
    thermoPineFillingTextAndImageMainText4:
      "Eco-friendliness: Thermo-pine is a natural wood that does not contain harmful substances and is an environmentally friendly material.",
    thermoPineFillingTextAndImageMainText5:
      "Aesthetic appearance: Thermo-pine has natural beauty, a warm color, and texture that adds coziness and naturalness to the interior of the room.",
    thermoPineFillingTextAndImageMainText6:
      "Strength: Thermo-pine is a fairly strong wood that withstands mechanical damage and wear.",
    thermoPineFillingTextAndImageMainText7:
      "Thermo-pine cladding is an excellent choice for those who value quality, aesthetics, and an eco-friendly approach to interior decoration.",
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
    proNas: "ПРО НАС",
    proNas1:
      "Ми твердо переконані, що в інтер'єрі на першому місці повинні стояти ергономіка, велика кількість світла і легкість - нічого зайвого",
    proNas2:
      "Woodlex Groop почала свою діяльність у 2011 році. За цей ми реалізували більше 200 проектів. На сьогоднішній день виконуємо повний спектр послуг від архітектурного проекту до комплексного монтажу. Завдяки великому досвіду, десяткам помилок и сотням виконаних об'єктів, ми можемо запропонувати правильні рішення навіть у найсміливіших архітектурних задумах. І підтвердженням цьому є величезні гарантійні зобов'язання на наші вироби.",
    proNas3:
      "Використовуємо тільки натуральні матеріали. Розуміємо, що ходити босоніж по власній терасі приємніше, коли ви наступаєте босоніж на природний настил. Температура дошки, аромат, зовнішня естетика - всі ці елементи створюють враження та настрій. І ми за це відповідаємо.",
    proces: "ПРОЦЕС",
    kakMiRobimo: "ОСЬ, ЯК МИ ЦЕ РОБИМО",
    NashiPartneri: "НАШІ ПАРТНЕРИ",
    ZKimPrazuemo: "З КИМ МИ ПРАЦЮЕМО",
    aboutUsTitle: "Наш керівний принцип – «функціоналізм і простір».",
    thermoAshFillingMatherialFunctionB: "ПІДШИВКА З ТЕРМОЯСЕНЮ",
    contactUActionText: "БУДЬ ЛАСКА, ЗВ'ЯЖІТЬСЯ З НАМИ ДЛЯ ВСІХ ДЕТАЛЕЙ",
    thermoAshFillingTextAndImageTitle:
      "ЕКОЛОГІЧНІСТЬ ТА ДОВГОВІЧНІСТЬ МАТЕРІАЛУ",
    thermoAshFillingTextAndImageMainText1:
      " Підшивка з термоясеню є дуже популярним вибором серед багатьох наших клієнтів. Чому так? Бо термоясен має безліч переваг та дуже добре зарекомендував себе за багато років експлуатації.",
    thermoAshFillingTextAndImageMainText2: " Основні переваги матеріалу:",
    thermoAshFillingTextAndImageMainText3:
      "Теплоізоляція: Термоясень має високу теплоізоляційну властивість, що дозволяє зберігати тепло у приміщенні.",
    thermoAshFillingTextAndImageMainText4:
      "Екологічність: Термоясень є природним матеріалом, який не містить шкідливих речовин і не викидає в шкідливі речовини.",
    thermoAshFillingTextAndImageMainText5:
      "Довговічність: Термоясень відмінно тримається, має високу стійкість до впливу атмосферних умов і механічних пошкоджень.",
    thermoAshFillingTextAndImageMainText6:
      "Естетика: Підшивка з термоясену має природний дерев'яний вигляд, що додає природність та комфорт до інтер'єру.",
    thermoAshFillingTextAndImageMainText7:
      "Звукоізоляція: Термоясень добре поглинає звуки, що дозволяє створити комфортну акустичну обстановку у приміщенні.",
    thermoAshFillingTextAndImageMainText8:
      "Легкість у встановленні: Термоясень легко ріжеться та монтується, що спрощує процес встановлення.",
    thermoAshFillingTextAndImageMainText9:
      "Регулювання вологості: Термоясень має властивість регулювати вологість у приміщенні, створюючи комфортні умови для мешканців.",
    thermoAshFillingTextAndImageMainText10:
      "Висока антисептичність: Термоясень має відмінні антисептичні властивості, що дозволяють зберігати здоров’я приміщення.",
    thermoAshFillingTextAndImageMainText11:
      " Вибір термоясенової підшивки може стати відмінним рішенням для створення комфортного і естетичного інтер'єру у вашому приміщенні.",
    thermoAshFillingImageAndTextTitle:
      "БАГАТОФУНКЦІОНАЛЬНІСТЬ ТА КОМФОРТНИЙ МОНТАЖ",
    thermoAshFillingImageAndTextMainText1:
      "Термояснева підшивка може бути використана для оздоблення різних типів приміщень, що робить її універсальним вибором для будь-яких дизайнерських проектів",
    thermoAshFillingImageAndTextMainText2:
      "Установка може бути швидшою порівняно з іншими видами підшивки, що зекономить час у процесі ремонту чи будівництва, оскільки матеріал легкий і має зручну форму для різання та монтажу.",
    thermoAshFillingImageAndTextMainText3:
      "Термоясневий матеріал може бути фарбований або оброблений для досягнення бажаного дизайну та кольору. Також використання подібної підшивки може покращити енергоефективність приміщення шляхом збереження тепла і зниження витрат на опалення.",
    thermoPineFillingMatherialFunction: "ПІДШИВКА З ТЕРМОСОСНИ",
    thermoPineFillingTextAndImageTitle: "ОСОБЛИВОСТІ ТА ПЕРЕВАГИ МАТЕРІАЛУ",
    thermoPineFillingTextAndImageMainText1:
      "Обшивка з термососна має декілька переваг, включаючи:",
    thermoPineFillingTextAndImageMainText2:
      "Стійкість до вологи: Термососна має високу стійкість до вологи, що робить її ідеальним матеріалом для обробки приміщень з підвищеною вологістю, таких як вані кімнати або кухні.",
    thermoPineFillingTextAndImageMainText3:
      "Довговічність: Тривалий термін служби термососни дозволяє користуватися обшивкою протягом багатьох років без необхідності частого оновлення.",
    thermoPineFillingTextAndImageMainText4:
      "Екологічність: Термососна є природною деревиною, яка не містить шкідливих речовин і є екологічно чистим матеріалом.",
    thermoPineFillingTextAndImageMainText5:
      "Естетичний вигляд: Термососна має природну красу, теплий колір та текстуру, що додає затишку та натуральність до інтер'єру приміщення.",
    thermoPineFillingTextAndImageMainText6:
      "Міцність: Термососна є досить міцною деревиною, яка витримує механічні пошкодження та знос.",
    thermoPineFillingTextAndImageMainText7:
      "Обшивка з термососни є відмінним вибором для тих, хто цінує якість, естетику та екологічний підхід до внутрішнього оздоблення приміщень.",
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
  const toggleArrow = (section) => {
    const content = section.nextElementSibling;
    const arrow = section.querySelector(".arrow");

    if (content.classList.contains("open")) {
      content.classList.remove("open");
      arrow.classList.remove("rotated");
    } else {
      document
        .querySelectorAll(
          ".full-screen-menu-left .portfolio-section-variants-left-col.open"
        )
        .forEach((openSection) => {
          openSection.classList.remove("open");
          const openArrow =
            openSection.previousElementSibling.querySelector(".arrow");
          if (openArrow) openArrow.classList.remove("rotated");
        });
      content.classList.add("open");
      arrow.classList.add("rotated");
    }
  };

  const sections = document.querySelectorAll(
    ".full-screen-menu-left .portfolio-section-title"
  );
  sections.forEach((section) => {
    section.addEventListener("click", () => {
      toggleArrow(section);
    });
  });

  const aboutUsArrows = document.querySelectorAll(".about-us .arrow");
  aboutUsArrows.forEach((arrow) => {
    const section = arrow.closest(".about-us-title-wrapper");
    section.addEventListener("click", () => {
      const content = section.nextElementSibling;
      if (content.classList.contains("open")) {
        content.classList.remove("open");
        arrow.classList.remove("rotated");
      } else {
        document.querySelectorAll(".about-us .open").forEach((openSection) => {
          openSection.classList.remove("open");
          const openArrow =
            openSection.previousElementSibling.querySelector(".arrow");
          if (openArrow) openArrow.classList.remove("rotated");
        });
        content.classList.add("open");
        arrow.classList.add("rotated");
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
