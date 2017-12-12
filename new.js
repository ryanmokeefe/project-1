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

// insert question + answers into board
var output
function makeQuestions() {
    for (var i = 0; i < arrayQs.length; i++) {
        // create div to hold question
        var container = document.createElement('div')
        // add class to div
        container.setAttribute('class', ' triviaQuestion')
        var currentQ = arrayQs[i].question
        // add current Question to container
        container.innerHTML = currentQ
        // add choices to container
        var choicesShown = document.createElement("div")
        
        for (var x = 0; x < arrayQs[i].answers.length; x++) {
            var choicesShown = document.createElement("div")
            var choiceAndRadio = []
            choiceAndRadio.push('<input type="radio" name="choice" value="Choice">' + arrayQs[i].answers[x])
            // var radio = document.createElement("input")
            // radio.setAttribute("type", "radio")
            // choice.appendChild(radio)
            choicesShown.innerHTML += choiceAndRadio
            
                 // arrayQs[i].answers[x]
            container.appendChild(choicesShown)
        }
        // append container to board
        board.appendChild(container)
        // create divs to hold answers  
    } 
}

function results() {

}

arrayQs.map(makeQuestions)