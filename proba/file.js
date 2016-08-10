function createGame() {
    var mainCanvas = document.getElementById('mainCanvas'),
        mainCtx = mainCanvas.getContext('2d'),
        shipCanvas = document.getElementById('shipCanvas'),
        shipCtx = shipCanvas.getContext('2d'),
        boomCanvas = document.getElementById('boomCanvas'),
        boomCtx = boomCanvas.getContext('2d'),
        mainBGr = document.getElementById('sky'),
        shipImg = document.getElementById('ship'),
        boo = document.getElementById('boo'),
        dir = 0;

    mainCtx.drawImage(mainBGr, 0, 0, 1200, 650);
    shipCtx.drawImage(shipImg, 600, 550, 120, 80);
    boomCtx.drawImage(boo, 0, 0, 220, 126, 600, 550, 110, 63);

    var ship = {
        'x': 600,
        'y': 550,
        'pow': 0,
        'speed': 2
    }

    const keyCodeToDirs = {
        "37": 2,
        "38": 3,
        "39": 0,
        "40": 1
    };

    const dirDeltas = [{
            "x": +1,
            "y": 0
        }, {
            "x": 0,
            "y": +1
        }, {
            "x": -1,
            "y": 0
        }, {
            "x": 0,
            "y": -1
        }];

    document.body.addEventListener("keydown", function(ev) {
        if (!keyCodeToDirs.hasOwnProperty(ev.keyCode)) {
            return;
        }
        dir = keyCodeToDirs[ev.keyCode];
    });
    function gameLoop() {
        
        function updateShipPosition(){
            var currentx = ship.x,
                currenty = ship.y;

            ship.x += dirDeltas[dir].x * ship.speed;
            ship.y += dirDeltas[dir].y * ship.speed;
        }



        window.requestAnimationFrame(gameLoop);
    }

}