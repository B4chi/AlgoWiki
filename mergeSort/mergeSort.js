/**
 * Methoden für die Visualisierung des Mergesort Algorithmus
 */

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

    var buttonNext = $('#buttonNext');
    var buttonReset = $('#buttonReset');
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



    text.css({
        "top": topStart + 450,
        "left": leftStart - 20,
        "width": widthNormal * 8
    });

    rahmen1.css({
        "width": widthNormal * 8,
        "left": leftStart - 25,
        "top": heightStart + topStart - 105,
        "display": "none"

    });
    rahmen2.css({
        "width": widthNormal * 4,
        "left": leftStart - 30,
        "top": heightStart + topStart + 10,
        "display": "none"

    });
    rahmen3.css({
        "width": widthNormal * 4 - 2,
        "left": leftStart - 20 + widthNormal * 4,
        "top": heightStart + topStart + 10,
        "display": "none"

    });
    rahmen4.css({
        "width": widthNormal * 2 - 2,
        "left": leftStart - 40,
        "top": heightStart + topStart + 125,
        "display": "none"

    });
    rahmen5.css({
        "width": widthNormal * 2 - 2,
        "left": leftStart - 28 + widthNormal * 2,
        "top": heightStart + topStart + 125,
        "display": "none"

    });
    rahmen6.css({
        "width": widthNormal * 2 - 2,
        "left": leftStart - 20 + widthNormal * 4,
        "top": heightStart + topStart + 125,
        "display": "none"

    });
    rahmen7.css({
        "width": widthNormal * 2 - 2,
        "left": leftStart - 8 + widthNormal * 6,
        "top": heightStart + topStart + 125,
        "display": "none"

    });
    rahmen8.css({
        "width": widthNormal - 2,
        "left": leftStart - 60,
        "top": heightStart + topStart + 240,
        "display": "none"
    });
    rahmen9.css({
        "width": widthNormal - 2,
        "left": leftStart - 40 + widthNormal,
        "top": heightStart + topStart + 240,
        "display": "none"
    });
    rahmen10.css({
        "width": widthNormal - 2,
        "left": leftStart - 20 + widthNormal * 2,
        "top": heightStart + topStart + 240,
        "display": "none"
    });
    rahmen11.css({
        "width": widthNormal - 2,
        "left": leftStart + widthNormal * 3,
        "top": heightStart + topStart + 240,
        "display": "none"
    });
    rahmen12.css({
        "width": widthNormal - 2,
        "left": leftStart + 20 + widthNormal * 4,
        "top": heightStart + topStart + 240,
        "display": "none"
    });
    rahmen13.css({
        "width": widthNormal - 2,
        "left": leftStart + 40 + widthNormal * 5,
        "top": heightStart + topStart + 240,
        "display": "none"
    });
    rahmen14.css({
        "width": widthNormal - 2,
        "left": leftStart + 60 + widthNormal * 6,
        "top": heightStart + topStart + 240,
        "display": "none"
    });

    buttonNext.css({
        "top": topStart + heightStart + 360,
        "left": leftStart + (widthNormal * 8) / 2 + 20,
        "backgroundColor": "darkgoldenrod"
    });

    buttonReset.css({
        "top": topStart + heightStart + 360,
        "left": leftStart + (widthNormal * 8) / 2 - 120
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
            enableResetButton();
            setText('Die Liste wird in zwei Hälfen geteilt. Dabei entstehen neue Teillisten, mit denen weiter gearbeitet wird.');
            showContainer(rahmen1);
            schritt++;
            break;
        case 3:
            showContainer(rahmen2);
            showContainer(rahmen3);
            animatePosition(div1, 0, -22, 1);
            animatePosition(div2, 1, -22, 1);
            animatePosition(div3, 2, -22, 1);
            animatePosition(div4, 3, -22, 1);

            animatePosition(div5, 4, +8, 1);
            animatePosition(div6, 5, +8, 1);
            animatePosition(div7, 6, +8, 1);
            schritt++;
            break;
        case 4:
            setText('Die Unterleisten werden weiter geteilt, bis das teilen nicht mehr möglich ist.');

            showContainer(rahmen4);
            showContainer(rahmen5);
            showContainer(rahmen6);
            showContainer(rahmen7);
            animatePosition(div1, 0, -33, 2);
            animatePosition(div2, 1, -33, 2);
            animatePosition(div3, 2, -22, 2);
            animatePosition(div4, 3, -22, 2);

            animatePosition(div5, 4, -13, 2);
            animatePosition(div6, 5, -13, 2);

            animatePosition(div7, 6, +22, 2);
            schritt++;
            break;
        case 5:
            showContainer(rahmen8);
            showContainer(rahmen9);
            showContainer(rahmen10);
            showContainer(rahmen11);
            showContainer(rahmen12);
            showContainer(rahmen13);
            showContainer(rahmen14);
            animatePosition(div1, 0, -54, 3);
            animatePosition(div2, 1, -34, 3);
            animatePosition(div3, 2, -14, 3);
            animatePosition(div4, 3, 5, 3);

            animatePosition(div5, 4, 26, 3);
            animatePosition(div6, 5, 46, 3);

            animatePosition(div7, 6, 65, 3);
            schritt++;
            break;
        case 6:
            setText('Die Zerlegung in die Teillisten ist nun abgeschlossen.');
            schritt++;
            break;
        case 7:
            setText('Jetzt werden die zerlegten Teillisten wieder zusammengesetzt. Dabei werden die Elemente so angeordnet, dass sie der Größe nach geordnet in ihre "Überlisten" eingefügt werden.');
            schritt++;
            break;
        case 8:
            setText('Die 4 ist größer als die 6, also wird die Position der Beiden Zahlen dei der Einordnung getauscht.');
            animatePosition(div2, 0, -33, 2);
            animatePosition(div1, 1, -33, 2);
            hideContainer(rahmen8);
            hideContainer(rahmen9);
            schritt++;
            break;
        case 9:
            setText('Die 3 und die 7 befinden sich schon auf den richtigen Positionen. Sie werden einfach so in die darüberliegende Ebene einsortiert.');
            animatePosition(div3, 2, -22, 2);
            animatePosition(div4, 3, -22, 2);
            hideContainer(rahmen10);
            hideContainer(rahmen11);
            schritt++;
            break;
        case 10:
            setText('Wenn sich mehrere Elemente in den Tellisten befinden, werden beim zusammensetzten jeweils die Ersten Elemente der Teillisten verglichen.');
            schritt++;
            break;
        case 11:
            setText('Im Beispiel wird die 4 mit der 3 verglichen und deren Positionen getauscht.');
            animatePosition(div2, 1, -22, 1);
            animatePosition(div3, 0, -22, 1);
            schritt++;
            break;
        case 12:
            setText('Die Verbleibenden Elemente in den Teillisten werden nun wieder verglichen und weiter in die "Überlisten" einsortiert.');
            animatePosition(div1, 2, -22, 1);
            animatePosition(div4, 3, -22, 1);
            hideContainer(rahmen4);
            hideContainer(rahmen5);
            schritt++;
            break;
        case 13:
            setText('Die Einordnung der Elemente wird nun fortgesetzt bis alle Elemente in ander richtigen Position stehen.');
            animatePosition(div5, 5, -13, 2);
            animatePosition(div6, 4, -13, 2);
            hideContainer(rahmen11);
            hideContainer(rahmen12);

            schritt++;
            break;
        case 14:
            animatePosition(div7, 6, +22, 2);
            hideContainer(rahmen13);
            hideContainer(rahmen14);
            schritt++;
            break;
        case 15:
            animatePosition(div6, 4, +8, 1);
            animatePosition(div7, 5, +8, 1);
            hideContainer(rahmen7);
            schritt++;
            break;
        case 16:
            animatePosition(div5, 6, +8, 1);
            hideContainer(rahmen6);
            schritt++;
            break;
        case 17:
            animatePosition(div6, 0, 0, 0);
            schritt++;
            break;
        case 18:
            animatePosition(div7, 1, 0, 0);
            schritt++;
            break;
        case 19:
            animatePosition(div3, 2, 0, 0);
            schritt++;
            break;
        case 20:
            animatePosition(div2, 3, 0, 0);
            schritt++;
            break;
        case 21:
            animatePosition(div5, 4, 0, 0);
            hideContainer(rahmen3);
            schritt++;
            break;
        case 22:
            animatePosition(div1, 5, 0, 0);
            schritt++;
            break;
        case 23:
            animatePosition(div4, 6, 0, 0);
            hideContainer(rahmen2);
            schritt++;
            break;
        case 24:
            setText('Damit ist die Sortierung der Liste vollständig abgeschlossen.');
            hideContainer(rahmen1);
            setGray(div1);
            setGray(div2);
            setGray(div3);
            setGray(div4);
            setGray(div5);
            setGray(div6);
            setGray(div7);
            schritt++;
            break;
        case 25:
            disableButton($('#buttonNext'));
            setText(' Durch die rekursive Funktionsweise arbeitet der Megersort Algorithmus sehr effizient.');
            break;
    }
}

/*============ Spezielle Methoden für den Algorithmus ============*/
function animatePosition(div, hPos, anpassung, vPos) {
    div.animate({"left": (leftStart + widthNormal * hPos) + anpassung});
    div.animate({"top": (topStart - div.html() * 10) + (115 * vPos)});
}
function showContainer(div) {
    div.css({"display": "block"});
}
function hideContainer(div) {
    div.css({"display": "none"});
}

