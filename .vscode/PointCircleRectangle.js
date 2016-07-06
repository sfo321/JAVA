function PCR(args){
    var x = +args[0];
    var y = +args[1];

    var isCircle = true;
    var isRectangle = false;

    if(Math.sqrt(((x - 1) * (x - 1)) + ((y - 1) * (y - 1))) > 1.5){
        isCircle = false;
    }

    if((x >= -1 && x <= 5) && (y <= 1 && y >= -1)){
        isRectangle = true;
    }

    var c = isCircle ? "inside circle" : "outside circle";
    var r = isRectangle ? "inside rectangle" : "outside rectangle";

    console.log(c + " " + r);
}
