function solve(args){
    let heights = args[0].split(' ').map(Number);

    var sum = 0;

    for(let i = 2; i < heights.length - 1; i += 1){
        if(isHeight(i - 1) && isHeight(i + 1)){

                sum += heights[i];
        }
    }

    function isHeight(index){
        return (heights[index] > heights[index - 1] && heights[index] > heights[index + 1]);
    }
    console.log(sum);
}


solve([
    "53 20 1 30 2 40 3 10 1"
]);