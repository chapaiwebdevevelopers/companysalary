const totalCompanySalary = 500;
const totalEmployee = 7;
const salaryPerEmployeewrong = totalCompanySalary / totalEmployee;
const salaryPerEmployee = parseInt(totalCompanySalary/totalEmployee)
const companyFractionalCash= totalCompanySalary - (salaryPerEmployee*totalEmployee);
const companyFractionalCashAnother = totalCompanySalary % totalEmployee;  //Using Modulo

console.log( "Wrong way because the float cannot possible to distribute " + salaryPerEmployeewrong);
console.log( "there is Problem where the Floating Money if we add all the Employee cost " + salaryPerEmployee);

console.log("Way 1 : company Fractional Cash Remaind"+ companyFractionalCash);
console.log("Way 2 : company Fractional Cash Remaind"+ companyFractionalCashAnother);


console.log(10 + "5");



