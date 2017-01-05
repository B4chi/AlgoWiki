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
        "left": leftStart
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

            schritt++;
            break;
    }
}


function reset() {
    schritt = 1;
    setText("");
    stylen();
}

function animateLeft(div, pos) {
    div.animate({"left": leftStart + widthNormal * pos});
}
function setGray(div) {
    div.css("backgroundColor", "#757575");
}
function swap(divA, posA, divB, posB) {
    divA.animate({"left": leftStart + widthNormal * posA});
    divB.animate({"left": leftStart + widthNormal * posB});
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
        "left": leftStart + widthNormal * pos,
        "width": widthNormal * 0.8
    })
}
function showKlammer(pos,wid) {
    var rahmen = $('#rahmenQS');
    rahmen.css({
        "display": "initial",
        "left": leftStart - 5 + widthNormal * pos,
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