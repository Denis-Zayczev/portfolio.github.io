jQuery(function($){
    $('.phone').mask('+7 (999) 99-99-999');

    $(function () {
  //script for popups
  $("[name^='popup']").click(function () {
    $('div.'+$(this).attr("rel")).fadeIn(500);
    $("body").append("<div id='overlay'></div>");
    $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
    return false;       
  }); 
  $('a.close').click(function () {
    $('.popup').fadeOut(300);
    $('#overlay').remove('#overlay');
    return false;
  });
});



});


