//create the following functions:

//if a customer has a subscription the customer will receive a    
//25% discount after the refill total has been calculated          

//if the customer has a coupon, the timmy will receive
//a $10 discount after the subscription discount has been calculated

//return and log the string "your grand total is ${}finalAmount"

//create the customer object
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
}
const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}
const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//Create function for subscription discount
function subcriptionDiscount(total, subDiscount){
    return total - (total * subDiscount);
}
//Create function for coupon discount
function couponDiscount(total, coupon){
    return total - coupon;
}
//Create function for both discounts
function bothDiscounts(total, dollar, percentage){
    total =  (total - dollar);
    return total = total - (total * percentage)
}

//Create if statement for sub and coupon discount 
if(timmy["subscription"] === true && timmy["coupon"] === true){
    let finalAmount = bothDiscounts((timmy["pricePerRefill"] * timmy["refills"]), 10, .25)
    console.log(`Your grand total is $${finalAmount}`);

//create if statement for sub only discount
} else if (timmy["subscription"] === true){
    let finalAmount = subcriptionDiscount((timmy["pricePerRefill"] * timmy["refills"]), .25);
    console.log(`Your grand total is $${finalAmount}`);

//create if statement for coupon only discount
} else if (timmy["coupon"] === true){
    let finalAmount = couponDiscount((timmy["pricePerRefill"] * timmy["refills"]), 10.00);
    console.log(`Your grand total is $${finalAmount}`);
}