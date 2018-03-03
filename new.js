console.log("hello world")
var arrayQs = [
    {
        question: "What is 1 + 1?",
        answers: ["3", "2", "4", "5"],
        correct: "2"
    },
    {
        question: "What is 1 + 2?",
        answers: ["3", "2", "4", "5"],
        correct: "3"
    },
    {
        question: "What is 1 + 3?",
        answers: ["3", "2", "4", "5"],
        correct: "4"
    },
    {
        question: "What is 1 + 4?",
        answers: ["3", "2", "4", "5"],
        correct: "5"
    },
    {
        question: "What is 1 + 5?",
        answers: ["6", "2", "4", "5"],
        correct: "6"
    },
    {
        question: "What is 1 + 6?",
        answers: ["7", "2", "4", "5"],
        correct: "7"
    },
    {
        question: "What is 1 + 7?",
        answers: ["8", "2", "4", "5"],
        correct: "8"
    },
    {
        question: "What is 1 + 8?",
        answers: ["9", "2", "4", "5"],
        correct: "9"
    },
    {
        question: "What is 1 + 9?",
        answers: ["10", "2", "4", "5"],
        correct: "10"
    },
    {
        question: "What is 1 + 10?",
        answers: ["11", "2", "4", "5"],
        correct: "11"
    }
]

// html containers
var score = 0;
var board = document.getElementsByClassName('board')[0] 
var question = document.getElementsByClassName('question')[0] 
var answersShown = document.getElementsByClassName('answer')
var restart = document.getElementById('restart')
// insert question + answers into board
// FIX: refactor:
function makeQuestions() {
    for (var i = 0; i < arrayQs.length; i++) {
        // create div to hold question
        var container = document.createElement('div')
        // add class to div
        container.setAttribute('class', ' triviaQuestion')
        var currentQ = '<h2>' + arrayQs[i].question + '</h2>'
        // add current Question to container
        container.innerHTML = currentQ
        // add choices to container        
        for (var x = 0; x < arrayQs[i].answers.length; x++) {
            // array for radio input + choices
            var choiceAndRadio = []
            choiceAndRadio.push('</br><input type="radio" name="choice' + i + '" class="testButton ') 
            if (arrayQs[i].answers[x] === arrayQs[i].correct) {
                choiceAndRadio.push(' correct')
            }
            choiceAndRadio.push('"  value="' + arrayQs[i].answers[x] + '">' + arrayQs[i].answers[x])

           // add choices to container HTML
            container.innerHTML += choiceAndRadio.join(" ")
        }
        // button to submit response

        var testResponse = document.createElement('button')
        testResponse.setAttribute("class", " testResponse"+ " testResponse" + i)
        var text = document.createTextNode("Submit")
        testResponse.appendChild(text)
        container.appendChild(testResponse)

        // Add event listener to each submit button 
              testResponse.addEventListener('click', runTest)
        // append container to board
        board.appendChild(container) 
    }
}
// list of div questions (10)
var scoreBoard = document.querySelector('#score')
// test individual question response
function runTest() {
    // FIX: .correct selecting first on page, instead of current Element
    var rightAnswer = document.querySelector('.correct');
    if (rightAnswer.checked) {
            console.log(this.parentElement);
            this.parentElement.classList.add('rightAnswer');this.parentElement.textContent = "";
            score += 10;
            scoreBoard.innerHTML = score;
            console.log('yay')
        } else {
            this.parentElement.classList.add('wrongAnswer');this.parentElement.textContent = "";
            console.log('nope')
        }
}
// reset
function clear() {
    // clear board, show results
    board.innerHTML = ""
    scoreBoard.innerHTML = 0
    makeQuestions()
    console.log("hello")
}
restart.addEventListener('click', clear)

makeQuestions()

// temporary/remove later:
    var checked = document.querySelectorAll('input[name=choice1]');
