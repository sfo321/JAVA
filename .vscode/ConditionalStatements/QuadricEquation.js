function solve(args){
    var a = +args[0];
    var b = +args[1];
    var c = +args[2];

    var d = (b * b - (4 * a * c));

    if( d < 0){
        return 'no real roots';
    }
    if(d === 0){
        var result = (-b / (2 * a));
        return 'x1=x2=' + result.toFixed(2);
    }
    var res1 = ((-b - Math.sqrt(d)) / (2 * a));
    var res2 = ((-b + Math.sqrt(d)) / (2 * a));

    if(res1 < res2){
        return'x1=' + res1.toFixed(2) + '; ' + 'x2=' + res2.toFixed(2);
    }
    if(res1 > res2){
        return'x1=' + res2.toFixed(2) + '; ' + 'x2=' + res1.toFixed(2);
    }
}
