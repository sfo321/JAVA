function solve() {
    var module = (function () {
        class Person {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }

            get
            name() {
                return this._name;
            }

            set
            name(value) {
                if (typeof value !== 'string' || value.length < 4) {
                    throw new Error('Iaj mi kuraaa!');
                }
                this._name = value;
            }

            get
            age() {
                return this._age;
            }

            set
            age(value) {
                if (typeof value !== 'number' || value < 0) {
                    throw new Error('Iaj mi kuraaa!');
                }
                this._age = value;
            }

            walk() {
                console.log(this.name + ' is walking . . . .')
            }

            toString() {
                console.log(this.name + ' ' + this.age);
            }
        }

        class Professor extends Person{
            constructor(name, age, lection, speak){
                super(name, age);
                this.lection = lection;
                this.speak = speak;
            }
            get lection(){
                return this._lection;
            }
            set lection(value){
                if(typeof value !== 'string' || value.length < 4){
                    throw new Error('kusi sa teq lekcii va');
                }
                this._lection = value;
            }

            get speak(){
                return this._speak;
            }
            set speak(value){
                if(typeof value !== 'string' || value.length < 4){
                    throw new Error('mnogo drynkash va');
                }
                this._speak = value;
            }
            walk(){
                super.walk();
                console.log(this.name + ' odi kat utrepan po patq i govori typotii');
            }
        }

        return {
            getPerson: function(name, age){
                return new Person(name, age);
            },
            getProfessor: function(name, age, lection, speak){
                return new Professor(name, age, lection, speak);
            }
        };
    }());

    return module;
}

var module = solve();

let per = module.getPerson('huio', 44);
let pro = module.getProfessor('Jmulio', 45, 'angiliiski', 'basitypoto');

per.toString();
per.walk();

pro.toString();
pro.walk();
console.log(pro.constructor.name);