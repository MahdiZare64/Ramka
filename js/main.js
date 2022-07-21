var Ramka = Ramka || {};
Ramka.default = Ramka.default || {};
Ramka.default.init = function () {
  try {
    let hrefs = document.querySelectorAll('[href="#"]');
    hrefs.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
      });
    });

    let toTop = document.querySelectorAll(".scroll-to-top");
    toTop.forEach(function (item) {
      item.addEventListener("click", function () {
        window.scrollTo(0, 0);
      });
    });
  } catch (e) {
    console.log(`Error on Ramka.default.init - ${e}`);
  }
};

Ramka.fixedHeader = Ramka.fixedHeader || {};
Ramka.fixedHeader.init = function () {
  try {
    navEl = document.querySelector("header");

    window.addEventListener("scroll", function (e) {
      var scrltop =
        window.pageYOffset ||
        document.body.scrollTop ||
        document.documentElement.scrollTop;

      if (scrltop > 500) {
        navEl.classList.add("top-out");
      } else {
        navEl.classList.remove("top-out");
      }

      if (scrltop > 800) {
        navEl.classList.add("fixed");
        setTimeout(() => {
          navEl.classList.add("anim");
        }, 100);
      } else {
        navEl.classList.remove("anim");
        setTimeout(() => {
          navEl.classList.remove("fixed");
        }, 100);
      }
    });
  } catch (e) {
    console.log(`Error on Ramka.fixedHeader.cart - ${e}`);
  }
};

Ramka.slider = Ramka.slider || {};
Ramka.slider.init = function () {
  try {
    $(".demo__intro__carousel").owlCarousel({
      loop: true,
      // stagePadding: 70,
      smartSpeed: 700,
      autoplay: true,
      autoplayTimeout: 3000,
      rtl: true,
      nav: true,
      autoplayHoverPause: true,
      dots: false,
      navText: [
        "<i class='fal fa-angle-right'></i>",
        "<i class='fal fa-angle-left'></i>",
      ],
      items: 1
    });
  } catch (e) {
    console.log(`Error on Ramka.slider.init - ${e}`);
  }
};

Ramka.ripple = Ramka.ripple || {};
Ramka.ripple.init = function () {
  try {
    window.rippler = $.ripple("[data-ripple], .area", {
      debug: true,
      multi: true,
    });

    window.rippler = $.ripple(".owl-carousel-button .owl-nav button, .area", {
      debug: true,
      multi: true,
    });
  } catch (e) {
    console.log(`Error on Ramka.ripple.init - ${e}`);
  }
};

window.addEventListener("DOMContentLoaded", function () {
  Ramka.default.init();
  Ramka.fixedHeader.init();
  Ramka.slider.init();
  Ramka.ripple.init();
});
