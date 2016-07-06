function solve(args){

    var str = args[0].split('');
    var counter = 0;
    for(var i = 0; i < str.length; i += 1) {

        if (str[i] === '(') {
            counter += 1;
        }
        if (str[i] === ')') {
            counter -= 1;
        }
        if (counter < 0) {
            return 'Incorrect';
            break;
        }
    }
    if (counter !== 0) {
        return 'Incorrect';
    } else {
        return 'Correct';
    }
}

console.log(solve([')(a+b))']));