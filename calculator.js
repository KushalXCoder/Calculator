let answerDisplay = document.querySelector(".topSection");
let answer = document.querySelector(".answerSection");
let resultDisplayed = false;

// Displaying numbers
let numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if(resultDisplayed) {
            answer.innerText += number.innerText;
        }
        else {
            answerDisplay.innerText += number.innerText;
        }
    });
});

// Displaing operator
let otherOptions = document.querySelectorAll(".otherOptions");
otherOptions.forEach((option) => {
    option.addEventListener("click", () => {
        if(resultDisplayed) {
            answer.innerText += option.innerText;
        }
        else {
            answerDisplay.innerText += option.innerText;
        }
    });
});

// Delete function
let deleteOne = document.querySelector(".deleteOne");
deleteOne.addEventListener("click", () => {
    if(resultDisplayed) {
        answer.innerText = answer.innerText.slice(0, -1);
    }
    else {
        answerDisplay.innerText = answerDisplay.innerText.slice(0, -1);
    }
});

// Clear function
let clearAll = document.querySelector(".clearAll");
clearAll.addEventListener("click", () => {
    resultDisplayed = false;
    answerDisplay.innerText = "";
    answer.innerText = "";
    answer.style.display = "none";
    answerDisplay.classList.remove("changes");
});

// Result function
let equal = document.querySelector(".equal")
equal.addEventListener("click", () => {
    if(resultDisplayed) {
        answerDisplay.innerText = answer.innerText;
    }
    answer.style.display = "block";
    answer.innerText = parseFloat(eval(answerDisplay.innerText));
    answerDisplay.classList.add("changes");
    resultDisplayed = true;
});

// Displaying numbers through keyboard
let operators = ["+", "-", "*", "/", "%", "."];
document.addEventListener("keydown", (e) => {
    if(!(isNaN(e.key))) {
        if(resultDisplayed) {
            answer.innerText += e.key;
        }
        else {
            answerDisplay.innerText += e.key;
        }
    }
    if(e.keyCode == 8) {
        if(resultDisplayed) {
            answer.innerText = answer.innerText.slice(0, -1);
        }
        else {
            answerDisplay.innerText = answerDisplay.innerText.slice(0, -1);
        }
    }
    if(operators.includes(e.key)) {
        if(resultDisplayed) {
            answer.innerText += e.key;
        }
        else {
            answerDisplay.innerText += e.key;
        }
    }
    if(e.keyCode == 13) {
        if(resultDisplayed) {
            answerDisplay.innerText = answer.innerText;
        }
        answer.style.display = "block";
        answer.innerText = eval(answerDisplay.innerText);
        answerDisplay.classList.add("changes");
        resultDisplayed = true;
    }
    if(e.keyCode == 27) {
        resultDisplayed = false;
        answerDisplay.innerText = "";
        answer.innerText = "";
        answer.style.display = "none";
        answerDisplay.classList.remove("changes");
    }
});
