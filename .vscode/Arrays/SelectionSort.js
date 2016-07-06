function solve(args) {
    var input = args[0].split('\n'),
        n = +input[0],
        arr = input.slice(1),
        min = arr[0];

    for(var i = 0; i < n; i += 1){
        min = arr[i];
        for(var j = i; j < n; j += 1){

            if(+arr[j] < min){
                min = +arr[j];
                arr[j] = +arr[i];
                arr[i] = min;
            }
        }
    }
    console.log(arr.join('\n'));
}