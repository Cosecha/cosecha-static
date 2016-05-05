$(document).ready(function(){
	var sideToggle = false;
	var sideNav = $('.side-nav');
	var cosechaTech = $('#cosecha-tech');

	$('.fixed-title > i').on('click', function(){
		sideToggle = !sideToggle;
		if(sideToggle){
			console.log('Toggle On');
			//sideNav.addClass('active');
			cosechaTech.animate({
				left: '250px'
			});
		}else {
			console.log('Toggle Off');
			//sideNav.removeClass('active');
			cosechaTech.animate({
				left: '0px'
			});
		}
	});
});
