var Animal = /** @class */ (function () {
    function Animal(type, name, sound) {
        this._name = name;
        this._sound = sound;
        this._type = type;
    }
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Animal.prototype.makeSound = function () {
        return this._sound;
    };
    Object.defineProperty(Animal.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
/*

class Dog {
    private _name;
    private readonly _sound;
    private readonly _type;


    constructor(name:string){
        this._name= name;
        this._sound= 'Woef';
        this._type= 'dog'

    }
    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    public makeSound() {
        return this._sound;
    }

    get type() {
        return this._type;
    }
}

class Cat {
    private _name;
    private readonly _sound;
    private readonly _type;

    constructor(name:string) {
        this._name= name;
        this._sound= 'Miauw';
        this._type= 'cat';
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    public makeSound() {
        return this._sound;
    }

    get type() {
        return this._type;
    }
}

class Parrot {
    private _name;
    private readonly _sound;
    private readonly _type;

    constructor(name:string){
    this._name= name;
    this._sound= `I am ${name}`;
    this._type= 'parrot';
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    public makeSound() {
        return this._sound;
    }

    get type() {
        return this._type;
    }
}
*/
var Zoo = /** @class */ (function () {
    function Zoo() {
        this._animals = new Array();
    }
    Zoo.prototype.addAnimal = function (animal) {
        this._animals.push(animal);
    };
    Object.defineProperty(Zoo.prototype, "animals", {
        get: function () {
            return this._animals;
        },
        enumerable: false,
        configurable: true
    });
    return Zoo;
}());
var zoo = new Zoo;
zoo.addAnimal(new Animal('cat', 'Snuffel', 'miauw'));
zoo.addAnimal(new Animal('dog', 'Molly', 'Woef'));
zoo.addAnimal(new Animal('parrot', 'Kiki', "I am a pirate"));
zoo.addAnimal(new Animal('maraboe', 'Daan', 'klepper de klep'));
zoo.animals.forEach(function (animal) {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound() + "<br>");
});
