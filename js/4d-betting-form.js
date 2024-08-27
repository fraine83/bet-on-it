function showConfirmation() {
    var digit1 = document.getElementById("digit1").value;
    var digit2 = document.getElementById("digit2").value;
    var digit3 = document.getElementById("digit3").value;
    var digit4 = document.getElementById("digit4").value;

    if (digit1 === "" || digit2 === "" || digit3 === "" || digit4 === "") {
        alert("Please select all four digits!");
        return;
    }

    var selectedNumbers = digit1 + digit2 + digit3 + digit4;
    document.getElementById("selectedNumber").innerHTML = "Selected Number: " + selectedNumbers;
    document.getElementById("confirmationBox").style.display = "block";
}

function placeBet() {
    var selectedNumbers = document.getElementById("selectedNumber").innerHTML.split(": ")[1];
    var betAmount = document.getElementById("betAmount").value;

    if (isNaN(betAmount) || betAmount <= 0) {
        alert("Please enter a valid bet amount.");
        return;
    }

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Your bet: " + selectedNumbers + " | Amount: ₱" + betAmount;

    // Send the bet to a server
    // For this , just clear the form
    document.getElementById("bettingForm").reset();
    document.getElementById("confirmationBox").style.display = "none";
}