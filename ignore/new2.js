var arrayQs = [
    {
        question: "What is 1 + 1?",
        // array not object
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
let score = 0;
const board = document.getElementsByClassName('board')[0] 
const question = document.getElementsByClassName('question')[0]
const submitButton = document.getElementById('submit')

const results = document.getElementById('results')

// const answersShown = document.querySelectorAll('.answers')
const restart = document.getElementById('restart')


function buildQuiz() {
    const output = [];

    arrayQs.forEach(
        (currentQ, question) => {
            // list of answers
            const answers = [];
// array not object
            for(choice in currentQ.answers) {
                let i = 0
                answers.push(
                    `<label>
                    <input type="radio" name="question${question}" value="${choice}">
                    ${i + 1} : ${currentQ.answers[i]}
                    </label>
                    `
                )
                i++;
            }

            // add q + choices to output
            output.push(
                `<div class="question"> ${currentQ.question}</div>
                <div class="answers"> ${answers.join('')}</div>
                `
            )
        }
    )

    // push onto board
    board.innerHTML = output.join('');

}


function showResults() {
    const answersShown = board.querySelectorAll('.answers');

    // find each Q
    arrayQs.forEach(
        (currentQ, question) => {
            // find each selected answer
            const answerContainer = answersShown[question];
            //backtic
            const selected = `input[name=question` + question + `]:checked`;

            // get value of selected or {} if userInput is blank
            const userInput = (answerContainer.querySelector(selected) || {}).value;

            // if answer is correct add to score
            if(userInput === currentQ.correct){
                score++;
            }
        }
    )

    // display results
    results.innerHTML = `You answered ` + score + ` out of ` + arrayQs.length + ` correctly`;

}

// display quiz
buildQuiz()

// on submit show results
submitButton.addEventListener('click', showResults)
