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
    var arrow = $('#arrowUP');
    var seperator = $('#seperator');
    var search = $('#search');
    var text = $('.textField');
    var resetButton = $('#resetButton');

    var windowWidth = window.outerWidth;
    leftStart = windowWidth / 2 - (widthNormal * 9 / 2);

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
    buttonDiv.css({
        "top": topStart + heightStart + 200,
        "left": leftStart + (widthNormal * 9) / 2 - 50
    });
    arrow.css({
        "top": topStart + 55,
        "left": leftStart + 6 + widthNormal * 4,
        "visibility": "hidden"
    });

    seperator.css({
        "top": topStart - 118,
        "left": leftStart + widthNormal * 4.89,
        "visibility": "hidden"
    });

    search.css({
        "top": topStart - 100,
        "left": leftStart + 5
    });

    text.css({
        "top": topStart + 100,
        "left": leftStart,
        "width": widthNormal * 9 - 5
    });

    resetButton.css({
        "top": topStart + heightStart + 200,
        "left": leftStart + (widthNormal * 9) / 2 - 50
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
    var arrow = $('#arrowUP');
    var seperator = $('#seperator');

    switch (schritt) {
        case 1:
            moveArrow(arrow, 5);
            showArrow(arrow, "visible");
            schritt++;
            break;
        case 2:
            moveSeperator(seperator, 5);
            showSeperator(seperator, "visible");
            schritt++;
            break;
        case 3:
            showArrow(arrow, "hidden");
            showSeperator(seperator, "hidden");
            setGray(div1);
            setGray(div2);
            setGray(div3);
            setGray(div4);
            setGray(div5);
            schritt++;
            break;
        case 4:
            moveArrow(arrow, 7);
            showArrow(arrow, "visible");
            schritt++;
            break;
        case 5:
            moveSeperator(seperator, 6);
            showSeperator(seperator, "visible");
            schritt++;
            break;
        case 6:
            showArrow(arrow, "hidden");
            showSeperator(seperator, "hidden");
            setGray(div7);
            setGray(div8);
            setGray(div9);
            schritt++;
            break;
        case 7:
            moveArrow(arrow, 6);
            showArrow(arrow, "visible");
            schritt++;
            break;
    }
}

function reset() {
    schritt = 1;
    stylen();
}

function showArrow(div, visible) {
    div.css({
        visibility: visible
    });
}

function moveArrow(div, pos) {
    div.css({
        "top": topStart + 55,
        "left": leftStart + 6 + widthNormal * (pos - 1)
    });
}

function showSeperator(div, visible) {
    div.css({
        "visibility": visible
    });
}

function moveSeperator(div, pos) {
    div.css({
        "top": topStart - 118,
        "left": leftStart + widthNormal * (pos - 0.11)
    });
}

function setGray(div) {
    div.css("backgroundColor", "#757575");
}
