function setText(text) {
    var div = $('.textField');
    div.empty();
    div.append(document.createTextNode(text));
}

function disableButton(button) {
    button.css({
        "backgroundColor": "#757575",

    });
}
function animateLeft(div, pos) {
    div.animate({"left": leftStart + widthNormal * pos});
}
function enableResetButton() {
    $('#buttonReset').css({
        "backgroundColor": "limegreen"
    });
}
function setGray(div) {
    div.css("backgroundColor", "#757575");
}
function reset() {
    schritt = 1;
    setText("");
    stylen();
}
function setText(text) {
    var div = $('.textField');
    div.empty();
    div.append(document.createTextNode(text));
}
