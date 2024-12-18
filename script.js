var image1 = document.getElementById("left");
var image2 = document.getElementById("right");
var image3 = document.getElementById("left2");
var image4 = document.getElementById("right2");
var start = document.getElementById("start");
var stop1 = document.getElementById("stop");
var color1 = document.getElementById("color1");
var carYear = document.getElementById("year");
var model = document.getElementById("model");
var color2 = document.getElementById("color2");
var carYear2 = document.getElementById("year2");
var model2 = document.getElementById("model2");

var text1 = document.getElementById("plate");
var text2 = document.getElementById("owner");
var newText1 = document.getElementById("newText1");
var newText2 = document.getElementById("newText2");
var plate2 = document.getElementById("plate2");
var owner2 = document.getElementById("owner2");
var lumbergini = document.getElementById("Lumbergini")
var mercides = document.getElementById("Mercides")
var selection = document.getElementById("selection")


var x = 1;
var y = 1;
var myInterval;

class cars {
  model;
  year;
  color;
  engineNumber;
  id;
  engine = false;
  platee = "86";
  ownerr = "alo";
  

  constructor(model, year, color,engineNumber ) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.engineNumber = engineNumber;
  }
  startEngine() {
    this.engine = true;
  }
  stopEngine() {
    this.engine = false;
  }
}
var realCar = new cars("Lumbergini", 2026, "red",1);
var realCar2 = new cars("Lumbergini", 2026, "red",2);

newText1.innerHTML = realCar.platee;
newText2.innerHTML = realCar.ownerr;

plate2.innerHTML = realCar2.platee;
owner2.innerHTML = realCar2.ownerr;

color1.style.color = color1.innerHTML = realCar.color;
carYear.innerHTML = realCar.year;
model.innerHTML = realCar.model;

color2.style.color = color2.innerHTML = realCar2.color;
carYear2.innerHTML = realCar2.year;
model2.innerHTML = realCar2.model;

function spin() {
  myInterval = setInterval(car, 15);
}
spin();

function car() {
  if (realCar.engine) {
    image1.style.transform = "rotate(" + ++x + "deg)";
    image2.style.transform = "rotate(" + ++x + "deg)";
  }
  if (realCar2.engine) {
    image3.style.transform = "rotate(" + ++y + "deg)";
    image4.style.transform = "rotate(" + ++y + "deg)";
  }
}

function startlumbergini() {
  realCar.startEngine();
  start.classList.add("invisible");
  stop1.classList.remove("invisible");
}

function startmercides() {
  realCar2.startEngine();
  start2.classList.add("invisible");
  stop2.classList.remove("invisible");
}
function stopLumbergini() {
  realCar.stopEngine();
  start.classList.remove("invisible");
  stop1.classList.add("invisible");
}
function stopMercides() {
  realCar2.stopEngine();
  start2.classList.remove("invisible");
  stop2.classList.add("invisible");
}

function submit() {
  if (selection.value == realCar.engineNumber ) {
  realCar.platee = text1.value;
  realCar.ownerr = text2.value;
  newText1.innerHTML = realCar.platee;
  newText2.innerHTML = realCar.ownerr;
  }
  if(selection.value == realCar2.engineNumber  ){
  realCar2.platee = text1.value;
  realCar2.ownerr = text2.value;
  plate2.innerHTML = realCar2.platee;
  owner2.innerHTML = realCar2.ownerr;
  }
}
console.log(realCar);
console.log(realCar2)
