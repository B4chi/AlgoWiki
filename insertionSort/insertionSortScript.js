/**
 * Created by bachi on 14.12.2016.
 *
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
    var buttonNext = $('#buttonNext');
    var buttonReset = $('#buttonReset');
    var text = $('.textField');

    var windowWidth = window.innerWidth;
    leftStart = windowWidth / 2 - (widthNormal * 9) / 2;

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
    buttonNext.css({
        "top": topStart + heightStart + 200,
        "left": leftStart + (widthNormal * 9) / 2 + 20,
        "backgroundColor": "darkgoldenrod"
    });

    buttonReset.css({
        "top": topStart + heightStart + 200,
        "left": leftStart + (widthNormal * 9) / 2 - 120
    });

    text.css({
        "top": topStart + 350,
        "left": leftStart -15,
        "width": widthNormal*9
    });
    disableButton(buttonReset);
    buttonItertator();

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


    switch (schritt) {
        case 1:

            setText('"Insertion Sort" ist ein Sortieralgorithmus. Beispielsweise werden Elemente einer Liste sortiert.')
            schritt++;
            break;
        case 2:
            enableResetButton();
            setGray(div1);
            setText('Zu beginn wird das am weitesten links stehende Element der Liste als sortiert angesehen.')
            schritt++;
            break;
        case 3:
            animateOutLine(div2);
            setText('Nun wird das nächste unsortierte Element der Liste betrachtet.');
            schritt++;
            break;
        case 4:
            animateOutLine(div2);
            setText('Dieses wird mit seinem linken Nachbarelement verglichen.');
            schritt++;
            break;
        case 5:
            animateOutLine(div2);
            setText('Wenn das schon sortierte Element größer ist als das betrachtete Element werden die beiden getauscht.');
            schritt++;
            break;
        case 6:
            animateOutLine(div2);
            setText('Es wird so oft getauscht, bis ein sortertes Element kleines ist als das betrachtete Element oder das betrachtete Element am weitesten links steht.');
            schritt++;
            break;
        case 7:
            animateLeft(div1, 1);
            animateLeft(div2, 0);
            setText('In diesem Fall ist die 5 größer als die 3. Also werden die beiden Elemente getauscht.')
            schritt++;
            break;
        case 8:
            setText('Die 3 ist nun das am weitesten links stehende Element.');
            schritt++;
            break;
        case 9:
            setText('Es kann nicht weiter getauscht werden und wird deshalb als sortiert angesehen.');
            animateInLine(div2);
            schritt++;
            break;
        case 10:
            setText('Nun wird das am weitesten links stehende unsortierte Element betrachtet.');
            animateOutLine(div3);
            schritt++;
            break;
        case 11:
            setText('Wieder wird es mit deinem linken Nachbarelement verglichen.');
            schritt++;
            break;
        case 12:
            setText("5 ist größer als 4, also werden die beiden Elemente getauscht.");
            animateLeft(div3, 1);
            animateLeft(div1, 2);
            schritt++;
            break;
        case 13:
            setText("Die 4 ist größer als die 3, deshalb wird an der Stelle nicht weiter getauscht.");
            schritt++;
            break;
        case 14:
            animateInLine(div3);
            setText("Da nichts mehr getauscht wurde wird die 4 als sortiert angesehen.");
            schritt++;
            break;
        case 15:
            setText("Die Operationen werden wiedeholt bis die Liste vollständig sortiert ist.");
            schritt++;
            break;
        case 16:
            animateOutLine(div4);
            schritt++;
            break;
        case 17:
            animateInLine(div4);
            schritt++;
            break;
        case 18:
            animateOutLine(div5);
            schritt++;
            break;
        case 19:
            animateLeft(div5, 3);
            animateLeft(div4, 4);
            schritt++;
            break;
        case 20:
            animateLeft(div5, 2);
            animateLeft(div1, 3);
            schritt++;
            break;
        case 21:
            animateLeft(div5, 1);
            animateLeft(div3, 2);
            schritt++;
            break;
        case 22:
            animateLeft(div5, 0);
            animateLeft(div2, 1);
            schritt++;
            break;
        case 23:
            animateInLine(div5);
            schritt++;
            break;
        case 24:
            animateOutLine(div6);
            schritt++;
            break;
        case 25:
            animateInLine(div6);
            schritt++;
            break;
        case 26:
            animateOutLine(div7);
            schritt++;
            break;
        case 27:
            animateLeft(div7, 5);
            animateLeft(div6, 6);
            schritt++;
            break;
        case 28:
            animateLeft(div7, 4);
            animateLeft(div4, 5);
            schritt++;
            break;
        case 29:
            animateInLine(div7);
            schritt++;
            break;
        case 30:
            animateOutLine(div8);
            schritt++;
            break;
        case 31:
            animateInLine(div8);
            schritt++;
            break;
        case 32:
            animateOutLine(div9);
            schritt++;
            break;
        case 33:
            animateLeft(div9, 7);
            animateLeft(div8, 8);
            schritt++;
            break;
        case 34:
            animateLeft(div9, 6);
            animateLeft(div6, 7);
            schritt++;
            break;
        case 35:
            animateLeft(div9, 5);
            animateLeft(div4, 6);
            schritt++;
            break;
        case 36:
            animateLeft(div9, 4);
            animateLeft(div7, 5);
            schritt++;
            break;
        case 37:
            animateLeft(div9, 3);
            animateLeft(div1, 4);
            schritt++;
            break;
        case 38:
            animateLeft(div9, 2);
            animateLeft(div3, 3);
            schritt++;
            break;
        case 39:
            animateLeft(div9, 1);
            animateLeft(div2, 2);
            schritt++;
            break;
        case 40:
            animateLeft(div9, 0);
            animateLeft(div5, 1);
            schritt++;
            break;
        case 41:
            animateInLine(div9);
            schritt++;
            break;
        case 42:
            setText('Wenn alle Elemente als sortiert makiert sind ist die Sortierung der Gesamtliste abgeschlossen.');
            disableButton($('#buttonNext'));
            break;

    }
}


/*============ Spezielle Methoden für den Algorithmus ============*/
function animateOutLine(div) {
    div.animate({"top": topStart + 75});
}
function animateInLine(div) {
    div.animate({"top": topStart - div.html() * 10}, function () {
        setGray(div)
    });
}

