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
    
/*--- MAP ---*/
    if ($('#map-nsk').length){
        
        var nskMap = new ymaps.Map('map-nsk', {
            center: [55.04040477993472,82.94372249999998],
            zoom: 17
        }),
            myPlacemark = new ymaps.Placemark(nskMap.getCenter(), {

                iconCaption: 'Державина, 92'
            }, {
                iconColor: '#D81218',
                preset: 'islands#greenDotIconWithCaption'
            });

        nskMap.geoObjects.add(myPlacemark);   
    }
    
    if ($('#map-brn').length){
        
        var brnMap = new ymaps.Map('map-brn', {
            center: [53.37241828561831,83.68607249999997],
            zoom: 17
        }),
            myPlacemark2 = new ymaps.Placemark(brnMap.getCenter(), {

                iconCaption: 'ул.Юрина 204г, 2 этаж, оф.1'
            }, {
                iconColor: '#D81218',
                preset: 'islands#greenDotIconWithCaption'
            });

        brnMap.geoObjects.add(myPlacemark2);
    }
	
/*--- galerea ---*/
    
    var b = $('.big');
    var s = $(this);

    $('.small').on('click', function(e){
        e.preventDefault();
        $(this).parent().attr('rel', '');
        var bi = b.attr('src');
        var si = $(this).attr('src');
        b.attr('src', si);
        b.parent().attr('href', si);
        $(this).attr('src', bi);
    });
    b.on('click', function(){
        $('.small').parent().each(function(){
            $(this).attr('rel', 'lightbox[group]');
        });
    });
    
    if ($('.big').length){
        $('.big').imagezoomsl({
            magnifiersize: [700,500],
        });
    }


/*--- popup zajavka ---*/
    
    if ($('.js-zajavka-btn').length){ 
        $('.js-zajavka-btn').modaal({
            overlay_opacity: 0.3,
            overlay_close: false,
            custom_class: 'zajavka-popup-cont',
            hide_close: true
        });
    }
    
/* chechked */ 
    
    
/*--- регистрация выбор города ---*/
	if ($('.register-select').length){
		$('.register-select').styler();
	}
	
/*urlic block*/	
	
	$('.register-urlic').on('click', function(){
		if( $(this).hasClass('open') ) {
			$(this).removeClass('open').next().css('display','none');
		}
		else {
			$(this).addClass('open').next().css('display','block');
		}
	})
	
/* Корзина изображение попап*/ 
	if ($('.cart-list__link').length){
		$('.cart-list__link').modaal({
			overlay_opacity: 0.3,
			overlay_close: true,
			custom_class: 'zajavka-popup-img',
			hide_close: true,
			type: 'image'
		});
	}

/* условие заказа */
	if ($('.condition-popup').length){
		
		$('.cart-btn_sbm').on('click', function(e){
			e.preventDefault();
			
		});
		
		$('.condition-popup').modaal({
			overlay_opacity: 0.3,
			overlay_close: false,
			custom_class: 'zajavka-popup-condration',
			hide_close: true
		});
	}
	
    
}, 3000);
