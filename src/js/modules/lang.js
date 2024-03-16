module.exports = function () {
  $('.header__lang-select').on('click', function () {
    $(this).toggleClass('active');
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.header__lang-select').length) {
      $('.header__lang-select').removeClass('active');
    }
  });

  $('.header__lang-item').on('click', function () {
    $('.header__lang-item').removeClass('active');
    $(this).addClass('active');
  });
};
