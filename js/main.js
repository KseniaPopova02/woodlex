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
    thermoAshTerraceMatherialFunction: "THERMO-ASH TERRACE",
    materialConAndPros: "FEATURES AND ADVANTAGES OF THE MATERIAL",
    thermoAshTerraceTextAndImageMainText1:
      "Today, a terrace made of high-quality thermo-ash is considered the best choice for both private and commercial decoration.",
    thermoAshTerraceTextAndImageMainText2:
      "Sufficient strength, noble texture, and durability make thermo-ash an ideal option for covering any exploited surface.",
    thermoAshTerraceTextAndImageMainText3:
      "The thermo-ash terrace has several advantages:",
    thermoAshTerraceTextAndImageMainText4:
      "Durability: The coating perfectly protects the surface from weather, UV rays, friction, and other harmful factors. This allows you to maintain the aesthetic appearance of the terrace for a long time.",
    thermoAshTerraceTextAndImageMainText5:
      "Minimal maintenance: Thermo-ash terraces are easy to maintain. Simply wiping them down from time to time is enough to keep them looking like new. No need to paint or varnish them.",
    thermoAshTerraceTextAndImageMainText6:
      "Aesthetic appearance: Thermo-ash has a natural wooden look, adding warmth and coziness to the outdoor space. It is available in various colors and textures, allowing you to choose the best option for your interior.",
    thermoAshTerraceTextAndImageMainText7:
      "No deformation: Thermo-ash terraces have high resistance to deformation from moisture and temperature changes, allowing them to maintain their shape and structure for a long time.",
    thermoAshTerraceTextAndImageMainText8:
      "Also worth noting is resistance to pests and fungi: Thermo-ash has natural properties that make it less attractive to pests and fungi compared to other types of wood. This avoids problems with rot and damage from pests.",
    thermoAshTerraceTextAndImageMainText9:
      "Thermo-ash terraces have low water absorption, so they do not require enhanced edge treatment or other measures to protect against moisture and wear. They can also be laid on both flat and uneven surfaces. This allows for the creation of a unique terrace design that suits your needs and local conditions.",
    thermoPineTerraceMatherialFunction: "THERMO-PINE TERRACE",
    thermoPineTerraceTextAndImageMainText1:
      "Thermo-pine wood is excellent for use on terraces due to its advantages.",
    thermoPineTerraceTextAndImageMainText2: "Here are some of them:",
    thermoPineTerraceTextAndImageMainText3:
      "Strength and durability: Thermo-pine wood is known for its strength and wear resistance, making it an ideal material for terraces. It withstands external influences, including weather conditions and wear.",
    thermoPineTerraceTextAndImageMainText4:
      "Resistance to rot and pests: Thermo-pine wood is known for its natural resistance to rot, pests, and mold, allowing it to last a long time without special maintenance.",
    thermoPineTerraceTextAndImageMainText5:
      "Moisture resistance: Thermo-pine wood has high moisture resistance, making it an ideal choice for terraces where the material will be exposed to rain and moisture.",
    thermoPineTerraceTextAndImageMainText6:
      "Aesthetics: Thermo-pine wood has an attractive appearance with expressive grains and natural hues, adding natural beauty to your terrace.",
    thermoPineTerraceTextAndImageMainText7:
      "Ecological friendliness: Thermo-pine wood is an environmentally friendly material, adding an eco-friendly aspect to your terrace project.",
    thermoPineTerraceTextAndImageMainText8:
      "Ease of processing: Thermo-pine wood is easy to process and can be painted or oiled, allowing you to create a custom design for your terrace.",
    thermoPineTerraceTextAndImageReverseTitle:
      "PROPER CARE - SYNONYM OF LONGEVITY",
    thermoPineTerraceTextAndImageMainText9:
      "Thermo-pine wood is known for its high durability and longevity, making it a popular choice for terraces. The lifespan of a thermo-pine terrace depends on several factors, such as the quality of the wood itself, the quality of installation, and maintenance.",
    thermoPineTerraceTextAndImageMainText10:
      "Typically, a thermo-pine terrace can last from 15 to 25 years or even longer with proper care.",
    thermoPineTerraceTextAndImageMainText11:
      "It is recommended to regularly renew the protective layer on the terrace by oiling or painting, regularly clean it from dirt, and inspect the terrace for damage. This will help keep the wood in good condition and extend its lifespan.",
    thermoPineTerraceTextAndImageMainText12:
      "By following these tips and providing the wood with proper care, a thermo-pine terrace can last you for many years, providing beauty and comfort to your outdoor space.",
    thermoPineFacadeMatherialFunction: "THERMO-PINE FACADE",
    thermoPineFacadeTextAndImageMainText1:
      "A thermo-pine facade has several advantages that make it an attractive and popular choice for exterior cladding of houses.",
    thermoPineFacadeTextAndImageMainText2:
      "Weather resistance: Thermo-pine wood is processed through thermal treatment, making it more resistant to weather conditions such as rain, sun, snow, and humidity. This helps maintain the appearance of the facade for a long time.",
    thermoPineFacadeTextAndImageMainText3:
      "Strength and durability: The wood is known for its strength and durability, making it a reliable material for the facade that will last for many years without needing major repairs.",
    thermoPineFacadeTextAndImageMainText4:
      "Aesthetic appearance: Thermo-pine has an attractive natural texture and color that add elegance and warmth to your house. It gives the facade a natural and cozy look.",
    thermoPineFacadeTextAndImageMainText5:
      "Eco-friendly material: It is a natural, eco-friendly material that is safe for the environment, creating a sustainable and healthy living space.",
    thermoPineFacadeTextAndImageMainText6:
      "Design possibilities: The wood is easy to process and flexible in shaping, providing ample possibilities for various design elements on the facade, such as panels, cladding, and decorative details.",
    thermoPineFacadeTextAndImageMainText7:
      "Thermal insulation properties: Thermo-pine has good thermal insulation properties, which helps increase the energy efficiency of the house and reduce heating costs.",
    thermoPineFacadeTextAndImageMainText8:
      "A thermo-pine facade offers several advantages, such as improving the building's thermal insulation, protecting against temperature fluctuations, and reducing energy costs for heating and cooling. It can also provide resistance to weathering, enhance the building's appearance, and extend the facade's lifespan.",
    thermoPineFacadeTextAndImageMainText9:
      "Note that a thermo-pine facade can also improve the building's ecological performance, ensuring more efficient use of resources. Additionally, it can enhance indoor comfort by maintaining a stable temperature and protecting against noise and wind. Thermo-pine facade materials are also resistant to moisture and UV exposure, providing long-lasting and reliable protection for the building.",
    thermoPineFacadeMatherialFunction: "THERMO-PINE FACADE",
    thermoPineFacadeTextAndImageMainText1:
      "A thermo-pine facade has several advantages that make it an attractive and popular choice for exterior cladding of houses.",
    thermoPineFacadeTextAndImageMainText2:
      "Weather resistance: Thermo-pine wood is processed through thermal treatment, making it more resistant to weather conditions such as rain, sun, snow, and humidity. This helps maintain the appearance of the facade for a long time.",
    thermoPineFacadeTextAndImageMainText3:
      "Strength and durability: The wood is known for its strength and durability, making it a reliable material for the facade that will last for many years without needing major repairs.",
    thermoPineFacadeTextAndImageMainText4:
      "Aesthetic appearance: Thermo-pine has an attractive natural texture and color that add elegance and warmth to your house. It gives the facade a natural and cozy look.",
    thermoPineFacadeTextAndImageMainText5:
      "Eco-friendly material: It is a natural, eco-friendly material that is safe for the environment, creating a sustainable and healthy living space.",
    thermoPineFacadeTextAndImageMainText6:
      "Design possibilities: The wood is easy to process and flexible in shaping, providing ample possibilities for various design elements on the facade, such as panels, cladding, and decorative details.",
    thermoPineFacadeTextAndImageMainText7:
      "Thermal insulation properties: Thermo-pine has good thermal insulation properties, which helps increase the energy efficiency of the house and reduce heating costs.",
    thermoPineFacadeTextAndImageMainText8:
      "A thermo-pine facade offers several advantages, such as improving the building's thermal insulation, protecting against temperature fluctuations, and reducing energy costs for heating and cooling. It can also provide resistance to weathering, enhance the building's appearance, and extend the facade's lifespan.",
    thermoPineFacadeTextAndImageMainText9:
      "Note that a thermo-pine facade can also improve the building's ecological performance, ensuring more efficient use of resources. Additionally, it can enhance indoor comfort by maintaining a stable temperature and protecting against noise and wind. Thermo-pine facade materials are also resistant to moisture and UV exposure, providing long-lasting and reliable protection for the building.",
    thermoAshFacadeMatherialFunction: "THERMO-ASH FACADE",
    thermoAshFacadeTextAndImageMainText1:
      "A thermo-ash facade has several advantages that make it an attractive and popular choice for exterior cladding of houses.",
    thermoAshFacadeTextAndImageMainText2:
      "Weather resistance: Thermo-ash wood is processed through thermal treatment, making it more resistant to weather conditions such as rain, sun, snow, and humidity. This helps maintain the appearance of the facade for a long time.",
    thermoAshFacadeTextAndImageMainText3:
      "Strength and durability: The wood is known for its strength and durability, making it a reliable material for the facade that will last for many years without needing major repairs.",
    thermoAshFacadeTextAndImageMainText4:
      "Aesthetic appearance: Thermo-ash has an attractive natural texture and color that add elegance and warmth to your house. It gives the facade a natural and cozy look.",
    thermoAshFacadeTextAndImageMainText5:
      "Eco-friendly material: It is a natural, eco-friendly material that is safe for the environment, creating a sustainable and healthy living space.",
    thermoAshFacadeTextAndImageMainText6:
      "Design possibilities: The wood is easy to process and flexible in shaping, providing ample possibilities for various design elements on the facade, such as panels, cladding, and decorative details.",
    thermoAshFacadeTextAndImageMainText7:
      "Thermal insulation properties: Thermo-ash has good thermal insulation properties, which helps increase the energy efficiency of the house and reduce heating costs.",
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
    thermoAshTerraceMatherialFunction: "ТЕРАСА З ТЕРМОЯСЕНЯ",
    materialConAndPros: "ОСОБЛИВОСТІ ТА ПЕРЕВАГИ МАТЕРІАЛУ",
    thermoAshTerraceTextAndImageMainText1:
      "На сьогоднішній день тераса із якісного термоясена вважається найкращим вибором як для приватного користування, так і для комерційного оздоблення.",
    thermoAshTerraceTextAndImageMainText2:
      "Достатня міцність, благородна фактура, та довговічність роблять термоясен ідеальним варіантом для покриття будь-якої експлуатованої поверхні.",
    thermoAshTerraceTextAndImageMainText3:
      "Тераса з термоясену має кілька переваг:",
    thermoAshTerraceTextAndImageMainText4:
      "Довговічність: Покрив відмінно захищає поверхню від впливу негоди, ультрафіолетових променів, тертя та інших шкідливих факторів. Це дозволяє зберегти естетичний вигляд тераси на тривалий час.",
    thermoAshTerraceTextAndImageMainText5:
      "Мінімальний догляд: Термоясеневі тераси легко доглядати. Достатньо просто протирати їх від часу до часу, щоб зберегти вигляд як новий. Не потрібно фарбувати або лакувати їх.",
    thermoAshTerraceTextAndImageMainText6:
      "Естетичний вигляд: Термоясен має природний дерев'яний вигляд, що додає тепла та затишку до зовнішнього простору. Він доступний в різних кольорах і текстурах, що дозволяє вибрати оптимальний варіант для вашого інтер'єру.",
    thermoAshTerraceTextAndImageMainText7:
      "Відсутність деформацій: Тераси з термоясену мають високу стійкість до деформацій під впливом вологості та зміни температури, що дозволяє їм зберігати свою форму та структуру протягом довгого часу.",
    thermoAshTerraceTextAndImageMainText8:
      "Також слід відмітити стійкість до шкідників і грибків: Термоясен має природні властивості, які роблять його менш привабливим для шкідників та грибків порівняно з іншими видами деревини. Це дозволяє уникнути проблем з гниллю та пошкодженнями через шкідників.",
    thermoAshTerraceTextAndImageMainText9:
      "Тераси з термоясену мають низьке водопоглинання, тому вони не потребують підвищеної обробки країв або інших заходів для захисту від вологи та зносу. А також вони можуть бути укладені як на рівних, так і на нерівних поверхнях. Це дозволяє створити унікальний дизайн тераси, відповідний вашим потребам і умовам місцевості.",
    thermoPineTerraceMatherialFunction: "ТЕРАСА З ТЕРМОСОСНИ",
    thermoAshTerraceTextAndImageMainText1:
      "Термососна деревина чудово підходить для використання на терасі через свої переваги.",
    thermoAshTerraceTextAndImageMainText2: "Ось деякі з них:",
    thermoAshTerraceTextAndImageMainText3:
      "Міцність і довговічність: Термососна деревина відома своєю міцністю та стійкістю до зношування, що робить її ідеальним матеріалом для терас. Вона добре переносить зовнішні впливи, включаючи погодні умови та знос.",
    thermoAshTerraceTextAndImageMainText4:
      "Стійкість до гниття і шкідників: Термососна деревина відома своєю природною стійкістю до гниття, шкідників і плісняви, що дозволяє їй прослужити довгий час без спеціального обслуговування.",
    thermoAshTerraceTextAndImageMainText5:
      "Стійкість до вологи: Термососна деревина має високу стійкість до вологи, що робить її ідеальним вибором для терас, де матеріал буде піддаватися впливу дощу та вологи.",
    thermoAshTerraceTextAndImageMainText6:
      "Естетика: Термососна деревина має привабливий зовнішній вигляд з виразними волокнами та природними відтінками, які нададуть вашій терасі природної краси.",
    thermoAshTerraceTextAndImageMainText7:
      "Сприяння екологічності: Термососна деревина є екологічно чистим матеріалом, що додає еко-дружній аспект до вашого проекту тераси.",
    thermoAshTerraceTextAndImageMainText8:
      "Можливість обробки: Термососна деревина легко обробляється і піддається фарбуванню або оліюванню, що дозволяє вам створити індивідуальний дизайн для вашої тераси.",
    thermoAshTerraceTextAndImageReverseTitle:
      "ПРАВИЛЬНИЙ ДОГЛЯД - СИНОНІМ ДОВГОВІЧНОСТІ",
    thermoAshTerraceTextAndImageMainText9:
      "Термососна деревина славиться своєю високою стійкістю і довговічністю, що робить її популярним вибором для терас. Тривалість служби тераси з термососни залежить від кількох факторів, таких як якість самого дерева, якість установки та обслуговування.",
    thermoAshTerraceTextAndImageMainText10:
      "Зазвичай термососна тераса може прослужити від 15 до 25 років або навіть більше при належному догляді.",
    thermoAshTerraceTextAndImageMainText11:
      "Рекомендується регулярно обновлювати захисний шар на терасі шляхом оліювання або фарбування, регулярно чистити від бруду та оглядати терасу на рахунок пошкоджень. Це допоможе зберегти дерево в хорошому стані і збільшить його термін служби.",
    thermoAshTerraceTextAndImageMainText12:
      "Дотримуючись цих порад і надаючи дереву належний догляд, тераса з термососни може прослужити вам довгі роки, надаючи красу і комфорт вашому зовнішньому простору.",
    thermoPineFacadeMatherialFunction: "ФАСАДИ З ТЕРМОСОСНИ",
    thermoPineFacadeTextAndImageMainText1:
      "Фасад з термососни має кілька переваг, які роблять його привабливим і популярним вибором для зовнішнього облицювання будинків.",
    thermoPineFacadeTextAndImageMainText2:
      "Стійкість до погодних умов: Термососна деревина виготовляється шляхом термічної обробки, що робить її більш стійкою до погодних умов, таких як дощ, сонце, сніг та вологість. Це дозволяє зберігати вигляд фасаду протягом тривалого часу.",
    thermoPineFacadeTextAndImageMainText3:
      "Міцність та довговічність: Деревина відома своєю міцністю та довговічністю, що робить її надійним матеріалом для фасаду, який прослужить вам довгі роки без необхідності в серйозних ремонтах.",
    thermoPineFacadeTextAndImageMainText4:
      "Естетичний вигляд: Термососна має привабливу природну текстуру та колір, які додають вашому будинку вишуканість та теплоту. Вона надає фасаду природного та затишного вигляду.",
    thermoPineFacadeTextAndImageMainText5:
      "Екологічно чистий матеріал: Вона є природним матеріалом, екологічно чистим і дружнім до навколишнього середовища, що дозволяє створити екологічно безпечний та здоровий житловий простір.",
    thermoPineFacadeTextAndImageMainText6:
      "Можливості дизайну: Деревина легко обробляється та має гнучкість у формуванні, що відкриває широкі можливості для різноманітних дизайнерських елементів на фасаді, таких як панелі, облицювання та декоративні деталі.",
    thermoPineFacadeTextAndImageMainText7:
      "Теплоізоляційні властивості: Термососна має добрі теплоізоляційні властивості, що дозволяє підвищити енергоефективність будинку та зменшити витрати на опалення.",
    thermoPineFacadeTextAndImageMainText8:
      "Фасад з термососни має кілька переваг, таких як поліпшення теплоізоляції будівлі, захист від перепадів температур, а також зменшення енерговитрат на опалення та кондиціювання приміщень. Також він може забезпечити стійкість до атмосферних впливів, покращити зовнішній вигляд будівлі і подовжити термін служби фасаду.",
    thermoPineFacadeTextAndImageMainText9:
      "Зверніть увагу, що фасад з термососни також може покращити екологічні показники будівлі, забезпечуючи більш енергоефективне використання ресурсів. Крім того, він може сприяти підвищенню комфорту приміщень, забезпечуючи стабільну температуру всередині приміщення та захищаючи від шуму та вітру. Матеріали для фасаду з термососни також можуть бути стійкими до впливу вологи та ультрафіолету, що забезпечує тривалий та надійний захист будівлі.",
    thermoAshFacadeMatherialFunction: "ФАСАДИ З ТЕРМОЯСЕНЯ",
    thermoAshFacadeTextAndImageMainText1:
      "Фасад з термососни має кілька переваг, які роблять його привабливим і популярним вибором для зовнішнього облицювання будинків.",
    thermoAshFacadeTextAndImageMainText2:
      "Стійкість до погодних умов: Термососна деревина виготовляється шляхом термічної обробки, що робить її більш стійкою до погодних умов, таких як дощ, сонце, сніг та вологість. Це дозволяє зберігати вигляд фасаду протягом тривалого часу.",
    thermoAshFacadeTextAndImageMainText3:
      "Міцність та довговічність: Деревина відома своєю міцністю та довговічністю, що робить її надійним матеріалом для фасаду, який прослужить вам довгі роки без необхідності в серйозних ремонтах.",
    thermoAshFacadeTextAndImageMainText4:
      "Естетичний вигляд: Термососна має привабливу природну текстуру та колір, які додають вашому будинку вишуканість та теплоту. Вона надає фасаду природного та затишного вигляду.",
    thermoAshFacadeTextAndImageMainText5:
      "Екологічно чистий матеріал: Вона є природним матеріалом, екологічно чистим і дружнім до навколишнього середовища, що дозволяє створити екологічно безпечний та здоровий житловий простір.",
    thermoAshFacadeTextAndImageMainText6:
      "Можливості дизайну: Деревина легко обробляється та має гнучкість у формуванні, що відкриває широкі можливості для різноманітних дизайнерських елементів на фасаді, таких як панелі, облицювання та декоративні деталі.",
    thermoAshFacadeTextAndImageMainText7:
      "Теплоізоляційні властивості: Термососна має добрі теплоізоляційні властивості, що дозволяє підвищити енергоефективність будинку та зменшити витрати на опалення.",
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
