class Car
{
    car:string;
    price:number;
    year:number;
    dieselorgas:string;
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
    let brandNewCar = new Car();
    
    let carName = <HTMLInputElement>$("car");
    brandNewCar.car = carName.value;

    let carPrice = <HTMLInputElement>$("price");
    brandNewCar.price = parseFloat(carPrice.value);

    let carYear = <HTMLInputElement>$("year");
    brandNewCar.year = parseFloat(carYear.value);

    let carGas = <HTMLInputElement>$("dieselGas");
    brandNewCar.dieselorgas = carGas.value;

    let carBrand = <HTMLSelectElement>$("brand");
    brandNewCar.brand = carBrand.value;

    console.log(brandNewCar);
    return brandNewCar;
}

function showCar(theCar:Car):void
{

}

function $(id:string)
{
    return document.getElementById(id);
}