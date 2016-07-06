function solve(args){
    var a = +args[0];

    for(var i = 1; i < 3; i += 1){
        if(a < +args[i]){
            a = +args[i];
        }
    }
    console.log(a);
}

solve([2, 5, 6]);