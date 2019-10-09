var name = window.prompt("Enter your name: ");
alert("Your name is " + name);
var temp = 55 ;
var Condi = "sunny" ;
var sunRise = "7:34 AM" ;
var sunSet =  "5:09 PM" ;
var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32];
const lowtempav = lowTemperatures.reduce((a,b)=>a+b,0)/lowTemperatures.length
const hightempav = highTemperatures.reduce((a,b)=>a+b,0)/highTemperatures.length
var currentWeatherObject={ 
   temperature:{
       High:66,
       Low: 33,
   },
  conditions: "sunny",
  astronomy: {
    sunrise: sunRise,
    sunset: sunSet,
  }
}



console.log("Temp+condition+sunrise+sunset")
console.log("It is currently "+Condi+" and "+temp+" degrees outside." )
console.log(" The sun rose this morning at "+sunRise+ " and will set at "+sunSet+".")

console.log("high+low temps")
console.log(highTemperatures[0])
console.log(lowTemperatures[5])

console.log("Average temps")
console.log(hightempav.toPrecision(3))
console.log(lowtempav.toPrecision(3))

console.log("WeatherObject")
console.log()




