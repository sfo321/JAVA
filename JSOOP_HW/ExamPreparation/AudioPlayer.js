function solve(){
    var module = (function(){
        var playable,
            player,
            playlist,
            audio,
            video,
            validator,
            CONSTANTS = {
                TEXT_MIN_LENGTH: 3,
                TEXT_MAX_LENGTH: 25,
                IMDB_MIN_RATING: 1,
                IMDB_MAX_RATING: 5,
                MAX_NUMBER: 9007199254740992
            };

        function getSortingFunction(firstParam, secondParam){
            return function(a, b){
                if (a[firstParam] < b[firstParam]) {
                    return -1;
                }
                else if (a[firstParam] > b[firstParam]) {
                    return 1;
                }
                if(a[secondParam] < b[secondParam]){
                    return -1;
                }
                else if(a[secondParam] > b[secondParam]){
                    return 1;
                }
                else {
                    return 0;
                }
            };
        }

        validator = {
            validateIfUndefined: function(value, name){
                name = name || 'Value';
                if(value === undefined){
                    throw new Error(`${name} cannot be undefined`);
                }
            },
            validateIfObject: function(value, name){
                name = name || 'Value';
                if(typeof value !== 'object'){
                    throw new Error(`${name} must be an object`);
                }
            },
            validateString: function(value, name){
                name = name || 'Value';
                this.validateIfUndefined(value, name);
                if(typeof value !== 'string'){
                    throw new Error(`${name} must be a string`);
                }
                if(value.length < CONSTANTS.TEXT_MIN_LENGTH ||
                    CONSTANTS.TEXT_MAX_LENGTH < value.length){
                    throw new Error(`${name} must be between 
                    ${CONSTANTS.TEXT_MIN_LENGTH} and 
                    ${CONSTANTS.TEXT_MAX_LENGTH} symbols long`);
                }
            },
            validateIfNumber: function(value, name){
                name = name || 'Value';
                if(typeof value !== 'number'){
                    throw new Error(`${name} must be a number`);
                }
            },
            validatePositiveNumber: function(value, name){
                name = name || 'Value';
                this.validateIfUndefined(value, name);
                this.validateIfNumber(value, name);
                if(value <= 0){
                    throw new Error(`${name} must be positive number`);
                }
            },
            validateImdbRating: function(value){
                this.validateIfUndefined(value, 'IMDB Rating');
                this.validateIfNumber(value, 'IMDB Rating');

                if(value < CONSTANTS.IMDB_MIN_RATING ||
                    CONSTANTS.IMDB_MAX_RATING < value){
                    throw new Error(`IMDB Rating must be between 
                    ${CONSTANTS.IMDB_MIN_RATING} and 
                    ${CONSTANTS.IMDB_MAX_RATING}`);
                }
            },
            validatePlayableId: function(id){
                this.validateIfUndefined(id, 'Playable ID');
                if(typeof id !== 'number'){
                    id = id.id;
                }
                this.validateIfUndefined(id, 'Playable is not a valid object');
                return id;
            },
            validatePageAndSize: function(page, size, maxElements){
                this.validateIfUndefined(page, 'Page');
                this.validateIfUndefined(size, 'Size');
                this.validateIfNumber(page, 'Page');
                this.validateIfNumber(size, 'Size');
                this.validatePositiveNumber(size, 'Size');
                if(page < 0){
                    throw new Error('Page must be greater than or equal to 0');
                }

                if(page * size > maxElements){
                    throw new Error('Page size is invalid');
                }
            }
        };

        playable = (function(){
            var currentPlayableID = 0,
                playable = Object.create({});

            Object.defineProperty(playable, 'init', {
                value: function(title, author){
                    this.title = title;
                    this.author = author;
                    this._id = ++currentPlayableID;
                    return this;
                }
            });

            Object.defineProperty(playable, 'id', {
                get: function(){
                    return this._id;
                }
            });

            Object.defineProperty(playable, 'title', {
                get: function(){
                    return this._title;
                },
                set: function(value) {
                    validator.validateString(value, 'Playable Title');
                    this._title = value;
                }
            });

            Object.defineProperty(playable, 'author',{
                get: function(){
                    return this._author;
                },
                set: function(value){
                    validator.validateString(value, 'Playable Author');
                    this._author = value;
                }
            });

            Object.defineProperty(playable, 'play', {
                value: function(){
                    return `${this.id}. ${this.title} - ${this.author}`;
                }
            });

            return playable;
        }());

        player = (function(){
            var currentPlayerId = 0,
                player = Object.create({});

            Object.defineProperty(player, 'init', {
                value: function(name){
                    this.name = name;
                    this._id = ++currentPlayerId;
                    this._playlists = [];
                    return this;
                }
            });

            Object.defineProperty(player, 'id', {
                get: function(){
                    return this._id;
                }
            });

            Object.defineProperty(player, 'name', {
                get: function(){
                    return this._name;
                },
                set: function(value){
                    validator.validateString(value, 'Player Name');
                    this._name = value;
                }
            });

            Object.defineProperty(player, 'addPlaylist', {
                value: function(playlist){
                    validator.validateIfUndefined(playlist, 'Playlist add parameter');
                    validator.validateIfObject(playlist, 'Playlist add parameter');
                    validator.validateIfUndefined(playlist.id, 'Playlist to add must have ID');

                    this._playlists.push(playlist);
                    return this;
                }
            });

            Object.defineProperty(player, 'getPlaylistById', {
                value: function(id){
                    validator.validateIfUndefined(id, 'Player ID');
                    validator.validateIfNumber(id, 'Player ID');
                    return this._playlists.find((p) => p.id === id) || null;
                }
            });

            Object.defineProperty(player, 'removePlaylist', {
                value: function(id){
                    id = validator.validatePlayableId(id);
                    var playlistToRemove = this._playlists.find((p) => p.id === id);
                    if(playlistToRemove){
                        this._playlists.splice(this._playlists.indexOf(playlistToRemove, 0), 1);
                    }
                    else{
                        throw new Error(`Playlist with id ${id} was not found`);
                    }
                    return this;
                }
            });

            Object.defineProperty(player, 'listPlaylists', {
                value: function(page, size){
                    validator.validatePageAndSize(page, size, this._playlists.length);
                    return this._playlists.slice()
                        .sort(getSortingFunction('name', 'id'))
                        .splice(page * size, size);
                }
            });

            Object.defineProperty(player, 'contains', {
                value: function(playable, playlist){
                    validator.validateIfUndefined(playable);
                    validator.validateIfUndefined(playlist);
                    var playableId = validator.validatePlayableId(playable.id);
                    var playlistId = validator.validatePlayableId(playlist.id);

                    var playList = this.getPlaylistById(playlistId);
                    if(playList === null){
                        return false;
                    }

                    var playAble = playlist.getPlayableById(playableId);
                    if(playAble === null){
                        return false;
                    }

                    return true;
                }
            });

            Object.defineProperty(player, 'search', {
                value: function(pattern){
                    validator.validateString(pattern, 'Search pattern');

                    return this._playlists.filter(function(playlist){
                        return playlist.listPlayables()
                            .some(function(playable){
                            return playable.length !== undefined &&
                                playable.title.toLowerCase()
                                .indexOf(pattern.toLowerCase()) >= 0;
                        });
                    }).map(function(playlist){
                        return {
                            id: playlist.id,
                            name: playlist.name
                        }
                    });
                }
            });

            return player;
        }());

        playlist = (function(){
            var currentPlaylistID = 0,
                playlist = Object.create({});

            Object.defineProperty(playlist, 'init', {
                value: function(name){
                    this.name = name;
                    this._id = ++currentPlaylistID;
                    this._playables = [];
                    return this;
                }
            });

            Object.defineProperty(playlist, 'id', {
                get: function(){
                    return this._id;
                }
            });

            Object.defineProperty(playlist, 'name', {
                get: function(){
                    return this._name;
                },
                set: function(value){
                    validator.validateString(value, 'Playlist Name');
                    this._name = value;
                }
            });

            Object.defineProperty(playlist, 'addPlayable', {
                value: function(playable){
                    validator.validateIfUndefined(playable, 'Playable add parameter');
                    validator.validateIfObject(playable, 'Playable add parameter');
                    validator.validateIfUndefined(playable.id, 'Playable to add must have ID');

                    this._playables.push(playable);
                    return this;
                }
            });

            Object.defineProperty(playlist, 'getPlayableById', {
                value: function(id){
                    validator.validateIfUndefined(id, 'Playable ID');
                    validator.validateIfNumber(id, 'Playable ID');
                    return this._playables.find((p) => p.id === id) || null;
                }
            });

            Object.defineProperty(playlist, 'removePlayable', {
                value: function(id){
                    id = validator.validatePlayableId(id);
                    var playableToRemove = this._playables.find((p) => p.id === id);
                    if(playableToRemove){
                        this._playables.splice(this._playables.indexOf(playableToRemove, 0), 1);
                    }
                    else{
                        throw new Error(`Playable with id ${id} was not found`);
                    }
                    return this;
                }
            });

            Object.defineProperty(playlist, 'listPlayables', {
                value: function(page, size){
                    page = page || 0;
                    size = size || CONSTANTS.MAX_NUMBER;
                    validator.validatePageAndSize(page, size, this._playables.length);
                    return this._playables.slice()
                        .sort(getSortingFunction('title', 'id'))
                        .splice(page * size, size);
                }
            });

            return playlist;
        }());

        audio = (function(parent){
            var audio = Object.create(parent);

            Object.defineProperty(audio, 'init', {
                value: function(title, author, length){
                    parent.init.call(this, title, author);
                    this.length = length;
                    return this;
                }
            });

            Object.defineProperty(audio, 'length', {
                get: function(){
                    return this._length;
                },
                set: function(value){
                    validator.validatePositiveNumber(value, 'Audio Length');
                    this._length = value;
                }
            });

            Object.defineProperty(audio, 'play', {
                value: function(){
                    return parent.play.call(this) + ' - ' + this.length;
                }
            });

            return audio;
        }(playable));

        video = (function(parent){
            var video = Object.create(parent);

            Object.defineProperty(video, 'init',{
                value: function(title, author, imdbRating){
                    parent.init.call(this, title, author);
                    this.imdbRating = imdbRating;
                    return this;
                }
            });

            Object.defineProperty(video, 'imdbRating', {
                get: function(){
                    return this._imdbRating;
                },
                set: function(value){
                    validator.validateImdbRating(value);
                    this._imdbRating = value;
                }
            });

            Object.defineProperty(video, 'play', {
                value: function(){
                    return parent.play.call(this) + ' - ' + this.imdbRating;
                }
            });

            return video;
        }(playable));

        return{
            getPlayer: function(name){
                return Object.create(player).init(name);
            },
            getPlaylist: function(name){
                return Object.create(playlist).init(name);
            },
            getAudio: function(title, author, length){
                return Object.create(audio).init(title, author, length);
            },
            getVideo: function(title, author, imdbRating){
                return Object.create(video).init(title, author, imdbRating);
            }
        };
    }());

    return module;
}
var module= solve();

var playlist = module.getPlaylist('tashak');

var someAudio = module.getAudio('first', 'first', 5);
var anotherAudio = module.getAudio('abc', 'first', 5);
var anotherAudio2 = module.getAudio('abc', 'first', 5);

playlist.addPlayable(someAudio).addPlayable(anotherAudio).addPlayable(anotherAudio2);
//for(var i = 1; i <= 10; i += 1){
   // var song = module.getAudio('Audio ' + i, 'Author ' + i, i)
    //playlist.addPlayable(song);
//}
//for(var i = 1; i <= 10; i += 1) {
    //var video = module.getVideo('Video ' + i, 'Author ' + i, 5)
   // playlist.addPlayable(video);
//}

console.log(playlist.listPlayables(0, 3));
//module.exports = solve();