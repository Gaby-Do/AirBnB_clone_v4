$(document).ready(function () {
  let all_checked = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      all_checked[$(this).data('id')] = $(this).data('name');
    } else {
      delete all_checked[$(this).data('id')];
    }
    let lista = Object.values(all_checked);
    if (lista.length > 0) {
      $('div.amenities > h4').text(Object.values(all_checked).join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
});
