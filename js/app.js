// Hamburger menu for Navigation bar
const navLinks = document.getElementById("navLinks")
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-250px";
}

// Drop down for fiter option in product list page
// Car type drop down
const cartypedropDown = document.getElementById("carType")
function showCarType() {
    carType.style.display = "contents";
    cartypePlus.style.display = "none";
    cartypeMinus.style.display = "contents";
}
function hideCarType() {
    carType.style.display = "none";
    cartypePlus.style.display = "contents";
    cartypeMinus.style.display = "none";
}

// Speed drop down
const speeddropDown = document.getElementById("speedRange")
function showSpeed() {
    speedRange.style.display = "contents";
    speedPlus.style.display = "none";
    speedMinus.style.display = "contents";
}
function hideSpeed() {
    speedRange.style.display = "none";
    speedPlus.style.display = "contents";
    speedMinus.style.display = "none";
}

// Filter button open and close
const filter = document.getElementById("filter")
function showFilter() {
    filter.style.left = "0";
}
function hideFilter() {
    filter.style.left = "-370px"
}