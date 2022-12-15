$(document).ready(function() {

  $('.search p:first-child').addClass('active');

  $('.search p').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });

  $('.pagenumber li:first-child').addClass('active');

  $('.pagenumber li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });

});