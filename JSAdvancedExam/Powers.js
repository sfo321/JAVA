function solve(params) {
    var nk = params[0].split(' ').map(Number),
        s = params[1].split(' ').map(Number),
        n = nk[0], k = nk[1];

    for(var j = 0; j < k; j += 1){
        s = afill(s);
    }
    var result = 0;

    result += s.reduce((pv, tv) => pv + tv, 0);

    console.log(result);

    function afill(arrs) {
        var arr = [];
        var temp = 0;
        for (var i = 0; i < n; i += 1) {
            if (arrs[i] === 0) {
                temp = Math.abs(arrs[(n + i - 1) % n] - arrs[(n + i + 1) % n]);
            }
            if (arrs[i] === 1) {
                temp = Math.abs(arrs[(n + i - 1) % n] + arrs[(n + i + 1) % n]);
            }
            if ((arrs[i] % 2) && arrs[i] !== 1) {
                temp = Math.min(arrs[(n + i - 1) % n], arrs[(n + i + 1) % n]);
            }
            if (!(arrs[i] % 2) && arrs[i] !== 0) {
                temp = Math.max(arrs[(n + i - 1) % n], arrs[(n + i + 1) % n]);
            }
            arr.push(temp);
        }
        return arr;
    }
}


solve(['10 3',
    '1 9 1 9 1 9 1 9 1 9'

]);