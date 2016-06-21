setTimeout( function() {
    
	alert(111);
/*--- tabs index---*/    
    
    $('ul.popular-parts-tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.popular-parts-tabs').find('div.popular-parts-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
	
/*--- drop head ---*/
	var flag = 0;
	
	$('.login').on('click', function(e){
		if (flag === 0) {
			$('.login-hiddin').fadeIn(300);
			flag = 1;
		} else {
			$('.login-hiddin').fadeOut(300);
			flag = 0;
		}
		e.stopPropagation();
	});
	
	$(document).on('click', function(e) {
		if ($(e.target).closest('.login').length) return;
		$('.login-hiddin').fadeOut(300);
		flag = 0;
		e.stopPropagation();
	});
	
	

	$('.drop').on('click', function(e){
		var $thisObj = $(this);
		$thisObj.find('ul').fadeIn(300);

	});
	
	$('.drop-hidden__item').on('click', function(e){
		
		if($('.nsk').is(e.target)){
			$('.tel__number_one').text('+7 (383) 310-10-70');
			$('.tel__number_two').text('+7 (983) 000-20-70');
		}
		if($('.brn').is(e.target)){
			$('.tel__number_one').text('+7 (000) 000-00-70');
			$('.tel__number_two').text('+7 (000) 000-00-70');
		}
		$('this').parent().hide();
			
	});
	


}, 3000);
