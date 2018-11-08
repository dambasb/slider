$(document).ready(function () {

    /** Change color of left arroww image on hover */
    $('.left').hover(function () {

        $("#left_img").attr("src", "images/arrow-gray-left.png");

    }, function () {

        $("#left_img").attr("src", "images/arrow-blue-left.png");

    });


    /** Change color of right arroww image on hover */
    $('.right').hover(function () {

        $("#right_img").attr("src", "images/arrow-gray-right.png");

    }, function () {

        $("#right_img").attr("src", "images/arrow-blue-right.png");

    });

    /** Devide li elements */
    $("li").each(function (index) {

        var li_length = $("#slider li").length;

        if (index < li_length / 2) {

            $(this).addClass('slider-row-one-image');

        } else {

            $(this).addClass('slider-two-one-image');

        }

    });

    var slider = $('#slider');

    /** Wrap all images */
    slider.find('.slider-row-one-image').wrapAll('<div class="slider-row-one" />');
    slider.find('.slider-two-one-image').wrapAll('<div class="slider-row-two" />');



    var slider_row_one = $('#slider').find('.slider-row-one');
    var slider_row_two = $('#slider').find('.slider-row-two');

    /** Slide to left */
    slider.find('.left').click(function () {

        slider_row_one.animate({
            'left': -slider_row_one.find('li:last').width()
        }, 100, function () {

            slider_row_one.append(slider_row_one.find('li:first')).css('left', '0');

        });

        slider_row_two.animate({
            'left': -slider_row_two.find('li:last').width()
        }, 100, function () {

            slider_row_two.append(slider_row_two.find('li:first')).css('left', '0');

        });

    });

    /** Slide to right */
    slider.find('.right').click(function () {

        slider_row_one.animate({
            'left': slider_row_one.find('li:last').width()
        }, 100, function () {

            slider_row_one.prepend(slider_row_one.find('li:last')).css('left', '0');

        });

        slider_row_two.animate({
            'left': slider_row_two.find('li:last').width()
        }, 100, function () {

            slider_row_two.prepend(slider_row_two.find('li:last')).css('left', '0');

        });

    });

});