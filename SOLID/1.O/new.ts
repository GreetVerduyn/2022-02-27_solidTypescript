class Animal {
    private _name;
    private readonly _sound;
    private readonly _type;

    constructor(type: string, name: string, sound: string) {
        this._name = name;
        this._sound = sound;
        this._type = type;
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

class Zoo {
    private _animals : Array<Object> = new Array<Object>();

    public addAnimal(animal: object) {
        this._animals.push(animal);
    }

    get animals(): Array<Object> {
        return this._animals;
    }

}
let zoo = new Zoo;
zoo.addAnimal(new Animal('cat','Snuffel', 'miauw'));
zoo.addAnimal(new Animal('dog','Molly', 'Woef'));
zoo.addAnimal(new Animal('parrot','Kiki',`I am a pirate` ));
zoo.addAnimal(new Animal('maraboe', 'Daan', 'klepper de klep'));

zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound() + "<br>");
});