/**
 * Created by Jo on 26.12.2016.
 */

var schritt = 1;

var topStart = 200;
var leftStart = 300;
var heightStart = 50;
var widthNormal = 50;


$(document).ready(function () {
    stylen();

    $('#button').click(function () {
        buttonItertator();
    });

});

$(window).resize(function () {
    stylen();
});

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
    var buttonDiv = $('#button');
    var text = $('.textField');


    var windowWidth = window.outerWidth;
    leftStart = windowWidth / 2 - (widthNormal * 9 / 2);

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
        "left": leftStart + widthNormal * 2,
        "height": heightStart + div3.html() * 10,
        "backgroundColor": "red"
    });

    div4.css({
        "top": topStart - div4.html() * 10,
        "left": leftStart + widthNormal * 3,
        "height": heightStart + div4.html() * 10,
        "backgroundColor": "yellow"
    });

    div5.css({
        "top": topStart - div5.html() * 10,
        "left": leftStart + widthNormal * 4,
        "height": heightStart + div5.html() * 10,
        "backgroundColor": "aqua"
    });

    div6.css({
        "top": topStart - div6.html() * 10,
        "left": leftStart + widthNormal * 5,
        "height": heightStart + div6.html() * 10,
        "backgroundColor": "orange"
    });

    div7.css({
        "top": topStart - div7.html() * 10,
        "left": leftStart + widthNormal * 6,
        "height": heightStart + div7.html() * 10,
        "backgroundColor": "darkred"
    });

    div8.css({
        "top": topStart - div8.html() * 10,
        "left": leftStart + widthNormal * 7,
        "height": heightStart + div8.html() * 10,
        "backgroundColor": "green"
    });

    div9.css({
        "top": topStart - div9.html() * 10,
        "left": leftStart + widthNormal * 8,
        "height": heightStart + div9.html() * 10,
        "backgroundColor": "darkgreen"
    });
    buttonDiv.css({
        "top": topStart + heightStart + 200,
        "left": leftStart + (widthNormal * 9) / 2 - 50
    });

    text.css({
        "top": topStart + 80,
        "left": leftStart,
        "width": widthNormal * 9 - 5
    });

}


function buttonItertator() {
    var div5 = $('#div1');
    var div3 = $('#div2');
    var div4 = $('#div3');
    var div7 = $('#div4');
    var div2 = $('#div5');
    var div8 = $('#div6');
    var div6 = $('#div7');
    var div9 = $('#div8');
    var div1 = $('#div9');
    switch (schritt) {
        case 1:
            animateOutLine(div5);
            animateOutLine(div3);
            schritt++;
            break;
        case 2:
            swap(div5, 1, div3, 0);
            schritt++;
            break;
        case 3:
            animateInLine(div5);
            animateInLine(div3);
            schritt++;
            break;
        case 4:
            animateOutLine(div5);
            animateOutLine(div4);
            schritt++;
            break;
        case 5:
            swap(div5, 2, div4, 1)
            schritt++;
            break;
        case 6:
            animateInLine(div5);
            animateInLine(div4);
            schritt++;
            break;
        case 7:
            animateOutLine(div5);
            animateOutLine(div7);
            schritt++;
            break;
        case 8:
            animateInLine(div5);
            animateInLine(div7);
            schritt++;
            break;
        case 9:
            animateOutLine(div7);
            animateOutLine(div2);
            schritt++;
            break;
        case 10:
            swap(div7, 4, div2, 3);
            schritt++;
            break;
        case 11:
            animateInLine(div7);
            animateInLine(div2);
            schritt++;
            break;
        case 12:
            animateOutLine(div7);
            animateOutLine(div8);
            schritt++;
            break;
        case 13:
            animateInLine(div7);
            animateInLine(div8);
            schritt++;
            break;
        case 14:
            animateOutLine(div8);
            animateOutLine(div6);
            schritt++;
            break;
        case 15:
            swap(div8, 6, div6, 5);
            schritt++;
            break;
        case 16:
            animateInLine(div8);
            animateInLine(div6);
            schritt++;
            break;
        case 17:
            animateOutLine(div8);
            animateOutLine(div9);
            schritt++;
            break;
        case 18:
            animateInLine(div8);
            animateInLine(div9);
            schritt++;
            break;
        case 19:
            animateOutLine(div9);
            animateOutLine(div1);
            schritt++;
            break;
        case 20:
            swap(div9, 8, div1, 7);
            schritt++;
            break;
        case 21:
            animateInLine(div9);
            animateInLine(div1);
            setGray(div9);
            schritt++;
            break;


        case 22:
            animateOutLine(div3);
            animateOutLine(div4);
            schritt++;
            break;
        case 23:
            animateInLine(div3);
            animateInLine(div4);
            schritt++;
            break;
        case 24:
            animateOutLine(div4);
            animateOutLine(div5);
            schritt++;
            break;
        case 25:
            animateInLine(div4);
            animateInLine(div5);
            schritt++;
            break;
        case 26:
            animateOutLine(div5);
            animateOutLine(div2);
            schritt++;
            break;
        case 27:
            swap(div5, 3, div2, 2);
            schritt++;
            break;
        case 28:
            animateInLine(div5);
            animateInLine(div2);
            schritt++;
            break;
        case 29:
            animateOutLine(div5);
            animateOutLine(div7);
            schritt++;
            break;
        case 30:
            animateInLine(div5);
            animateInLine(div7);
            schritt++;
            break;
        case 31:
            animateOutLine(div7);
            animateOutLine(div6);
            schritt++;
            break;
        case 32:
            swap(div7, 5, div6, 4);
            schritt++;
            break;
        case 33:
            animateInLine(div7);
            animateInLine(div6);
            schritt++;
            break;
        case 34:
            animateOutLine(div7);
            animateOutLine(div8);
            schritt++;
            break;
        case 35:
            animateInLine(div7);
            animateInLine(div8);
            schritt++;
            break;
        case 36:
            animateOutLine(div8);
            animateOutLine(div1);
            schritt++;
            break;
        case 37:
            swap(div8, 7, div1, 6);
            schritt++;
            break;
        case 38:
            animateInLine(div8);
            animateInLine(div1);
            setGray(div8);
            schritt++;
            break;


        case 39:
            animateOutLine(div3);
            animateOutLine(div4);
            schritt++;
            break;
        case 40:
            animateInLine(div3);
            animateInLine(div4);
            schritt++;
            break;
        case 41:
            animateOutLine(div4);
            animateOutLine(div2);
            schritt++;
            break;
        case 42:
            swap(div4, 2, div2, 1);
            schritt++;
            break;
        case 43:
            animateInLine(div4);
            animateInLine(div2);
            schritt++;
            break;
        case 44:
            animateOutLine(div4);
            animateOutLine(div5);
            schritt++;
            break;
        case 45:
            animateInLine(div4);
            animateInLine(div5);
            schritt++;
            break;
        case 46:
            animateOutLine(div5);
            animateOutLine(div6);
            schritt++;
            break;
        case 47:
            animateInLine(div5);
            animateInLine(div6);
            schritt++;
            break;
        case 48:
            animateOutLine(div6);
            animateOutLine(div7);
            schritt++;
            break;
        case 49:
            animateInLine(div6);
            animateInLine(div7);
            schritt++;
            break;
        case 50:
            animateOutLine(div7);
            animateOutLine(div1);
            schritt++;
            break;
        case 51:
            swap(div7, 6, div1, 5);
            schritt++;
            break;
        case 52:
            animateInLine(div7);
            animateInLine(div1);
            setGray(div7);
            schritt++;
            break;
        case 53:
            animateOutLine(div3);
            animateOutLine(div2);
            schritt++;
            break;
        case 54:
            swap(div3, 1, div2, 0);
            schritt++;
            break;
        case 55:
            animateInLine(div3);
            animateInLine(div2);
            schritt++;
            break;
        case 56:
            animateOutLine(div3);
            animateOutLine(div4);
            schritt++;
            break;
        case 57:
            animateInLine(div3);
            animateInLine(div4);
            schritt++;
            break;
        case 58:
            animateOutLine(div4);
            animateOutLine(div5);
            schritt++;
            break;
        case 59:
            animateInLine(div4);
            animateInLine(div5);
            schritt++;
            break;
        case 60:
            animateOutLine(div5);
            animateOutLine(div6);
            schritt++;
            break;
        case 61:
            animateInLine(div5);
            animateInLine(div6);
            schritt++;
            break;
        case 62:
            animateOutLine(div6);
            animateOutLine(div1);
            schritt++;
            break;
        case 63:
            swap(div6, 5, div1, 4);
            schritt++;
            break;
        case 64:
            animateInLine(div6);
            animateInLine(div1);
            setGray(div6);
            schritt++;
            break;


        case 65:
            animateOutLine(div2);
            animateOutLine(div3);
            schritt++;
            break;
        case 66:
            animateInLine(div2);
            animateInLine(div3);
            schritt++;
            break;
        case 67:
            animateOutLine(div3);
            animateOutLine(div4);
            schritt++;
            break;
        case 68:
            animateInLine(div3);
            animateInLine(div4);
            schritt++;
            break;
        case 69:
            animateOutLine(div4);
            animateOutLine(div5);
            schritt++;
            break;
        case 70:
            animateInLine(div4);
            animateInLine(div5);
            schritt++;
            break;
        case 71:
            animateOutLine(div5);
            animateOutLine(div1);
            schritt++;
            break;
        case 72:
            swap(div5, 4, div1, 3);
            schritt++;
            break;
        case 73:
            animateInLine(div5);
            animateInLine(div1);
            setGray(div5);
            schritt++;
            break;


        case 74:
            animateOutLine(div2);
            animateOutLine(div3);
            schritt++;
            break;
        case 75:
            animateInLine(div2);
            animateInLine(div3);
            schritt++;
            break;
        case 76:
            animateOutLine(div3);
            animateOutLine(div4);
            schritt++;
            break;
        case 77:
            animateInLine(div3);
            animateInLine(div4);
            schritt++;
            break;
        case 78:
            animateOutLine(div4);
            animateOutLine(div1);
            schritt++;
            break;
        case 79:
            swap(div4, 3, div1, 2);
            schritt++;
            break;
        case 80:
            animateInLine(div4);
            animateInLine(div1);
            setGray(div4);
            schritt++;
            break;


        case 81:
            animateOutLine(div2);
            animateOutLine(div3);
            schritt++;
            break;
        case 82:
            animateInLine(div2);
            animateInLine(div3);
            schritt++;
            break;
        case 83:
            animateOutLine(div3);
            animateOutLine(div1);
            schritt++;
            break;
        case 84:
            swap(div3, 2, div1, 1);
            schritt++;
            break;
        case 85:
            animateInLine(div3);
            animateInLine(div1);
            setGray(div3);
            schritt++;
            break;


        case 86:
            animateOutLine(div2);
            animateOutLine(div1);
            schritt++;
            break;
        case 87:
            swap(div2, 1, div1, 0);
            schritt++;
            break;
        case 88:
            animateInLine(div2);
            animateInLine(div1);
            setGray(div2);
            setGray(div1);
            schritt++;
            break;

    }


}

function swap(divA, posA, divB, posB) {
    divA.animate({"left": leftStart + widthNormal * posA})
    divB.animate({"left": leftStart + widthNormal * posB});
}

function animateLeft(div, pos) {
    div.animate({"left": leftStart + widthNormal * pos});
}

function animateRight(div, pos) {
    div.animate({"right": leftStart + widthNormal * pos});
}

function setGray(div) {
    div.css("backgroundColor", "#757575");
}
function animateOutLine(div) {
    div.animate({"top": topStart + 75});
}
function animateInLine(div) {
    div.animate({"top": topStart - div.html() * 10}, function () {
    });
}