function solve(){
    return function (element, contents) {

        if(typeof element === 'string'){
            element = document.getElementById(element);
        }
        if(!element || !(element instanceof HTMLElement)){
            throw new Error();
        }

        var fragment = document.createDocumentFragment(),
            len = contents.length, content, div, i;

        for(i = 0; i < len; i += 1){
            content = contents[i];
            if(typeof content !== 'string' && typeof content !== 'number'){
                throw new Error();
            }
            div = document.createElement('div');
            div.innerHTML = content;
            fragment.appendChild(div);
        }
        element.innerHTML = '';
        element.appendChild(fragment);
    }
}
