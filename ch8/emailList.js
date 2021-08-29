"use strict";

$(document).ready( () => {
    $("#joinList").click( () => {
        const email1 = $("#email1").val();
        const email2 = $("#email2").val();
        let isValid = true;

        if(email1 == "") {
            $("#email1").next().text("This field is required");
            isValid = false;
        } else {
            $("#email1").next().text("");
        }

        if(email2 == "") {
            $("#email2").next().text("This field is required");
            isValid = false;
        } else if (email1 != email2) {
            $("#email2").next().text("The email addresses much match.");
            isValid = false;
        } else {
            $("#email2").next().text("");
        }

        if($("#firstName").val() == "") {
            $("#firstName").next().text("This field is required");
        } else {
            $("#firstName").next().text("");
        }

        if(isValid) {
            $("#emailForm").submit();
        }
    });

    $("#clearForm").click( () => {
        $("#email1").val("");
        $("#email2").val("");
        $("#firstName").val("");

        $("#email1").next().text("*");
        $("#email2").next().text("*");
        $("#firstName").next().text("*");

        $("#email1").focus();
    });
});