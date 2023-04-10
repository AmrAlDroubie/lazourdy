function menu() {
  const menuBtn = $("#menu-nav-btn");
  const closeBtn = $("#close-menu");
  const menu = $(".menu-nav");
  let menuState = false;
  menuBtn.click(function () {
    menuState = !menuState;
    menu.fadeToggle(300);
    $(this).toggleClass("menu-active");
    menuBtn.toggleClass("is-active");
    if (window.innerWidth <= 766) {
      if (menuState) $("body").css("overflow", "hidden");
      else $("body").css("overflow", "auto");
    }
  });

  $("#nav-dropdown-btn").click(function () {
    $("#nav-dropdown-menu").slideToggle(300);
    $(".fa-angle-down").toggleClass("active");
  });
}

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

if (document.querySelector(".project-slider")) {
  // Slider
  const projectSliderBoxes = document.querySelectorAll(".project-slider");
  projectSliderBoxes.forEach((projectSlider) => {
    new Swiper("#" + projectSlider.id, {
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: "#project-slider-next" + projectSlider.dataset.projectnum,
        prevEl: "#project-slider-prev" + projectSlider.dataset.projectnum,
      },
    });
  });
  if (window.innerWidth >= 1000) {
    // Image Popup
    const allProjectsImages = document.querySelectorAll(
      ".project-slider .swiper-slide img"
    );
    allProjectsImages.forEach((image) => {
      image.addEventListener("click", function () {
        let popupHtml = `
      <div class="modal modal-xl fade" tabindex="-1" id="project-image-popup">
          <div class="modal-dialog">
              <div class="modal-content">
                  <i class="fas fa-xmark close-pop-projects position-absolute text-white back-primary cursor-pointer fa-2x end-0"></i>
                  <img src=${this.src} alt="project">
              </div>
          </div>
      </div>
      `;
        document.querySelector(".project-image-pop").innerHTML = popupHtml;
        const projectImagePopup = new bootstrap.Modal(
          document.getElementById("project-image-popup")
        );
        projectImagePopup.show();
        document
          .querySelector(".close-pop-projects")
          .addEventListener("click", () => projectImagePopup.hide());
      });
    });
  }

  // project images lazy load

  const targets = document.querySelectorAll(".project-box-slider img");

  const lazyLoad = (target) => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute("data-src");
          img.setAttribute("src", src);
          img.classList.add("fade");

          observer.disconnect();
        }
      });
    });

    io.observe(target);
  };

  targets.forEach(lazyLoad);
}

// load video

if (document.querySelector(".landing-header video")) {
  const headerVideo = document.querySelector(".landing-header video");
  headerVideo.onloadeddata = function () {
    headerVideo.classList.remove("d-none");
    document.querySelector(".landing-header").style.backgroundImage = "none";
  };
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
