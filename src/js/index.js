let main = document.getElementsByClassName("main-content");
let pTags = main[0].getElementsByTagName("p");

document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < pTags.length; i++) {
        const element = pTags[i];
        animateText(element, 3000, element.innerText);
        console.log(element);
    }
 });

function animateText(element, dur, text) {
    var from = 0;
    var to = text.length;
    var duration = dur || 1000;
    var start = new Date().getTime();

    setTimeout(function () {
        var now = new Date().getTime() - start;
        var progress = now / duration;
        if (progress > 1) var result = to;
        else var result = (to - from) * delta(progress) + from;

        element.innerText = text.substr(0, Math.ceil(result));

        if (progress < 1) setTimeout(arguments.callee, 10);
    }, 10);
}

function delta(progress) {
    function d(progress) {
       for(var a = 0, b = 1, result; 1; a += b, b /= 2) {
          if (progress >= (7 - 4 * a) / 11)
              return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
       }
    }
    return 1 - d(1 - progress);
}
