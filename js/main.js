var Car = (function () {
    function Car() {
    }
    return Car;
}());
window.onload = function () {
    var enterButton = document.querySelector("input[type=button]");
    enterButton.onclick = chooseCar;
};
function chooseCar() {
    console.log("Car was chosen!");
    clearErrors();
    if (dataIsValid()) {
        var newCar = getCar();
        showCar(newCar);
    }
}
function dataIsValid() {
    var boolFlag = true;
    var carName = getInputById("carName").value;
    if (carName == "") {
        boolFlag = false;
        addErrors("I need a car name");
    }
    var carYear = getInputById("year").value;
    var carYearRef = parseFloat(carYear);
    if (carYear == "" || isNaN(carYearRef) || carYearRef < 1886) {
        boolFlag = false;
        addErrors("The year has to exist and can't be below 1886");
    }
    var carPrice = getInputById("price").value;
    var carVal = parseFloat(carPrice);
    if (carPrice == "" || isNaN(carVal) || carVal <= 0) {
        boolFlag = false;
        addErrors("The car has to have a value");
    }
    var carOil = getInputById("dieselGas").value;
    if (carOil.toUpperCase() != "GAS" && carOil.toUpperCase() != "DIESEL") {
        boolFlag = false;
        addErrors("I only sell diesel or gasoline based engines.");
    }
    var carBrand = $("brand").value;
    if (carBrand == "") {
        boolFlag = false;
        addErrors("You need a brand of car");
    }
    return boolFlag;
}
function addErrors(errorMessage) {
    var errorSummary = getInputById("validationInfo");
    var errorItem = document.createElement("li");
    errorItem.innerText = errorMessage;
    errorSummary.appendChild(errorItem);
}
function getCar() {
    var brandNewCar = new Car();
    var carName = $("carName");
    brandNewCar.carName = carName.value;
    var carPrice = $("price");
    brandNewCar.price = parseFloat(carPrice.value);
    var carYear = $("year");
    brandNewCar.year = parseFloat(carYear.value);
    var carGas = $("dieselGas");
    brandNewCar.dieselorgas = carGas.value;
    var carBrand = $("brand");
    brandNewCar.brand = carBrand.value;
    console.log(brandNewCar);
    return brandNewCar;
}
function showCar(theCar) {
    var displayDiv = $("carListing");
    var oilType = "";
    if (theCar.dieselorgas.toUpperCase() == "GAS") {
        oilType = "runs on basic oil.";
    }
    else if (theCar.dieselorgas.toUpperCase() == "DIESEL") {
        oilType = "runs on diesel.";
    }
    var carInfo = document.createElement("p");
    carInfo.innerText = "You chose a " + theCar.year + " " + theCar.carName + " made by " + theCar.brand + ", costing a total of $" + theCar.price.toFixed(2) + " and it " + oilType;
    displayDiv.appendChild(carInfo);
}
function $(id) {
    return document.getElementById(id);
}
function getInputById(id) {
    return $(id);
}
function clearErrors() {
    $("validationInfo").innerText = "";
}
