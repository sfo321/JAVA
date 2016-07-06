function solve(args){
    var a = +args[0];
    var b = +args[2];

    for(var i = 0; i < 3; i += 1){
        if(a < +args[i]){
            a = +args[i];
        }
        if(b > +args[2 - i]){
            b = +args[2 - i];
        }
    }
    var c = +args[3 - 
    (args.indexOf(a.toString())
    + args.indexOf(b.toString()))];
    
    console.log(a + ' ' + c + ' ' + b);
}

solve(['-2', '-2', '1'])