import './style.scss';

import gray_right from './images/arrow-gray-right.png';
import gray_left from './images/arrow-gray-left.png';
import blue_right from './images/arrow-blue-right.png';
import blue_left from './images/arrow-blue-left.png';
$(document).ready(() => {

    /** Change color of left arroww image on hover */
    $('.left').hover(() => {

        $("#left_img").attr("src", gray_left);

    }, () => {

        $("#left_img").attr("src", blue_left);

    });


    /** Change color of right arroww image on hover */
    $('.right').hover(() => {

        $("#right_img").attr("src", gray_right);

    }, () => {

        $("#right_img").attr("src", blue_right);

    });

    /** Devide li elements */
    $("li").each(function (index) {

        let li_length = $("#slider li").length;

        if (index < li_length / 2) {

            $(this).addClass('slider-row-one-image');

        } else {

            $(this).addClass('slider-two-one-image');

        }

    });

    let slider = $('#slider');

    /** Wrap all images */
    slider.find('.slider-row-one-image').wrapAll('<div class="slider-row-one" />');
    slider.find('.slider-two-one-image').wrapAll('<div class="slider-row-two" />');



    let slider_row_one = $('#slider').find('.slider-row-one'),
        slider_row_two = $('#slider').find('.slider-row-two');

    /** Slide to left */
    slider.find('.left').click(() => {

        slider_row_one.animate({
            'left': -slider_row_one.find('li:last').width()
        }, 100, () => {

            slider_row_one.append(slider_row_one.find('li:first')).css('left', '0');

        });

        slider_row_two.animate({
            'left': -slider_row_two.find('li:last').width()
        }, 100, () => {

            slider_row_two.append(slider_row_two.find('li:first')).css('left', '0');

        });

    });

    /** Slide to right */
    slider.find('.right').click(() => {

        slider_row_one.animate({
            'left': slider_row_one.find('li:last').width()
        }, 100, () => {

            slider_row_one.prepend(slider_row_one.find('li:last')).css('left', '0');

        });

        slider_row_two.animate({
            'left': slider_row_two.find('li:last').width()
        }, 100, () => {

            slider_row_two.prepend(slider_row_two.find('li:last')).css('left', '0');

        });

    });

});