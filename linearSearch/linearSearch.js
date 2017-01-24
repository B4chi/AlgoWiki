/**
 * Created by Jo on 24.01.2017.
 */

var schritt = 1;

var topStart = 200;
var leftStart = 300;
var heightStart = 50;
var widthNormal = 50;

$(document).ready(function () {
    stylen();

    $('#buttonNext').click(function () {
        algo();
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
    var textField = $('.textField');
    var buttonReset = $('#buttonReset');
    var buttonNext = $('#buttonNext');
    var arrow = $('#arrowUP');
    var search = $('#search');



    var windowWidth = window.innerWidth;
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

    textField.css({
        "top": topStart + 100,
        "left": leftStart,
        "width": widthNormal * 9 - 5
    });

    buttonNext.css({
        "top": topStart + heightStart + 200,
        "left": leftStart + (widthNormal * 9) / 2 + 20
    });

    buttonReset.css({
        "top": topStart + heightStart + 200,
        "left": leftStart + (widthNormal * 9) / 2 - 120
    });

    arrow.css({
        "top": topStart + 55,
        "left": leftStart + 6,
        "visibility": "hidden"
    });

    search.css({
        "top": topStart - 100,
        "left": leftStart + 5
    });

    algo();
}


function algo() {
    var div5 = $('#div1');
    var div3 = $('#div2');
    var div4 = $('#div3');
    var div7 = $('#div4');
    var div2 = $('#div5');
    var div8 = $('#div6');
    var div6 = $('#div7');
    var div9 = $('#div8');
    var div1 = $('#div9');
    var textField = $('.textField');
    var arrow = $('#arrowUP');

    switch (schritt) {

        case 1:
            setText("Lineare Suche sucht ein Element in einer Liste. In diesem Beispiel soll nach der 8 gesucht werden.");
            schritt++;
            break;
        case 2:
            setText("Der Algorithmus ist sehr leicht verständlich allerdings leider auch verhältnismäßig ineffizient.");
            schritt++;
            break;
        case 3:
            showArrow(arrow, "visible");
            setText("Zu Berginn steht der Zeiger auf dem ersten Listenelement und vergleicht dieses mit dem gesuchten Wert. In diesem Fall mit der 8.");
            schritt++;
            break;
        case 4:
            setText("Wenn der Wert des aktuellen Elements ungleich dem gesuchten Wert ist, dann rückt der Zeiger auf das nächste Listenelement und wiederholt den Vorgang.");
            schritt++;
            break;
        case 5:
            setGray(div5);
            animateArrow(arrow, 2);
            schritt++;
            break;
        case 6:
            setGray(div3);
            animateArrow(arrow, 3);
            schritt++;
            break;
        case 7:
            setGray(div4);
            animateArrow(arrow, 4);
            schritt++;
            break;
        case 8:
            setGray(div7);
            animateArrow(arrow, 5);
            schritt++;
            break;
        case 9:
            setGray(div2);
            animateArrow(arrow, 6);
            setText("Wenn die beiden Werte übereinstimmen haben wir ein Ergebnis gefunden.");
            schritt++;
            break;
        case 10:
            setText("Die verbleibenden Elemente müssen nun nicht mehr betrachtet werden.");
            schritt++;
            break;
        case 11:
            setGray(div5);
            setGray(div3);
            setGray(div4);
            setGray(div7);
            setGray(div2);
            setGray(div6);
            setGray(div9);
            setGray(div1);
            schritt++;
            break;
        case 12:
            showArrow(arrow, "hidden");
            setText("Falls kein passender Wert gefunden wird, terminiert der Algorithmus wenn er die komplette Liste abgearbeitet hat.");
    }
}


/*============ weitere Methoden für den speziellen Algorithmus ============*/

function showArrow(div, visible) {
    div.css({
        "visibility": visible
    });
}


