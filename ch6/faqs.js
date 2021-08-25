"use strict"

const toggle = evt => {
    const h2Elem = evt.currentTarget;
    const divElem = h2Elem.nextElementSibling;
    
    h2Elem.classList.toggle("minus");
    divElem.classList.toggle("open");

    evt.preventDefault(); // Don't use the <a>
}

document.addEventListener("DOMContentLoaded", () => {
    const h2Elements = document.querySelectorAll("#faqs h2");
     
    for(let h2Element of h2Elements) {
        h2Element.addEventListener("click", toggle);
    }

    h2Elements[0].firstChild.focus();
})