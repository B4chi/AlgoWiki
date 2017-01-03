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
        stylen();
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
    var arrow = $('#arrowUP');
    var seperator = $('#seperator');
    var search = $('#search');
    var textField = $('.textField');
    var buttonReset = $('#buttonReset');
    var buttonNext = $('#buttonNext');

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

    textField.css({
        "top": topStart + 100,
        "left": leftStart,
        "width": widthNormal * 9 - 5
    });
    textField.text("Binary Search sucht ein Element in einer vorsortierten Liste. Der Algorithmus arbeitet rekursiv. In unserem Beispiel wollen wir nach der Zahl 6 suchen.");

    buttonReset.css({
        "top": topStart + heightStart + 200,
        "left": leftStart + (widthNormal * 9) / 2 - 50
    });

    buttonNext.css({
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
    var textField = $('.textField');

    switch (schritt) {
        case 1:
            textField.text("Zu Beginn steht der Zeiger auf dem mittlersten Element der Liste. Falls die Liste eine gerade Anzahl von Elementen besitzt wird das erste, der beiden in Frage kommenden Elemente gewählt.");
            moveArrow(arrow, 5);
            showArrow(arrow, "visible");
            schritt++;
            break;
        case 2:
            textField.text("Nun wird die entsprechende Zahl, in diesem Falle die 5, mit unserer gesuchten Zahl 6 verglichen. " +
                "Da die Zahl 5 kleiner ist, als unsere gesuchte Zahl, können wir sicher sein, dass die Menge aller Elemente links von dem Zeiger, inklusive der 5 unser gesuchtes Element NICHT enthalten kann.");
            moveSeperator(seperator, 5);
            showSeperator(seperator, "visible");
            schritt++;
            break;
        case 3:
            textField.text("Diese Elemente brauchen wir im folgenden nicht mehr betrachten.");
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
            textField.text("Die übrigen Elemente werden nun als neue Teilliste genommen. Der Zeiger steht wieder auf dem mittleren Element, dieses mal die 7.");
            moveArrow(arrow, 7);
            showArrow(arrow, "visible");
            schritt++;
            break;
        case 5:
            textField.text("Nun vergleichen wir die 7 mit der gesuchten Zahl 6. Da sie größer ist als die 6 können wir wieder sicher sein, dass alle Elemente rechts von der 7, inklusive der 7 selbst, unsere Lösung nicht enthalten können.");
            moveSeperator(seperator, 6);
            showSeperator(seperator, "visible");
            schritt++;
            break;
        case 6:
            textField.text("Auch diese Elemente brauchen wir im folgenden nicht mehr betrachten.");
            showArrow(arrow, "hidden");
            showSeperator(seperator, "hidden");
            setGray(div7);
            setGray(div8);
            setGray(div9);
            schritt++;
            break;
        case 7:
            textField.text("Alle übrigen Elemente werden nun wieder als neue Teilliste genommen. In unserem Beispiel bemerken wir, dass die Liste aber nur noch ein Element enthält. " +
                "Dieses wird wieder mit der gesuchten Zahl 6 verglichen. Wir sehen, dass 6 = 6 und haben somit eine Lösung gefunden.");
            moveArrow(arrow, 6);
            showArrow(arrow, "visible");
            schritt++;
            break;
        case 8:
            textField.text("Der Algorithmus arbeitet rekursiv durch Abarbeitung immer kleiner werdender Teillisten. " +
                "Dies geht jedes mal so lange, bis der Elementarfall eintritt, dass nur noch ein einziges Element in der Teilliste vorhanden ist. " +
                "Durch die Rekursion arbeitet der Algorithmus außerordentlich effizient.");

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
