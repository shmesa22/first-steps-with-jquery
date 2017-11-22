$(document).ready(function() {
  $('#circle').mouseenter(function() {
    var elemClass = $(this).attr('class');
    if(elemClass === 'green') {
      greenToYellow(this);
    } else {
      yellowToGreen(this);
    }
  });
});

function greenToYellow(elem) {
  $(elem).removeClass('green');
  $(elem).addClass('yellow');
  // $('.square').show();
  $('.square').removeClass('hide');
  $('.square').addClass('show');
  $('.square').css('background-color', 'blue')
}

function yellowToGreen(elem) {
  $(elem).removeClass('yellow');
  $(elem).addClass('green');
  // $('.square').hide();
  $('.square').removeClass('show');
  $('.square').addClass('hide');
}
