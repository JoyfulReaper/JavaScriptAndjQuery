"use strict"

const $ = selector => document.querySelector(selector);

const processEntries = () =>
{
    const email = $("#emailAddress");
    const phone = $("#phone");
    const country = $("#country");
    const terms = $("#terms");

    const errorMsgs = [];

    if(email.value == "") {
        errorMsgs.push("Please enter an email address.");
    } 

    if(phone.value == "") {
        errorMsgs.push("Please enter a mobile phone number.");
    }

    if(country.value == "") {
        errorMsgs.push("Please select a country.");
    }

    if(terms.checked == false) {
        errorMsgs.push("You must agree to the terms of service");
    }

    if(errorMsgs.length == 0) {
        $("form").submit();
    } else {
        displayError(errorMsgs);
    }
};

const displayError = messages => {
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    for(let msg of messages) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    const node = $("ul");
    if(node == null) {
        const form = $("form");
        form.parentNode.insertBefore(ul, form);
    } else {
        node.parentNode.replaceChild(ul, node);
    }
}

const resetForm = () => {
  $("form").reset();
  $("#emailAddress").nextElementSibling.textContent = "*";
  $("#phone").nextElementSibling.textContent = "*";
  $("#country").nextElementSibling.textContent = "*";
  $("#terms").nextElementSibling.textContent = "*";
  $("#emailAddress").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#register").addEventListener("click", processEntries);
    $("#resetForm").addEventListener("click", resetForm);
    $("#email").focus();
})