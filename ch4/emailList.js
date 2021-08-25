const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    $("#joinList").addEventListener("click", evt => {
        const email1 = $("#email1").value;
        const email2 = $("#email2").value;
        const firstName = $("#firstName").value;

        let errorMessage = "";

        if (email1 == "") {
            errorMessage += "First email is required.\n";
        }

        if(email2 == "") {
            errorMessage += "Second email is required.\n";
        }

        if (email1 !== email2) {
            errorMessage += "Both emails must match.\n";
        }

        if(firstName == "") {
            errorMessage += "First name is required.\n";
        }

        if(errorMessage != "") {
            alert(errorMessage);
            evt.preventDefault();
        }
    });

    $("#clearForm").addEventListener("click", () => {
        $("email1").value = "";
        $("email2").value = "";
        $("firstName").value = "";
        $("email1").focus();
    });
});