/*
    HW6 Starter code
     Modified from: https://codepen.io/cathydutton/pen/GBcvo
Name: Alex Sautereau
     Last modified: Oct 23rd: 7: 45pm
COURSE: WEB DEVELOPMENT
*/

$(document).ready(function () {
    var seconds = "00";
    var tens = "00";

    var $appendTens = $("#tens");
    var $appendSeconds = $("#seconds");
    var $buttonStart = $('#button-start');
    var $buttonStop = $('#button-stop');
    var $buttonReset = $('#button-reset');
    var $timer = $("#timer");
    var interval;
    var opacityInterval;

    $buttonStart.addClass("button-style");
    $buttonStop.addClass("button-style");
    $buttonReset.addClass("button-style");

    $timer.addClass("timer-background styled-border styled-text");

    $buttonStart.click(function () {
        clearInterval(interval);
        clearInterval(opacityInterval);
        interval = setInterval(startTimer, 10);
        animateOpacity();
        $timer.removeClass("timer-background timer-paused").addClass("timer-running");
    });

    $buttonStop.click(function () {
        clearInterval(interval);
        clearInterval(opacityInterval);
        $timer.css("opacity", "1.0");
        if (seconds !== "00" || tens !== "00") {
            $timer.removeClass("timer-running timer-background").addClass("timer-paused");
        }
    });

    $buttonReset.click(function () {
        clearInterval(interval);
        clearInterval(opacityInterval);
        tens = "00";
        seconds = "00";
        $appendTens.html(tens);
        $appendSeconds.html(seconds);
        $timer.removeClass("timer-running timer-paused").addClass("timer-background");
        $timer.css("opacity", "1.0");
    });

    function animateOpacity() {
        var isFadingOut = true;
        opacityInterval = setInterval(function () {
            var currentOpacity = parseFloat($timer.css("opacity"));
            if (isFadingOut) {
                currentOpacity -= 0.01;
                if (currentOpacity <= 0.8) {
                    isFadingOut = false;
                }
            } else {
                currentOpacity += 0.01;
                if (currentOpacity >= 1.0) {
                    isFadingOut = true;
                }
            }
            $timer.css("opacity", currentOpacity);
        }, 50);
    }

    function startTimer() {
        tens++;

        if (tens < 9) {
            $appendTens.html("0" + tens);
        }

        if (tens > 9) {
            $appendTens.html(tens);
        }

        if (tens > 99) {
            seconds++;
            $appendSeconds.html("0" + seconds);
            tens = 0;
            $appendTens.html("00");
        }

        if (seconds > 9) {
            $appendSeconds.html(seconds);
        }
    }
});
