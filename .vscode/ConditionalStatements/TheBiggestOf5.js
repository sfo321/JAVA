function solve(args){

    var a = +args[0];

    for(var i = 1; i < 5; i += 1){
        if(a < +args[i]){
            a = +args[i];
        }
    }
    return a;
}