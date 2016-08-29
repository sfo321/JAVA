function solve() {
    return function (selector) {

        var element;

        if(typeof selector === 'string'){
            element = document.getElementById(selector);
        }
        else if(selector instanceof HTMLElement){
            element = selector;
        }
        else{
            throw new Error();
        }

        var buttons = element.getElementsByClassName('button');

        for(var i = 0; i < buttons.length; i += 1){
            buttons[i].innerHTML = 'hide';
        }

        element.addEventListener('click', func, false);

        function func(ev){
            if(ev.target.className === 'button'){
                var clButt = ev.target;
                var next = nextel(clButt, 'content');


                if(next.className === 'content'){
                    if(next.style.display != 'none'){
                        next.style.display = 'none';
                        clButt.innerHTML = 'show';
                    }
                    else{
                        next.style.display = '';
                        clButt.innerHTML = 'hide';
                    }
                }
            }
        }

        function nextel(elem, str){
            var nextelem = elem.nextElementSibling;
            while(nextelem.className !== str){
                nextelem = nextelem.nextElementSibling;
            }
            return nextelem;
        }

    };
};