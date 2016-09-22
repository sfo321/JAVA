(function(){
    let promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((pos) => {
            resolve(pos);
        })
    });

    function parsePosition(pos){
        return {
            lat: pos.coords.latitude,
            long: pos.coords.longitude
        };
    }

    function displayMap(pos){
        let src = `http://maps.googleapis.com/maps/api/staticmap?center=${pos.lat}, ${pos.long}
            &zoom=16&size=800x800&sensor=false`,
            map = document.getElementById('map');
        map.setAttribute('src', src);
    }

    function wait(map){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(map);
            }, 3000);
        });
    }

    function fadeout(){
        let mapEl = document.getElementById('map');
        let rad = 1,
            wid = mapEl.width;
        setInterval(() => {
            rad += 2;
            mapEl.style.borderRadius = `${rad}px`;
            mapEl.width = wid - (rad + 20);
            mapEl.height = wid - (rad + 20);
        }, 2);
    }

    promise
        .then(parsePosition)
        .then(displayMap)
        .then(wait)
        .then(fadeout);
}());