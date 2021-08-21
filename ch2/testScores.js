"use strict";

let total = 0;

const scores = parseInt(prompt("How many tests?"));
let scoreArr = []

for (let i = 0; i < scores; i++) {
    let score = parseInt(prompt("Enter test score"));
    total += score;
    scoreArr.push(score);
}

const average = parseInt(total/scores);

let html = '';

for (let i = 0; i < scores; i++) {
    html += `<p>Score ${i+1} = ${scoreArr[i]}</p>`;
}
html += `<p>Average Score = ${average}</p>`

document.write(html);