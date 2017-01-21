/**
 * Created by Eric on 14.12.2016.
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
        "left": leftStart,
        "display": "none"
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
        "left": leftStart + widthNormal * 2,
        "height": heightStart + div3.html() * 10,
        "backgroundColor": "orange"
    });

    div4.css({
        "top": topStart - div4.html() * 10,
        "left": leftStart + widthNormal * 3,
        "height": heightStart + div4.html() * 10,
        "backgroundColor": "darkgreen"
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
        "backgroundColor": "green"
    });

    div7.css({
        "top": topStart - div7.html() * 10,
        "left": leftStart + widthNormal * 6,
        "height": heightStart + div7.html() * 10,
        "backgroundColor": "red"
    });

    div8.css({
        "top": topStart - div8.html() * 10,
        "left": leftStart + widthNormal * 7,
        "height": heightStart + div8.html() * 10,
        "backgroundColor": "yellow"
    });

    div9.css({
        "top": topStart - div9.html() * 10,
        "left": leftStart + widthNormal * 8,
        "height": heightStart + div9.html() * 10,
        "backgroundColor": "darkred"
    });

    buttonStep.css({
        "top": topStart + heightStart + 120,
        "left": leftStart + (widthNormal * 9) / 2 + 20,
        "backgroundColor": "darkgoldenrod"
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
    disableButton(buttonReset);
    algo();

}

function algo() {
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

    switch (schritt) {
        case 1:
            setText('"Quicksort" ist ein Algorithmus, der verwendet wird, um eine Folge von Zahlen zu sortieren.');
            schritt++;
            break;
        case 2:
            enableResetButton();
            setText('Ein Merkmal von Quicksort ist, dass es weniger Vergleiche und Swaps benötigt als andere Algorithmen, so ist es in der Lage, in vielen Fällen schnell zu sortieren.');
            schritt++;
            break;
        case 3:
            // Klammer über die gesamte Zahlenfolge
            showKlammer(0,9);
            setText('Als erstes wird die gesamte Zahlenfolge angeschaut.');
            schritt++;
            break;
        case 4:
            setText('Es wird eine Zahl als Referenz zum sortieren ausgesucht, diese Zahl wird "Pivot" genannt');
            schritt++;
            break;
        case 5:
            setText('Das Pivot wird normalerweise zufällig ausgewählt. Für diesen Fall nehmen wir Einfachkeitshalber die Zahl rechts außen.');
            schritt++;
            break;
        case 6:
            einblenden(pivot, 8);
            setText('Für die Darstellung wird das Pivotelement mit einer Markierung versehen');
            schritt++;
            break;
        case 7:
            setText('Als nächstes wird ein Marker an die Stelle ganz links und ganz rechts gesetzt.');
            einblenden(zeig1, 0);
            einblenden(zeig2, 7);
            schritt++;
            break;
        case 8:
            setText('Der Quicksort Algorithmus verwendet diese Markierungen, um wiederholt Runden von Operationen rekursiv durchzuführen');
            schritt++;
            break;
        case 9:
            setText('Die linke Markierung bewegt sich nach rechts');
            animateItem(zeig1, 1);
            schritt++;
            break;
        case 10:
            animateItem(zeig1, 2);
            schritt++;
            break;
        case 11:
            setText('Wenn die linke Markierung eine Zahl erreicht, die größer oder gleich der Pivotnummer ist, hört sie auf sich zu bewegen.');
            schritt++;
            break;
        case 12:
            setText('In diesem Fall ist 8 größer (oder gleich) 6, so dass die Markierung nicht mehr bewegt wird.');
            setGray(zeig1);
            schritt++;
            break;
        case 13:
            setText('Als nächstes wird sich der rechte Marker nach links bewegen.');
            schritt++;
            break;
        case 14:
            setText('Wenn die rechte Markierung eine Zahl kleiner als die Pivotnummer erreicht, stoppt sie.');
            schritt++;
            break;
        case 15:
            animateItem(zeig2, 6);
            schritt++;
            break;
        case 16:
            setText('4 ist kleiner als 6, also wird der Marker nicht mehr bewegt.');
            setGray(zeig2);
            schritt++;
            break;
        case 17:
            setText('Wenn sowohl die linke als auch die rechte Markierung gestoppt sind, werden die markierten Zahlen vertauscht.');
            swap(div3, 6, div7, 2);
            setZeig1Normal();
            setZeig2Normal();
            schritt++;
            break;
        case 18:
            setText('Auf diese Weise wirkt die linke Markierung, um Zahlen zu finden, die größer oder gleich dem Pivotelemtn sind und der rechte Marker findet Zahlen kleiner als das Pivotelement');
            schritt++;
            break;
        case 19:
            setText('Durch das Vertauschen der Zahlen erhält man die Zahlen die kleiner sind als das Pivot auf der linken Seite der Sequenz und Zahlen, die größer oder gleich sind auf der rechten Seite.');
            schritt++;
            break;
        case 20:
            setText('Nach dem Tausch geht die linke Markierung weiter nach rechts.');
            schritt++;
            break;
        case 21:
            setText('Wie vorher bewegt sich die linke Markierung, bis sie eine Zahl erreicht, die größer oder gleich der Pivotnummer ist.');
            schritt++;
            break;
        case 22:
            animateItem(zeig1, 3);
            schritt++;
            break;
        case 23:
            animateItem(zeig1, 4);
            schritt++;
            break;
        case 24:
            animateItem(zeig1, 5);
            schritt++;
            break;
        case 25:
            setText('9 ist größer oder gleich 6, so dass die Markierung nicht mehr bewegt wird.');
            setGray(zeig1);
            schritt++;
            break;
        case 26:
            setText('Noch einmal wird die rechte Markierung nach links verschoben.');
            schritt++;
            break;
        case 27:
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateItem(zeig2, 5.5);
            schritt++;
            break;
        case 28:
            setText('Die Bewegung stoppt auch, wenn die rechte Markierung in die linke Markierung läuft.');
            setGray(zeig2);
            schritt++;
            break;
        case 29:
            setText('Wenn sowohl die linke als auch die rechte Markierung anhalten und sich in der gleichen Position befinden, wird diese Nummer mit der Pivotnummer vertauscht.');
            schritt++;
            break;
        case 30:
            swap(div6, 8, div9, 5);
            schritt++;
            break;
        case 31:
            setText('Die Zahl die von der linken und rechten Markierung eingenommen wird, kann als vollständig sortiert angesehen werden.');
            setGray(div9);
            schritt++;
            break;
        case 32:
            setText('Damit ist die erste Runde der Operationen abgeschlossen.');
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            schritt++;
            break;
        case 33:
            ausblenden(rahmen);
            schritt++;
            break;
        case 34:
            //Klammer von 3 bis 2
            showKlammer(0,5);
            setText('Es ist uns gelungen, Zahlen die kleiner als das Pivotelement sind auf die linke Seite zu setzen.');
            schritt++;
            break;
        case 35:
            //Klammer von 8 bis 9
            showKlammer(6,3);
            setText('Und Zahlen die größer als das Pivotelement sind auf die rechte Seite zu setzen.');
            schritt++;
            break;
        case 36:
            ausblenden(rahmen);
            setText('Eine weitere Runde von Operationen wird rekursiv auf beiden Sequenzen durchgeführt, die durch die Division erzeugt werden.');
            schritt++;
            break;
        case 37:
            //Klammer von 3 - 2
            showKlammer(0,5);
            setText('Als nächstes werden Operationen auf der Sequenz links von der Division durchgeführt.');
            schritt++;
            break;
        case 38:
            setText('Die 3 Markierungen werden plaziert.');
            einblenden(zeig1, 0);
            setZeig1Normal();
            einblenden(zeig2, 3);
            setZeig2Normal();
            einblenden(pivot, 4);
            schritt++;
            break;
        case 39:
            setText('Der gleiche Vorgang wie zuvor wird durchgeführt.');
            schritt++;
            break;
        case 40:
            setGray(zeig1);
            schritt++;
            break;
        case 41:
            setGray(zeig2);
            schritt++;
            break;
        case 42:
            swap(div1, 3, div4, 0);
            setZeig1Normal();
            setZeig2Normal();
            schritt++;
            break;
        case 43:
            animateItem(zeig1, 1);
            schritt++;
            break;
        case 44:
            setGray(zeig1);
            schritt++;
            break;
        case 45:
            animateItem(zeig2, 2);
            schritt++;
            break;
        case 46:
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateItem(zeig2, 1.5);
            schritt++;
            break;
        case 47:
            setGray(zeig2);
            schritt++;
            break;
        case 48:
            swap(div2, 4, div5, 1);
            schritt++;
            break;
        case 49:
            setGray(div5);
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            schritt++;
            break;
        case 50:
            ausblenden(rahmen);
            setText('Die Runde der Operationen ist abgeschlossen...');
            schritt++;
            break;
        case 51:
            //Klammer auf 1
            showKlammer(0,1);
            setText('und wir konnten die Sequenz weiter unterteilen, in Zahlen die kleiner sind als das Pivotelement auf der linken Seite.');
            schritt++;
            break;
        case 52:
            //Klammer 4 - 5
            showKlammer(2,3);
            setText('Und Zahlen größer als das Pivotelement auf der rechten Seite.');
            schritt++;
            break;
        case 53:
            ausblenden(rahmen);
            setText('Eine weitere Runde von Operationen wird rekursiv wiederholt.');
            schritt++;
            break;
        case 54:
            //Klammmer auf 1
            showKlammer(0,1);
            setText('Die linke Seite der Division wird nun der Operation unterzogen.');
            schritt++;
            break;
        case 55:
            setGray(div4);
            setText('Wenn die Zielsequenz nur eine Zahl hat, wird sie als vollständig sortiert betrachtet.');
            schritt++;
            break;
        case 56:
            //Klammer von 4 - 5
            showKlammer(2,3);
            setText('Nun werden die Operationen auf der rechten Seite durchgeführt, die durch die Zweite Runde der Operationen erzeugt wurde.');
            schritt++;
            break;
        case 57:
            setText('Die 3 Markierungen werden plaziert.');
            einblenden(zeig1, 2);
            setZeig1Normal();
            einblenden(zeig2, 3);
            setZeig2Normal();
            einblenden(pivot, 4);
            schritt++;
            break;
        case 58:
            setText('Die linke Markierung bewegt sich nach rechts.');
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateItem(zeig1, 3);
            animateItem(zeig2, 3.5);
            schritt++;
            break;
        case 59:
            setText('Selbst wenn die linke Markierung in die rechte Markierung fährt, hört sie nicht auf. Sie unterscheidet sich von der rechten Markierung in dieser Hinsicht.');
            setDivHalf(pivot);
            animateItem(zeig1, 4);
            animateItem(pivot, 4.5);
            setZeig2Normal();
            animateItem(zeig2, 3);
            schritt++;
            break;
        case 60:
            setText('Wenn die linke Markierung den rechten Rand der Zielsequenz erreicht, stoppt sie.');
            setGray(zeig1);
            schritt++;
            break;
        case 61:
            setText('Das bedeutet, dass die Pivotnummer die größte Zahl in der Zielsequenz ist.');
            schritt++;
            break;
        case 62:
            setText('Als nächstes würde die rechte Markierung bewegt werden, aber wenn sie von der linken Markierung passiert wurde, endet sie ohne sich zu bewegen.');
            setGray(zeig2);
            schritt++;
            break;
        case 63:
            setText('Wenn die linke Markierung den rechten Rand der Zielsequenz erreicht hat, wird die Pivotnummer als vollständig sortiert angesehen und die Runde der Operationen endet.');
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div2);
            schritt++;
            break;
        case 64:
            ausblenden(rahmen);
            setText('Danach werden die gleichen Vorgänge wiederholt, bis alle Zahlen vollständig sortiert sind.');
            schritt++;
            break;
        case 65:
            //klammer auf 4 & 3
            showKlammer(2,2);
            schritt++;
            break;
        case 66:
            einblenden(zeig1, 2);
            setZeig1Normal();
            einblenden(zeig2, 2.5);
            setZeig2Normal();
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            einblenden(pivot, 3);
            schritt++;
            break;
        case 67:
            setGray(zeig1);
            schritt++;
            break;
        case 68:
            setGray(zeig2);
            schritt++;
            break;
        case 69:
            swap(div1, 2, div7, 3);
            schritt++;
            break;
        case 70:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div1);
            schritt++;
            break;
        case 71:
            ausblenden(rahmen);
            schritt++;
            break;
        case 72:
            //klammer auf 4
            showKlammer(3,1);
            schritt++;
            break;
        case 73:
            setGray(div7);
            schritt++;
            break;
        case 74:
            ausblenden(rahmen);
            schritt++;
            break;
        case 75:
            //Klammer 8 - 9
            showKlammer(6,3);
            schritt++;
            break;
        case 76:
            einblenden(zeig1, 6);
            setZeig1Normal();
            einblenden(zeig2, 7);
            setZeig2Normal();
            einblenden(pivot, 8);
            schritt++;
            break;
        case 77:
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateItem(zeig1, 7);
            animateItem(zeig2, 7.5);
            schritt++;
            break;
        case 78:
            animateItem(zeig2, 7);
            setZeig2Normal();
            setDivHalf(pivot);
            animateItem(zeig1, 8);
            animateItem(pivot, 8.5);
            schritt++;
            break;
        case 79:
            setGray(zeig1);
            schritt++;
            break;
        case 80:
            setGray(zeig2);
            schritt++;
            break;
        case 81:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div6);
            schritt++;
            break;
        case 82:
            ausblenden(rahmen);
            schritt++;
            break;
        case 83:
            //Klammer auf 8 & 7
            showKlammer(6,2);
            schritt++;
            break;
        case 84:
            einblenden(zeig1, 6);
            setZeig1Normal();
            einblenden(zeig2, 6.5);
            setZeig2Normal();
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            einblenden(pivot, 7);
            schritt++;
            break;
        case 85:
            setGray(zeig1);
            schritt++;
            break;
        case 86:
            setGray(zeig2);
            schritt++;
            break;
        case 87:
            swap(div3, 7, div8, 6);
            schritt++;
            break;
        case 88:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div8);
            schritt++;
            break;
        case 89:
            ausblenden(rahmen);
            schritt++;
            break;
        case 90:
            //Klammer auf 8
            showKlammer(7,1);
            schritt++;
            break;
        case 91:
            setGray(div3);
            schritt++;
            break;
        case 92:
            ausblenden(rahmen);
            setText('Alle Zahlen wurden vollständig sortiert.');
            schritt++;
            break;
        case 93:
            setText('Damit ist die Erläuterung von Quicksort abgeschlossen.');
            disableButton($('#buttonNext'));
            break;
    }
}

/*============ Spezielle Methoden für den Algorithmus ============*/
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