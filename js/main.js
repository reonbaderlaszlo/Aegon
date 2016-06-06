$(document).ready(function() {



    var slider = document.getElementById('slider-1');
    var slider2 = document.getElementById('slider-2');
    var slider3 = document.getElementById('slider-3');

    noUiSlider.create(slider, {
        start: [5000],
        step: 1000,
        range: {
            'min': [5000],
            'max': [45000]
        },
        format: wNumb({
            decimals: 3,
            thousand: '.'
        })

    });

    noUiSlider.create(slider2, {
        start: [5000],
        step: 1000,
        range: {
            'min': [5000],
            'max': [45000]
        },
        format: wNumb({
            decimals: 3,
            thousand: '.'
        })
    });

    noUiSlider.create(slider3, {
        start: [5000],
        step: 1000,
        range: {
            'min': [5000],
            'max': [45000]
        },
        format: wNumb({
            decimals: 3,
            thousand: '.'
        })
    });

    var inputFormat = document.getElementsByClassName('prize-1')[0];
    var inputFormat2 = document.getElementsByClassName('prize-2')[0];
    var inputFormat3 = document.getElementsByClassName('prize-3')[0];

    slider.noUiSlider.on('update', function(values, handle) {

        var price = slider.noUiSlider.get();

        inputFormat.innerHTML = price;

        var mover = $('#slider-1 .noUi-origin').position().left;

        inputFormat.style.left = mover + "px";

    });

    slider2.noUiSlider.on('update', function(values, handle) {

        var price2 = slider2.noUiSlider.get();

        inputFormat2.innerHTML = price2;

        var mover2 = $('#slider-2 .noUi-origin').position().left;

        inputFormat2.style.left = mover2 + "px";

    });

    slider3.noUiSlider.on('update', function(values, handle) {

        var price2 = slider3.noUiSlider.get();

        inputFormat3.innerHTML = price2;

        var mover3 = $('#slider-3 .noUi-origin').position().left;

        inputFormat3.style.left = mover3 + "px";

    });

    $('.info-popup a').hover(function(e) {

        e.preventDefault();

        $(this).next().fadeIn('fast');

    }, function  () {
         $(this).next().fadeOut('fast');
    });

});