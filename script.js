

console.log("hello world")
// I would just call this array below questions. anything pluralized in JS will generally refer to an array. I'd also avoid abbreviations. Most editors 
// will let you tab-complete your references, so that you dont have to keep typing out the same long-named references every time while still 
// having the convenience of very clearly labeled references

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


// add the stuff to your clear function
var score = 0
var board = document.getElementsByClassName("board")[0]
var question = document.getElementsByClassName("question")[0]
var answersShown = document.getElementsByClassName("answer")
var restart = document.getElementById("restart")

// don't move this to your clear function though :)
restart.addEventListener("click", clear)


// insert question + answers into board
// FIX: refactor:
function makeQuestions() {
  
  // can use a .forEach here like so
  // arrayQs.forEach(function (question) {
    // //move body of for loop here
  // })
  for (var i = 0; i < arrayQs.length; i++) {
    // create div to hold question
    var container = document.createElement("div")
    // add class to div

    container.setAttribute("class", " triviaQuestion")
    var currentQ = "<h2>" + arrayQs[i].question + "</h2>"
    // let currentQuestion = `<h2> ${arrayQs[i].question}</h2>`

    // add current Question to container
    container.innerHTML = currentQ
    // add choices to container

    // could also replace this with a forEach as well
    for (var x = 0; x < arrayQs[i].answers.length; x++) { 
      //forEach below doesn't seem to be used anywhere in the code, but you want map instead of forEach here.

      // 
      // let choiceAndRadio = arrayQs[i].map((card, i) => {
      //   let htmlQuestion = `<input type="radio" name="choice${i}" class="testButton" ${arrayQs[i].answers[x] === arrayQs[i].correct ? 'class="correct"' : ""} value=${card.answer}/>`
      //   return htmlQuestion 
      // })
      // The code block above is one example about how to simplify the logic below
      //better than using innerHTML is something like 
      //let newOption = document.createElement("input")
      //newOption.setAttribute("name", `choice${i}`)
      // if (arrayQs[i].answers[x] === arrayQs[i].correct) newOption.classlist.add('correct)
      // and s on

      var choiceAndRadio = []
      choiceAndRadio.push(
        '<br/><input type="radio" name="choice' + i + '" class="testButton ' // would break this out into a separate reference
      )
        if (arrayQs[i].answers[x] === arrayQs[i].correct) {
          choiceAndRadio.push(" correct") // class="correct" maybe?
        }
      choiceAndRadio.push(
        '"  value="' + arrayQs[i].answers[x] + '">' + arrayQs[i].answers[x]
      )

      // add choices to container HTML
      container.innerHTML += choiceAndRadio.join(" ")
      /// Map example: choiceAndRadio = arrayQs.map()

      // you can also use the following pattern, which I think is little more natural than using an array and join
      // var string = ''
      // string += 'first thing'
      // string += 'second thing'
      // string => 'first thingsecond thing'
    }
    // button to submit response

    var testResponse = document.createElement("button")
    testResponse.setAttribute("class", " testResponse" + " testResponse" + i)
    var text = document.createTextNode("Submit")
    testResponse.appendChild(text)
    container.appendChild(testResponse)

    // Add event listener to each submit button (james' note: this will just add one to testResponse)
    testResponse.addEventListener("click", runTest)
    // append container to board
    board.appendChild(container)
  }
}
// list of div questions (10)
var scoreBoard = document.querySelector("#score")
// test individual question response
// add event as a parameter to the function below
// function runTest() { //original
function runTest () {
    // FIX: .correct selecting first on page, instead of current Element
  var rightAnswer = document.querySelector(".correct") // can use this.parentNode.querySelector('.correct'), or with jQuery, .siblings()

  // This pattern of creating DOM elements with programatically determined attributes is preferable to the innerHTML approach with input elements you have above. 👍
  if (rightAnswer.checked) {
    console.log(this.parentElement)
    this.parentElement.classList.add("rightAnswer")
    this.parentElement.textContent = ""
    score += 10
    scoreBoard.innerHTML = score
  } else {
    this.parentElement.classList.add("wrongAnswer")
    this.parentElement.textContent = ""
  }
}
// reset
function clear() { //I might call this function startGame
  // clear board, show results
  board.innerHTML = ""
  scoreBoard.innerHTML = 0
  makeQuestions()
  console.log("hello")
}
restart.addEventListener("click", clear)

makeQuestions() // call startGame instead
