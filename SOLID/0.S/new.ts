class Radio{
    private _musicLevel : number = 0;
    private _oldMusicLevel : number = 50;

    get musicLevel(): number {
        return this._musicLevel;
    }

    set musicLevel(value: number) {
        this._oldMusicLevel = this._musicLevel;
        this._musicLevel = value;
    }

    turnMusicOn() {
        this._musicLevel = this._oldMusicLevel;
    }

    turnMusicOff() {
        this._musicLevel = 0;
    }
}

class Engine{
    private _engineStatus: boolean = false;

    get engineStatus(): boolean {
        return this._engineStatus;
    }

    turnEngineOn() {
        this._engineStatus = true;
    }

    turnEngineOff() {
        this._engineStatus = false;
    }

}

class Car {
    private _fuel : number = 0;
    private _miles : number = 0;
    private readonly _radio: Radio;
    private readonly _engine: Engine;
    private readonly MAXIMUM_FUEL_CAPACITY: number;
    private readonly FUEL_MILEAGE: number = 10;

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this._radio = new Radio();
        this._engine = new Engine();
    }

    get miles(): number {
        return this._miles;
    }

    get fuel(): number {
        return this._fuel;
    }

    get radio(): Radio {
        return this._radio;
    }
    get engine(): Engine {
        return this._engine;
    }

    addFuel(fuel : number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }


    drive() {
        if(this.engine.engineStatus === false || this._fuel <= 0) {
          return;
        }
        
        this._fuel -= 1;
        this._miles += this.FUEL_MILEAGE;
    }
}

const musicToggleElement = <HTMLElement>document.querySelector('#music-toggle');
const musicSliderElement = <HTMLInputElement>document.querySelector('#music-slider');
const engineToggleElement = <HTMLInputElement>document.querySelector('#engine-toggle');
const addFuelForm = <HTMLElement>document.querySelector('#add-fuel-form');
const addFuelInput = <HTMLFormElement>document.querySelector('#add-fuel-input');
const fuelLevelElement = <HTMLElement>document.querySelector('#fuel-level');
const milesElement = <HTMLElement>document.querySelector('#miles-value');
const audioElement = <HTMLAudioElement>document.querySelector('#car-music');

let car = new Car(100);
const turnMusicOn : string = 'Turn music on';
const turnMusicOff : string = 'Turn music off';

musicToggleElement.addEventListener('click', () => {
    if(car.radio.musicLevel === 0) {
        car.radio.turnMusicOn();
        musicSliderElement.value = car.radio.musicLevel.toString();
        musicToggleElement.innerText = turnMusicOff;
        return;
    }
    musicToggleElement.innerText = turnMusicOn;
    car.radio.turnMusicOff();
});

musicSliderElement.addEventListener('input', (event) => {
    let target = <HTMLFormElement>(event.target);

    car.radio.musicLevel = target.value;
    audioElement.volume = car.radio.musicLevel / 100;
    musicToggleElement.innerText = car.radio.musicLevel ? turnMusicOff : turnMusicOn;
});

engineToggleElement.addEventListener('click', () => {
    if(car.engine.engineStatus) {
        car.engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car.engine.turnEngineOn();
});

addFuelForm.addEventListener('submit', (event) => {
    event.preventDefault();

    car.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.fuel.toString();
});

setInterval(() => {
    car.drive();

    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = <string><unknown>(car.miles);
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = car.fuel.toString();

    if(car.radio.musicLevel === 0 ) {

        audioElement.pause();
    } else {
        audioElement.play();
    }

}, 1000);


