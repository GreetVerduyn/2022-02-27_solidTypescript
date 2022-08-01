interface CanMakeSound{
    makeSound();
}

class Dog implements CanMakeSound{
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    public makeSound() {
        return`Woef`;
    }

    get type() {
        return 'dog';
    }
}

class Cat implements CanMakeSound{
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    public makeSound() {
        return`miauw`;
    }

    get type() {
        return 'cat';
    }
}

class Parrot implements CanMakeSound{
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    public makeSound() {
        return`I am a pirate`;
    }

    get type() {
        return 'parrot';
    }
}


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
zoo.addAnimal(new Cat());
zoo.addAnimal(new Dog());
zoo.addAnimal(new Parrot());


zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound() + "<br>");
});