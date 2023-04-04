const menu = () => {
  const menuBtn = document.querySelector("#menu-nav-btn");

  menuBtn.addEventListener("click", function () {
    console.log("clicked");
  });
};

menu();

if (document.querySelector("#our-services-slider")) {
  const ourServicesSlider = new Swiper("#our-services-slider", {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".our-services-next",
      prevEl: ".our-services-prev",
    },
  });
}

if (document.querySelector("#client-slider")) {
  const ourClientSlider = new Swiper("#client-slider", {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    navigation: {
      nextEl: ".our-clients-next",
      prevEl: ".our-clients-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
}

const current_year = () => {
  const footer_year = document.querySelector("#footer-year");
  const date = new Date();
  const currentYear = date.getFullYear();
  if (footer_year) {
    footer_year.textContent = currentYear;
  }
};

current_year();
