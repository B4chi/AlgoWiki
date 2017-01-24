$(document).ready(function () {
    $("nav ul li").hover(function () {
        $(this).children("ul").stop().slideDown(200);
    }, function () {
        $(this).children("ul").stop().slideUp(200);
    });



    $('#insertionSort').click(function () {
        deselect();
        $('#insertionSort').addClass('selected');
        $('#content').animate({"opacity": 0}, "slow", function () {
            $('#content').load("insertionSort/insertionSort.html", function () {
                $('#content').animate({"opacity": 1}, "slow");
            });
        });

    });
    $('#bubbleSort').click(function () {
        deselect();
        $('#bubbleSort').addClass('selected');
        $('#content').animate({"opacity": 0}, "slow", function () {
            $('#content').load("bubbleSort/bubbleSort.html", function () {
                $('#content').animate({"opacity": 1}, "slow");
            });
        });
    });
    $('#quicksortAverage').click(function () {
        deselect();
        $('#quickSort').addClass('selected');
        $('#quicksortAverage').addClass('selected');
        $('#content').animate({"opacity": 0}, "slow", function () {
            $('#content').load("quickSort/quicksort.html", function () {
                $('#content').animate({"opacity": 1}, "slow");
            });
        });
    });
    $('#quicksortWorst').click(function () {
        deselect();
        $('#quickSort').addClass('selected');
        $('#quicksortWorst').addClass('selected');

        $('#content').animate({"opacity": 0}, "slow", function () {
            $('#content').load("quickSort/quicksortWorst.html", function () {
                $('#content').animate({"opacity": 1}, "slow");
            });
        });
    });
    $('#mergeSort').click(function () {
        deselect();
        $('#mergeSort').addClass('selected');

        $('#content').animate({"opacity": 0}, "slow", function () {
            $('#content').load("mergeSort/mergeSort.html", function () {
                $('#content').animate({"opacity": 1}, "slow");
            });
        });
    });


    $('#binarySearch').click(function () {
        deselect();
        $('#binarySearch').addClass('selected');
        $('#searchAlgorithm').addClass('selected');

        $('#content').animate({"opacity": 0}, "slow", function () {
            $('#content').load("binarySearch/binarySearch.html", function () {
                $('#content').animate({"opacity": 1}, "slow");
            });
        });
    });


    $('#linearSearch').click(function () {
        deselect();
        $('#linearSearch').addClass('selected');
        $('#content').animate({"opacity": 0}, "slow", function () {
            $('#content').load("linearSearch/linearSearch.html", function () {
                $('#content').animate({"opacity": 1}, "slow");
            });
        });
    });


    /* Codesegment zum einfügen neuer Algorithmen

     $('#ID des <li> Elements').click(function () {
     deselect();
     $('#ID des Listenelements in der Navigationsleiste').addClass('selected');
     $('#content').animate({"opacity": 0}, "slow", function () {
            $('#content').load("Ordnername/Dateiname.html", function () {
                $('#content').animate({"opacity": 1}, "slow");
            });
        });
     });

     */

});

function deselect() {
    $('#insertionSort').removeClass('selected');
    $('#bubbleSort').removeClass('selected');
    $('#quicksortAverage').removeClass('selected');
    $('#quickSort').removeClass('selected');
    $('#quicksortWorst').removeClass('selected');
    $('#mergeSort').removeClass('selected');
    $('#searchAlgorithm').removeClass('selected');
    $('#binarySearch').removeClass('selected');

    // $('#ID des Listenelements in der Navigationsleiste').removeClass('selected');


}

