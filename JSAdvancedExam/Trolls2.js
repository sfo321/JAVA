function solve(args){
    let dimensions = args[0].split(' ');
    let rows = +dimensions[0];
    let cols = +dimensions[1];
    let start = args[1].split(';');

    let w = start[0].split(' ');
    var Wboup = {
        "Row": +w[0],
        "Col": +w[1]
    };

    let n = start[1].split(' ');
    var Nbslbub = {
        "Row": +n[0],
        "Col": +n[1]
    };

    let l = start[2].split(' ');
    var Lsjtujzbo = {
        "Row": +l[0],
        "Col": +l[1]
    };

    var traps =  [];

    for(let m = 2; m < args.length; m += 1){
        let func = args[m].split(' ');

        if(func[1] === 'Wboup'){
            let wr = Wboup.Row;
            let wc = Wboup.Col;

            if(func[2] === 'l' || func[2] === 'r') {
                wc = Wboup.Col + movement(func[2]);
            }
            else if(func[2] === 'u' || func[2] === 'd'){
                wr = Wboup.Row + movement(func[2]);
            }

            if(Wboup.Row === Nbslbub.Row && Wboup.Col === Nbslbub.Col && field[Wboup.Row][Wboup.Col] === 't'){
                field[Wboup.Row][Wboup.Col] = '*';
            }

            if(checkmovement(wr, wc) && checktrap(Wboup.Row, Wboup.Col)) {
                Wboup.Row = wr;
                Wboup.Col = wc;
            }

            if(checkifcaptured(Lsjtujzbo)){
                console.log('The trolls caught Lsjtujzbo at ' + Lsjtujzbo.Row + ' ' + Lsjtujzbo.Col);
                break;
            }
        }

        if(func[1] === 'Nbslbub'){
            let nr = Nbslbub.Row;
            let nc = Nbslbub.Col;

            if(func[2] === 'l' || func[2] === 'r') {
                nc = Nbslbub.Col + movement(func[2]);
            }
            else if(func[2] === 'u' || func[2] === 'd'){
                nr = Nbslbub.Row + movement(func[2]);
            }

            if(Wboup.Row === Nbslbub.Row && Wboup.Col === Nbslbub.Col && field[Wboup.Row][Wboup.Col] === 't'){
                field[Wboup.Row][Wboup.Col] = '*';
            }

            if(checkmovement(nr, nc) && checktrap(Nbslbub.Row, Nbslbub.Col)) {
                Nbslbub.Row = nr;
                Nbslbub.Col = nc;
            }

            if(checkifcaptured(Lsjtujzbo)){
                console.log('The trolls caught Lsjtujzbo at ' + Lsjtujzbo.Row + ' ' + Lsjtujzbo.Col);
                break;
            }
        }

        if(func[0] === 'lay'){
            traps.push([Lsjtujzbo.Row, Lsjtujzbo.Col]);
        }
        if(func[1] === 'Lsjtujzbo'){
            let lr = Lsjtujzbo.Row;
            let lc = Lsjtujzbo.Col;

            if(func[2] === 'l' || func[2] === 'r') {
                lc = Lsjtujzbo.Col + movement(func[2]);
            }
            else if(func[2] === 'u' || func[2] === 'd'){
                lr = Lsjtujzbo.Row + movement(func[2]);
            }
            if(checkmovement(lr, lc)) {
                Lsjtujzbo.Row = lr;
                Lsjtujzbo.Col = lc;
            }

            if(checkifcaptured(Lsjtujzbo)){
                console.log('The trolls caught Lsjtujzbo at ' + Lsjtujzbo.Row + ' ' + Lsjtujzbo.Col);
                break;
            }

            if(Lsjtujzbo.Col === cols - 1 && Lsjtujzbo.Row === rows - 1){
                console.log('Lsjtujzbo is saved! ' + Wboup.Row + ' ' + Wboup.Col + ' ' + Nbslbub.Row + ' ' + Nbslbub.Col);
                break;
            }
        }
    }
    function checkifcaptured(Lsjtujzbo){
        return ((Math.abs(Lsjtujzbo.Row - Nbslbub.Row) < 2 && Math.abs(Lsjtujzbo.Col - Nbslbub.Col) < 2) ||
        (Math.abs(Lsjtujzbo.Row - Wboup.Row) < 2 && Math.abs(Lsjtujzbo.Col - Wboup.Col) < 2));
    }
    function checktrap(row, col){
        return field[row][col] !== 't';
    }

    function movement(dir){
        if(dir === 'u'){
            return -1;
        }
        if(dir === 'd'){
            return 1;
        }
        if(dir === 'l'){
            return -1;
        }
        if(dir === 'r'){
            return 1;
        }
    }
    function checkmovement(r, c){
        return (r >= 0 && r <= rows - 1 && c >= 0 && c <= cols - 1);
    }
}


solve([
    '5 5',
    '1 1;0 1;2 3',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Wboup r',
    'mv Wboup r',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d'
]);