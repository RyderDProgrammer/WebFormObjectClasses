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
    if (dataIsValid()) {
        var newCar = getCar();
        showCar(newCar);
    }
}
function dataIsValid() {
    return true;
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
    var carHeading = document.createElement("h2");
    carHeading.innerText = theCar.carName;
    var oilType = "";
    if (theCar.dieselorgas.toUpperCase() == "GAS") {
        oilType = "runs on basic oil.";
    }
    else if (theCar.dieselorgas.toUpperCase() == "DIESEL") {
        oilType = "runs on diesel.";
    }
    var carInfo = document.createElement("p");
    carInfo.innerText = "You chose a " + theCar.year + " " + theCar.carName + " made by " + theCar.brand + " costing a total of $" + theCar.price.toFixed(2) + " and it " + oilType;
    displayDiv.appendChild(carInfo);
}
function $(id) {
    return document.getElementById(id);
}
