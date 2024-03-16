module.exports = function () {
  $('.search__input').on('input', function () {
    if ($(this).val()) {
      $(this).removeClass('empty');
    } else {
      $(this).addClass('empty');
    }
  });
};
