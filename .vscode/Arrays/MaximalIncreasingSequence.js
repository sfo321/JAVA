function solve(args){
    var input = args[0].split('\n'),
        n = +input[0],
        arr = input.slice(1),

        current = +arr[0],
        count = 1,
        best = 0;

    for(var i = 1; i < n; i += 1){
        if(current < +arr[i]){
            count += 1;
            current = +arr[i];
        }
        else{
            best = count > best ? count : best;
            count = 1;
            current = +arr[i];
        }
        best = count > best ? count : best;
    }
    console.log(best);
}
