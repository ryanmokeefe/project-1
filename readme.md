# Welcome To Trivia!

![alt text](https://github.com/ryanmokeefe/project-1/blob/master/screenshot.png "screenshot")

### The rules are simple: See if you can guess what novel each quote is from, see how many you can get right!

###### Literature Trivia will become a more intriguing game as the developer's skills increase. Stay tuned!

## How it was built: 

### The Questions:

  An `Array` is used to store the question `Objects`, which each contain 3 key/value pairs: the question, an `Array` of choices, and the correct answer.
  A `Function` with a nested `For Loop` creates a container for each question using `document.createElement()`, and set it's class with `.setAttribute`. Each question is then pushed to an `Array`, as an `HTML String`. The HTML string is added to the container using `.innerTHML`.
  Another nested `For Loop` ( within the first for loop ) is used to cycle through the array of choices for each object, and add each choice, as well as a `Radio Input Button`, to a new array as an HTML string.
  While adding the choices, an `If Statement` is used to check the current array `value` against the correct answer, which is stored inside the question's Object. If the value matches, then the statement adds an HTML class of 'correct' to the current choice as it is added.
  When the for loop finishes, the array of choices is then concatenated as a string, and added to the container using `.innerHTML`.
  A button is then added to each container in order to submit your response. 
  Finally, the container is appended to the board using `.appendChild()`.
  
### The Answers: 
  
  When the user makes a selection and submits, A `Function` is used to check the class of the radio button selection in order to see if the selction has the class name 'correct'. 
  If it is the correct answer, the function adds a class of 'rightAnswer' to the current container element, and a score counter in the Javascript and on the page is increased by 10. 
  If the answer is incorrect, the function adds a class of 'wrongAnswer' to the current container element. 
 
 ## Known Bugs: 
  Need to adjust Background of rightAnswer and wrongAnswer.
  
  Need to refactor.
  
  User needs to complete questions in order. If answered out of order, the script will find the .correct of the skipped element and mark the submission as incorrect. The use of `querySelector` will return the first element with class .correct, and if a user has skipped a question, it will return the unaswered choice and view it as not selected. 
  Code: 
  ``` function runTest() {
          var rightAnswer = document.querySelector('.correct');        
            if (rightAnswer.checked) {
            console.log(this.parentElement);
            this.parentElement.classList.add('rightAnswer');this.parentElement.textContent = "";
            score += 10;
            scoreBoard.innerHTML = score;
            console.log('yay') ```
