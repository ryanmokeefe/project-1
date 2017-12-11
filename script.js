console.log("hello world")
var questions = [
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

// insert 1 question + answers into board
var output = ""
function makeQuestions() {

    for (var i = 0; i < questions.length; i++) {
        // create div to hold question
        var output = document.createElement('div')

        var currentQ = ""
        currentQ.push(questions[i].question)
        // create divs to hold answers
        
    }
}

function results() {
    
}

makeQuestions()
