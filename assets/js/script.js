/*Declaration of Global constants*/
const startQuizRef = document.querySelector('#startquiz');
const instructionsRef = document.querySelector('#instructions');
const quizContainerRef = document.querySelector('#quiz-container');
const quizQuestionRef = document.querySelector('#quiz-question');
const nextBtnRef = document.querySelector('#next-btn');
const resultsBtnRef = document.querySelector('#results-btn');
const optionsAreaRef = document.querySelector('#options-area');
const nameRef = document.querySelector("#name");
const resultContainerRef = document.querySelector("#result-container");
const userNameRef = document.querySelector("#username");
const currentQuestionRef = document.querySelector("#current-question");
const scoreRef = document.querySelector("#score");
const usernameResultRef = document.querySelector("#username-result");
const resultMessageRef = document.querySelector("#result-message");

/*Declaration of Global variables*/
let shuffledQuestions;
let currentQuestionIndex;
let score = 0;

/*Event Listeners to start quiz*/
startQuizRef.addEventListener("click", startQuiz);

function startQuiz() {
    if (nameRef.value === '') {
        alert("Please enter name before clicking Start Quiz button");
    } else {
        instructionsRef.classList.add('hide');
        quizContainerRef.classList.remove('hide');
        userNameRef.innerHTML = nameRef.value;
        shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
        displayShuffledQuestion();
    }
}

function displayShuffledQuestion() {
    resetState();
    showOptions(shuffledQuestions[currentQuestionIndex]);
}

function showOptions(question) {
    currentQuestionRef.innerHTML = currentQuestionIndex + 1;
    quizQuestionRef.innerHTML = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('option-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        optionsAreaRef.appendChild(button);

    });
}

function resetState() {
    nextBtnRef.classList.add('hide');
    while (optionsAreaRef.firstChild) {
        optionsAreaRef.removeChild(optionsAreaRef.firstChild);
    }
}

function selectAnswer(event) {
    const selectedButton = event.target;
    const correctOption = selectedButton.dataset.correct === 'true';
    const allOptions = optionsAreaRef.children.length;

    for (let i = 0; i < allOptions; i++) {
        const currentButton = optionsAreaRef.children[i];
        const isCorrect = currentButton.dataset.correct === 'true';

        if (isCorrect) {
            currentButton.style.backgroundColor = "green";
        }
        currentButton.disabled = true;

    }

    if (correctOption) {
        selectedButton.style.backgroundColor = "green";
        increaseScore();
        score++
    } else {
        selectedButton.style.backgroundColor = "red";

    }

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBtnRef.classList.remove('hide');
    } else {
        resultsBtnRef.classList.remove('hide');
    }
}

/*Functions to increase scores*/
function increaseScore() {
    let oldScore = parseInt(scoreRef.innerHTML);
    scoreRef.innerHTML = ++oldScore;
}

/*Evenet Listenereer for Next button*/
nextBtnRef.addEventListener('click', function () {
    currentQuestionIndex++;
    displayShuffledQuestion();
});


/*Evenet Listenereer for Results button*/
resultsBtnRef.addEventListener('click', function () {
    quizContainerRef.classList.add('hide');
    resultContainerRef.classList.remove('hide');
    usernameResultRef.innerHTML = nameRef.value;
    const scorePercent = Math.round(100 * score / questions.length);
    if (scorePercent >= 80) {
        resultMessageRef.innerHTML = `Congratulations, you got ${scorePercent}%, you are a Masters champion!`;
        crowdApplauseRef.play();
    } else if (scorePercent >= 60) {
        resultMessageRef.innerHTML = `Well done, you got ${scorePercent}%, you made the cut!`;
    } else if (scorePercent >= 40) {
        resultMessageRef.innerHTML = `Hard luck, you got ${scorePercent}%, you didn't make the cut!`;
    } else if (scorePercent >= 0) {
        resultMessageRef.innerHTML = `Unfortunatley, you only got ${scorePercent}%, they didn't really suit you!`;
    }
});

const questions = [];

fetch("assets/data/questions.json")
    .then(response => {
        return response.json();
    })
    .then(loadedQuestions => {
        questions = loadedQuestions;
    });





