/**
 * несложный калькулятор цены, работает на основе jquery ui slider
 * пример работы - https://rw-design.ru/stoimost/
 * */

$(function() {
    $("#re_slider").slider({
        animate: true,
        range: "min",
        min: 10,
        max: 1000,
        step: 10,
        value: 10,
        create: function() {
            var value = $(this).slider("option", "value");
            $("p.re_result span").html(value);
        },
        change: function() {
            var value = $("#re_slider").slider("option", "value");
            $("p.re_result span").html(value);
            $("input[name='num_slider_val']").val(value);
            recalc(value);
        },
        slide: function() {
            var value = $("#re_slider").slider("option", "value");
            $("p.re_result span").html(value);
            recalc(value);
        }
    });
    $("input[name='re_calc_type']").change(function() {
        if ($(this).val() == 1) {
            $("#re_slider").slider("option", "max", 1000);
        } else {
            $("#re_slider").slider("option", "max", 3000);
        }
    });
    
    recalc = function(val){
        if(val < 101){perMeter = 2200}
        else if(val >= 101 && val < 201){perMeter = 1980}
        else if(val >= 201 && val < 301){perMeter = 1760}
        else if(val >= 301){perMeter = 1540}
        var sum = (val*perMeter).toString();
        $(".re_calc_total_sum span").html(sum.replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "\$1 "));
    }
    recalc(10);

});