let $h4 = document.querySelector('*')



if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)
  {
    $h4.style.letterSpacing = "-1px";
    console.log('drule')
  }

$('a[href^="#"]').click(function(){
	var the_id = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(the_id).offset().top-100
	}, 'slow');
	return false;
});
