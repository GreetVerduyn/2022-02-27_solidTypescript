interface Oven{
    turnOvenOn()
    turnOvenOff()
    bake(item:string)
}

class OvenGas implements Oven{
    private _isOn : boolean;

    public turnOvenOn() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    }

    public turnOvenOff() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    }

    public bake(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!");//insert fart humor here
        }
    }
}
class OvenElectric implements Oven{
    private _isOn : boolean;

    public turnOvenOn() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE OVEN IS ON!</p>";
        }, 1000);
        console.log("THE OVEN IS ON!"); //insert fart humor here
        this._isOn = true;
    }

    public turnOvenOff() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE OVEN IS OFF!</p><hr>";
        }, 3000);
        console.log("THE OVEN IS OFF!");
        this._isOn = false;
    }

    public bake(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no electricity!</p>";
            }, 2000);
            console.log("there is no electricity!");
        }
    }
}


class Restaurant {
    private _name : string;
    private _oven : Oven;

    constructor(name : string, oven:Oven) {
        this._name = name;
        this._oven = oven;
    }

    public Cook(item : string) {
        this._oven.turnOvenOn();
        this._oven.bake(item);
        this._oven.turnOvenOff();
    }
}


/*let bakery = new Restaurant("Bakery");
bakery.Cook("cookies");*/


let bakery = new Restaurant("Bakery", new OvenGas());
bakery.Cook("cookies");

let creperie = new Restaurant("Creperie", new OvenElectric());
creperie.Cook("crepes");

