module.exports = function () {
  $(function () {
    $('.book-content__list a[href*=\\#]').on('click', function (e) {
      // e.preventDefault();
      let anchor = $(this);
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr('href')).offset().top - 24 + 'px',
          },
          1000
        );
    });
    return false;
  });

  $('.book-content__list-link').on('click', function () {
    $('.book-content__list-link').removeClass('active');
    $(this).addClass('active');
  });
};
