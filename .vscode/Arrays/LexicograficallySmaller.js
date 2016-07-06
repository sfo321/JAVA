function solve(args){
    var input = args[0].split('\n'),
        a = String(input[0]),
        b = String(input[1]);

    if(a > b){
        console.log('>')
    }
    if(a < b){
        console.log('<');
    }
    if(a === b){
        console.log('=');
    }
}

solve(["tashak" ,"ambrosia"])