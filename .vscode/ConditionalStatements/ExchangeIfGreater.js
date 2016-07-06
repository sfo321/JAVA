function solve(args){
    var a = +args[0];
    var b = +args[1];

    if(a > b){
        var temp = a;
        a = b;
        b = temp;
    }
    console.log(a + ' ' + b);
}


solve([4, 3])