function pointCircle(args){
    var x = +args[0];
    var y = +args[1];

    var distance = Math.sqrt((x * x) + (y * y));

    console.log(distance > 2 ? "no " + distance.toFixed(2) : "yes " + distance.toFixed(2))
}
