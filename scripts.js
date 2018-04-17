var tag = document.querySelector("#about-schema3");
var counter = 0;

function changeColor() {
    nIntervId = setInterval(flashText, 1000);
}

function flashText() {
    if (counter == 0) {
        tag.textContent = "vision";
    }
    if (counter == 1) {
        tag.textContent = "project";
    }
    if (counter == 2) {
        tag.textContent = "ideas";
    }
    if (counter == 3) {
        tag.textContent = "film";
    }
    if (counter == 4) {
        tag.textContent = "commercial";
    }
    if (counter == 5) {
        tag.textContent = "animatic";
    }
    if (counter == 6) {
        tag.textContent = "storyboard";
        counter = -1;
    }
    counter++;
}
changeColor();

function chgImg(_src) {
    var img = document.querySelector(".sketchMain");
    var test = _src.height;
    var scaling = (550 * (_src.width / test));
    img.setAttribute("height", "550px");
    img.setAttribute("width", scaling);
    img.setAttribute("src", _src);
}

function rollover(myImage) {
    myImage.src = myImage.alt;
}

function rollaway(myImage) {
    myImage.src = myImage.id;
}

document.querySelector("#allAbout").style.background = "url(imgs/zenbkg2.jpg) no-repeat";

var _bigImage = document.querySelector("#allAbout").offsetTop;
window.onscroll = function() {
    console.log("WORKING");
    //BOTTOM END FADE OUT
    if (window.pageYOffset > 1319) {
        var opac = ((window.pageYOffset - 1320) * 0.006);
        document.querySelector("#allAbout").style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(imgs/zenbkg2.jpg) no-repeat";
    }
}

function testJS() {
    console.log("Testing JS");
}
testJS();

$(document).ready(function() {
    var $body = $('body'); //Cache this for performance

    var setBodyScale = function() {
        var scaleSource = $body.width(),
            scaleFactor = 0.75,
            maxScale = 600,
            minScale = 350; //Tweak these values to taste

        var fontSize = scaleSource * scaleFactor; //Multiply the width of the body by the scaling factor:

        if (fontSize > maxScale) fontSize = maxScale;
        if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums

        $('body').css('font-size', fontSize + '%');
    }

    $(window).resize(function() {
        setBodyScale();
    });

    //Fire it when the page first loads:
    setBodyScale();
});
