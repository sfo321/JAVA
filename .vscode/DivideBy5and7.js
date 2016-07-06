function Divideby(args){
    var a = +args[0]

    if(a % 7 === 0 && a % 5 === 0){
        console.log("true" + " " + a);
    }
    else    {
        console.log("false" + " " + a);
    }
}
