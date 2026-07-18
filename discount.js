// If customer shopping over 5000 then get 30 percent discount
// or shopping between 1000 to 5000 then customer get 10 percent discount
// otherwise no discount
const totalAmount = 900;

if (totalAmount >= 5000){
    const discount = 30;
    const discountAmount = totalAmount/100*discount;
    const payment = totalAmount-discountAmount;
    console.log(payment);
}
else if ( totalAmount >= 1000){
    const discount = 10;
    const discountAmount = totalAmount/100*10;
    const payment = totalAmount-discountAmount;
    console.log(payment);
}
else {
    console.log(totalAmount);
}