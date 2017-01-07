/**
 * Created by Eric on 05.01.2017.
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
    })
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
    var zeig1 = $('#zeig1');
    var zeig2 = $('#zeig2');
    var pivot = $('#pivot');
    var rahmen = $('#rahmenQS');

    var buttonStep = $('#buttonNext');
    var text = $('.textField');
    var buttonReset = $('#buttonReset');

    var windowWidth = window.innerWidth;
    leftStart = windowWidth / 2 - (widthNormal * 9 / 2);


    rahmen.css({
        "top": 100,
        "left": leftStart,
        "display": "none"
    });

    zeig1.css({
        "top": topStart + 80,
        "left": leftStart,
        "height": heightStart + zeig1.html() * 5,
        "backgroundColor": "blue",
        "display": "none"
    });

    zeig2.css({
        "top": topStart + 80,
        "left": leftStart + widthNormal * 7,
        "height": heightStart + zeig2.html() * 5,
        "backgroundColor": "red",
        "display": "none"
    });

    pivot.css({
        "top": topStart + 80,
        "left": leftStart + widthNormal * 8,
        "height": heightStart + pivot.html() * 5,
        "backgroundColor": "limegreen",
        "display": "none"
    });

    div1.css({
        "top": topStart - div1.html() * 10,
        "left": leftStart + widthNormal * 4,
        "height": heightStart + div1.html() * 10,
        "backgroundColor": "limegreen"
    });
    div2.css({
        "top": topStart - div2.html() * 10,
        "left": leftStart + widthNormal * 2,
        "height": heightStart + div2.html() * 10,
        "backgroundColor": "blue"
    });
    div3.css({
        "top": topStart - div3.html() * 10,
        "left": leftStart + widthNormal * 3,
        "height": heightStart + div3.html() * 10,
        "backgroundColor": "red"
    });

    div4.css({
        "top": topStart - div4.html() * 10,
        "left": leftStart + widthNormal * 6,
        "height": heightStart + div4.html() * 10,
        "backgroundColor": "yellow"
    });

    div5.css({
        "top": topStart - div5.html() * 10,
        "left": leftStart + widthNormal,
        "height": heightStart + div5.html() * 10,
        "backgroundColor": "aqua"
    });

    div6.css({
        "top": topStart - div6.html() * 10,
        "left": leftStart + widthNormal * 7,
        "height": heightStart + div6.html() * 10,
        "backgroundColor": "orange"
    });

    div7.css({
        "top": topStart - div7.html() * 10,
        "left": leftStart + widthNormal * 5,
        "height": heightStart + div7.html() * 10,
        "backgroundColor": "darkred"
    });

    div8.css({
        "top": topStart - div8.html() * 10,
        "left": leftStart + widthNormal * 8,
        "height": heightStart + div8.html() * 10,
        "backgroundColor": "green"
    });

    div9.css({
        "top": topStart - div9.html() * 10,
        "left": leftStart,
        "height": heightStart + div9.html() * 10,
        "backgroundColor": "darkgreen"
    });

    buttonStep.css({
        "top": topStart + heightStart + 120,
        "left": leftStart + (widthNormal * 9) / 2 + 20
    });

    buttonReset.css({
        "top": topStart + heightStart + 120,
        "left": leftStart + (widthNormal * 9) / 2 - 120
    });

    text.css({
        "top": topStart + 230,
        "left": leftStart,
        "width": widthNormal * 9
    });
}

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
    var zeig1 = $('#zeig1');
    var zeig2 = $('#zeig2');
    var pivot = $('#pivot');

    switch (schritt) {
        case 1:
            setText('Darstellung des worst case von Quicksort');
            schritt++;
            break;
        case 2:
            showKlammer(1,9);
            schritt++;
            break;
        case 3:
            einblenden(pivot,9);
            schritt++;
            break;
        case 4:
            einblenden(zeig1,1);
            einblenden(zeig2,8);
            schritt++;
            break;
        case 5:
            animateLeft(zeig1,2);
            schritt++;
            break;
        case 6:
            animateLeft(zeig1,3);
            schritt++;
            break;
        case 7:
            animateLeft(zeig1,4);
            schritt++;
            break;
        case 8:
            animateLeft(zeig1,5);
            schritt++;
            break;
        case 9:
            animateLeft(zeig1,6);
            schritt++;
            break;
        case 10:
            animateLeft(zeig1,7);
            schritt++;
            break;
        case 11:
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateLeft(zeig1,8);
            animateLeft(zeig2,8.5);
            schritt++;
            break;
        case 12:
            setDivHalf(pivot);
            animateLeft(zeig1,9);
            animateLeft(pivot,9.5);
            setZeig2Normal();
            animateLeft(zeig2,8);
            schritt++;
            break;
        case 13:
            setGray(zeig1);
            schritt++;
            break;
        case 14:
            setGray(zeig2);
            schritt++;
            break;
        case 15:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div8);
            schritt++;
            break;
        case 16:
            klammerAusblenden();
            schritt++;
            break;
        case 17:
            showKlammer(1,8);
            schritt++;
            break;
        case 18:
            einblenden(pivot,8);
            schritt++;
            break;
        case 19:
            setZeig2Normal();
            setZeig1Normal();
            einblenden(zeig1,1);
            einblenden(zeig2,7);
            schritt++;
            break;
        case 20:
            animateLeft(zeig1,2);
            schritt++;
            break;
        case 21:
            animateLeft(zeig1,3);
            schritt++;
            break;
        case 22:
            animateLeft(zeig1,4);
            schritt++;
            break;
        case 23:
            animateLeft(zeig1,5);
            schritt++;
            break;
        case 24:
            animateLeft(zeig1,6);
            schritt++;
            break;
        case 25:
            setDivHalf(zeig1);
            animateLeft(zeig1,7);
            setDivHalf(zeig2);
            animateLeft(zeig2,7.5);
            schritt++;
            break;
        case 26:
            setDivHalf(pivot);
            animateLeft(pivot,8.5);
            animateLeft(zeig1,8);
            setZeig2Normal();
            animateLeft(zeig2,7);
            schritt++;
            break;
        case 27:
            setGray(zeig1);
            schritt++;
            break;
        case 28:
            setGray(zeig2);
            schritt++;
            break;
        case 29:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div6);
            schritt++;
            break;
        case 30:
            klammerAusblenden();
            schritt++;
            break;
        case 31:
            showKlammer(1,7);
            schritt++;
            break;
        case 32:
            einblenden(pivot,7);
            schritt++;
            break;
        case 33:
            setZeig2Normal();
            setZeig1Normal();
            einblenden(zeig1,1);
            einblenden(zeig2,6);
            schritt++;
            break;
        case 34:
            animateLeft(zeig1,2);
            schritt++;
            break;
        case 35:
            animateLeft(zeig1,3);
            schritt++;
            break;
        case 36:
            animateLeft(zeig1,4);
            schritt++;
            break;
        case 37:
            animateLeft(zeig1,5);
            schritt++;
            break;
        case 38:
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateLeft(zeig1,6);
            animateLeft(zeig2,6.5);
            schritt++;
            break;
        case 39:
            setDivHalf(pivot);
            animateLeft(zeig1,7);
            animateLeft(pivot,7.5);
            setZeig2Normal();
            animateLeft(zeig2,6);
            schritt++;
            break;
        case 40:
            setGray(zeig1);
            schritt++;
            break;
        case 41:
            setGray(zeig2);
            schritt++;
            break;
        case 42:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div4);
            schritt++;
            break;
        case 43:
            klammerAusblenden();
            schritt++;
            break;
        case 44:
            showKlammer(1,6);
            schritt++;
            break;
        case 45:
            einblenden(pivot,6);
            schritt++;
            break;
        case 46:
            setZeig2Normal();
            setZeig1Normal();
            einblenden(zeig1,1);
            einblenden(zeig2,5);
            schritt++;
            break;
        case 47:
            animateLeft(zeig1,2);
            schritt++;
            break;
        case 48:
            animateLeft(zeig1,3);
            schritt++;
            break;
        case 49:
            animateLeft(zeig1,4);
            schritt++;
            break;
        case 50:
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateLeft(zeig1,5);
            animateLeft(zeig2,5.5);
            schritt++;
            break;
        case 51:
            setDivHalf(pivot);
            animateLeft(zeig1,6);
            animateLeft(pivot,6.5);
            setZeig2Normal();
            animateLeft(zeig2,5);
            schritt++;
            break;
        case 52:
            setGray(zeig1);
            schritt++;
            break;
        case 53:
            setGray(zeig2);
            schritt++;
            break;
        case 54:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div7);
            schritt++;
            break;
        case 55:
            klammerAusblenden();
            schritt++;
            break;
        case 56:
            showKlammer(1,5);
            schritt++;
            break;
        case 57:
            einblenden(pivot,5);
            schritt++;
            break;
        case 58:
            setZeig2Normal();
            setZeig1Normal();
            einblenden(zeig1,1);
            einblenden(zeig2,4);
            schritt++;
            break;
        case 59:
            animateLeft(zeig1,2);
            schritt++;
            break;
        case 60:
            animateLeft(zeig1,3);
            schritt++;
            break;
        case 61:
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateLeft(zeig1,4);
            animateLeft(zeig2,4.5);
            schritt++;
            break;
        case 62:
            setDivHalf(pivot);
            animateLeft(zeig1,5);
            animateLeft(pivot,5.5);
            setZeig2Normal();
            animateLeft(zeig2,4);
            schritt++;
            break;
        case 63:
            setGray(zeig1);
            schritt++;
            break;
        case 64:
            setGray(zeig2);
            schritt++;
            break;
        case 65:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div1);
            schritt++;
            break;
        case 66:
            klammerAusblenden();
            schritt++;
            break;
        case 67:
            showKlammer(1,4);
            schritt++;
            break;
        case 68:
            einblenden(pivot,4);
            schritt++;
            break;
        case 69:
            setZeig2Normal();
            setZeig1Normal();
            einblenden(zeig1,1);
            einblenden(zeig2,3);
            schritt++;
            break;
        case 70:
            animateLeft(zeig1,2);
            schritt++;
            break;
        case 71:
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateLeft(zeig1,3);
            animateLeft(zeig2,3.5);
            schritt++;
            break;
        case 72:
            setDivHalf(pivot);
            animateLeft(zeig1,4);
            animateLeft(pivot,4.5);
            setZeig2Normal();
            animateLeft(zeig2,3);
            schritt++;
            break;
        case 73:
            setGray(zeig1);
            schritt++;
            break;
        case 74:
            setGray(zeig2);
            schritt++;
            break;
        case 75:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div3);
            schritt++;
            break;
        case 76:
            klammerAusblenden();
            schritt++;
            break;
        case 77:
            showKlammer(1,3);
            schritt++;
            break;
        case 78:
            einblenden(pivot,3);
            schritt++;
            break;
        case 79:
            setZeig2Normal();
            setZeig1Normal();
            einblenden(zeig1,1);
            einblenden(zeig2,2);
            schritt++;
            break;
        case 80:
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateLeft(zeig1,2);
            animateLeft(zeig2,2.5);
            schritt++;
            break;
        case 81:
            setDivHalf(pivot);
            animateLeft(zeig1,3);
            animateLeft(pivot,3.5);
            setZeig2Normal();
            animateLeft(zeig2,2);
            schritt++;
            break;
        case 82:
            setGray(zeig1);
            schritt++;
            break;
        case 83:
            setGray(zeig2);
            schritt++;
            break;
        case 84:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div2);
            schritt++;
            break;
        case 85:
            klammerAusblenden();
            schritt++;
            break;
        case 86:
            showKlammer(1,2);
            schritt++;
            break;
        case 87:
            einblenden(pivot,2);
            schritt++;
            break;
        case 88:
            setZeig2Normal();
            setZeig1Normal();
            einblenden(zeig1,1);
            einblenden(zeig2,1.5);
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            schritt++;
            break;
        case 89:
            setDivHalf(pivot);
            animateLeft(zeig1,2);
            animateLeft(pivot,2.5);
            setZeig2Normal();
            animateLeft(zeig2,1);
            schritt++;
            break;
        case 90:
            setGray(zeig1);
            schritt++;
            break;
        case 91:
            setGray(zeig2);
            schritt++;
            break;
        case 92:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div5);
            schritt++;
            break;
        case 93:
            klammerAusblenden();
            schritt++;
            break;
        case 94:
            showKlammer(1,1);
            schritt++;
            break;
        case 95:
            setGray(div9);
            schritt++;
            break;
        case 96:
            klammerAusblenden();
            schritt++;
            break;
        case 97:
            setText('Ende');
            disableButton($('#buttonNext'));
            break;
    }
}


function reset() {
    schritt = 1;
    setText("");
    stylen();
}

function animateLeft(div, pos) {
    div.animate({"left": leftStart + widthNormal * (pos - 1)});
}
function setGray(div) {
    div.css("backgroundColor", "#757575");
}
function setZeig1Normal() {
    var zeig1 = $('#zeig1');
    zeig1.css({
        "height": heightStart + zeig1.html() * 5,
        "width": 40,
        "backgroundColor": "blue"
    });
}
function setZeig2Normal() {
    var zeig2 = $('#zeig2');
    zeig2.css({
        "height": heightStart + zeig2.html() * 5,
        "width": 40,
        "backgroundColor": "red"
    });
}
function setDivHalf(div) {
    div.css({
        "width": 20
    });
}
function ausblenden(div) {
    div.css({
        "display": "none"
    })
}
function einblenden(div, pos) {
    div.css({
        "display": "initial",
        "left": leftStart + widthNormal * (pos -1),
        "width": widthNormal * 0.8
    })
}
function showKlammer(pos,wid) {
    var rahmen = $('#rahmenQS');
    rahmen.css({
        "display": "initial",
        "left": leftStart - 5 + widthNormal * (pos - 1),
        "width": widthNormal * wid
    })
}
function klammerAusblenden() {
    var rahmen = $('#rahmenQS');
    rahmen.css({"display": "none"})
}

function setText(text) {
    var div = $('.textField');
    div.empty();
    div.append(document.createTextNode(text));
}

function disableButton(button) {
    button.css({
        "backgroundColor": "#757575"
    });
}