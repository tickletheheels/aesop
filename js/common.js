$(document).ready(function () {

	$('.gnb_wrap').hide();

	$('.ham').click(function () {
		$('.gnb_wrap').fadeIn();
	});

	$('.ham_close').click(function () {
		$('.gnb_wrap').fadeOut();
	});


	$('.depth2 > div').hide();

	$('.gnb > li').click(function () {
		let indexNum = $(this).index();
		$('.depth2 > div').eq(indexNum).fadeIn();

	});

	$('.btn_close').click(function () {
    $('.depth2 > div').fadeOut();
		
  });

});