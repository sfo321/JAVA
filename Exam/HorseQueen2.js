function solve(params){
    var rows = +params[0];
    var board = [];

    for(var t = 0; t < rows; t += 1) {
        board[t + 1] = params[rows + 1 - t];
    }
    var moves = params.slice(rows + 3);

    for(var i = 0; i < moves.length; i+= 1){
        var part = moves[i].split(' ');

        var move = {"fromRow": +part[0][1],
                    "fromCol": +part[0].charCodeAt(0) - 'a'.charCodeAt(0),
                    "toRow": +part[1][1],
                    "toCol": +part[1].charCodeAt(0) - 'a'.charCodeAt(0)};

        //console.log('fc ' + move.fromCol + ' ' + 'tc ' + move.toCol +' '+ 'fr ' + move.fromRow +' '+ 'tr ' + move.toRow);
        let piece = board[move.fromRow][move.fromCol];

        if(isKnight(piece)){
            if(!isEmpty(board[move.toRow][move.toCol])){
                console.log('no');
            }
            else if(checkKnight(move)){
                console.log('yes');
            }
            else{
                console.log('no');
            }
        }
        else if(isQueen(piece)){
            if(check(move)){
                console.log('yes');
            }
            else{
                console.log('no');
            }
        }
        else{
            console.log('no');
        }

    function isKnight(piece){
        return piece === 'K';
    }
    function isQueen(piece){
        return piece === 'Q';
    }
    function isEmpty(piece){
        return piece === '-';
    }

    function checkKnight(move){
        let col = move.fromCol, row = move.fromRow;
        let deltas = [[-2, 1], [-1, 2], [1, 2], [2, 1],
            [2, -1], [1, -2], [-1, -2], [-2, -1]];
        for(let i = 0; i < 8; i += 1){
            if(col + deltas[i][1] === move.toCol && row + deltas[i][0] === move.toRow){
                return true;
            }
        }
        return false;
    }
    function check(move){

        let col = move.fromCol, row = move.fromRow;

        let deltaRow = getDelta(move.fromRow, move.toRow);
        let deltaCol = getDelta(move.fromCol, move.toCol);

        while(true){
            col += deltaCol;
            row += deltaRow;

            if(!board[row] || !board[row][col]){
                return false;
            }
            if(!isEmpty(board[row][col])){
                return false;
            }
            if(move.toCol === col && move.toRow === row){
                return true;
            }
        }
    }
    function getDelta(from, to){
        if(from < to){
            return 1;
        }else if(from > to){
            return -1;
        }else {
            return 0;
        }
        }
    }
}


solve([
'3',
'4',
'--K-',
'K--K',
'Q--Q',
'12',
'd1 b3',
'a1 a3',
'c3 b2',
'a1 c1',
'a1 b2',
'a1 c3',
'a2 c1',
'd2 b1',
'b1 b2',
'c3 a3',
'a2 a3',
'd1 d3']
);
