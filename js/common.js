$("#polzunok").slider({
    // animate: "fast",
    range: "min",
    value: 0,
    step: 25
});

$('.ellipse-list__item_1').click(function() {
    $("#polzunok").slider("value", 0);
});
$('.ellipse-list__item_2').click(function() {
    $("#polzunok").slider("value", 25);
});
$('.ellipse-list__item_3').click(function() {
    $("#polzunok").slider("value", 50);
});
$('.ellipse-list__item_4').click(function() {
    $("#polzunok").slider("value", 75);
});
$('.ellipse-list__item_5').click(function() {
    $("#polzunok").slider("value", 100);
});

var arr = [];

function addElclass(elCount, typeBool) {
    if (typeBool) {
        $('.ellipse-list__item').removeClass('is-active');
    }
    for (var i = 1; i < elCount; i++) {
        var elem = '.ellipse-list__item_';
        var elemCurrent = elem + i;
        $(elemCurrent).addClass('is-active');
    }
}

$("#polzunok").on("slide", function(event, ui) {

    var selection = $(this).slider("value");

    var mouse_x = window.event.clientX;
    arr.push(mouse_x);

    if (arr.length > 1) {
        var current = arr[arr.length - 1];
        var prev = arr[arr.length - 2];
        arr.splice(-2, 1);
    }

    $('.ellipse-list__item').removeClass('is-active');

    if (selection == 0) {
        $('.ellipse-list__item_1').addClass('is-active');
    }

    if (selection == 25) {
        if (current <= prev) {
            $('.ellipse-list__item').removeClass('is-active');
        } else {
            addElclass(3, false);
        }
    }

    if (selection == 50) {
        if (current <= prev) {
            addElclass(3, true);
        } else {
            addElclass(4, false);
        }
    }

    if (selection == 75 || selection == 100) {
        if (current <= prev) {
            addElclass(4, true);
        } else {
            addElclass(5, false);
        }
    }
});

$("#polzunok").on("slidechange", function(event, ui) {
    var selection = $("#polzunok").slider("value");
    $('.ellipse-list__item').removeClass('is-active');
    if (selection == 25) {
        addElclass(2, false);
    }
    if (selection == 50) {
        addElclass(3, false);
    }
    if (selection == 75) {
        addElclass(4, false);
    }
    if (selection == 100) {
        addElclass(5, false);
    }
});
