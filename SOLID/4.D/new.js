var OvenGas = /** @class */ (function () {
    function OvenGas() {
    }
    OvenGas.prototype.turnOvenOn = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    };
    OvenGas.prototype.turnOvenOff = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    };
    OvenGas.prototype.bake = function (item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!"); //insert fart humor here
        }
    };
    return OvenGas;
}());
var OvenElectric = /** @class */ (function () {
    function OvenElectric() {
    }
    OvenElectric.prototype.turnOvenOn = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE OVEN IS ON!</p>";
        }, 1000);
        console.log("THE OVEN IS ON!"); //insert fart humor here
        this._isOn = true;
    };
    OvenElectric.prototype.turnOvenOff = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE OVEN IS OFF!</p><hr>";
        }, 3000);
        console.log("THE OVEN IS OFF!");
        this._isOn = false;
    };
    OvenElectric.prototype.bake = function (item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no electricity!</p>";
            }, 2000);
            console.log("there is no electricity!");
        }
    };
    return OvenElectric;
}());
var Restaurant = /** @class */ (function () {
    function Restaurant(name, oven) {
        this._name = name;
        this._oven = oven;
    }
    Restaurant.prototype.Cook = function (item) {
        this._oven.turnOvenOn();
        this._oven.bake(item);
        this._oven.turnOvenOff();
    };
    return Restaurant;
}());
/*let bakery = new Restaurant("Bakery");
bakery.Cook("cookies");*/
var bakery = new Restaurant("Bakery", new OvenGas());
bakery.Cook("cookies");
var creperie = new Restaurant("Creperie", new OvenElectric());
creperie.Cook("crepes");
