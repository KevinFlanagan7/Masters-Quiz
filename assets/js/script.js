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






const questions = [

    {
        "question": "Tiger Woods memorably won by 12 shots in 1997. Who came second?",
        "answers": [
            { "text": "Tom Weiskopt", "correct": true },
            { "text": "Chris DiMarco", "correct": false },
            { "text": "Tom Kite", "correct": false },
            { "text": "Tom Watson", "correct": false }
        ]
    },
    {
        "question": "Jack Nicklaus won his 6th and final masters in 1986. What age was he?",
        "answers": [
            { "text": "47", "correct": false },
            { "text": "46", "correct": true },
            { "text": "45", "correct": false },
            { "text": "48", "correct": false }
        ]
    },
    {
        "question": "Rory McIlroy lost a four-stoke lead overnight in 2011. Who ended up winning?",
        "answers": [
            { "text": "Adam Scott", "correct": false },
            { "text": "Lee Westwood", "correct": false },
            { "text": "Charl Schartzel", "correct": true },
            { "text": "Louis Oosthuizen", "correct": false }
        ]
    },
    {
        "question": "Tiger Woods won in 2005 after a dramatic play-off. Who did he beat?",
        "answers": [
            { "text": "Scott Verplan", "correct": false },
            { "text": "Chad Campbell", "correct": false },
            { "text": "Chris DiMarco", "correct": true },
            { "text": "Ian Poulter", "correct": false }
        ]
    },
    {
        "question": "Jordan Spieth fell victim to the par 3 12th in 2016. What score did he have?",
        "answers": [
            { "text": "6", "correct": false },
            { "text": "7", "correct": true },
            { "text": "9", "correct": false },
            { "text": "8", "correct": false }
        ]
    },
    {
        "question": "Who is the youngest player to make the cut at Augusta?",
        "answers": [
            { "text": "Matteo Manassero", "correct": false },
            { "text": "Ryo Ishikawa", "correct": false },
            { "text": "Guan Tianlang", "correct": true },
            { "text": "Rory Mcllroy", "correct": false }
        ]
    },
    {
        "question": "Who was the first player to shoot 63 at the Masters?",
        "answers": [
            { "text": "Jack Nicklaus", "correct": false },
            { "text": "Nick Price", "correct": true },
            { "text": "Ernie Els", "correct": false },
            { "text": "Rory Mcllroy", "correct": false }
        ]
    },
    {
        "question": "When did Seve Ballesteros win his first Masters?",
        "answers": [
            { "text": "1978", "correct": false },
            { "text": "1980", "correct": true },
            { "text": "1979", "correct": false },
            { "text": "1981", "correct": false }
        ]
    },
    {
        "question": "Larry Mize won in 1987 after a three-man play-off. Along with Seve who was the third member?",
        "answers": [
            { "text": "Ben Crenshaw", "correct": false },
            { "text": "Greg Norman", "correct": true },
            { "text": "Bernhard Langer", "correct": false },
            { "text": "Sandy Lyle", "correct": false }
        ]
    },
    {
        "question": "Who does Gary Player share the record with for consecutive cuts made at the Masters?",
        "answers": [
            { "text": "Nick Faldo", "correct": false },
            { "text": "Rikki Rockett", "correct": false },
            { "text": "Ian Woosnam", "correct": false },
            { "text": "Fred Couples", "correct": true }
        ]
    }
];






