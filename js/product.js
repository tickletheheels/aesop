$(document).ready(function () {

  $('.skin_list li:first-child').addClass('active');

  $('.skin_list li').click(function () {
    $(this).addClass('active').siblings().removeClass('active'); //.이 들어가지 않음 
  });


  $('.modal > div').hide();

  $('.skin_list li').click(function () {
    let indexNum = $(this).index();
    $('.modal > div').eq(indexNum).fadeIn();
    $('body').css({ 'overflow': 'hidden' })
  });


  $('.btn_close').click(function () {
    $('.modal > div').fadeOut();
    $('body').css({ 'overflow': 'auto' })
  });


  $('.sub_tab_list li:first-child').addClass('active');

  

  $('.sub_tab_list li').click(function () {
    $(this).addClass('active').siblings().removeClass('active'); //.이 들어가지 않음 
  });


  $('.product_box div:first-child').addClass('active');

  $('.sub_tab_list li:nth-child(1)').click(function(){
    $('.product_box div:nth-child(1)').addClass('active').siblings().removeClass('active');
    $('#product').css({'height':'800px'});
  });

  $('.sub_tab_list li:nth-child(2)').click(function(){
    $('.product_box div:nth-child(2)').addClass('active').siblings().removeClass('active');
  });

  $('.sub_tab_list li:nth-child(3)').click(function(){
    $('.product_box div:nth-child(3)').addClass('active').siblings().removeClass('active');
    $('#product').css({'height':'1200px'});
  });

  $('.sub_tab_list li:nth-child(4)').click(function(){
    $('.product_box div:nth-child(4)').addClass('active').siblings().removeClass('active');
    $('#product').css({'height':'800px'});
  });

  $('.sub_tab_list li:nth-child(5)').click(function(){
    $('.product_box div:nth-child(5)').addClass('active').siblings().removeClass('active');
  });

  $('.sub_tab_list li:nth-child(6)').click(function(){
    $('.product_box div:nth-child(6)').addClass('active').siblings().removeClass('active');
  });

  $('.sub_tab_list li:nth-child(7)').click(function(){
    $('.product_box div:nth-child(7)').addClass('active').siblings().removeClass('active');
  });

  $('.sub_tab_list li:nth-child(8)').click(function(){
    $('.product_box div:nth-child(8)').addClass('active').siblings().removeClass('active');
  });


});