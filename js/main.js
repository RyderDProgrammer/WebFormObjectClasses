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
    return;
}
function showCar(theCar) {
}
function $(id) {
    return document.getElementById(id);
}
