/**
 * Created by bachi on 14.12.2016.
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
    $('#button').click(function () {
        buttonItertator();
    });
});



function buttonItertator() {
    var div1 = $('#div1');
    var div2 = $('#div2');
    var div3 = $('#div3');
    var div4 = $('#div4');
    var div5 = $('#div5');
    var div6 = $('#div6');
    var div7 = $('#div7');
    var div8 = $('#div8');
    var div9 = $('#div9');
    switch (schritt){
        case 1:
            setGray(div1);
            schritt++;
            break;
        case 2:
            animateOutLine(div2);
            schritt++;
            break;
        case 3:
            animateLeft(div1, 1);
            animateLeft(div2, 0);
            schritt++;
            break;
        case 4:
            animateInLine(div2);
            //setGray(div2);
            schritt++;
            break;
        case 5:
            animateOutLine(div3);
            schritt++;
            break;
        case 6:
            animateLeft(div3, 1);
            animateLeft(div1, 2);
            schritt++;
            break;
        case 7:
            animateInLine(div3);
            setGray(div3);
            schritt++;
            break;
        case 8:
            animateOutLine(div4);
            schritt++;
            break;
        case 9:
            animateInLine(div4);
            schritt++;
            break;
        case 10:
            animateOutLine(div5);
            schritt++;
            break;
        case 11:
            animateLeft(div5, 3);
            animateLeft(div4, 4);
            schritt++;
            break;
        case 12:
            animateLeft(div5, 2);
            animateLeft(div1, 3);
            schritt++;
            break;
        case 13:
            animateLeft(div5, 1);
            animateLeft(div3, 2);
            schritt++;
            break;
        case 14:
            animateLeft(div5, 0);
            animateLeft(div2, 1);
            schritt++;
            break;
        case 15:
            animateInLine(div5);
            schritt++;
            break;
        case 16:
            animateOutLine(div6);
            schritt++;
            break;
        case 17:
            animateInLine(div6);
            schritt++;
            break;
        case 18:
            animateOutLine(div7);
            schritt++;
            break;
        case 19:
            animateLeft(div7, 5);
            animateLeft(div6, 6);
            schritt++;
            break;
        case 20:
            animateLeft(div7, 4);
            animateLeft(div4, 5);
            schritt++;
            break;
        case 21:
            animateInLine(div7);
            schritt++;
            break;
        case 22:
            animateOutLine(div8);
            schritt++;
            break;
        case 23:
            animateInLine(div8);
            schritt++;
            break;
        case 24:
            animateOutLine(div9);
            schritt++;
            break;
        case 25:
            animateLeft(div9, 7);
            animateLeft(div8, 8);
            schritt++;
            break;
        case 26:
            animateLeft(div9, 6);
            animateLeft(div6, 7);
            schritt++;
            break;
        case 27:
            animateLeft(div9, 5);
            animateLeft(div4, 6);
            schritt++;
            break;
        case 28:
            animateLeft(div9, 4);
            animateLeft(div7, 5);
            schritt++;
            break;
        case 29:
            animateLeft(div9, 3);
            animateLeft(div1, 4);
            schritt++;
            break;
        case 30:
            animateLeft(div9, 2);
            animateLeft(div3, 3);
            schritt++;
            break;
        case 31:
            animateLeft(div9, 1);
            animateLeft(div2, 2);
            schritt++;
            break;
        case 32:
            animateLeft(div9, 0);
            animateLeft(div5, 1);
            schritt++;
            break;
        case 33:
            animateInLine(div9);
            schritt++;
            break;

    }
}


function animateLeft(div, pos) {
    div.animate({"left": leftStart +  widthNormal * pos});
}
function setGray(div) {
    div.css("backgroundColor", "#757575");
}
function animateOutLine(div) {
    div.animate({"top": topStart + 75});
}
function animateInLine(div) {
    div.animate({"top": topStart - div.html() *10},function () {
        setGray(div)
    });
}