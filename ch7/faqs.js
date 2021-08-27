"use strict";

const $ = selector => document.querySelector(selector);

let timer = null;
let counter = 5;

const goToTerms = () => {
    counter--;
    if(counter == 0) {
        window.location.href = "terms.html";
    } else {
        $("#seconds").textContent = counter;
    }
}

const acceptTerms = () => {
    clearInterval(timer);
    //clearTimeout(timer) for setTimeout() timer..
    $("#terms").setAttribute("class", "hidden");
};

const toggle = evt => {
    const h2 = evt.currentTarget;        // get the clicked h2 element
    const div = h2.nextElementSibling;   // div = h2's sibling div

    h2.classList.toggle("minus");
    div.classList.toggle("open");

    evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
    //timer = setTimeout(goToTerms, 5000);
    const accepted = window.location.href.indexOf("accepted");
    if( accepted > -1 )
    {
        $("#terms").setAttribute("class", "hidden");
    } else {
        timer = setInterval(goToTerms, 1000);
        $("#accept").addEventListener("click", acceptTerms);
    }

    /************************************************
     * attach click event handlers for h2 elements  *
     ************************************************/
    // get the h2 tags
    const h2Elements = faqs.querySelectorAll("#faqs h2");
    
    // attach event handler for each h2 tag	    
    for (let h2Element of h2Elements) {
        h2Element.addEventListener("click", toggle);
    }

    /****************************************
     * set focus on first h2 tag's <a> tag  *
     ****************************************/
    h2Elements[0].firstChild.focus();    
});