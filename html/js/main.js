setTimeout( function() {
    
	alert('go-js');
/*--- tabs index---*/    
    
    $('ul.popular-parts-tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.popular-parts-tabs').find('div.popular-parts-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
	
/*--- login open ---*/
	var openLogin = 0;
	
	$('.login').on('click', function(e){
        if (openLogin === 0) {
			$('.login-hiddin').fadeIn(300);
            openLogin = 1;
		} else {
			$('.login-hiddin').fadeOut(300);
            openLogin = 0;
		}
		e.stopPropagation();
	});

/*--- login close ---*/
	$(document).on('click', function(e) {
		if ($(e.target).closest('.login').length) {
            return;
        } 
		$('.login-hiddin').fadeOut(300);
        openLogin = 0;
		e.stopPropagation();
	});
	
	
/*--- Open drop ---*/
    
    var openDrop = 0;
    
	$('.drop').on('click', function(e){
        
        var $thisObj = $(this).find('ul');
        
        if(openDrop === 0) { 
            $thisObj.fadeIn(300);
            openDrop = 1;
        } else {
            $thisObj.fadeOut(300);
        }		
        e.stopPropagation();
	});
    
/*--- drop close ---*/
    $(document).on('click', function(e) {
        if ($(e.target).closest('.drop').length) {
            return;
        } 
        $('.drop').find('ul').fadeOut(300);
        openDrop = 0;
        e.stopPropagation();
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
	
/*--- galerea ---*/
    
    var b = $('.big');
    var s = $(this);

    $('.small').on('click', function(e){
        e.preventDefault();
        var bi = b.attr('src');
        var si = $(this).attr('src');
        b.attr('src', si);
        $(this).attr('src', bi);
    });



    $('.product-foto__link').on('click', function(e){
        e.preventDefault();
    });

    
}, 3000);
