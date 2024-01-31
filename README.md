![Logo](/documentation/masters-logo.png)

# Masters Golf Quiz

## Goal for this Project

Welcome to the Masters Golf Quiz website. This site's goal is to challenge your golf knowledge of the famous Masters golf tournament with a fun and interactive quiz. 

![Responsive Displays](/documentation/am-i-responsive.png)

## Table of Contents

- [Masters Golf Quiz](#masters-golf-quiz)
- [Goal for this Project](#goal-for-this-project)
- [Table of Contents](#table-of-contents)
- [UX](#ux)
  - [User Stories](#user-stories)
  - [Design](#design)
    - [Fonts](#fonts)
    - [Icons](#icons)
    - [Colours](#colours)
    - [Structure](#structure)
- [Wireframes](#wireframes)
    - [Phone Wireframe](#phone-wireframe)
    - [Tablet Wireframe](#tablet-wireframe)
    - [Desktop Wireframe](#desktop-wireframe)
- [Features](#features)
    - [Existing Features](#existing-features)
        - [Landing Page](#landing-page)
        - [Instructions Section](#instructions-section)
        - [Quiz Section](#quiz-section)
        - [Results Section](#results-section)
    - [Features to be implemented](#features-to-be-implemented)
- [Technologies used](#technologies-used)
    - [Languages](#languages)
    - [Tools](#tools)
- [Testing](#testing)
    - [Code Validation](#code-validation)
    - [Lighthouse](#lighthouse)
    - [Responsiveness](#responsiveness)
    - [Features Testing](#features-testing)
    - [Browser compatibility](#browser-compatibility)
    - [User Stories Testing](#user-stories-testing)
    - [Bugs](#bugs)
    - [Unfixed Bugs](#unfixed-bugs)
- [Deployment](#deployment)
    - [Fork](#fork)
    - [Clone](#clone)
- [Credits](#credits)

## UX

## User Stories

* As a user, I want the quiz to be responsive to my devices.

* As a user, I want clear instructions how to play quiz.

* As a user, I want to easily navigate through quiz.

* As a user, I want to know if I selected the correct answer.

* As a user,  I want to know what the correct answer is if I selected wrong answer. 

* As a user,  I want to know what question number I am on during quiz.

* As a user, I want to know my score during quiz.

* As a user,  I want to know my final score with some feedback.

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Design

### Fonts

I have used [Google Fonts](https://fonts.google.com/ "Google Fonts") to find a text that best suits the feel of the website. For the main text I have chosen [Merienda](https://fonts.google.com/specimen/Merienda?preview.text=Golf%20Classic&query=merienda) as I feel it is has a sharp, simple and easy to read look.

### Icons

I have used icons for my website from the [Font Awesome library](https://fontawesome.com/ "Font Awesome"). These iclude the icons to give the user the option to mute and unmute the quiz sounds. 

### Colours

I have used [Coolers](https://coolors.co/ "Coolors") to help in the selection of my colour scheme. I used coolers contrast checker to optimize, results for green background can be viewed [here](https://coolors.co/contrast-checker/000000-6e9075 "Adjusted colour"), results for light gray background can be viewed [here](https://coolors.co/contrast-checker/000000-d3d3d3 "Adjusted colour"), results for correct answer background can be viewed [here](https://coolors.co/contrast-checker/000000-228C22 "Adjusted colour"), results for incorrect answer background can be viewed  [here](https://coolors.co/contrast-checker/000000-e10000 "Adjusted colour").

![Colour Pallet](/documentation/project-colors.png)

- #6e9075 - This colour will be used as the main background colour with opacity of 0.9.
- #F5F5F5 - This colour will be used as text colour in Next button.
- #000000 - This colour will be used as text colour in quiz buttons.
- #3a3a3a - This colour will be used for background color of Next button.
- #228C22 - This colour will be used for correct answers.
- #E10000 - This colour will be used for incorrect answers.

### Structure

I will be building my website with a mobile first mindset using the Samsung Galaxy S9 (320px) as the smallest screen size for styling to look good on. The screen size breakpoints that I will be using are from [Bootstrap breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/).

| Screen Size | Breakpoint |
| ----------- | ---------- |
| x-small     | <576px     |
| small       | => 576px   |
| medium      | => 768px   |
| large       | => 992px   |
| x-large     | => 1200px  |

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Wireframes

I used [Balsamic](https://balsamiq.com/wireframes/) to develop my wireframes. The sections include landing page with Instructions section, the quiz area section and the results area section.

The wireframes are below:

### [Mobile Wireframe](/documentation/mobile-wireframes.png)

### [Tablet Wireframe](/documentation/tablet-wireframes.png)

### [Desktop Wireframe](/documentation/desktop-wireframes.png)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;


## Features

## Existing Features

### Landing Page

- The landing page includes a background image of the iconic 12th hole of Augusta National golf course which adds to the users visual experience.
- The landing page contains the Header to let the user know that they have arrived at the The Masters Quiz website.
- The Masters logo is under the headings and doubles as a link back to the landing page.
- The Heading, backgroud image and logo are always present during the quiz.

    <details><summary>Screenshots</summary>


    *Landing Page Mobile*

    ![Landing Page Mobile](/documentation/landing-mobile.png)

    *Lanading Page Tablet*

    ![Landing Page Tablet](/documentation/landing-tablet.png)

    *Landing Page Desktop*

    ![Landing Page Desktop](/documentation/landing-desktop.png)


\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

### Instructions Section

- The Instructions area of the Landing page gives clear instructions how to play quiz.
- It contains an input field for the players name which has to be entered before starting the quiz.


    *Name Validation*

    ![Landing Page Mobile](/documentation/name-validation.png)

- Once the player's name has been entered the quiz can be started to the sound of the Masters theme tune for added user experience.
- There is the optional mute button so the user can mute quiz audio if they want to play in a quiet area.
- The cursor is set to be in the name input field once pages loads for user convenience.
- There is a pointer configured to appear once you scroll over input field, Start Quiz and Mute icon.

    <details><summary>Video</summary>

    *Pointer Video*

    <video src="documentation/instructions-pointer.mp4" controls title="Pointer Video"></video>


\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;  

### Quiz Section

- The quiz area contains a personalized welcome message to the player by using the name that was entered into the name input field.
- It has the current question number that you are on out of 10 questions in the quiz.
- It has the current question and the the four options for that question which are shuffled.
- Underneath the options it has the users current score for the question they are on.
- Each button had a pointer configured to appear once user scrolls over.

    <details><summary>Screenshots</summary>

    *Quiz Area Mobile*

    ![Mobile](/documentation/quiz-area-mobile.png)

    *Quiz Area Tablet*

    ![Tablet](/documentation/quiz-area-tablet.png)

    *Quiz Area Desktop*

    ![Desktop](/documentation/quiz-area-desktop.png)

    *Quiz Area Pointer Video*

    <video src="documentation/quiz-area-pointer.mp4" controls title="Title"></video>

- If the correct answer is selected the option button turns green and the correct audio sound is played if adio has not been muted. 
- The correct score counter is icreased by one and the Next button is displayed to navigate to next question.

    <details><summary>Screenshots</summary>

    *Correct answer Mobile*

    ![Mobile](/documentation/correct-mobile.png)

    *Correct Answer Tablet*

    ![Tablet](/documentation/correct-tablet.png)

    *Correct answer Desktop*

    ![Desktop](/documentation/correct-desktop.png)

- If the incorrect answer is selected the option button turns red and the incorrect audio sound is played, the correct answer also turns green to give feaadback to the player what the correct answer was. 
- Once an answer is selected the options are then disabled so correct score is recorded.
- The correct score counter remains the same and the Next button is displayed to navigate to the next question.

    <details><summary>Screenshots</summary>

    *InCorrect answer Mobile*

    ![Mobile](/documentation/incorrect-mobile.png)

    *InCorrect Answer Tablet*

    ![Tablet](/documentation/incorrect-tablet.png)

    *InCorrect answer Desktop*

    ![Desktop](/documentation/incorrect-desktop.png)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

### Results Section

- The results area give the player a personalized message and audio depending on the score.
- There are three different messages and sound effects for scores >=80%, >=60% and <=50%.
- The quiz can be restarted by clicking on the restart quiz button or the Masters logo.

    <details><summary>Screenshots</summary>

    *Results Area <= 50% Mobile*

    ![Mobile](/documentation/results-mobile.png)

    *Results Area >=60% Tablet*

    ![Tablet](/documentation/results-tablet.png)

    *Results Area >=80% Desktop*

    ![Desktop](/documentation/results-desktop.png)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Features to be Implemented

- In the future I would like to implement different levels to the quiz like an amature and professional level.
- A leaderboard so the user's score can be compared with other players.
- A counter timer to answer the questions in a certain time frame like 10 seconds and if no answer selected it would autmatically move to next question giving an incorrect score for that question.
- Fetch random questions from a questions database on the internet.

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Technologies used

### Languages

* [HTML](https://en.wikipedia.org/wiki/HTML "HTML")
* [CSS](https://en.wikipedia.org/wiki/CSS "CSS")
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Libraries & Framework
* [Google Fonts](https://fonts.google.com/ "Google Fonts")
* [Font Awesome library](https://fontawesome.com/ "Font Awesome")
### Tools
* [Balsamic](https://balsamiq.com/wireframes/ "Balsamic")
* [W3C HTML Validation Service](https://validator.w3.org/ "W3C HTML")
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/ "W3C CSS")
* [JShint Validation Service](https://jshint.com/ "JSHint")
* [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview "Lighthouse")
* [Coolers](https://coolors.co/ "Coolers")
* [Am I Responsive](https://ui.dev/amiresponsive "Am I Responsive")
* [Favicon Converter](https://favicon.io/favicon-converter/ "Favicon Converter")

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Testing

### Code Validation



### Lighthouse


### Responsiveness

 
### Features Testing

        
### Browser compatibility


### User Stories Testing

### Bugs

### Unfixed Bugs



## Deployment

Following writing the code then commiting and pushing to GitHub, this project was deployed using GitHub by the following steps.

- Navigate to the repository on github and click **Settings**.
- Then select **Pages** on the side navigation.
- In build and deployment select the **main** branch.
- Select the **/(root)** folder.
- Click on the **Save** button.
- Website is now live at  `https://USERNAME.github.io/Golf-classic/`. 
- If changes are made, commited and pushed to GitHub, the website will be updated.

### Fork

To make a copy of a repository or to fork it using Github follow below steps:

- Go to **Github repository** to be copied.
- Click on the **Fork** button in upper right corner of page to copy.

### Clone

To copy the repository to your local machine in Github follow steps below:

- Go to **Github repository** to be cloned.
- Click on the **Code** button above the list of files.
- Select to clone using either  **HTTPS**, **SSH**, or **Github CLI** and click the **copy** button to copy the URL to clipboard.
- Open **Git Bash**.
- Change the current working directory to the one where you want the cloned directory.
- Type **git clone** and paste the URL from the clipboard. 
- Press **Enter** to create your local clone.

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Credits

For help and advice:

- [Simen Daehlin](https://github.com/Eventyret "Simen Daehlin")

For Landing page image and Logo:

- [Pinterest](https://www.pinterest.ie/pin/758926974676546644 "Pinterest")

Code inspiration for Increasing score:

- [Love Maths Project From Codeinstitute](https://codeinstitute.net "Love Maths Project")

Code inspiration for displaying quiz questions and options:

- [Youtube Web Dev Simplified tutorial](https://www.youtube.com/watch?v=riDzcEQbX6k "Youtube")

Code inspiration for mute toggle:

- [Youtube Mute button tutorial](https://www.youtube.com/watch?v=hsSXzdn_0Gg "Youtube")

My kids for sound effects and Epidemic Sound website:
- [Epidemic Sound](https://www.epidemicsound.com/sound-effects "Youtube")


\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;



