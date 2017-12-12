console.log("hello world")
var arrayQs = [
    {
        question: "1 + 1",
        answers: ["3", "2", "4", "5"],
        correct: "2"
    }, 
    {
        question: "1 + 2",
        answers: ["3", "2", "4", "5"],
        correct: "3"
    },
    {
        question: "1 + 3",
        answers: ["3", "2", "4", "5"],
        correct: "4"
    }, 
    {
        question: "1 + 4",
        answers: ["3", "2", "4", "5"],
        correct: "5"
    },
    {
        question: "1 + 5",
        answers: ["6", "2", "4", "5"],
        correct: "6"
    },
    {
        question: "1 + 6",
        answers: ["7", "2", "4", "5"],
        correct: "7"
    },
    {
        question: "1 + 7",
        answers: ["8", "2", "4", "5"],
        correct: "8"
    },
    {
        question: "1 + 8",
        answers: ["9", "2", "4", "5"],
        correct: "9"
    },
    {
        question: "1 + 9",
        answers: ["10", "2", "4", "5"],
        correct: "10"
    },
    {
        question: "1 + 10",
        answers: ["11", "2", "4", "5"],
        correct: "11"
    }
]

// html containers

var board = document.getElementsByClassName('board')[0] 
var question = document.getElementsByClassName('question')[0] 
var answersShown = document.getElementsByClassName('answer')
var submit = document.getElementById('submit')
// insert question + answers into board

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
            choiceAndRadio.push('</br><input type="radio" name="choice' + i + '"  value="' + arrayQs[i].answers[x] + '">' + arrayQs[i].answers[x])
           // add choices to container HTML
            container.innerHTML += choiceAndRadio
        }
        // append container to board
        board.appendChild(container) 
    } 
}
// list of div questions (10)
divList = document.getElementsByClassName('triviaQuestion')
// get results
function results() {
    for (var i = 0; i < divList.length; i++) {
        if (divList[i].checked === arrayQs[1].correct) {
            console.log("hello")
        }
    }
}
submit.addEventListener('click', results)

makeQuestions()
