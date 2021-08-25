"use strict"

const $ = selector => document.querySelector(selector);

const calculateFV = (amount, rate, years) => {
    let futureValue = amount;
    for (let i = 1; i <= years; i++) {
        futureValue += futureValue * rate / 100;
    }

    clearErrors();
    return parseFloat(futureValue).toFixed(2);
};

const clearErrors = () => {
    $("#error").textContent = "";
}

/*
const proccessEntries = () => {
    const amount = parseFloat($("#investment").value);
    const rate = parseFloat($("#rate").value);
    const years = parseFloat($("#years").value);

    clearErrors();
    var errorMessage = "";

    if (isNaN(amount) || amount < 0 || amount > 100000) {
        errorMessage += "Investment is a number that's greater than zero and less than 100,0000.<br />";
        $("#investment").focus();
    } if (isNaN(rate) || rate < 0 || rate > 15) {
        errorMessage += "Interest rate is a number that's greater than 0 and less than or equal to 15.<br />"
        $("#rate").focus();
    } if (isNaN(years) || years < 0  || years > 50) {
        errorMessage += "Years is a number that's greater than zero and less than or equal to 50.<br />"
        $("#years").focus();
    } 
    
    if (errorMessage == "") {
        var futureValue = calculateFV(amount, rate, years);
        $("#future_value").value = futureValue;
    } else {
        $("#error").innerHTML = errorMessage;
    }
}
*/

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", evt => {
        const amount = parseFloat($("#investment").value);
        const rate = parseFloat($("#rate").value);
        const years = parseFloat($("#years").value);
    
        clearErrors();
        var errorMessage = "";
    
        if (isNaN(amount) || amount < 0 || amount > 100000) {
            errorMessage += "Investment is a number that's greater than zero and less than 100,0000.<br />";
            $("#investment").focus();
        } if (isNaN(rate) || rate < 0 || rate > 15) {
            errorMessage += "Interest rate is a number that's greater than 0 and less than or equal to 15.<br />"
            $("#rate").focus();
        } if (isNaN(years) || years < 0  || years > 50) {
            errorMessage += "Years is a number that's greater than zero and less than or equal to 50.<br />"
            $("#years").focus();
        } 
        
        if (errorMessage == "") {
            var futureValue = calculateFV(amount, rate, years);
            $("#future_value").value = futureValue;
        } else {
            $("#error").innerHTML = errorMessage;
        }
    });
});