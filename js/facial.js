$(document).ready(function () {

  $('.more').hide();

  $('.component > li').click(function () {
    $(this).find('.more').stop().slideToggle();
    $(this).find('img').toggleClass('active');
  });

  

});