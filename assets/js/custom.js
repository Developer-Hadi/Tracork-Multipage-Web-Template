$(document).ready(function(){
    // Banner slider active
    $('.banner-area').owlCarousel({
        items:1,
        loop: true,
        autoplay: true,
        dots:false,
        nav:true
    });

    // Testimonial slider active
    $('.testimonial').owlCarousel({
        items:2,
        loop: true,
        // autoplay: true,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
  

});
