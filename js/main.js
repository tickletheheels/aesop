$(document).ready(function () {

	const mv = new Swiper(".mv", {
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

	const sus = new Swiper(".sus", {
		direction: "horizontal",
		slidesPerView: 1,
		mousewheel: true,
		freeMode: true,
	});


	const store = new Swiper(".store", {
		slidesPerView: 2,
		spaceBetween: 30,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },

		breakpoints: {
			768: {
				slidesPerView: 1,
				spaceBetween: 0,
      },
    },
	});

});