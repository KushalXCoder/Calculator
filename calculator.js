let numbers = document.querySelectorAll(".number");
let answerDisplay = document.querySelector(".topSection");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        answerDisplay.innerText += number.innerText;
    });
});

let otherOptions = document.querySelectorAll(".otherOptions");
otherOptions.forEach((option) => {
    option.addEventListener("click", () => {
        let answerDisplay = document.querySelector(".topSection");
        answerDisplay.innerText += option.innerText;
        operator.push(option.innerText);
    });
});

let deleteOne = document.querySelector(".deleteOne");
deleteOne.addEventListener("click", () => {
    let answerDisplay = document.querySelector(".topSection");
    answerDisplay.innerText = answerDisplay.innerText.slice(0, -1);
});

let clearAll = document.querySelector(".clearAll");
clearAll.addEventListener("click", () => {
    let answerDisplay = document.querySelector(".topSection");
    let answer = document.querySelector(".answerSection"); 
    answerDisplay.innerText = "";
    answer.innerText = "";
});

let equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    let answer = document.querySelector(".answerSection");
    answer.innerText = eval(answerDisplay.innerText);
    answer.style.display = "block";
    answerDisplay.classList.add("changes");
});

let operators = ["+", "-", "*", "/", "%", "."];
document.addEventListener("keydown", (e) => {
    let answerDisplay = document.querySelector(".topSection");
    let answer = document.querySelector(".answerSection");
    if(!(isNaN(e.key))) {
        answerDisplay.innerText += e.key;
    }
    if(e.keyCode == 8) {
        answerDisplay.innerText = answerDisplay.innerText.slice(0, -1);
    }
    if(operators.includes(e.key)) {
        answerDisplay.innerText += e.key;
    }
    if(e.keyCode == 13) {
        answer.style.display = "block";
        answer.innerText = eval(answerDisplay.innerText);
        answerDisplay.classList.add("changes");
    }
    if(e.keyCode == 27) {
        answerDisplay.innerText = "";
        answer.innerText = "";
    }
    if(e.keyCode == 190) {

    }
});