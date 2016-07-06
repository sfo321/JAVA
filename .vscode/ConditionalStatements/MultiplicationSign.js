function solve(args){

    var counter = 0;
    var zerocounter = 0;

    for(var i = 0; i < 3; i++){
        if(+args[i] < 0){
            counter += 1;
        }
        if(+args[i] === 0){
            zerocounter += 1;
        }
    }
    if(zerocounter > 0){
        return '0';
    }
    else if(counter % 2 !== 0){
        return '-';
    }
    else return '+';
}

solve([-2, -2, 1])