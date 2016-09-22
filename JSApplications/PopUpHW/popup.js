(function () {
    function unfade(element) {
        var op = 0.1;  // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 20);
    }

    function popupFunc(resolve) {
        let popup = document.getElementById('popup');
        unfade(popup);

        resolve(popup);
    }

    function redirectToTelerikAcademy() {
        setTimeout(function () {
            let src = 'http://telerikacademy.com/';
            window.location = src;
        }, 2000);

    }

    let popupPromise = new Promise(popupFunc);
    popupPromise
        .then(redirectToTelerikAcademy);
})();