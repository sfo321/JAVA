function solve() {
    return function (selector) {
        var element;
        if (selector instanceof HTMLElement) {
            element = document.getElementsByTagName(selector);
        }
        else if (typeof selector == 'string') {
            element = document.getElementById(selector);
        }

        if (element) {
            var elementsClassBtn = document.getElementsByClassName('button');
            for (var i = 0, len = elementsClassBtn.length; i < len; i+=1) {
                elementsClassBtn[i].innerHTML = 'hide';
            }

            element.addEventListener('click', function (e) {
                if (e.target.className == 'button') {
                    var clickedBtn = e.target;
                    var next = clickedBtn.nextElementSibling;

                    if (next.className == 'content') {
                        if (next.style.display != 'none') {
                            next.style.display = 'none';
                            clickedBtn.innerHTML = 'show';
                        }
                        else {
                            next.style.display = '';
                            clickedBtn.innerHTML = 'hide';
                        }
                    }
                }
            }, false);
            return;
        }

        throw new Error();
    };
};

module.exports = solve;
