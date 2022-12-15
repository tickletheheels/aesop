$(document).ready(function () {
  
  $('.sub_tab_list li:first-child').addClass('active');

  $('.sub_tab_list li').click(function () {
    $(this).addClass('active').siblings().removeClass('active'); //.이 들어가지 않음 
  });
  
  
  
  
  const recommend_list = new Swiper('.recommend_list', {

    // 스크롤바 여부
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,

    },

    spaceBetween: 0,  // 슬라이드 사이 여백 
    slidesPerView: '4',  // 한 슬라이드에 보여줄 갯수
    loop: true,  // 슬라이드 반복 여부
    speed: 1000,  // 슬라이드 동작 속도

    breakpoints: {
      1200: {  // 가로해상도가 640px 이상일 경우
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {  // 가로해상도가 768px 이상일 경우
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },

  });

  $('.more').hide();

  $('.desc > li').click(function () {
    $(this).find('.more').stop().slideToggle();
    $(this).find('img').toggleClass('active');
  });

  


});