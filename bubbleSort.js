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

    $('#buttonNext').click(function () {
        buttonItertator();
    });

    $('#buttonReset').click(function () {
        reset();
    });

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
    var text = $('.textField');
    var klammer = $('#klammer');
    var buttonReset = $('#buttonReset');
    var buttonNext = $('#buttonNext');


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


    klammer.css({
        "top": topStart + 55,
        "left": leftStart + 15,
        "visibility": "hidden"
    });

    text.css({
        "top": topStart + 100,
        "left": leftStart,
        "width": widthNormal * 9 - 5
    });

    buttonReset.css({
        "top": topStart + heightStart + 200,
        "left": leftStart + (widthNormal * 9) / 2 - 120
    });

    buttonNext.css({
        "top": topStart + heightStart + 200,
        "left": leftStart + (widthNormal * 9) / 2 + 20
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
    var klammer = $('#klammer');

    switch (schritt) {
        case 1:
            klammer.css({
                "visibility": "visible"
            });
            schritt++;
            break;
        case 2:
            swap(div5, 1, div3, 0);
            schritt++;
            break;
        case 3:
            moveKlammer(klammer, 2);
            schritt++;
            break;
        case 4:
            swap(div5, 2, div4, 1);
            schritt++;
            break;
        case 5:
            moveKlammer(klammer, 3);
            schritt++;
            break;
        case 6:
            moveKlammer(klammer, 4);
            schritt++;
            break;
        case 7:
            swap(div7, 4, div2, 3);
            schritt++;
            break;
        case 8:
            moveKlammer(klammer, 5);
            schritt++;
            break;
        case 9:
            moveKlammer(klammer, 6);
            schritt++;
            break;
        case 10:
            swap(div8, 6, div6, 5);
            schritt++;
            break;
        case 11:
            moveKlammer(klammer, 7);
            schritt++;
            break;
        case 12:
            moveKlammer(klammer, 8);
            schritt++;
            break;
        case 13:
            swap(div9, 8, div1, 7);
            schritt++;
            break;


        case 14:
            setGray(div9);
            moveKlammer(klammer, 1);
            schritt++;
            break;
        case 15:
            moveKlammer(klammer, 2);
            schritt++;
            break;
        case 16:
            moveKlammer(klammer, 3);
            schritt++;
            break;
        case 17:
            swap(div5, 3, div2, 2);
            schritt++;
            break;
        case 18:
            moveKlammer(klammer, 4);
            schritt++;
            break;
        case 19:
            moveKlammer(klammer, 5);
            schritt++;
            break;
        case 20:
            swap(div7, 5, div6, 4);
            schritt++;
            break;
        case 21:
            moveKlammer(klammer, 6);
            schritt++;
            break;
        case 22:
            moveKlammer(klammer, 7);
            schritt++;
            break;
        case 23:
            swap(div8, 7, div1, 6);
            schritt++;
            break;


        case 24:
            setGray(div8);
            moveKlammer(klammer, 1);
            schritt++;
            break;
        case 25:
            moveKlammer(klammer, 2);
            schritt++;
            break;
        case 26:
            swap(div4, 2, div2, 1);
            schritt++;
            break;
        case 27:
            moveKlammer(klammer, 3);
            schritt++;
            break;
        case 28:
            moveKlammer(klammer, 4);
            schritt++;
            break;
        case 29:
            moveKlammer(klammer, 5);
            schritt++;
            break;
        case 30:
            moveKlammer(klammer, 6);
            schritt++;
            break;
        case 31:
            swap(div7, 6, div1, 5);
            schritt++;
            break;


        case 32:
            setGray(div7);
            moveKlammer(klammer, 1);
            schritt++;
            break;
        case 33:
            swap(div3, 1, div2, 0);
            schritt++;
            break;
        case 34:
            moveKlammer(klammer, 2);
            schritt++;
            break;
        case 35:
            moveKlammer(klammer, 3);
            schritt++;
            break;
        case 36:
            moveKlammer(klammer, 4);
            schritt++;
            break;
        case 37:
            moveKlammer(klammer, 5);
            schritt++;
            break;
        case 38:
            swap(div6, 5, div1, 4);
            schritt++;
            break;


        case 39:
            setGray(div6);
            moveKlammer(klammer, 1);
            schritt++;
            break;
        case 40:
            moveKlammer(klammer, 2);
            schritt++;
            break;
        case 41:
            moveKlammer(klammer, 3);
            schritt++;
            break;
        case 42:
            moveKlammer(klammer, 4);
            schritt++;
            break;
        case 43:
            swap(div5, 4, div1, 3);
            schritt++;
            break;


        case 44:
            setGray(div5);
            moveKlammer(klammer, 1);
            schritt++;
            break;
        case 45:
            moveKlammer(klammer, 2);
            schritt++;
            break;
        case 46:
            moveKlammer(klammer, 3);
            schritt++;
            break;
        case 47:
            swap(div4, 3, div1, 2);
            schritt++;
            break;


        case 48:
            setGray(div4);
            moveKlammer(klammer, 1);
            schritt++;
            break;
        case 49:
            moveKlammer(klammer, 2);
            schritt++;
            break;
        case 50:
            swap(div3, 2, div1, 1);
            schritt++;
            break;


        case 51:
            setGray(div3);
            moveKlammer(klammer, 1);
            schritt++;
            break;
        case 52:
            swap(div2, 1, div1, 0);
            schritt++;
            break;
        case 53:
            setGray(div2);
            setGray(div1);
    }
}

function reset() {
    schritt = 1;
    stylen();
}

function moveKlammer(div, pos) {
    div.animate({"left": leftStart + widthNormal * (pos - 1) + 15});
}
function swap(divA, posA, divB, posB) {
    divA.animate({"left": leftStart + widthNormal * posA});
    divB.animate({"left": leftStart + widthNormal * posB});
}

function setGray(div) {
    div.css("backgroundColor", "#757575");
}