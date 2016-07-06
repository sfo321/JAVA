function solve(argslines){

    var valley = argslines[0].split(',')
                        .map(Number);
    
    function isoutside(valley, index){
        return valley[index] === undefined;
    }

    function coinsForPattern(valley, pattern){

        var visited = [], coins = 0, index = 0, patternindex = 0;

        while(!visited[index] && !isoutside(valley, index)){
            coins += valley[index];
            visited[index] = true;
            index += pattern[patternindex];
            patternindex = (patternindex + 1) % pattern.length;
        }

        return coins;
    }

    var maxcoins = -999999999999999999999999;

    for(var i = 2; i < argslines.length; i += 1){
        var pattern = argslines[i].split(',').map(Number);
        var result = coinsForPattern(valley, pattern);
        if(result > maxcoins){
            maxcoins = result;
        }
    }
    return maxcoins;
}



solve(['1 3 -6 7 4 1 12',
    '3',
    '1 5 3',
    '1 3 -2',
    '1 -1']);




//splice split map filter