const mediaQuery = window.matchMedia('(max-width: 1230px)')
if (mediaQuery.matches) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 50,
    grabCursor: true,
  });
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 50,
  grabCursor: true,

});

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });