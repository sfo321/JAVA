function solve(params){
    var s = params[0].split(' ').map(Number),
        result = 0, temp = 0, lastindex = 0;

    for(let i = 1; i < s.length; i += 1){
        if(i === s.length - 1){
            temp = i - lastindex;
        }
        else if(s[i - 1] < s[i] && s[i + 1] < s[i]){
            temp = i - lastindex;
            lastindex = i;
        }
        result = temp > result ? temp : result;
    }
    console.log(result);
}

solve(['5 1 7 6 3 6 4 2 3 8']);