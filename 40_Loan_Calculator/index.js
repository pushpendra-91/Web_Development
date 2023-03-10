function calculateLoan() {
    loanAmountValue = document.getElementById("loan-amount").value;

    interestRateValue = document.getElementById("interest-rate").value;

    monthsToPay = document.getElementById("months").value;

    interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPay;

    monthlyPayment = (loanAmountValue / monthsToPay + interest).toFixed(2);

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`

}