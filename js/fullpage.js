$(document).ready(function () {
	$('#fullpage').fullpage({
		//options here

    scrollOverflow : true,
		navigation: true,
		keyboardScrolling: true,
		responsiveWidth: 768,
		
    normalScrollElements : '.swiper', //swiper 부분에만 스크롤 자동

		onLeave: function(){
			$('.section [data-aos]').each(function(){
				$(this).removeClass("aos-animate")
			});
		},
		onSlideLeave: function(){
			$('.slide [data-aos]').each(function(){
				$(this).removeClass("aos-animate")
			});
		},
		afterSlideLoad: function(){
			$('.slide.active [data-aos]').each(function(){
				$(this).addClass("aos-animate")
			});
		},
		afterLoad: function(){
			$('.section.active [data-aos]').each(function(){
				$(this).addClass("aos-animate")
			});
		}

	});

});