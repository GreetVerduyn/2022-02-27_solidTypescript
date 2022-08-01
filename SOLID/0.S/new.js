var Radio = /** @class */ (function () {
    function Radio() {
        this._musicLevel = 0;
        this._oldMusicLevel = 50;
    }
    Object.defineProperty(Radio.prototype, "musicLevel", {
        get: function () {
            return this._musicLevel;
        },
        set: function (value) {
            this._oldMusicLevel = this._musicLevel;
            this._musicLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    Radio.prototype.turnMusicOn = function () {
        this._musicLevel = this._oldMusicLevel;
    };
    Radio.prototype.turnMusicOff = function () {
        this._musicLevel = 0;
    };
    return Radio;
}());
var Engine = /** @class */ (function () {
    function Engine() {
        this._engineStatus = false;
    }
    Object.defineProperty(Engine.prototype, "engineStatus", {
        get: function () {
            return this._engineStatus;
        },
        enumerable: false,
        configurable: true
    });
    Engine.prototype.turnEngineOn = function () {
        this._engineStatus = true;
    };
    Engine.prototype.turnEngineOff = function () {
        this._engineStatus = false;
    };
    return Engine;
}());
var Car = /** @class */ (function () {
    function Car(MAXIMUM_FUEL_CAPACITY) {
        this._fuel = 0;
        this._miles = 0;
        this.FUEL_MILEAGE = 10;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this._radio = new Radio();
        this._engine = new Engine();
    }
    Object.defineProperty(Car.prototype, "miles", {
        get: function () {
            return this._miles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "fuel", {
        get: function () {
            return this._fuel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "radio", {
        get: function () {
            return this._radio;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.addFuel = function (fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    };
    Car.prototype.drive = function () {
        if (this.engine.engineStatus === false || this._fuel <= 0) {
            return;
        }
        this._fuel -= 1;
        this._miles += this.FUEL_MILEAGE;
    };
    return Car;
}());
var musicToggleElement = document.querySelector('#music-toggle');
var musicSliderElement = document.querySelector('#music-slider');
var engineToggleElement = document.querySelector('#engine-toggle');
var addFuelForm = document.querySelector('#add-fuel-form');
var addFuelInput = document.querySelector('#add-fuel-input');
var fuelLevelElement = document.querySelector('#fuel-level');
var milesElement = document.querySelector('#miles-value');
var audioElement = document.querySelector('#car-music');
var car = new Car(100);
var turnMusicOn = 'Turn music on';
var turnMusicOff = 'Turn music off';
musicToggleElement.addEventListener('click', function () {
    if (car.radio.musicLevel === 0) {
        car.radio.turnMusicOn();
        musicSliderElement.value = car.radio.musicLevel.toString();
        musicToggleElement.innerText = turnMusicOff;
        return;
    }
    musicToggleElement.innerText = turnMusicOn;
    car.radio.turnMusicOff();
});
musicSliderElement.addEventListener('input', function (event) {
    var target = (event.target);
    car.radio.musicLevel = target.value;
    audioElement.volume = car.radio.musicLevel / 100;
    musicToggleElement.innerText = car.radio.musicLevel ? turnMusicOff : turnMusicOn;
});
engineToggleElement.addEventListener('click', function () {
    if (car.engine.engineStatus) {
        car.engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car.engine.turnEngineOn();
});
addFuelForm.addEventListener('submit', function (event) {
    event.preventDefault();
    car.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.fuel.toString();
});
setInterval(function () {
    car.drive();
    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = (car.miles);
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = car.fuel.toString();
    if (car.radio.musicLevel === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);
