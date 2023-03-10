$(document).ready(function() {
  const sus = new Swiper(".sus", {
		direction: "horizontal",
		slidesPerView: 1,
		mousewheel: true,
		freeMode: true,

		breakpoints: {
      //300 이상에서 (min-width를 뜻함)
			1200: {
				autoplay: {
					Delay: 3000, //5초
					disableOnInteraction: false,
				},
				speed: 1000, //1초
				centeredSlides: true,
				slidesPerView: 1,
				spaceBetween: 0,
				freeMode: false,
      },
			
			768: {
				autoplay: {
					Delay: 3000, //5초
					disableOnInteraction: false,
				},
				speed: 1000, //1초
				centeredSlides: true,
				slidesPerView: 1,
				spaceBetween: 0,
				freeMode: false,
				mousewheel: false,
      },
    },
	});

  const des = new Swiper(".des", {
		direction: "horizontal",
		slidesPerView: 1,
		mousewheel: true,
		freeMode: true,

		breakpoints: {
      //300 이상에서 (min-width를 뜻함)
			1200: {
				autoplay: {
					Delay: 3000, //5초
					disableOnInteraction: false,
				},
				speed: 1000, //1초
				centeredSlides: true,
				slidesPerView: 1,
				spaceBetween: 0,
				freeMode: false,
      },
			
			768: {
				autoplay: {
					Delay: 3000, //5초
					disableOnInteraction: false,
				},
				speed: 1000, //1초
				centeredSlides: true,
				slidesPerView: 1,
				spaceBetween: 0,
				freeMode: false,
      },
    },
	});
});