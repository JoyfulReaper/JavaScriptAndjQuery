"use strict";

$(document).ready(() => {
    $("#categories a").each( (index, link) => {
        const image = new Image();
        image.src = link.href;

        $(link).click( (event) => {
            $("#image").attr("src", link.href);

            event.preventDefault();
        })
    });

    const toggle = evt => {
        const h2Element = evt.currentTarget;
        $(h2Element).toggleClass("minus");
        $(h2Element).next("div").toggleClass("open");
    }

    $("main h2").click(toggle);
})