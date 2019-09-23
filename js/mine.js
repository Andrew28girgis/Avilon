// navbar
$(window).scroll(function () { 
    if($(this).scrollTop() > 10 ) {
        $('nav').addClass('sticky');
    } else {
     $('nav').removeClass('sticky');
    }
 });

   // Initiate the wowjs animation library
   new WOW().init();
   //faq
   $('.collapsed i ').on('click' , function() 
   {
       
       $(this).toggleClass('fa fa-minus-circle');
       $(this).toggleClass('fas fa-plus-circle');
   })
 $('#faq .faq-list a').on('click' , function()
 {
     $(this).toggleClass('faq-color');    
 }) 
 // Gallery - uses the magnific popup jQuery plugin
 $('.gallery-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });