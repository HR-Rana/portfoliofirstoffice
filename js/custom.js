(function($){
	'use strict';
	// your code here!//
 $(".bars").on('click',function(){
    $(".small-menu").animate({
      'left':'0',
    })
 })
 $(".closeNav").on('click',function(){
    $(".small-menu").animate({
      'left':'-102%',
    })
 })


// owl carousel////
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
//default settings:
autoplay:true
autoplayTimeout:5000
autoplayHoverPause:false



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// 


owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
})(jQuery);


