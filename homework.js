// Create a variable isRaining(true /false) if it is true , print "Take an Umbrella"

const isRaining=false;

isRaining ? console.log("Take an umbrella") : console.log("No Raining, You can Go away");

//Take a variable Stock. If Stock is 0 , print "Out of Stock" ( use only if, no else)

const isStock = 0;
if(isStock ===0){
    console.log("Out of stock");
}

// Take a number variable and check whether it is positive or negative ( using if else)
const number1 = 0;

if (number1 > 0){
    console.log(number1+ " is Positive Number");
}
else if (number1 <0 ){
    console.log(number1+ " is negative number");
}
else {
    console.log("You type Zero which not Positive nor Negative");
}



// Take a speed variable . if speed is greater than 80, print "Overspeeding"Otherwise "Normal speed"

const speed = 80;
speed >80 ? console.log("OverSpeed"): console.log("Normal Speed");

// Using a month number ( 1-12), determine which season that month falls in (Winter, summer, Monsoon etc).

const monthNum = 7;

if (Number.isInteger(monthNum) <= 12 && Number.isInteger(monthNum) > 0 ){
     
    let season = monthNum/2;
    if (season<=1){
        console.log("Summer");
    }
    else if (season<=2){
        console.log("Monsoon");
    }
    else if (season<=3){
        console.log("Autumn");
    }
    else if (season<=4){
        console.log("Late Autumn");
    }
    else if (season<=5){
        console.log("Winter");
    }
    else if (season<=6){
        console.log("Spring");
    }
    else {
        console.log("Something Wrong");
    }

} else {
    console.log("Please input number of month between 1 to 12")
}

//using age ahd hasID, use nested if-else to check whether someone is eligible to vote

const voterAge=11;
const hasID= false;
if (voterAge >= 18){
    if (hasID){
        console.log("Eligible to Vote");
    }
    else {
        console.log("Please Bring Your NID Card");
    }
}
else {
    console.log("You are Not Eligible. Try next Time");
}


/* using isLoggedIn and isAdmin, build a nested condition -- if logged in and admin,       print "Admin Dashboard"; if logged in but not admin, print "User Dashboard" if not logged in , print "Please Login"
*/

const isLoggedIn = false;
const isAdmin = false;

if(!isLoggedIn){
    console.log("Please Login");
}
else {
    if(isAdmin){
        console.log("Admin Dashboard");
    }
    else{
        console.log("User Dashboard");
    }
}


// Determin whether a number is even or odd using the ternary operator

const askNumber=0;
(askNumber%2)=== 0 ? console.log(askNumber+"is a Even Number") : console.log(askNumber+" is Odd Number");
