let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0


function increment() {
    count+=1;
    countEl.textContent = count;
}

function save(){
    saveEl.textContent += countEl.innerText + " - ";
    count = 0;
    countEl.textContent = count;
}