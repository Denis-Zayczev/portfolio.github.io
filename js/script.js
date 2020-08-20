$(document).ready(function(){
  

	new Swiper('.slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25
    }
  },
  loop: true,
  wrapperClass: 'slider__list',
  slideClass: 'slider__item',
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    bulletClass: 'paginator__item',
    bulletActiveClass: 'paginator__item--active',
    clickable: true
  },
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },
});



});




