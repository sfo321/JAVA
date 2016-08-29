function solve() {

    return function (element, contents) {

        var appendElement,
            div = document.createElement('div'),
            divEl,
            fragment = document.createDocumentFragment();

        if(typeof element === 'string'){
            appendElement = document.getElementById(element);
        }
        else if(element instanceof HTMLElement){
            appendElement = element;
        }
        else{
            throw new Error();
        }

        if(!contents || contents.some(function (contElement) {
                return typeof contElement !== 'string' && typeof contElement !== 'number';
            })){
            throw new Error();
        }

        appendElement.innerHTML = '';

        for(var i = 0; i < contents.length; i += 1){

            divEl = div.cloneNode(true);
            divEl.innerHTML = contents[i];
            fragment.appendChild(divEl);
        }
        appendElement.appendChild(fragment);
    }
}