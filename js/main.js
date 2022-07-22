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

Ramka.sidebar = Ramka.sidebar || {};
Ramka.sidebar.init = function () {
  try {
    document
      .querySelector(".menu-button")
      .addEventListener("click", function () {
        const nav = document.querySelector("nav");

        if (nav.classList.contains("active-nav")) {
          nav.classList.remove("active-nav");
        } else {
          nav.classList.add("active-nav");
        }
      });

    document.querySelector(".nav-icon").addEventListener("click", function () {
      if (this.classList.contains("open")) {
        this.classList.remove("open");
      } else {
        this.classList.add("open");
      }
    });
  } catch (e) {
    console.log(`Error on Ramka.sidebar.cart - ${e}`);
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
      autoplayTimeout: 4000,
      rtl: true,
      nav: true,
      autoplayHoverPause: true,
      dots: false,
      navText: [
        "<i class='fal fa-angle-right'></i>",
        "<i class='fal fa-angle-left'></i>",
      ],
      items: 1,
    });

    $(".demo__news__carousel").owlCarousel({
      loop: true,
      margin: 20,
      // stagePadding: 70,
      smartSpeed: 800,
      autoplay: true,
      autoplayTimeout: 3000,
      rtl: true,
      nav: true,
      dots: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1201: {
          items: 4,
        },
      },
    });

    $(".demo__customer__carousel").owlCarousel({
      loop: true,
      margin: 20,
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 5000,
      rtl: true,
      nav: false,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
        },
        575: {
          items: 4,
        },
        991: {
          items: 5,
        },
        1200: {
          items: 6,
        },
      },
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

Ramka.customInput = Ramka.customInput || {};
Ramka.customInput.init = function () {
  try {
    function setFocus(on) {
      var element = document.activeElement;
      if (on) {
        setTimeout(function () {
          element.parentNode.classList.add("focus");
        });
      } else {
        let box = document.querySelector(".input-box");
        box.classList.remove("focus");
        $("input").each(function () {
          var $input = $(this);
          var $parent = $input.closest(".input-box");
          if ($input.val()) $parent.addClass("focus");
          else $parent.removeClass("focus");
        });
      }
    }

    const inputs = document.querySelectorAll(".input-box .custom-input");

    if (inputs.length) {
      inputs.forEach(function (item) {
        item.addEventListener("focus", function () {
          setFocus(true);
        });

        item.addEventListener("blur", function () {
          setFocus(false);
        });
      });
    }
  } catch (e) {
    console.log(`Error on Ramka.customInput.init - ${e}`);
  }
};

window.addEventListener("DOMContentLoaded", function () {
  Ramka.default.init();
  Ramka.fixedHeader.init();
  Ramka.sidebar.init();
  Ramka.slider.init();
  Ramka.ripple.init();
  Ramka.customInput.init();
});
