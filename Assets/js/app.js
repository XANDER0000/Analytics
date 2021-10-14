document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.intro');
    const header = document.querySelector('.header')
    const scrollItems = document.querySelectorAll('.scroll-item');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;

        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
            if (windowCenter >= scrollOffset) {
                el.classList.add('animation');
            } else {
                el.classList.remove('animation');
            }
        });
    };

    const headerFixed = () => {
        let scrollTop = window.scrollY;
        let heroCenter = hero.offsetHeight / 2;

        if (scrollTop >= heroCenter) {
            header.classList.add('fixed');
            hero.style.margin.Top = `${header.offsetHeight}px`;
        } else {
            header.classList.remove('fixed');
            hero.style.marginTop = `0px`;
        }
    };

    headerFixed();
    window.addEventListener('scroll', () => {
        headerFixed();
        scrollAnimation();
    });
});

const navToggle = $("#navToggle");
const nav = $("#nav");

navToggle.on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show");

});

$(function() {
    /* Slider slick
    ========================================*/
    // slider photos and intro
    $(window).on('load resize', function() {
        if ($(window).width() < 1010) {
          $("[data-slider]").slick({
            centerMode: true,
            centerPadding: '80px',
            slidesToShow: 2,
            arrows: false,
            responsive: [
                {
                  breakpoint: 1020,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 810,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 690,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 1
                  }
                },
                  {
                  breakpoint: 540,
                  settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '70px',
                      slidesToShow: 1
                  }
                },
              {
                breakpoint: 470,
                  settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '50px',
                      slidesToShow: 1
                  }
                },

                {
                  breakpoint: 420,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '38px',
                        slidesToShow: 1
                    }
                  },

                  {
                  breakpoint: 370,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '28px',
                        slidesToShow: 1
                    }
                  },

                   {
                  breakpoint: 340,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '27px',
                        slidesToShow: 1
                    }
                  },
              ]
          });
        } else {
          $("#items.slick-initialized").slick("unslick");
        }
      });
});


/* Smooth Scroll =========================*/

$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

  let elementId = $(this).data('scroll');
  let elementOffset = $(elementId).offset().top;

  nav.removeClass("show");

  $("html, body").animate ({
      scrollTop: elementOffset - 110
  }, 600);
});