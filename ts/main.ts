class Car
{
    car:string;
    price:number;
    dieselorgas:boolean; //boolean for 0 is diesel(false) 1 is gas(true)
    brand:string;
}

window.onload = function()
{
    let enterButton = <HTMLElement>document.querySelector("input[type=button]");
    enterButton.onclick = chooseCar;
}

function chooseCar()
{
    console.log("Car was chosen!");

    if(dataIsValid())
    {
       let newCar = getCar();
       showCar(newCar); 
    }
}

function dataIsValid()
{
    return true;
}

function getCar():Car
{
    return;
}

function showCar(theCar:Car):void
{

}

function $(id:string)
{
    return document.getElementById(id);
}