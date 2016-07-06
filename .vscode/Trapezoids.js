function trapezoids(args){
    var a = +args[0];
    var b = +args[1];
    var h = +args[2];

    var result = ((a + b) / 2) * h;

    console.log(result.toFixed(7));
}
