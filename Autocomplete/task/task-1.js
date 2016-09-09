/* globals document, window, console */

function solve() {
    return function(selector, initialSuggestions) {
        var root = document.querySelector(selector),
        input = root.getElementsByClassName('tb-pattern')[0],
        button = root.getElementsByClassName('btn-add')[0],
        ul = root.getElementsByClassName('suggestions-list')[0],
        lia = document.createElement('li');
        
        lia.className = 'suggestion';
        lia.style.display = 'none';
        var aa = document.createElement('a');
        aa.className = 'suggestion-link';
        aa.href = '#';

        initialSuggestions = initialSuggestions || [];

        for(var i = 0, len = initialSuggestions.length; i < len; i += 1) {
            var children = ul.getElementsByTagName('li');
            var text = initialSuggestions[i];
            if(check(text, children)) {
                var li = lia.cloneNode(true);
                var a = aa.cloneNode(true);
                a.innerHTML = initialSuggestions[i];
                li.appendChild(a);
                ul.appendChild(li);
            }
        }

        input.addEventListener('input', function(ev){
            var text = ev.target.value;
            var children = ul.getElementsByTagName('li');
            if(text === ''){
                ul.style.display = 'none';
                return;
            }

            ul.style.display = '';

            for(var i = 0, len = children.length; i < len; i += 1) {
                var currentLi = children[i];
                var selected = currentLi.firstElementChild.innerHTML;
                if (selected.toLowerCase().indexOf(text.toLowerCase()) >= 0) {
                    currentLi.style.display = '';
                }
                else {
                    currentLi.style.display = 'none';
                }
                if(text === ''){
                    currentLi.style.display = 'none';
                }
            }
        }, false);

        function check(text, children){
            for (var i = 0, len = children.length; i < len; i += 1) {
                var child = children[i];
                var selected = child.firstElementChild.innerHTML;
                if (text.toLowerCase() === selected.toLowerCase()) {
                    return false;
                }
            }
            return true;
        }

        button.addEventListener('click', function(ev){
            if(ev.target.className === 'btn-add') {
                var text = input.value;
                input.value = '';
                ul.style.display = 'none';
                if (text !== '') {
                    var children = ul.getElementsByTagName('li');
                    if (check(text, children)) {
                        var newli = lia.cloneNode(true);
                        var newa = aa.cloneNode(true);
                        newa.innerHTML = text;
                        newli.appendChild(newa);
                        ul.appendChild(newli);
                    }
                }
            }

        }, false);

        ul.addEventListener('click', function(ev){

            if(ev.target.className === 'suggestion-link'){
                input.value = ev.target.innerHTML;
                ev.preventDefault();
            }
        }, false);
    };
}

module.exports = solve;