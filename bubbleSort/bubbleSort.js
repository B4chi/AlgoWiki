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
    var klammer = $('#klammer');
    var buttonReset = $('#buttonReset');
    var buttonNext = $('#buttonNext');


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


    klammer.css({
        "top": topStart + 55,
        "left": leftStart + 15,
        "visibility": "hidden"
    });

    textField.css({
        "top": topStart + 100,
        "left": leftStart,
        "width": widthNormal * 9 - 5
    });

    buttonNext.css({
        "top": topStart + heightStart + 200,
        "left": leftStart + (widthNormal * 9) / 2 + 20,
    });

    buttonReset.css({
        "top": topStart + heightStart + 200,
        "left": leftStart + (widthNormal * 9) / 2 - 120
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
    var klammer = $('#klammer');
    var textField = $('.textField');

    switch (schritt) {
        case 1:
            setText("Bubblesort ist ein Algorithmus, der eine unsortierte Liste durch wiederholtes vertauschen zweier benachbarter Elemente in eine sortierte Liste umwandelt.");
            schritt++;
            break;
        case 2:
            setText("In unserem Beispiel wollen wir die Liste aufsteigend, also vom kleinsten bis hin zum größten Element sortieren.");
            schritt++;
            break;
        case 3:
            setText("Dazu verwenden wir einen Zeiger, der stets auf zwei benachbarte Elemente zeigt. Dieser steht zu Beginn auf den ersten Beiden Elementen der unsortierten Liste.");
            schritt++;
            break;
        case 4:
            setText("Nun werden die beiden Werte verglichen. In diesem Falle 5 und 3. Wenn der erste Wert größer ist als der zweite, dann werden die Elemente vertauscht. ");
            klammer.css({
                "visibility": "visible"
            });
            schritt++;
            break;
        case 5:
            setText("Wenn der erste Wert kleiner ist als der zweite oder beide den gleichen Wert haben, dann werden die Positionen beibehalten.");
            schritt++;
            break;
        case 6:
            setText("Als nächstes rutscht der Zeiger um exakt eine Position weiter und es werden wieder die beiden Elemente auf die der Zeiger zeigt miteinander verglichen.");
            swap(div5, 1, div3, 0);
            schritt++;
            break;
        case 7:
            setText("5 ist größer als 4, also werden die Elemente wieder getauscht..");
            moveKlammer(klammer, 2);
            schritt++;
            break;
        case 8:
            setText("..und der Zeiger rutscht wieder um eine Position weiter.");
            swap(div5, 2, div4, 1);
            schritt++;
            break;
        case 9:
            setText("Jetzt steht der Zeiger auf 5 und 7. Dieses mal darf nicht getauscht werden, da 5 < 7 und der Zeiger verschiebt sich wieder um eine Position nach rechts.");
            moveKlammer(klammer, 3);
            schritt++;
            break;
        case 10:
            setText("Dieses Verfahren wird kontinuierlich fortgeführt, bis der Zeiger die komplette Liste abgearbeitet hat.");
            moveKlammer(klammer, 4);
            schritt++;
            break;
        case 11:
            setText("7 > 2, also werden die Elemente getauscht.");
            schritt++;
            break;
        case 12:
            swap(div7, 4, div2, 3);
            schritt++;
            break;
        case 13:
            setText("7 < 8, also bleiben die Elemente unverändert.");
            moveKlammer(klammer, 5);
            schritt++;
            break;
        case 14:
            setText("8 > 6, also werden die Elemente getauscht.");
            moveKlammer(klammer, 6);
            schritt++;
            break;
        case 15:
            swap(div8, 6, div6, 5);
            schritt++;
            break;
        case 16:
            setText("8 < 9, also bleiben die Elemente unverändert.");
            moveKlammer(klammer, 7);
            schritt++;
            break;
        case 17:
            setText("9 > 1, also werden die Elemente getauscht.");
            moveKlammer(klammer, 8);
            schritt++;
            break;
        case 18:
            setText("Jetzt wo die gesamte Liste fertig abgearbeitet wurde, sehen wir, dass sich der erste Wert bereits an seiner korrekten Position befindet. In diesem Falle die 9. ");
            swap(div9, 8, div1, 7);
            schritt++;
            break;
        case 19:
            setText("Daher müssen wir uns im folgenden nur noch um die Sortierung der unsortierten Restliste kümmern und können unseren Wert 9 außer acht lassen. ");
            schritt++;
            break;
        case 20:
            setText("Nun springen wir also mit unserem Zeiger wieder an den Anfang von der besagten Restliste und arbeiten diese mit den bekannten Regeln ab.");
            schritt++;
            break;
        case 21:
            setGray(div9);
            moveKlammer(klammer, 1);
            schritt++;
            break;
        case 22:
            moveKlammer(klammer, 2);
            schritt++;
            break;
        case 23:
            moveKlammer(klammer, 3);
            schritt++;
            break;
        case 24:
            swap(div5, 3, div2, 2);
            schritt++;
            break;
        case 25:
            moveKlammer(klammer, 4);
            schritt++;
            break;
        case 26:
            moveKlammer(klammer, 5);
            schritt++;
            break;
        case 27:
            swap(div7, 5, div6, 4);
            schritt++;
            break;
        case 28:
            moveKlammer(klammer, 6);
            schritt++;
            break;
        case 29:
            moveKlammer(klammer, 7);
            schritt++;
            break;
        case 30:
            swap(div8, 7, div1, 6);
            schritt++;
            break;
        case 31:
            setText("An dieser Stelle wird sehr schön deutlich woher der Algorithmus seinen Namen hat, da in jedem Durchlauf das größte Element der aktuellen Restliste wie eine Blase nach oben 'gebubbelt' wird.");
            setGray(div8);
            schritt++;
            break;
        case 32:
            setText("Diese Vorgänge wiederholen sich so lange, bis die Gesamtliste schließlich komplett sortiert ist.");
            moveKlammer(klammer, 1);
            schritt++;
            break;
        case 33:
            moveKlammer(klammer, 2);
            schritt++;
            break;
        case 34:
            swap(div4, 2, div2, 1);
            schritt++;
            break;
        case 35:
            moveKlammer(klammer, 3);
            schritt++;
            break;
        case 36:
            moveKlammer(klammer, 4);
            schritt++;
            break;
        case 37:
            moveKlammer(klammer, 5);
            schritt++;
            break;
        case 38:
            moveKlammer(klammer, 6);
            schritt++;
            break;
        case 39:
            swap(div7, 6, div1, 5);
            schritt++;
            break;
        case 40:
            setGray(div7);
            moveKlammer(klammer, 1);
            schritt++;
            break;
        case 41:
            swap(div3, 1, div2, 0);
            schritt++;
            break;
        case 42:
            moveKlammer(klammer, 2);
            schritt++;
            break;
        case 43:
            moveKlammer(klammer, 3);
            schritt++;
            break;
        case 44:
            moveKlammer(klammer, 4);
            schritt++;
            break;
        case 45:
            moveKlammer(klammer, 5);
            schritt++;
            break;
        case 46:
            swap(div6, 5, div1, 4);
            schritt++;
            break;
        case 47:
            setGray(div6);
            moveKlammer(klammer, 1);
            schritt++;
            break;
        case 48:
            moveKlammer(klammer, 2);
            schritt++;
            break;
        case 49:
            moveKlammer(klammer, 3);
            schritt++;
            break;
        case 50:
            moveKlammer(klammer, 4);
            schritt++;
            break;
        case 51:
            swap(div5, 4, div1, 3);
            schritt++;
            break;
        case 52:
            setGray(div5);
            moveKlammer(klammer, 1);
            schritt++;
            break;
        case 53:
            moveKlammer(klammer, 2);
            schritt++;
            break;
        case 54:
            moveKlammer(klammer, 3);
            schritt++;
            break;
        case 55:
            swap(div4, 3, div1, 2);
            schritt++;
            break;
        case 56:
            setGray(div4);
            moveKlammer(klammer, 1);
            schritt++;
            break;
        case 57:
            moveKlammer(klammer, 2);
            schritt++;
            break;
        case 58:
            swap(div3, 2, div1, 1);
            schritt++;
            break;
        case 59:
            setGray(div3);
            moveKlammer(klammer, 1);
            schritt++;
            break;
        case 60:
            swap(div2, 1, div1, 0);
            schritt++;
            break;
        case 61:
            setText("Die Gesamtliste ist nun vollständig sortiert.");
            setGray(div2);
            setGray(div1);
            klammer.css({
                "visibility": "hidden"
            });
            schritt++;
            break;
        case 62:
            setText("Leider ist der Algorithmus sehr ineffizient, da für jedes sortierte Element die komplette Restliste durchgegangen werden muss.");
            schritt++;
            break;
        case 63:
            setText("Bei kleinen Listen mag das kein Problem sein aber wenn die, zu sortierenden Listen sehr groß werden, kann auch der Aufwand enorm hoch werden.");
    }
}




/*============ Spezielle Methoden für den Algorithmus ============*/
function moveKlammer(div, pos) {
    div.animate({"left": leftStart + widthNormal * (pos - 1) + 15});
}
function swap(divA, posA, divB, posB) {
    divA.animate({"left": leftStart + widthNormal * posA});
    divB.animate({"left": leftStart + widthNormal * posB});
}
