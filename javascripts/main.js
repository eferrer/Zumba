 $(document).ready(function(){
           
           
          
    
            
            //***************************************
            
            // For media30 do not display About Me or Gallery in the menu
            
            //***************************************
            
            var delay = (function(){
            var timer = 0;
            return function(callback, ms){
                    clearTimeout (timer);
                    timer = setTimeout(callback, ms);
                };
            })();

            $(function() {

                var pause = 100; // will only process code within delay(function() { ... }) every 100ms.

                $(window).resize(function() {

                    delay(function() {

                        var width = $(window).width();

                        if( width >= 801 && width <= 959 ) {
                            // code for tablet view
                        } else if( width >= 480 && width <= 800 ) {
                            // code for mobile landscape
                            
                            $("h2").insertAfter("#content p:last-child");
                            $("h2").insertAfter("#about p:last-child");
                            $("h2").insertAfter("#studentInfo p:last-child");
                            $("h2").insertAfter(".needs li:last-child");
                            
                        } else if( width <= 479 ) {
                            // code for mobile portrait
                            
                            $("h2").insertAfter("#content p:last-child");
                            $("h2").insertAfter("#about p:last-child");
                            $("h2").insertAfter("#studentInfo p:last-child");
                            $("h2").insertAfter(".needs li:last-child");
                        }

                    }, pause );

                });

                $(window).resize();

            });
            
            
            
            //***************************************
            
            // SLIDESHOW
            //Source: http://http://responsive-slides.viljamis.com/ v1.53 by @viljamis
            
            //***************************************
   
             $(function() {
                $(".rslides").responsiveSlides();
             });
             
              $("#slider1").responsiveSlides({
                auto: false,
                pager: true,
                nav: true,
                speed: 500,
                maxwidth: 800,
                namespace: "centered-btns"
              });

      //***************************************        
             
       //$("#footerLinks").hide();
           
           $("a").click(function(){
		$(this).blur();
	});
           
            //When mouse rolls over
            $("li").mouseover(function(){
                      $(this).stop().animate({height:'150px'},{queue:false, duration:600, easing: 'easeOutBounce'})
            });

            //When mouse is removed
            $("li").mouseout(function(){
            $(this).stop().animate({height:'50px'},{queue:false, duration:600, easing: 'easeOutBounce'})
            });
        

}); // eof ready