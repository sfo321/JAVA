var animal = (function(){
    //first object(nothing to inherit)
    var animal = {
        init: function(name, age){
            this.name = name;
            this.age = age;
            return this;
        },
        get name(){
            return this._name;
        },
        set name(value){
            if(typeof value !== 'string'){
                throw new Error('Value must be a string');
            }
            this._name = value;
        },
        get age(){
            return this._age;
        },
        set age(value){
            if(typeof value !== 'number'){
                throw new Error('Value must be a number');
            }
            this._age = value;
        },
        toString: function(){
            return `${this.name} ${this.age}`;
        }
    };
    return animal;
}());

var cat = (function(parent){
    var cat = Object.create(parent);

    //cat.init = function(name, age, sleep){
    //    parent.init.call(this, name, age);
    //    this.sleep = sleep;
    //    return this;
    //};

    //cat.toString = function(){
    //    var base = parent.toString.call(this);
    //    return `${base} ${this.sleep}`;
    //};

    Object.defineProperty(cat, 'init', {
        value: function (name, age, sleep) {
            parent.init.call(this, name, age);
            this.sleep = sleep;
            return this;
        }
    });

    Object.defineProperty(cat, 'sleep', {
        get: function(){
            return this._sleep;
        },
        set: function(value){
            if(typeof value !== 'string'){
                throw new Error('Mada Fakaaaaaa');
            }
            this._sleep = value;
        }
    });

    Object.defineProperty(cat, 'toString', {
        value: function () {
            return parent.toString.call(this) + 'instance of cat';
        }
    });

    return cat;
}(animal));

var animal1 = Object.create(animal).init('Haspel', 5);
console.log(animal1);
console.log(animal1.toString());

var catka = Object.create(cat).init('Myrko', 4, 'mnogo');
console.log(catka);
console.log(catka.toString());
