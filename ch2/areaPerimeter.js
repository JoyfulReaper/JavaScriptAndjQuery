"use strict";

let total = 0;

const length = parseInt(prompt("What is the length?"));
const width = parseInt(prompt("What is the width?"));

const area = length * width;
const perimeter = length * 2 + width * 2;

let html = `<p>Length: ${length}</p>
            <p>Width: ${width}</p>
            <p>Area: ${area}</p>
            <p>Perimeter ${perimeter}`;

document.write(html);