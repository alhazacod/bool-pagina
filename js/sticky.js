$(document).ready(function(){
  var ventana = parseFloat($(window).height());
  if (parseFloat($(window).width())<800) {
    $('.cuadrado').css('height', ventana + 'px');
  }else {
    $('.cuadrado').css({"height": ventana*0.7 +"px"});
  }

  var altura = parseFloat($('.cuadrado').css('height'))-20;
  $(window).on('scroll', function(){
    if ($(window).scrollTop()>altura){
      $('header').addClass('menu-fixed');
    }else {
      $('header').removeClass('menu-fixed');
    }
  });
});
