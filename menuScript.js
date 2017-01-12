$(document).ready(function () {
    $("nav ul li").hover(function () {
        $(this).children("ul").stop().slideDown(200);
    }, function () {
        $(this).children("ul").stop().slideUp(200);
    });

    $('#insertionSort').click(function () {
        $('#content').animate({"opacity": 0}, "slow", function () {
            $('#content').load("insertionSort/insertionSort.html", function () {
                $('#content').animate({"opacity": 1}, "slow");
            });
        });

    });
    $('#bubbleSort').click(function () {
        $('#content').animate({"opacity": 0}, "slow", function () {
            $('#content').load("bubbleSort/bubbleSort.html", function () {
                $('#content').animate({"opacity": 1}, "slow");
            });
        });
    });
    $('#quicksortAverage').click(function () {
        $('#content').animate({"opacity": 0}, "slow", function () {
            $('#content').load("quickSort/quicksort.html", function () {
                $('#content').animate({"opacity": 1}, "slow");
            });
        });
    });
    $('#quicksortWorst').click(function () {
        $('#content').animate({"opacity": 0}, "slow", function () {
            $('#content').load("quickSort/quicksortWorst.html", function () {
                $('#content').animate({"opacity": 1}, "slow");
            });
        });
    });
    $('#mergeSort').click(function () {
        $('#content').animate({"opacity": 0}, "slow", function () {
            $('#content').load("mergeSort/mergeSort.html", function () {
                $('#content').animate({"opacity": 1}, "slow");
            });
        });
    });
    $('#linearSearch').click(function () {
        $('#content').animate({"opacity": 0}, "slow", function () {
            $('#content').load("################", function () {
                $('#content').animate({"opacity": 1}, "slow");
            });
        });
    });

    $('#binarySearch').click(function () {
        $('#content').animate({"opacity": 0}, "slow", function () {
            $('#content').load("binarySearch/binarySearch.html", function () {
                $('#content').animate({"opacity": 1}, "slow");
            });
        });
    });


    /* Codesegment zum einfügen neuer Algorithmen

     $('#ID des <li> Elements').click(function () {
        $('#content').animate({"opacity": 0}, "slow", function () {
            $('#content').load("Ordnername/Dateiname.html", function () {
                $('#content').animate({"opacity": 1}, "slow");
            });
        });
     });
     */

});

