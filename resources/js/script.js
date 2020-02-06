$(document).ready(function () {

    //testing..
    //    $('h1').click(function(){
    //       
    //        $(this).css('background-color', '#3DDC84');
    //        
    //    });

    var countTopOffset = $(".section-01-countup").offset().top;
    var countUpFinished = false;

    $(window).scroll(function () {

        if (!countUpFinished && window.pageYOffset > countTopOffset - $(window).height() + 250) {

            $('.counter').each(function () {
                var element = $(this);
                var endVal = parseInt(element.text());
                element.countup(endVal);
            })

            countUpFinished = true;
        }

    });



});