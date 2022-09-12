"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var swiper = new Swiper(".evaluation-swiper", {
  spaceBetween: 30,
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev"
  },
  pagination: {
    el: ".pagination",
    bulletActiveClass: "pagination-bullet-active",
    bulletClass: "pagination-bullet",
    clickable: true
  },
  loop: true
});
//# sourceMappingURL=all.js.map
