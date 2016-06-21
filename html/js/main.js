setTimeout( function() {
    
/*--- tabs ---*/    
    
    $('ul.popular-parts-tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.popular-parts-tabs').find('div.popular-parts-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

}, 1000);
