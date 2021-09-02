const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links');
});

$(document).ready(function () {
  $('.carousel-2').owlCarousel({
    margin: 10,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      900: {
        items: 3,
        nav: false,
      },
    },
  });
  // $(window).scroll(function () {
  //   if (this.scrollY > 20) {
  //     $('.header').addClass('sticky');
  //   } else {
  //     $('.header').removeClass('sticky');
  //   }
  // });
});
