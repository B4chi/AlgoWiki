/**
 * Created by Eric on 05.01.2017.
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
    })
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

    var buttonNext = $('#buttonNext');
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

    buttonNext.css({
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
    var zeig1 = $('#zeig1');
    var zeig2 = $('#zeig2');
    var pivot = $('#pivot');

    switch (schritt) {
        case 1:
            setText('"Quicksort" ist ein Algorithmus, der verwendet wird, um eine Folge von Zahlen zu sortieren.');
            schritt++;
            break;
        case 2:
            setText('In diesem Fall wird der worst case von Quicksort dargestellt');
            enableResetButton();
            schritt++;
            break;
        case 3:
            showKlammer(1,9);
            setText('Wenn Quicksort eine sortierte Liste bekommt, muss in jedem Ablauf die gesamte Liste betrachtet werden, was zu einer schlechten Effizienz führt');
            schritt++;
            break;
        case 4:
            setText('Es wird eine Zahl als Referenz zum sortieren ausgesucht, diese Zahl wird "Pivot" genannt');
            schritt++;
            break;
        case 5:
            setText('Das Pivot wird normalerweise zufällig ausgewählt. In diesem Fall wird immer die Zahl rechts außen gewählt.');
            einblenden(pivot,9);
            schritt++;
            break;
        case 6:
            setText('Als nächstes wird ein Marker an die Stelle ganz links und ganz rechts gesetzt.');
            einblenden(zeig1,1);
            einblenden(zeig2,8);
            schritt++;
            break;
        case 7:
            setText('Der Quicksort Algorithmus verwendet diese Markierungen, um wiederholt Runden von Operationen rekursiv durchzuführen.');
            schritt++;
            break;
        case 8:
            setText('Die linke Markierung bewegt sich nach rechts.');
            animateLeft(zeig1,1);
            schritt++;
            break;
        case 9:
            animateLeft(zeig1,2);
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
            animateLeft(zeig1,6);
            schritt++;
            break;
        case 14:
            setText('Selbst wenn die linke Markierung in die rechte Markierung fährt, hört sie nicht auf. Sie unterscheidet sich von der rechten Markierung in dieser Hinsicht.');
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateLeft(zeig1,7);
            animateLeft(zeig2,7.5);
            schritt++;
            break;
        case 15:
            setText('Wenn die linke Markierung eine Zahl erreicht, die größer oder gleich der Pivotnummer ist, hört sie auf sich zu bewegen.');
            setDivHalf(pivot);
            animateLeft(zeig1,8);
            animateLeft(pivot,8.5);
            setZeig2Normal();
            animateLeft(zeig2,7);
            schritt++;
            break;
        case 16:
            setText('Wenn die linke Markierung den rechten Rand der Zielsequenz erreicht, stoppt sie.');
            schritt++;
            break;
        case 17:
            setText('Das bedeutet, dass die Pivotnummer die größte Zahl in der Zielsequenz ist.');
            setGray(zeig1);
            schritt++;
            break;
        case 18:
            setText('Als nächstes würde die rechte Markierung bewegt werden, aber wenn sie von der linken Markierung passiert wurde, endet sie ohne sich zu bewegen.');
            setGray(zeig2);
            schritt++;
            break;
        case 19:
            setText('Wenn die linke Markierung den rechten Rand der Zielsequenz erreicht hat, wird die Pivotnummer als vollständig sortiert angesehen und die Runde der Operationen endet.');
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div8);
            schritt++;
            break;
        case 20:
            setText('Danach werden die Vorgänge wiederholt, bis alle Zahlen vollständig sortiert sind.');
            klammerAusblenden();
            schritt++;
            break;
        case 21:
            setText('In unserem Fall sind die Zahlen schon sortiert und der Vorgang wird so oft wiederholt bis alle Zahlen abgearbeitet sind.');
            schritt++;
            break;
        case 22:
            showKlammer(1,8);
            schritt++;
            break;
        case 23:
            einblenden(pivot,8);
            schritt++;
            break;
        case 24:
            setZeig2Normal();
            setZeig1Normal();
            einblenden(zeig1,1);
            einblenden(zeig2,7);
            schritt++;
            break;
        case 25:
            animateLeft(zeig1,1);
            schritt++;
            break;
        case 26:
            animateLeft(zeig1,2);
            schritt++;
            break;
        case 27:
            animateLeft(zeig1,3);
            schritt++;
            break;
        case 28:
            animateLeft(zeig1,4);
            schritt++;
            break;
        case 29:
            animateLeft(zeig1,5);
            schritt++;
            break;
        case 30:
            setDivHalf(zeig1);
            animateLeft(zeig1,6);
            setDivHalf(zeig2);
            animateLeft(zeig2,6.5);
            schritt++;
            break;
        case 31:
            setDivHalf(pivot);
            animateLeft(pivot,7.5);
            animateLeft(zeig1,7);
            setZeig2Normal();
            animateLeft(zeig2,6);
            schritt++;
            break;
        case 32:
            setGray(zeig1);
            schritt++;
            break;
        case 33:
            setGray(zeig2);
            schritt++;
            break;
        case 34:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div6);
            schritt++;
            break;
        case 35:
            klammerAusblenden();
            schritt++;
            break;
        case 36:
            showKlammer(1,7);
            schritt++;
            break;
        case 37:
            einblenden(pivot,7);
            schritt++;
            break;
        case 38:
            setZeig2Normal();
            setZeig1Normal();
            einblenden(zeig1,1);
            einblenden(zeig2,6);
            schritt++;
            break;
        case 39:
            animateLeft(zeig1,1);
            schritt++;
            break;
        case 40:
            animateLeft(zeig1,2);
            schritt++;
            break;
        case 41:
            animateLeft(zeig1,3);
            schritt++;
            break;
        case 42:
            animateLeft(zeig1,4);
            schritt++;
            break;
        case 43:
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateLeft(zeig1,5);
            animateLeft(zeig2,5.5);
            schritt++;
            break;
        case 44:
            setDivHalf(pivot);
            animateLeft(zeig1,6);
            animateLeft(pivot,6.5);
            setZeig2Normal();
            animateLeft(zeig2,5);
            schritt++;
            break;
        case 45:
            setGray(zeig1);
            schritt++;
            break;
        case 46:
            setGray(zeig2);
            schritt++;
            break;
        case 47:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div4);
            schritt++;
            break;
        case 48:
            klammerAusblenden();
            schritt++;
            break;
        case 49:
            showKlammer(1,6);
            schritt++;
            break;
        case 50:
            einblenden(pivot,6);
            schritt++;
            break;
        case 51:
            setZeig2Normal();
            setZeig1Normal();
            einblenden(zeig1,1);
            einblenden(zeig2,5);
            schritt++;
            break;
        case 52:
            animateLeft(zeig1,1);
            schritt++;
            break;
        case 53:
            animateLeft(zeig1,2);
            schritt++;
            break;
        case 54:
            animateLeft(zeig1,3);
            schritt++;
            break;
        case 55:
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateLeft(zeig1,4);
            animateLeft(zeig2,4.5);
            schritt++;
            break;
        case 56:
            setDivHalf(pivot);
            animateLeft(zeig1,5);
            animateLeft(pivot,5.5);
            setZeig2Normal();
            animateLeft(zeig2,4);
            schritt++;
            break;
        case 57:
            setGray(zeig1);
            schritt++;
            break;
        case 58:
            setGray(zeig2);
            schritt++;
            break;
        case 59:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div7);
            schritt++;
            break;
        case 60:
            klammerAusblenden();
            schritt++;
            break;
        case 61:
            showKlammer(1,5);
            schritt++;
            break;
        case 62:
            einblenden(pivot,5);
            schritt++;
            break;
        case 63:
            setZeig2Normal();
            setZeig1Normal();
            einblenden(zeig1,1);
            einblenden(zeig2,4);
            schritt++;
            break;
        case 64:
            animateLeft(zeig1,1);
            schritt++;
            break;
        case 65:
            animateLeft(zeig1,2);
            schritt++;
            break;
        case 66:
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateLeft(zeig1,3);
            animateLeft(zeig2,3.5);
            schritt++;
            break;
        case 67:
            setDivHalf(pivot);
            animateLeft(zeig1,4);
            animateLeft(pivot,4.5);
            setZeig2Normal();
            animateLeft(zeig2,3);
            schritt++;
            break;
        case 68:
            setGray(zeig1);
            schritt++;
            break;
        case 69:
            setGray(zeig2);
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
            klammerAusblenden();
            schritt++;
            break;
        case 72:
            showKlammer(1,4);
            schritt++;
            break;
        case 73:
            einblenden(pivot,4);
            schritt++;
            break;
        case 74:
            setZeig2Normal();
            setZeig1Normal();
            einblenden(zeig1,1);
            einblenden(zeig2,3);
            schritt++;
            break;
        case 75:
            animateLeft(zeig1,1);
            schritt++;
            break;
        case 76:
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateLeft(zeig1,2);
            animateLeft(zeig2,2.5);
            schritt++;
            break;
        case 77:
            setDivHalf(pivot);
            animateLeft(zeig1,3);
            animateLeft(pivot,3.5);
            setZeig2Normal();
            animateLeft(zeig2,2);
            schritt++;
            break;
        case 78:
            setGray(zeig1);
            schritt++;
            break;
        case 79:
            setGray(zeig2);
            schritt++;
            break;
        case 80:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div3);
            schritt++;
            break;
        case 81:
            klammerAusblenden();
            schritt++;
            break;
        case 82:
            showKlammer(1,3);
            schritt++;
            break;
        case 83:
            einblenden(pivot,3);
            schritt++;
            break;
        case 84:
            setZeig2Normal();
            setZeig1Normal();
            einblenden(zeig1,1);
            einblenden(zeig2,2);
            schritt++;
            break;
        case 85:
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            animateLeft(zeig1,1);
            animateLeft(zeig2,1.5);
            schritt++;
            break;
        case 86:
            setDivHalf(pivot);
            animateLeft(zeig1,2);
            animateLeft(pivot,2.5);
            setZeig2Normal();
            animateLeft(zeig2,1);
            schritt++;
            break;
        case 87:
            setGray(zeig1);
            schritt++;
            break;
        case 88:
            setGray(zeig2);
            schritt++;
            break;
        case 89:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div2);
            schritt++;
            break;
        case 90:
            klammerAusblenden();
            schritt++;
            break;
        case 91:
            showKlammer(1,2);
            schritt++;
            break;
        case 92:
            einblenden(pivot,2);
            schritt++;
            break;
        case 93:
            setZeig2Normal();
            setZeig1Normal();
            einblenden(zeig1,1);
            einblenden(zeig2,1.5);
            setDivHalf(zeig1);
            setDivHalf(zeig2);
            schritt++;
            break;
        case 94:
            setDivHalf(pivot);
            animateLeft(zeig1,1);
            animateLeft(pivot,1.5);
            setZeig2Normal();
            animateLeft(zeig2,0);
            schritt++;
            break;
        case 95:
            setGray(zeig1);
            schritt++;
            break;
        case 96:
            setGray(zeig2);
            schritt++;
            break;
        case 97:
            ausblenden(zeig1);
            ausblenden(zeig2);
            ausblenden(pivot);
            setGray(div5);
            schritt++;
            break;
        case 98:
            klammerAusblenden();
            schritt++;
            break;
        case 99:
            showKlammer(1,1);
            setText('Wenn die Zielsequenz nur eine Zahl hat, wird sie als vollständig sortiert betrachtet.');
            schritt++;
            break;
        case 100:
            setGray(div9);
            schritt++;
            break;
        case 101:
            klammerAusblenden();
            setText('Alle Zahlen wurden vollständig abgearbeitet');
            schritt++;
            break;
        case 102:
            setText('Damit ist die Darstellung des worst case abgeschlossen und man merkt das es sich um die schlechteste Effizienz handelt.');
            disableButton($('#buttonNext'));
            break;
    }
}


/*============ Spezielle Methoden für den Algorithmus ============*/
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
        "left": leftStart + widthNormal * (pos -1),
        "width": widthNormal * 0.8
    })
}
function showKlammer(pos,wid) {
    var rahmen = $('#rahmenQS');
    rahmen.css({
        "display": "initial",
        "left": leftStart - 5 + widthNormal * (pos - 1),
        "width": widthNormal * wid
    })
}
function klammerAusblenden() {
    var rahmen = $('#rahmenQS');
    rahmen.css({"display": "none"})
}

