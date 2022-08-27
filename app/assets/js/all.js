$(function() {
  console.log('Hello Bootstrap5');
});

  var swiper = new Swiper(".evaluation-swiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".evaluation-swiper-button-next",
      prevEl: ".evaluation-swiper-button-prev",
    },
    pagination: {
      el: ".evaluation-swiper-pagination",
      clickable: true,
    },
    loop: true
  });