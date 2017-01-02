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

    switch (schritt) {
        case 1:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            // Zeiger + Pivot ausblenden bzw. schon vorher ausblenden
            schritt++;
            break;
        case 2:
            einblenden(pivot,8);
            // Pivot Element einblenden
            schritt++;
            break;
        case 3:
            einblenden(zeig1,0);
            einblenden(zeig2,7);
            // Zeiger einblenden
            schritt++;
            break;
        case 4:
            animateLeft(zeig1, 1);
            schritt++;
            break;
        case 5:
            animateLeft(zeig1, 2);
            schritt++;
            break;
        case 6:
            setGray(zeig1);
            schritt++;
            break;
        case 7:
            animateLeft(zeig2, 6);
            schritt++;
            break;
        case 8:
            setGray(zeig2);
            schritt++;
            break;
        case 9:
            swap(div3, 6, div7, 2);
            setZeig1Normal(zeig1);
            setZeig2Normal(zeig2);
            schritt++;
            break;
        case 10:
            animateLeft(zeig1,3);
            schritt++;
            break;
        case 11:
            animateLeft(zeig1,4);
            schritt++;
            break;
        case 12:
            animateLeft(zeig1,5);
            schritt++;
            break;
        case 13:
            setGray(zeig1);
            schritt++;
            break;
        case 14:
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateLeft(zeig2,5.5);
            schritt++;
            break;
        case 15:
            setGray(zeig2);
            schritt++;
            break;
        case 16:
            swap(div6, 8, div9, 5);
            schritt++;
            break;
        case 17:
            setGray(div9);
            schritt++;
            break;
        case 18:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
             //Zeiger + pivot ausblenden
            schritt++;
            break;
        case 19:
            einblenden(zeig1,0);
            setZeig1Normal(zeig1);
            einblenden(zeig2,3);
            setZeig2Normal(zeig2);
            einblenden(pivot,4);
            schritt++;
            break;
        case 20:
            setGray(zeig1);
            schritt++;
            break;
        case 21:
            setGray(zeig2);
            schritt++;
            break;
        case 22:
            swap(div1,3,div4,0);
            setZeig1Normal(zeig1);
            setZeig2Normal(zeig2);
            schritt++;
            break;
        case 23:
            animateLeft(zeig1,1);
            schritt++;
            break;
        case 24:
            setGray(zeig1);
            schritt++;
            break;
        case 25:
            animateLeft(zeig2,2);
            schritt++;
            break;
        case 26:
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateLeft(zeig2,1.5);
            schritt++;
            break;
        case 27:
            setGray(zeig2);
            schritt++;
            break;
        case 28:
            swap(div2,4,div5,1);
            schritt++;
            break;
        case 29:
            setGray(div5);
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            // Zeiger + Pivot ausblenden
            schritt++;
            break;
        case 30:
            setGray(div4);
            schritt++;
            break;
        case 31:
            einblenden(zeig1,2);
            setZeig1Normal(zeig1);
            einblenden(zeig2,3);
            setZeig2Normal(zeig2);
            einblenden(pivot,4);
            schritt++;
            break;
        case 32:
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateLeft(zeig1,3);
            animateLeft(zeig2,3.5);
            schritt++;
            break;
        case 33:
            setDivHalf(pivot);
            animateLeft(zeig1,4);
            animateLeft(pivot,4.5);
            setZeig2Normal(zeig2);
            animateLeft(zeig2,3);
            schritt++;
            break;
        case 34:
            setGray(zeig1);
            schritt++;
            break;
        case 35:
            setGray(zeig2);
            schritt++;
            break;
        case 36:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            // Zeiger + pivot ausblenden
            setGray(div2);
            schritt++;
            break;
        case 37:
            einblenden(zeig1,2);
            setZeig1Normal(zeig1);
            einblenden(zeig2,2.5);
            setZeig2Normal(zeig2);
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            einblenden(pivot,3);
            schritt++;
            break;
        case 38:
            setGray(zeig1);
            schritt++;
            break;
        case 39:
            setGray(zeig2);
            schritt++;
            break;
        case 40:
            swap(div1, 2, div7, 3);
            schritt++;
            break;
        case 41:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            //Zeiger + Pivot ausblenden
            setGray(div1);
            schritt++;
            break;
        case 42:
            setGray(div7);
            schritt++;
            break;
        case 43:
            einblenden(zeig1,6);
            setZeig1Normal(zeig1);
            einblenden(zeig2,7);
            setZeig2Normal(zeig2);
            einblenden(pivot,8);
            schritt++;
            break;
        case 44:
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateLeft(zeig1,7);
            animateLeft(zeig2,7.5);
            schritt++;
            break;
        case 45:
            animateLeft(zeig2, 7);
            setZeig2Normal(zeig2);
            setDivHalf(pivot);
            animateLeft(zeig1, 8);
            animateLeft(pivot, 8.5);
            schritt++;
            break;
        case 46:
            setGray(zeig1);
            schritt++;
            break;
        case 47:
            setGray(zeig2);
            schritt++;
            break;
        case 48:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            //Zeiger + Pivot ausblenden
            setGray(div6);
            schritt++;
            break;
        case 49:
            einblenden(zeig1,6);
            setZeig1Normal(zeig1);
            einblenden(zeig2,6.5);
            setZeig2Normal(zeig2);
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            einblenden(pivot,7);
            schritt++;
            break;
        case 50:
            setGray(zeig1);
            schritt++;
            break;
        case 51:
            setGray(zeig2);
            schritt++;
            break;
        case 52:
            swap(div3,7,div8,6);
            schritt++;
            break;
        case 53:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            //Zeiger + Pivot ausblenden
            setGray(div8);
            schritt++;
            break;
        case 54:
            setGray(div3);
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
    function swap(divA, posA, divB, posB) {
        divA.animate({"left": leftStart + widthNormal * posA});
        divB.animate({"left": leftStart + widthNormal * posB});
    }
    function setZeig1Normal(zeig) {
        zeig.css({
            "top": topStart - zeig.html() * 5,
            "height": heightStart + zeig.html() * 5,
            "width": widthNormal * 0.8,
            "backgroundColor": "blue"
        });
    }
    function setZeig2Normal(zeig) {
        zeig.css({
            "top": topStart - zeig.html() * 5,
            "height": heightStart + zeig.html() * 5,
            "width": widthNormal * 0.8,
            "backgroundColor": "red"
        });
    }
    function setDivHalf(div) {
        div.css({
            "width": widthNormal * 0.45
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