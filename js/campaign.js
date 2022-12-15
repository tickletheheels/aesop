$(document).ready(function() {

  $('.read li:first-child').addClass('active');

  $('.read li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });

  $('.ing li:first-child').addClass('active');

  $('.ing li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });


  $('.pagenumber li:first-child').addClass('active');

  $('.pagenumber li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });

});