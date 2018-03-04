var arrayQs = [
    {
        question: "And so it goes..",
        answers: ["Player Piano", "Galapagos", "Timequake", "Slaughterhouse Five"],
        correct: "Slaughterhouse Five"
    },
    {
        question: "Beware of the man who works hard to learn something, learns it, and finds himself no wiser than before.",
        answers: ["Breakfast of Champions", "Cat's Cradle", "Timequake", "Bluebeard"],
        correct: "Cat's Cradle"
    },
    {
        question: "We are what we pretend to be, so we must be careful about what we pretend to be.",
        answers: ["Slaughterhouse Five", "Mother Night", "Sirens of Titan", "Galapagos"],
        correct: "Mother Night"
    },
    {
        question: "I was a victim of a series of accidents, as are we all.",
        answers: ["Slaughterhouse Five", "Bluebeard", "Sirens of Titan", "Cat's Cradle"],
        correct: "Sirens of Titan"
    },
    {
        question: "I have this disease late at night sometimes, involving alcohol and the telephone.",
        answers: ["Breakfast of Champions", "Bluebeard", "Slapstick", "Slaughterhouse Five"],
        correct: "Slaughterhouse Five"
    },
    {
        question: "There are plenty of good reasons for fighting...but no good reason to ever hate without reservation, to imagine that God Almighty hates with you, too. ",
        answers: ["Welcome to the Monkey House", "Slaughterhouse Five", "Mother Night", "Sirens of Titan"],
        correct: "Mother Night"
    },
    {
        question: "A step backward, after making a wrong turn, is a step in the right direction.",
        answers: ["Cat's Cradle", "Player Piano", "Galapagos", "Timequake"],
        correct: "Player Piano"
    },
    {
        question: "We are healthy only to the extent that our ideas are humane.",
        answers: ["Breakfast of Champions", "Sirens of Titan", "Mother Night", "Welcome to the Monkey House"],
        correct: "Breakfast of Champions"
    },
    {
        question: "Science is magic that works.",
        answers: ["Mother Night", "Breakfast of Champions", "Player Piano", "Cat's Cradle"],
        correct: "Cat's Cradle"
    },
    {
        question: "All this happened, more or less.",
        answers: ["Timequake", "Galapagos", "Player Piano", "Slaughterhouse Five"],
        correct: "Slaughterhouse Five"
    }
]

// html containers
var score = 0;
var board = document.getElementsByClassName('board')[0] 
var question = document.getElementsByClassName('question')[0] 
var answersShown = document.getElementsByClassName('answer')
var restart = document.getElementById('restart')
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
    var rightAnswer = document.querySelector('.correct');
    if (rightAnswer.checked) {
            this.parentElement.classList.add('rightAnswer');this.parentElement.textContent = "";
            score += 10;
            scoreBoard.innerHTML = score;
        } else {
            this.parentElement.classList.add('wrongAnswer');this.parentElement.textContent = "";
        }
}
// reset
function clear() {
    // clear board, show results
    board.innerHTML = ""
    scoreBoard.innerHTML = 0
    makeQuestions()
}
restart.addEventListener('click', clear)

makeQuestions()
