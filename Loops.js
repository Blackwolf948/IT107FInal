//Moviearray
console.log("Movies")
var moviesArray = ["Casablanca", "Star Wars", "Singing in the Rain", "The Wizard of Oz", "Die Hard","Shawshank Redemption"];

var i = 0; 

while(i < moviesArray.length){
  console.log(moviesArray[i]);
  i++;
}
console.log(" ")
//TWEET TWEET
console.log("TWEETWEET")
var tweetLoop = 0
while(tweetLoop<100){ 
    console.log("TWEET TWEET TWEET");
    tweetLoop++;
}
console.log(" ")
//Favorite Food
console.log("Favorite Foods")
var favoriteFoodsArray = ["Pizza","Tacos","Burgers","Pancakes","Cake"]
for( var foodArray = 0; foodArray<favoriteFoodsArray.length; foodArray++){
    console.log(favoriteFoodsArray[foodArray]);
}
console.log(" ")
//Student Names
console.log("Student Names")
var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"];
for(var studentArray = 0; studentArray<cohortOneStudents.length; studentArray++){
    console.log(cohortOneStudents[studentArray])
}
console.log(" ")
//Interests
console.log("Interests")
var interestMArray=["hiking","coding","math","30 rock","pizza"]
for(var interestArray = 0; interestArray<interestMArray.length; interestArray++){
    console.log("One of my interests is: ",interestMArray[interestArray])
}
console.log(" ")
//Interests
console.log("Finterests");
var finterestMArray=["hiking","coding","math","30 rock","pizza"];
for(var finterestArray = 0; finterestArray<finterestMArray.length; finterestArray++){
if( finterestMArray[finterestArray]==="coding"){
    console.log(`My Favorite interest is: ,${finterestMArray[finterestArray]}`)
}
else
{console.log(`One of my interests is: ",${finterestMArray[finterestArray]}`)}
}
console.log(" ")
//Harry Potter
console.log("HarryPotter")
var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
for(harryarray=0; harryarray<harryPotterTitles.length;harryarray++){
    console.log("Harry Potter and the "+harryPotterTitles[harryarray]);
}
console.log(" ")
//Student Grades
console.log("Student Grades")
var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
for(gradesc=0; gradesc<grades.length;gradesc++){
if (grades[gradesc]  >= 0 && grades[gradesc]  <= 69){console.log ("You Got a F")}
else if( grades[gradesc] >= 70 && grades[gradesc] <= 76){console.log ("You Got a D")}
else if( grades[gradesc] >= 77 && grades[gradesc] <= 84){console.log ("You Got a C")}
else if( grades[gradesc] >= 85 && grades[gradesc] <= 92){console.log ("You Got a B")}
else if( grades[gradesc] >= 93 && grades[gradesc] <= 100){console.log ("You Got a A")}
}



console.log(" ")
//Cheers
console.log("Cheers")
var cheerArray=["2","4","6","8","Who do we appreciate?!"]
for(CheerI=0;  CheerI<cheerArray.length;CheerI++){
    console.log(cheerArray[CheerI])
}
