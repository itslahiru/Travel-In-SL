let btnSubmit=document.getElementById("tt");
btnSubmit.addEventListener("click",tt);

function tt(){
    event.preventDefault();//Page won't reload
    console.log("Cardholder Name:",document.getElementById("fname").value);
    console.log("Card No:",document.getElementById("cardnumber").value);
    console.log("Email:",document.getElementById("email").value);
    console.log("Expiration Date",document.getElementById("validthru").value);
    console.log("CVV / CVC:",document.getElementById("cvv").value);
    let amount=document.querySelector("input[name='amount']:checked").value;
console.log("Amount :"+amount);

}

let amount = document.querySelectorAll("input[name='amount']");

for (let i = 0; i < amount.length; i++) {
    amount[i].addEventListener("change", checkAmount);
}

//Checking radio button values
function checkAmount() {
    if (this.value == "100") {
        console.log("Donation 100 LKR");
    }
    else if (this.value == "250") {
        console.log("Donation 250 LKR");
    }
    else if (this.value == "500") {
        console.log("Donation 500 LKR");
    }
    else if (this.value == "1000") {
        console.log("Donation 1000 LKR");
    }
    else if (this.value == "2500") {
        console.log("Donation 2500 LKR");
    }
    else if (this.value == "5000") {
        console.log("Donation 5000 LKR");
    }
    else {
        console.log("Donation 10000 LKR");
    }
}

function myFunction() {

    let cardnumber = document.getElementById("cardnumber").value
    if (cardnumber == "")
    {
        alert("Incomplete Attempt.");
    }
    else{
        alert("Donation Successfull. \t Thankyou!!")
    }
  }