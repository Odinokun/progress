module.exports = function () {
  const topSlider = new Swiper('#top-slider', {
    loop: true,
    grabCursor: true,
    effect: 'fade',
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
  });
};
