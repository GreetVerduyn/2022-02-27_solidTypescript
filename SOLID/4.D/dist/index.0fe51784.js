var Oven = /** @class */ function() {
    function Oven1() {}
    Oven1.prototype.lightGas = function() {
        setTimeout(function() {
            document.getElementById("target").innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    };
    Oven1.prototype.extinguishGas = function() {
        setTimeout(function() {
            document.getElementById("target").innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    };
    Oven1.prototype.bake = function(item) {
        if (this._isOn) {
            setTimeout(function() {
                document.getElementById("target").innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        } else {
            setTimeout(function() {
                document.getElementById("target").innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!"); //insert fart humor here
        }
    };
    return Oven1;
}();
var Restaurant = /** @class */ function() {
    function Restaurant1(name) {
        this._oven = new Oven();
        this._name = name;
    }
    Restaurant1.prototype.Cook = function(item) {
        this._oven.lightGas();
        this._oven.bake(item);
        this._oven.extinguishGas();
    };
    return Restaurant1;
}();
var bakery = new Restaurant("Bakery");
bakery.Cook("cookies"); //Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
 /*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");
 */ 

//# sourceMappingURL=index.0fe51784.js.map
