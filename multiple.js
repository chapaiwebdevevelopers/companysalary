let salary = 7000;
let isBcs = true;
let hasCar = false;
let experienceAge = 4;
let asset = 150000;
let isTax = false;

// to catch officers who trying to break the rules 

if (salary < 50000 && isBcs===true && experienceAge <=4 ){
    if (asset <= 175000 && hasCar){
            console.log("Send This Employee ID to admin for investigate");
    }
    else{
        if(isTax && hasCar){
            console.log("return");
        }
        else{
            console.log("send this employee id to Tax officers")
        }
    }
}
else {
    console.log("Return");
}