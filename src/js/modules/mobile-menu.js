module.exports = function () {
  $('.header__burger').on('click', function () {
    $('#mobile-menu').addClass('active');
  });

  $('.mobile-menu__close').on('click', function () {
    $('#mobile-menu').removeClass('active');
  });
};
