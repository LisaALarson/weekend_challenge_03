$(document).ready(function (){

    $.ajax({
        url:"/data" ,
        success: function(data){
            console.log(data);

            $.each(data, function(i){
                $('.carousel').append('<div class="slide" data-id="'+i+'"></div>');
                $('.slide').last().append('<h2>'+this.name+'</h2>');
                $('.slide').last().append('<h4>About ' + this.name + '<h4>');
                $('.slide').last().append('<div class="description">'+this.description+'</div>');
                $('.slide').last().append('<h4>Thanks ' + this.name + '<h4>');
                $('.slide').last().append('<div class="shout-out">'+this.shoutOut+'</div>');
                $('.slide').first().addClass('current');
            }); // end each function

            $('body').on('click', '.next', function(){
                var currentSlide = $('.slide.current');
                var nextSlide = currentSlide.next();
                if(nextSlide.length === 0){
                    nextSlide = $('.slide').first();
                };//end if statement
                currentSlide.removeClass('current');
                nextSlide.addClass('current');
            });//end next click

            $('body').on('click','.prev', function(){
                var currentSlide = $('.current');
                var prevSlide = currentSlide.prev();
                if(prevSlide.length === 0){
                    prevSlide = $('.slide').last();
                };//end if statement
                currentSlide.removeClass('current');
                prevSlide.addClass('current');
            });//end prev click

            setInterval(function(){
                var currentSlide = $('.current');
                var nextSlide = currentSlide.next();
                if(nextSlide.length === 0){
                    nextSlide = $('.slide').first();
                };//end if statement
                currentSlide.removeClass('current');
                nextSlide.addClass('current');
            }, 3000);//end interval function


        }//end success function

    });//end ajax call

});//end document ready





