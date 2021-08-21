const $ = selector => document.querySelector(selector);

const joinList = evt => {
    // Get user entries from the text boxes
    const email1 = $("#email1").value;
    const email2 = $("#email2").value;
    const firstName = $("#firstName").value;

    let isValid = true;
    if(email1 == "") {
        $("#email1Error").textContent = "Email is required.";
        isValid = false;
    } else {
        $("#email1Error").textContent = "";
    }

    if(email2 != email1) {
        $("#email2Error").textContent = "Emails must match.";
        isValid = false;
    } else {
        $("#email2Error").textContent = "";
    }

    if(firstName == "") {
        $("#firstNameError").textContent = "First name is required.";
        isValid = false;
    } else {
        $("#email1Error").textContent = "";
    }

    // cancel form submit if any invalid entries
    if(!isValid)
    {
        evt.preventDefault();
    }
};

const clearForm = () => {
    $("#email1").value = "";
    $("#email2").value = "";
    $("#firstName").value = "";

    $("#email1Error").textContent = "*";
    $("#email2Error").textContent = "*";
    $("firstNameError").textContent = "*";

    $("#email1").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#joinList").addEventListener("click", joinList);
    $("#clearForm").addEventListener("click", clearForm);

    $("#email1").focus();
})