// // var name = "Ibrohim";




// function square(name) {
//     return "hello" + name.trim()
// }


// console.log(square(" Ibrohim"));

/*

function checkage(age) {
    
    if(age < 12 ){
        return "Ibrohim chaqaloq";
    }
    else if(12 <= age && age <= 16 ){
        return "Ibrohim ospirin";
    }
    else if(16 <= age && age <= 21 ){
        return "Ibrohim balogat";
    }
    else if(21 <= age && age < 50 ){
        return "orta yosh";
    }
    else if( age >= 50  ){
        return "qariya";
    }
}

console.log(checkage(50));
*/





var elForm = document.querySelector(".form")
var elInput = document.querySelector(".form__input")
var elButtton = document.querySelector(".form__btn")
var elMan = document.querySelector(".head__man")
var elValo = document.querySelector(".head__velo")
var elCar = document.querySelector(".head__car")
var elAirplane = document.querySelector(".head__airplane")


elForm.addEventListener("submit" , function(event){
    event.preventDefault();

    var elValue = elInput.value;
    var Person = 3.6;
    var Velosiped = 20.1;
    var Mashina = 70;
    var Plane = 800;


    function people() {
        return elValue/Person;
    }
    function velo() {
        return elValue/Velosiped;
    }

    function car() {
        return elValue/Mashina;
    }

    function airplane() {
        return elValue/Plane;
    }


    elMan.textContent = Math.round(people());
    elValo.textContent = Math.round(velo());
    elCar.textContent = Math.round(car());
    elAirplane.textContent = Math.round(airplane());
})