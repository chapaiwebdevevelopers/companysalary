// login check by not operator

const isloggedIn= true;


// Login check 
if (isloggedIn === true){
    console.log("Loggin successfully");
}
else {
    console.log("Login failed");
}

 isloggedIn ? console.log("Loggin successfully- ternary") : console.log("Login Failed-ternary")
// Login user can add post comment

if (!isloggedIn){
    console.log("Please Login First");
}
else {
        console.log("Please Add Your Comment here");
}

