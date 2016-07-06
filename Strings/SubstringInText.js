function solve(args){

    var word = args[0]//.toLowerCase();
    var pattern = args[1]//.toLowerCase();

    var temp = new RegExp(word, 'ig');

    console.log(pattern.match(temp).length);
}

solve([
    'in',
    'We are living in an yellow submarine. We don\'t have ' +
    'anything else. inside the submarine is very tight. So we are ' +
    'drinking all the day. We will move out of it in 5 days.'
])