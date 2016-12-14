/**
 * Created by Eric on 14.12.2016.
 */

var schritt = 1;

var topStart = 200;
var leftStart = 300;
var heightStart = 50;
var widthNormal = 50;

function stylen() {



    var div1 = $('#div1');
    var div2 = $('#div2');
    var div3 = $('#div3');
    var div4 = $('#div4');
    var div5 = $('#div5');
    var div6 = $('#div6');
    var div7 = $('#div7');
    var div8 = $('#div8');
    var div9 = $('#div9');

    div1.css({
        "top": topStart - div1.html() * 10,
        "left": leftStart,
        "height": heightStart + div1.html() * 10,
        "backgroundColor": "limegreen"
    });
    div2.css({
        "top": topStart - div2.html() * 10,
        "left": leftStart + widthNormal,
        "height": heightStart + div2.html() * 10,
        "backgroundColor": "blue"
    });
    div3.css({
        "top": topStart - div3.html() * 10,
        "left": leftStart + widthNormal*2,
        "height": heightStart +div3.html() * 10,
        "backgroundColor": "red"
    });

    div4.css({
        "top": topStart-div4.html() * 10,
        "left": leftStart + widthNormal*3,
        "height": heightStart +div4.html() * 10,
        "backgroundColor": "yellow"
    });

    div5.css({
        "top": topStart -div5.html() * 10,
        "left": leftStart + widthNormal*4,
        "height": heightStart +div5.html() * 10,
        "backgroundColor": "aqua"
    });

    div6.css({
        "top": topStart -div6.html() * 10,
        "left": leftStart + widthNormal*5,
        "height": heightStart +div6.html() * 10,
        "backgroundColor": "orange"
    });

    div7.css({
        "top": topStart -div7.html() * 10,
        "left": leftStart + widthNormal*6,
        "height": heightStart +div7.html() * 10,
        "backgroundColor": "darkred"
    });

    div8.css({
        "top": topStart -div8.html() * 10,
        "left": leftStart + widthNormal*7,
        "height": heightStart +div8.html() * 10,
        "backgroundColor": "green"
    });

    div9.css({
        "top": topStart -div9.html() * 10,
        "left": leftStart + widthNormal*8,
        "height": heightStart +div9.html() * 10,
        "backgroundColor": "darkgreen"
    });
}

$(document).ready(function () {
    stylen();
});


function buttonItertator() {
    switch (schritt){
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
        case 10:
            break;
        case 11:
            break;
    }

}