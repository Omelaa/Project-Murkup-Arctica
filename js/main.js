$(function() {
   $('.header__burger, .header__menu').click(function (){
     $('.header__burger, .header__menu').toggleClass('active');
     $('body').toggleClass('lock');
   })

     $(".header__menu a, .header__logo, .footer__items a, .footer__logo").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});


  if ($(window).scrollTop() > 1){
    $('.header ').addClass("sticky");
    }

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.header ').addClass("sticky");
    }
    else{
    $('.header').removeClass("sticky");
    }
  });

});
