console.log("COPY PASTES ")
function sayHelloWorld(){
    console.log("Hello, world!");
  }
  sayHelloWorld(); 
// Expected output: "Hello, world!"

// friendName is our parameter. It's a placeholder that we can use inside the function
function greetAFriend(friendName){
    console.log(`Hello, ${friendName}!`)
  }
  
  // When we call the function, we give it the actual name that we want to print.
  greetAFriend("Dwayne");

  function greetAFriend(friendName, timeOfDay){
    var greeting;
    if(timeOfDay === "morning"){
      greeting = "Good morning";
    } else if (timeOfDay === "afternoon"){
      greeting = "Good afternoon";
    } else if (timeOfDay === "evening"){
      greeting = "Good evening";
    } else {
      greeting = "Hello";
    }
    var personalGreeting = `${greeting}, ${friendName}!`;
    console.log(personalGreeting);
  }
  
  greetAFriend("Todd", "evening"); // Good evening, Todd!
  greetAFriend("Jamie", "morning"); // Good morning, Jamie!
  greetAFriend("Hannah", "afternoon"); // Good afternoon, Hannah!
  greetAFriend("Norman", "midnight"); // Hello, Norman!

  function makeAPizza(crustType, size, toppingsArray){
    var finishedPizza = `A ${size} pizza with ${crustType} crust and ${toppingsArray.join(", ")} on top.`
    return finishedPizza;
  }
  
  var myPizza = makeAPizza("wheat", "large", ["green peppers", "onions", "pepperoni"]);
  
  var yourPizza = makeAPizza("white", "medium", ["anchovies", "feta", "pineapple"]);
  
  console.log(myPizza); 
  // Expected output: "A large pizza with wheat crust and green peppers, onions, pepperoni on top."
  
  console.log(yourPizza);
  // Expected output: "A medium pizza with white crust and green anchovies, feta, pineapple on top."
  

  console.log("END OF COPY PASTES ")



console.log(" ")
function sayILoveJavaScript(){ console.log ("I love JavaScript")}
sayILoveJavaScript();


console.log(" ")
console.log("Parameter Functions (destination)")
function destinationAndName(name,destination){
    console.log(`${name} would love to visit ${destination}`)
  }
  
 destinationAndName("Todd", "Canada"); // Todd would love to visit Canada
 destinationAndName("Jamie", "Burgerking"); // Jamie would love to visit Burgerking
 destinationAndName("Hannah", "Kremlin"); // Hannah would love to visit Kremlin
 destinationAndName("Norman", "Hello"); // Norman would love to visit Hello
 console.log(" ")

 console.log("Taco Truck excercise")
function tacotype(shell,toppingArray){
    var finishedTaco = `Your ${shell} taco with ${toppingArray.join(", ")} is ready.`
    return finishedTaco
}
var tacoOrder = tacotype("Softshell", ["Beef","salsa","cheese"]);
console.log(tacoOrder);
console.log(" ")
console.log("Calculator")
function add(num1,num2){
    var sum=(num1+num2)
    return sum
}
function subtract(num1,num2){
    var difference=(num1-num2)
    return difference
}
function multiply(num1,num2){
    var product=(num1*num2)
    return product
}
function divide(num1,num2){
    var dividend=(num1/num2)
    return dividend
}
console.log("ADDING")
var adition = add(1,1)
console.log(adition)
var adition = add(1,2)
console.log(adition)
var adition = add(1,3)
console.log(adition)
console.log("MULTIPLYING")
var multiplication = multiply(1,1)
console.log(multiplication)
var multiplication = multiply(1,2)
console.log(multiplication)
var multiplication = multiply(1,3)
console.log(multiplication)
console.log("SUBTRACTING")
var subtraction = subtract(1,1)
console.log(subtraction)
var subtraction = subtract(2,1)
console.log(subtraction)
var subtraction = subtract(3,1)
console.log(subtraction)
console.log("DIVIDING")
var division = divide(1,1)
console.log(division)
var division = divide(2,1)
console.log(division)
var division = divide(3,1)
console.log(division)
console.log(" ")

console.log("Sandwhich maker ")
function sandWichOrder(breadType,sandwichName,isToasted){
if (isToasted===toasted){ 
  var finSandwich = `You ordered a toasted ${sandwichName} on ${breadType}`
  return finSandwich
}
else{ var finSandwich = `You ordered a ${sandwichName} on ${breadType}`
return finSandwich}
}
var newSandwichOrder = 