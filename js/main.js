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
    var carName = $("car");
    brandNewCar.car = carName.value;
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
}
function $(id) {
    return document.getElementById(id);
}
