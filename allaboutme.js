var firstName = "Jeremy";
var lastName = "Perkins";
var age = 22;
var likesTravel = true;
var fullName = `${firstName} ${lastName}`;
var worstFullName = firstName+ " "+lastName
var movieArray = ['Shawshank Redemption', 'Jurasic Park']
var tempsArray = [97, 55, 62, 82, 79, 91, 74, 86];
tempsArray.push(100);
tempsArray.splice(1,0, "500 oh hell");
console.log(firstName);
console.log(lastName);
console.log(worstFullName);
console.log(fullName);
console.log(age);
console.log(likesTravel);
console.log(movieArray);
console.log(tempsArray)
console.log(tempsArray[1]);
console.log("My Favorite temperature is " +tempsArray[2]);





var jeremyObject = {
    firstName: "Jeremy",
    lastName: "Perkins",
    age: 23,
    LikesToTravel: true,
    FavoriteMovies:["Shawshank Redemption", ] 
  }
  console.log (jeremyObject.FavoriteMovies[0])