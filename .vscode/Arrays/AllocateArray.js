function solve(args){
    var n = +args[0];
    var arr = [];
    for(var i = 0; i < n; i += 1){
        arr[i] = i * 5;
        console.log(arr[i]);
    }
}


solve([5]);