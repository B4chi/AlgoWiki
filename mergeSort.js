

var schritt = 1;

var topStart = 200;
var leftStart = 300;
var heightStart = 30;
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

    var rahmen1 = $('#rahmen1');
    var rahmen2 = $('#rahmen2');
    var rahmen3 = $('#rahmen3');
    var rahmen4 = $('#rahmen4');
    var rahmen5 = $('#rahmen5');
    var rahmen6 = $('#rahmen6');
    var rahmen7 = $('#rahmen7');
    var rahmen8 = $('#rahmen8');
    var rahmen9 = $('#rahmen9');
    var rahmen10 = $('#rahmen10');
    var rahmen11 = $('#rahmen11');
    var rahmen12 = $('#rahmen12');
    var rahmen13 = $('#rahmen13');
    var rahmen14 = $('#rahmen14');

    var button = $('#buttonNext');
    var button2 = $('#buttonReset');
    var text = $('.textField');

    var windowWidth = window.innerWidth;
    leftStart = windowWidth / 2 - (widthNormal * 7) / 2;

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


    button.css({
        "top": topStart + heightStart + 360,
        "left": leftStart + (widthNormal * 8) / 2 + 20
    });

    button2.css({
        "top": topStart + heightStart + 360,
        "left": leftStart + (widthNormal * 8) / 2 - 120
    });

    text.css({
        "top": topStart + 450,
        "left": leftStart -20,
        "width": widthNormal*8
    });

    rahmen1.css({
        "width": widthNormal*8,
        "left": leftStart-25,
        "top": heightStart + topStart - 105

    });
    rahmen2.css({
        "width": widthNormal*4,
        "left": leftStart-30,
        "top": heightStart + topStart +10

    });
    rahmen3.css({
        "width": widthNormal*4-2,
        "left": leftStart-20 + widthNormal*4,
        "top": heightStart + topStart +10

    });
    rahmen4.css({
        "width": widthNormal*2-2,
        "left": leftStart-40,
        "top": heightStart + topStart +125

    });
    rahmen5.css({
        "width": widthNormal*2-2,
        "left": leftStart-28 + widthNormal*2,
        "top": heightStart + topStart +125

    });
    rahmen6.css({
        "width": widthNormal*2-2,
        "left": leftStart-20 + widthNormal*4,
        "top": heightStart + topStart +125

    });
    rahmen7.css({
        "width": widthNormal*2-2,
        "left": leftStart -8+ widthNormal*6,
        "top": heightStart + topStart +125

    });
    rahmen8.css({
        "width": widthNormal-2,
        "left": leftStart -60,
        "top": heightStart + topStart +240
    });
    rahmen9.css({
        "width": widthNormal-2,
        "left": leftStart -40 + widthNormal,
        "top": heightStart + topStart +240
    });
    rahmen10.css({
        "width": widthNormal-2,
        "left": leftStart -20 + widthNormal*2,
        "top": heightStart + topStart +240
    });
    rahmen11.css({
        "width": widthNormal-2,
        "left": leftStart + widthNormal*3,
        "top": heightStart + topStart +240
    });
    rahmen12.css({
        "width": widthNormal-2,
        "left": leftStart +20+ widthNormal*4,
        "top": heightStart + topStart +240
    });
    rahmen13.css({
        "width": widthNormal-2,
        "left": leftStart +40 + widthNormal*5,
        "top": heightStart + topStart +240
    });
    rahmen14.css({
        "width": widthNormal-2,
        "left": leftStart +60 + widthNormal*6,
        "top": heightStart + topStart +240
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

    var rahmen1 = $('#rahmen1');
    var rahmen2 = $('#rahmen2');
    var rahmen3 = $('#rahmen3');
    var rahmen4 = $('#rahmen4');
    var rahmen5 = $('#rahmen5');
    var rahmen6 = $('#rahmen6');
    var rahmen7 = $('#rahmen7');
    var rahmen8 = $('#rahmen8');
    var rahmen9 = $('#rahmen9');
    var rahmen10 = $('#rahmen10');
    var rahmen11 = $('#rahmen11');
    var rahmen12 = $('#rahmen12');
    var rahmen13 = $('#rahmen13');
    var rahmen14 = $('#rahmen14');


    switch (schritt) {
        case 1:
            setText('"Mergesort" ist ein Sortieralgorithmus der z.B. zum sortieren einer Liste von Zahlen verwendet werden kann.');
            schritt++;
            break;
        case 2:
            setText('Die Liste wird in zwei Hälfen geteilt. Dabei entstehen neue Teillisten, mit denen weiter gearbeitet wird.');
            showContainer(rahmen1);
            schritt++;
            break;

    }
}


function animatePosition(div, hPos, vPos) {
    div.animate({"left": leftStart + widthNormal * hPos});
    div.animate({"top": topStart + div.html()*10 + 110 * vPos});
}

function showContainer(div) {
    div.css({"display": "block"});

}
function setGray(div) {
    div.css("backgroundColor", "#757575");
}

function setText(text) {
    var div = $('.textField');
    div.empty();
    div.append(document.createTextNode(text));
}

function reset() {
    stylen();
    setText("");
    schritt = 1;
}
function disableButton(button) {
    button.css({
        "backgroundColor": "#757575"
    });
}

