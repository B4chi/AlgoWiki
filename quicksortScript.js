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
    var zeig1 = $('#zeig1');
    var zeig2 = $('#zeig2');
    var pivot = $('#pivot');
    var buttonDiv = $('#button');

    var windowWidth = window.outerWidth;
    leftStart = windowWidth/2 - (widthNormal*9 /2);

    zeig1.css({
        "top": topStart - zeig1.html() * 5,
        "left": leftStart,
        "height": heightStart + zeig1.html() * 5,
        "backgroundColor": "blue"
    });

    zeig2.css({
        "top": topStart - zeig2.html() * 5,
        "left": leftStart + widthNormal*7,
        "height": heightStart + zeig2.html() * 5,
        "backgroundColor": "red"
    });

    pivot.css({
        "top": topStart - zeig1.html() * 5,
        "left": leftStart + widthNormal*8,
        "height": heightStart + zeig1.html() * 5,
        "backgroundColor": "limegreen"
    });

    div1.css({
        "top": topStart - div1.html() * 10,
        "left": leftStart,
        "height": heightStart + div1.html() * 10,
        "backgroundColor": "blue"
    });
    div2.css({
        "top": topStart - div2.html() * 10,
        "left": leftStart + widthNormal,
        "height": heightStart + div2.html() * 10,
        "backgroundColor": "limegreen"
    });
    div3.css({
        "top": topStart - div3.html() * 10,
        "left": leftStart + widthNormal*2,
        "height": heightStart +div3.html() * 10,
        "backgroundColor": "orange"
    });

    div4.css({
        "top": topStart-div4.html() * 10,
        "left": leftStart + widthNormal*3,
        "height": heightStart +div4.html() * 10,
        "backgroundColor": "darkgreen"
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
        "backgroundColor": "green"
    });

    div7.css({
        "top": topStart -div7.html() * 10,
        "left": leftStart + widthNormal*6,
        "height": heightStart +div7.html() * 10,
        "backgroundColor": "red"
    });

    div8.css({
        "top": topStart -div8.html() * 10,
        "left": leftStart + widthNormal*7,
        "height": heightStart +div8.html() * 10,
        "backgroundColor": "yellow"
    });

    div9.css({
        "top": topStart -div9.html() * 10,
        "left": leftStart + widthNormal*8,
        "height": heightStart +div9.html() * 10,
        "backgroundColor": "darkred"
    });

    buttonDiv.css({
        "top": topStart + heightStart + 200,
        "left": leftStart + (widthNormal*9)/2 -50
    });

}

$(document).ready(function () {
    stylen();

    $('#button').click(function () {
        buttonItertator();
    });
});

$(window).resize(function () {
    stylen();
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
    var zeig1 = $('#zeig1');
    var zeig2 = $('#zeig2');
    var pivot = $('#pivot');

    switch (schritt){
        case 1:
            animateLeft(zeig1,1);
            schritt++;
            break;
        case 2:
            animateLeft(zeig1,2);
            schritt++;
            break;
        case 3:
            setGray(zeig1);
            schritt++;
            break;
        case 4:
            animateLeft(zeig2,6);
            schritt++;
            break;
        case 5:
            setGray(zeig2);
            schritt++;
            break;
        case 6:
            swap(div3, 6, div7, 2);
            setZeigerNormal();
            schritt++;
            break;
        case 7:
            animateLeft(zeig1,3);
            schritt++;
            break;
        case 8:
            animateLeft(zeig1,4);
            schritt++;
            break;
        case 9:
            animateLeft(zeig1,5);
            schritt++;
            break;
        case 10:
            setGray(zeig1);
            schritt++;
            break;
        case 11:
            setZeigerHalf(5);
            animateLeft(zeig2,5.5);
            schritt++;
            break;
        case 12:
            setGray(zeig2);
            schritt++;
            break;
        case 13:
            swap(div6, 8, div9, 5);
            schritt++;
            break;
        case 14:
            setGray(div9);
            schritt++;
            break;
        case 15:
            schritt++;
            break;
        case 16:
            schritt++;
            break;
        case 17:
            schritt++;
            break;
        case 18:
            schritt++;
            break;
        case 19:
            schritt++;
            break;
        case 20:
            schritt++;
            break;
        case 21:
            schritt++;
            break;
        case 22:
            schritt++;
            break;
        case 23:
            schritt++;
            break;
        case 24:
            schritt++;
            break;
        case 25:
            schritt++;
            break;
        case 26:
            schritt++;
            break;
        case 27:
            schritt++;
            break;
        case 28:
            schritt++;
            break;

    }

    function animateLeft(div, pos) {
        div.animate({"left": leftStart +  widthNormal * pos});
    }
    function setGray(div) {
        div.css("backgroundColor", "#757575");
    }
    function swap(divA, posA, divB, posB) {
        divA.animate({"left": leftStart + widthNormal * posA});
        divB.animate({"left": leftStart + widthNormal * posB});
    }
    function setZeigerNormal() {
        zeig1.css({
            "backgroundColor": "blue"
        });
        zeig2.css({
            "backgroundColor": "red"
        });
    }
    function setZeigerHalf(pos) {
        zeig1.css({
            "width": widthNormal * 0.45
        });
        zeig2.css({
            "width": widthNormal * 0.45

        });
    }
    function ausblenden(div) {
        div.css({
            "display": "none"
        })
    }
}
