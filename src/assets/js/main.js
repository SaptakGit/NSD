// JavaScript Document
var $ = jQuery.noConflict();


/* Open the sidenav */
function openNav() {
          document.getElementById("mySidenav").style.width = "250px";
        }

        function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
        }
			
 /*************************** Owl Carousel ****************************/


   $('#cr-dtl-id').owlCarousel({
            loop:true,
            nav:false,  
            dots:false,
            margin:10,
            responsive:{
                0:{
                    items:3,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:false
                }
            }
        })	
			            

 			
$('#video-vd').owlCarousel({
            loop:true,
            nav:false,  
            dots:false,
            margin:10,
            responsive:{
                0:{
                    items:2,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:false
                }
            }
        })
$('#photo-vd').owlCarousel({
            loop:true,
            nav:false,  
            dots:false,
            margin:10,
            responsive:{
                0:{
                    items:4,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:true,
                    loop:false
                }
            }
        })
$('#cast-crew').owlCarousel({
            loop:true,
            nav:false,  
            dots:false,
            margin:10,
            responsive:{
                0:{
                    items:4,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:true,
                    loop:false
                }
            }
        })
$('.rating-list-cl-1').owlCarousel({  
        loop:true,
        nav:false,  
        dots:false,
        margin:10,
        responsiveClass:true,
        responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
$('.rating-list-cl-2').owlCarousel({  
        loop:true,
        nav:false,  
        dots:false,
        margin:10,
        responsiveClass:true,
        responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
$('.rating-list-cl-3').owlCarousel({  
        loop:true,
        nav:false,  
        dots:false,
        margin:10,
        responsiveClass:true,
        responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
$('.rating-list-cl-4').owlCarousel({  
        loop:true,
        nav:false,  
        dots:false,
        margin:10,
        responsiveClass:true,
        responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
$('.rating-list-cl-5').owlCarousel({  
        loop:true,
        nav:false,  
        dots:false,
        margin:10,
        responsiveClass:true,
        responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
 		
/*################### End OWL CAROUSEL ##########################*/

$(window).load(function(){
  "use strict";
	
	$('.my-gallery').isotope({
	  itemSelector: '.masonry-item',
	  layoutMode: 'masonry'
	});
	
	$('.auto-size').isotope({
	  itemSelector: '.masonry-item',
	  layoutMode: 'masonry'
	});
	
	$("a[rel^='prettyPhoto']").prettyPhoto({social_tools:false});
	
 });
$(window).load(function(){
  "use strict";
	
	$('.my-gallery2').isotope({
	  itemSelector: '.masonry-item',
	  layoutMode: 'masonry'
	});
	
	$('.auto-size').isotope({
	  itemSelector: '.masonry-item',
	  layoutMode: 'masonry'
	});
	
	$("a[rel^='prettyPhoto']").prettyPhoto({social_tools:false});
	
 });