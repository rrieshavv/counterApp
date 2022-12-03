let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let totalPeople = document.getElementById("total-count");

let count = 0;

function increment(){
    count += 1;
    countEl.textContent = count;
}

let countSum = 0;

function save(){
    savedCount= count + ", "
    countSum += count //for total 
    totalPeople.textContent = countSum
    saveEl.textContent += savedCount
    count = 0
    countEl.textContent = count;
}

function reset(){
    count = 0
    countEl.textContent = count;
    totalPeople.textContent = "0"
    countSum = 0
    console.log(savedCount)
    saveEl.textContent = ""
}