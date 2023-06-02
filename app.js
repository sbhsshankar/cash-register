const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGiven");
const buttonCheck = document.querySelector("#buttonCheck");
const errorMessage = document.querySelector("#errorMessage");
const noOfNotes = document.querySelectorAll(".noOfNotes");

const availableNotes = [500, 200, 100, 50, 20, 10, 5, 2, 1];

buttonCheck.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if(billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value ;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("The cash provided should atleast be equal to the bill amount");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned) {
    for(let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
            );
         amountToBeReturned %= availableNotes[i];
         noOfNotes[i].innerText = numberOfNotes;
    }
}
function hideMessage(){
    errorMessage.style.display = "none";
}
function showMessage(msg){
    errorMessage.style.display = "block";
        errorMessage.innerText = msg;
}