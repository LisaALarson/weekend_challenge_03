$(document).ready(function (){

    $.ajax({
        //forward slash brings you to the server level
        url:"/data" ,
        success: function(data){
            console.log(data);
            $.each(data, function(i){
                $('.carousel').append('<div class="slide" data-id="'+i+'"></div>');//Add a slide to the carousel
                $('.slide').last().append('<h2>'+this.name+'</h2>');//Add h2 name to the newly created slide
                $('.slide').last().append('<h4>About ' + this.name + '<h4>');
                $('.slide').last().append('<div class="description">'+this.description+'</div>');//Add decription to the newly created slide
                $('.slide').last().append('<h4>Thanks ' + this.name + '<h4>');
                $('.slide').last().append('<div class="shout-out">'+this.shoutOut+'</div>');//Add shoutout to the newly created slide
                $('.slide').first().addClass('current');
                //console.log(i + $('.slide').last().innerHeight());//get slide heights before positioning them as absolute

                //$('.carousel-nav .arrow').css("display", "inline-block");//show the dot nav arrows once ajax is complete
                //$('ul.nav-dots').append('<li class="dot" data-id="'+i+'">&bull;</li>');//Create a nav dot for each slide
                //$('.nav-dots .dot').first().addClass('active');
            }); // end each function

            $('body').on('click', '.next', function(){
                var currentSlide = $('.slide.current');
                var nextSlide = currentSlide.next();
                if(nextSlide.length === 0){
                    nextSlide = $('.slide').first();
                };
                currentSlide.removeClass('current');
                nextSlide.addClass('current');
            });//end next click

            $('body').on('click','.prev', function(){
                var currentSlide = $('.current');
                var prevSlide = currentSlide.prev();
                if(prevSlide.length === 0){
                    prevSlide = $('.slide').last();
                };
                currentSlide.removeClass('current');
                prevSlide.addClass('current');
            });//end prev click


            setInterval(function(){
                var currentSlide = $('.current');
                var nextSlide = currentSlide.next();
                if(nextSlide.length === 0){
                    nextSlide = $('.slide').first();
                };
                currentSlide.removeClass('current');
                nextSlide.addClass('current');
            }, 3000);


        }//end success function

    });//end ajax call

});//end document ready





