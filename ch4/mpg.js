"use strict"

const $ = selector => document.querySelector(selector);

const getErrorMesgValidNumber = lbl => 
    `${lbl} must be a valid number greater than zero.`;

    const getErrorMesgNumeric = lbl => 
    `${lbl} must be numeric.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const proccessEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if(isNaN(miles)) {
        alert(getErrorMesgNumeric("Miles driven"));
        focusAndSelect("#miles");
    } else if (miles <= 0) {
        alert(getErrorMesgValidNumber("Miles driven"))
        focusAndSelect("#miles");
    } else if(isNaN(gallons)) {
        alert(getErrorMesgNumeric("Gallons used"));
        focusAndSelect("#gallons");
    } else if (gallons <= 0) {
        alert(getErrorMesgValidNumber("Gallons used"))
        focusAndSelect("#gallons");
    } else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", proccessEntries);
    $("#miles").focus();
});