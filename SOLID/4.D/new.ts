interface KitchenAppliance{
    prepareFood(item:string)
    turnOn()
    turnOff()

}



class OvenGas implements KitchenAppliance{
    private _isOn : boolean;

    public turnOn() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    }

    public turnOff() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    }

    public prepareFood(item : string)
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
class OvenElectric implements KitchenAppliance{
    private _isOn : boolean;

    public turnOn() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE ELECTRIC OVEN IS ON!</p>";
        }, 4000);
        console.log("THE OVEN IS ON!"); //insert fart humor here
        this._isOn = true;
    }

    public turnOff() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE ELECTRIC OVEN IS OFF!</p><hr>";
        }, 6000);
        console.log("THE OVEN IS OFF!");
        this._isOn = false;
    }

    public prepareFood(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 5000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no electricity!</p>";
            }, 5000);
            console.log("there is no electricity!");
        }
    }
}

class Fridge implements KitchenAppliance{
    private _isOn : boolean;

    public turnOn() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE RAPID COOLING IS ON!</p>";
        }, 7000);
        console.log("THE RAPID COOLING IS ON!"); //insert fart humor here
        this._isOn = true;
    }

    public turnOff() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE RAPID COOLING IS OFF!</p><hr>";
        }, 10000);
        console.log("THE RAPID COOLING IS OFF!");
        this._isOn = false;
    }

    public prepareFood(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now cooling " + item + " !</p>";
            }, 9000);
            console.log("Now cooling " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : the fridge is broken!</p>";
            }, 9000);
            console.log("the fridge is broken!");
        }
    }
}


class Restaurant {
    private _name : string;
    private _kitchenAppliance : KitchenAppliance

    constructor(name : string, kitchenAppliance:KitchenAppliance) {
        this._name = name;
        this._kitchenAppliance = kitchenAppliance;
    }

    public makeFood(item : string) {
        this._kitchenAppliance.turnOn();
        this._kitchenAppliance.prepareFood(item);
        this._kitchenAppliance.turnOff();
    }
}


/*let bakery = new Restaurant("Bakery");
bakery.Cook("cookies");*/


let bakery = new Restaurant("Bakery", new OvenGas());
bakery.makeFood("cookies");

let creperie = new Restaurant("Creperie", new OvenElectric());
creperie.makeFood("crepes");

let iceCreamParlour = new Restaurant("Ice-cream Parlour", new Fridge());
iceCreamParlour.makeFood("ice cream");



