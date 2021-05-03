class Car
{
    carName:string;
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
    clearErrors();


    if(dataIsValid())
    {
       let newCar = getCar();
       showCar(newCar); 
    }
}

function dataIsValid()
{
    let boolFlag = true;

    let carName = getInputById("carName").value;
    if(carName == "")
    {
        boolFlag = false;
        addErrors("I need a car name");
    }

    let carYear = getInputById("year").value;
    let carYearRef = parseFloat(carYear);
    if(carYear == "" || isNaN(carYearRef) || carYearRef < 1886)
    {
        boolFlag = false;
        addErrors("The year has to exist and can't be below 1886");
    }

    let carPrice = getInputById("price").value;
    let carVal = parseFloat(carPrice);
    if(carPrice == "" || isNaN(carVal) || carVal <= 0)
    {
        boolFlag = false;
        addErrors("The car has to have a value")
    }

    let carOil = getInputById("dieselGas").value;
    if(carOil.toUpperCase() != "GAS" && carOil.toUpperCase() != "DIESEL")
    {
        boolFlag = false;
        addErrors("I only sell diesel or gasoline based engines.")
    }

    let carBrand = (<HTMLOptionElement>$("brand")).value;
    if(carBrand == "")
    {
        boolFlag = false;
        addErrors("You need a brand of car")
    }

    return boolFlag;
}

function addErrors(errorMessage:string)
{
    let errorSummary = getInputById("validationInfo");
    let errorItem = document.createElement("li");
    errorItem.innerText = errorMessage;
    errorSummary.appendChild(errorItem);
}

function getCar():Car
{
    let brandNewCar = new Car();
    
    let carName = <HTMLInputElement>$("carName");
    brandNewCar.carName = carName.value;

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
    let displayDiv = $("carListing");

    // let carHeading = document.createElement("h2");
    // carHeading.innerText = theCar.carName;

    let oilType = "";
    if(theCar.dieselorgas.toUpperCase() == "GAS" )
    {
        oilType = "runs on basic oil."
    }
    //Did an else if otherwise anything that wasn't typed
    //out as GAS gas etc would be diesel even typing something
    //like GASS would say diesel
    else if(theCar.dieselorgas.toUpperCase() == "DIESEL")
    {
        oilType = "runs on diesel.";
    }

    let carInfo = document.createElement("p");

    carInfo.innerText = `You chose a ${theCar.year} ${theCar.carName} made by ${theCar.brand}, costing a total of $${theCar.price.toFixed(2)} and it ${oilType}`;
    displayDiv.appendChild(carInfo);
}

function $(id:string)
{
    return document.getElementById(id);
}

function getInputById(id:string):HTMLInputElement
{
    return <HTMLInputElement>$(id);
}

function clearErrors()
{
    $("validationInfo").innerText = "";
}