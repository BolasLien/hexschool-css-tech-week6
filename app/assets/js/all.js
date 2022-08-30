$(function() {
  console.log('Hello Bootstrap5');
});

  var swiper = new Swiper(".evaluation-swiper", {
    spaceBetween: 30,
    // effect: "fade",
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    pagination: {
      el: ".pagination",
      bulletActiveClass: "pagination-bullet-active",
      bulletClass: "pagination-bullet",
      clickable: true,
    },
    loop: true
  });