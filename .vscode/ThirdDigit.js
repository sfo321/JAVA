function thirdDigit(number){

    var digit = (number / 100) % 10 | 0;

    if(digit === 7){
        console.log("true")
    }
    else{
        console.log("false " + digit);
    }
}


