var div = document.getElementById('main');
var fragment = document.createDocumentFragment();

var input = document.createElement("input");
input.value = "home";
input.id = "home";
input.style.display = 'initial';

var span = document.createElement('span');

var button = document.createElement("button");
button.innerHTML = "X";
button.style.margin = '10px';

fragment.appendChild(input);
fragment.appendChild(span);
fragment.appendChild(button);

div.appendChild(fragment);

div.addEventListener('click', doit, false);
div.addEventListener('mouseover', kuku, false);
div.addEventListener('mouseout', kukur, false);



function doit(ev) {

    if(ev.target === button) {

        if (parseInt(input.style.width) !== 0) {
            animate(input, 2, 170, 0, 2);
            return;
        }
        
        if (parseInt(input.style.width) === 0) {
            animate(input, 2, 0, 170, 2);
            return;
        }
    }
}

function kuku(ev){
    console.log(parseInt(input.style.height));
    if(ev.target === input){
        input.style.display = "block";
        input.style.width = "170px";
        input.style.height = "150px";
        return;
    }
}

function kukur(ev) {
    if (ev.target === input) {
        input.style.display = "initial";
        input.style.width = "170px";
        animate(input, 2, 150, 15, 1);
        return;
    }
}
function animate(element, speed, initialsize, endsize, coord) {

    var dir;
    if(endsize < initialsize){
        dir = -1;
    }
    else{
        dir = 1;
    }

    if(coord === 1) {

        var timer = setInterval(function () {
            if (parseInt(element.style.height) === endsize) {
                clearInterval(timer);
                return;
            }
            element.style.height = (parseInt(element.style.height || 0) + dir) + 'px'}, speed);
    }

    if(coord === 2) {
        var timer = setInterval(function () {
            if (parseInt(element.style.width) === endsize) {
                clearInterval(timer);
                return;
            }
            element.style.width = (parseInt(element.style.width || 0) + dir) + 'px'}, speed);
    }
}