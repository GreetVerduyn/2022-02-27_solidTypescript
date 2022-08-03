var OvenGas = /** @class */ (function () {
    function OvenGas() {
    }
    OvenGas.prototype.turnOn = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    };
    OvenGas.prototype.turnOff = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    };
    OvenGas.prototype.prepareFood = function (item) {
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
    OvenElectric.prototype.turnOn = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE ELECTRIC OVEN IS ON!</p>";
        }, 4000);
        console.log("THE OVEN IS ON!"); //insert fart humor here
        this._isOn = true;
    };
    OvenElectric.prototype.turnOff = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE ELECTRIC OVEN IS OFF!</p><hr>";
        }, 6000);
        console.log("THE OVEN IS OFF!");
        this._isOn = false;
    };
    OvenElectric.prototype.prepareFood = function (item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 5000);
            console.log("Now baking " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no electricity!</p>";
            }, 5000);
            console.log("there is no electricity!");
        }
    };
    return OvenElectric;
}());
var Fridge = /** @class */ (function () {
    function Fridge() {
    }
    Fridge.prototype.turnOn = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE RAPID COOLING IS ON!</p>";
        }, 7000);
        console.log("THE RAPID COOLING IS ON!"); //insert fart humor here
        this._isOn = true;
    };
    Fridge.prototype.turnOff = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE RAPID COOLING IS OFF!</p><hr>";
        }, 10000);
        console.log("THE RAPID COOLING IS OFF!");
        this._isOn = false;
    };
    Fridge.prototype.prepareFood = function (item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now cooling " + item + " !</p>";
            }, 9000);
            console.log("Now cooling " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : the fridge is broken!</p>";
            }, 9000);
            console.log("the fridge is broken!");
        }
    };
    return Fridge;
}());
var Restaurant = /** @class */ (function () {
    function Restaurant(name, kitchenAppliance) {
        this._name = name;
        this._kitchenAppliance = kitchenAppliance;
    }
    Restaurant.prototype.makeFood = function (item) {
        this._kitchenAppliance.turnOn();
        this._kitchenAppliance.prepareFood(item);
        this._kitchenAppliance.turnOff();
    };
    return Restaurant;
}());
/*let bakery = new Restaurant("Bakery");
bakery.Cook("cookies");*/
var bakery = new Restaurant("Bakery", new OvenGas());
bakery.makeFood("cookies");
var creperie = new Restaurant("Creperie", new OvenElectric());
creperie.makeFood("crepes");
var iceCreamParlour = new Restaurant("Ice-cream Parlour", new Fridge());
iceCreamParlour.makeFood("ice cream");
