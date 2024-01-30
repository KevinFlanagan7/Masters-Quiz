/*Declaration of Global constants*/
const startQuizRef = document.querySelector("#startquiz");
const instructionsRef = document.querySelector("#instructions");
const quizContainerRef = document.querySelector("#quiz-container");
const quizQuestionRef = document.querySelector("#quiz-question");
const nextBtnRef = document.querySelector("#next-btn");
const resultsBtnRef = document.querySelector("#results-btn");
const optionsAreaRef = document.querySelector("#options-area");
const nameInputRef = document.querySelector("#name");
const resultContainerRef = document.querySelector("#result-container");
const userNameRef = document.querySelector("#username");
const currentQuestionRef = document.querySelector("#current-question");
const scoreRef = document.querySelector("#score");
const usernameResultRef = document.querySelector("#username-result");
const resultMessageRef = document.querySelector("#result-message");
const correctSoundRef = document.querySelector("#correct-sound");
const incorrectSoundRef = document.querySelector("#incorrect-sound");
const muteBtnRef = document.querySelector("#mutebtn");
const firstApplauseRef = document.querySelector("#first-applause");
const secondApplauseRef = document.querySelector("#second-applause");
const thirdApplauseRef = document.querySelector("#third-applause");
const mastersThemeRef = document.querySelector("#masters-theme");
const restartQuizRef = document.querySelector("#restart-quiz");
const shuffledQuestions = [];
const homePage = "index.html";

/*Declaration of Global variables*/
let questions = [];
let currentQuestionIndex;
let isMuted = false;

/**
 * Fetch API to get Quiz questions from the local JSON file in the data folder.
 *  It loads the questions and assigns them to the global variable "questions" array. 
 */
fetch("assets/data/questions.json")
    .then(response => response.json())
    .then(loadedQuestions => questions = loadedQuestions);

/**
 * It hides the "Next" button and removes all child elements from the options area.
 */
const resetState = () => {
    nextBtnRef.classList.add("hide");
    while (optionsAreaRef.firstChild) {
        optionsAreaRef.removeChild(optionsAreaRef.firstChild);
    }
}

/**
 * It resets the state and then shows the options for the current question.
 */
const displayShuffledQuestion = () => {
    resetState();
    showOptions(shuffledQuestions[currentQuestionIndex]);
}

/**
 * It increments the current score and updates the score display in the UI.
 */
const increaseScore = () => {
    let score = parseInt(scoreRef.innerHTML);
    scoreRef.innerHTML = ++score;
}

/**
 * If the name is not entered, it shows an alert, otherwise, it initializes the quiz.
 */
const startQuiz = () => {
    if (nameInputRef.value === "") {
        alert("Please enter name before clicking Start Quiz button");
    } else {
        instructionsRef.classList.add("hide");
        quizContainerRef.classList.remove("hide");
        userNameRef.innerHTML = nameInputRef.value;
        shuffledQuestions.push(...questions.sort(() => Math.random() - 0.5));
        currentQuestionIndex = 0;
        displayShuffledQuestion();
        mastersThemeRef.play();
    }
}

/**
 * Function to display options for a given question.
 * It updates the UI with the current question number, question text, and answer buttons.
 * @param {Object} question - The question object containing the question text and answers.
 */
const showOptions = (question) => {
    currentQuestionRef.innerHTML = currentQuestionIndex + 1;
    quizQuestionRef.innerHTML = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("option-btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        optionsAreaRef.appendChild(button);

    });
}

/**
 * Function to handle the selection of an answer.
 * It visually indicates correct and incorrect answers, plays sounds, updates the score, 
 * and shows the "Next" or "Results" button based on the current question index.
 * @param {Event} event - The click event object.
 */
const selectAnswer = (event) => {
    const selectedButton = event.target;
    const correctOption = selectedButton.dataset.correct === "true";
    const allOptions = optionsAreaRef.children.length;

    // Visual feedback for all options
    for (let i = 0; i < allOptions; i++) {
        const currentButton = optionsAreaRef.children[i];
        const isCorrect = currentButton.dataset.correct === "true";

        if (isCorrect) {
            currentButton.style.backgroundColor = "green";
        }
        // Disables options buttons once selected so score is correct
        currentButton.disabled = true;
    }

    // Visual and audio feedback for the selected answer
    if (correctOption) {
        selectedButton.style.backgroundColor = "green";
        correctSoundRef.play();
        increaseScore();

    } else {
        selectedButton.style.backgroundColor = "red";
        incorrectSoundRef.play();
    }

    // Shows the next or results button based on the current question index
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBtnRef.classList.remove("hide");
    } else {
        resultsBtnRef.classList.remove("hide");
    }
}

/**
 * Event listener for the "DOMContentLoaded" event.
 * It initializes quiz event listeners (startQuiz, mute, next, results & restart quiz buttons) 
 * when the DOM is fully loaded.
 * @param {Event} event - The DOMContentLoaded event.
 */
document.addEventListener("DOMContentLoaded", () => {

    nameInputRef.focus();
    startQuizRef.addEventListener("click", startQuiz);
    restartQuizRef.addEventListener("click", () => window.location.href = homePage);

    muteBtnRef.addEventListener("click", () => {
        if (isMuted) {
            mastersThemeRef.muted = false;
            correctSoundRef.muted = false;
            incorrectSoundRef.muted = false;
            firstApplauseRef.muted = false;
            secondApplauseRef.muted = false;
            thirdApplauseRef.muted = false;
            muteBtnRef.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            mastersThemeRef.muted = true;
            correctSoundRef.muted = true;
            incorrectSoundRef.muted = true;
            firstApplauseRef.muted = true;
            secondApplauseRef.muted = true;
            thirdApplauseRef.muted = true;
            muteBtnRef.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        }
        // Enables mute toggle state
        isMuted = !isMuted;
    });

    nextBtnRef.addEventListener("click", () => {
        currentQuestionIndex++;
        displayShuffledQuestion();
    });

    resultsBtnRef.addEventListener("click", () => {
        quizContainerRef.classList.add("hide");
        resultContainerRef.classList.remove("hide");
        usernameResultRef.innerHTML = nameInputRef.value;

        const scorePercent = Math.round(100 * scoreRef.innerHTML / questions.length);
        if (scorePercent >= 80) {
            resultMessageRef.innerHTML = `Congratulations, you got ${scorePercent}%, you are a Masters champion!`;
            firstApplauseRef.play();
        } else if (scorePercent >= 60) {
            resultMessageRef.innerHTML = `Well done, you got ${scorePercent}%, you made the cut!`;
            secondApplauseRef.play();
        } else if (scorePercent >= 0) {
            resultMessageRef.innerHTML = `Unfortunatley, you only got ${scorePercent}%, you didn't make the cut!`;
            thirdApplauseRef.play();
        }
    });
});

