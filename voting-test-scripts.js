function TestQuestion(number, content, yesAnswer, noAnswer, neutralAnswer, advocacy) {
    this.number = number;
    this.content = content;
    this.noAnswer = noAnswer;
    this.yesAnswer = yesAnswer;
    this.neutralAnswer = neutralAnswer;
    this.advocacy = advocacy;
    this.answer = null;
} 

/* Page Sections */
const startPage = document.getElementById("start-test");
const testPage = document.getElementById("test-proper");
const additionalInfoPage = document.getElementById("additional-information");
// const accountCreationPage = document.getElementById("account-creation");
// const saveDataPage = document.getElementById("save-data");
const finishPage = document.getElementById("finish-test");

/* Page Buttons */
const startButton = document.getElementById("start-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const additionalInfoPrevButton = document.getElementById("additional-information-prev-button");
const additionalInfoNextButton = document.getElementById("additional-information-next-button");
// const creationPrevButton = document.getElementById("creation-prev-button");
// const creationNextButton = document.getElementById("creation-finish-button");
// const saveDataPrevButton = document.getElementById("no-save-button");
// const saveDataNextButton = document.getElementById("yes-save-button");

/* Question Page Elements */
const advocacy = document.getElementById("advocacy");
const questionNoLabel = document.getElementById("question-number");
const questionCountLabel = document.getElementById("question-count");
const currentProgress = document.getElementById("current-progress")
const questionTitle = document.getElementById("question-title");
const questionBody = document.getElementById("question-body");
const answerDisplay = document.getElementById("answer-display-portion");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const neutralButton = document.getElementById("neutral-button");


/* Additional Information*/
const locationInfo = document.getElementById("location-selection");
const occupationInfo = document.getElementById("occupation-selection");
// const nameInfo = document.getElementById("name-information");
// const passwordInfo = document.getElementById("password-information");

/* Button Properties and Functions */
const testQuestions = [
    new TestQuestion(1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pharetra tellus, a finibus libero. Nulla facilisi. Maecenas id lectus tortor. Nam faucibus et enim ut gravida. Praesent lacinia at tellus sit amet interdum. Praesent lobortis non lectus id suscipit. Mauris eu erat non risus tempor cursus.", "I agree bitch", "I no like", "uhuh", "Advocacy"),
    new TestQuestion(2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pharetra tellus, a finibus libero. Nulla facilisi. Maecenas id lectus tortor. Nam faucibus et enim ut gravida. Praesent lacinia at tellus sit amet interdum. Praesent lobortis non lectus id suscipit. Mauris eu erat non risus tempor cursus.", "I agree bitch", "I no like", "uhuh", "Advocacy"),
    new TestQuestion(3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pharetra tellus, a finibus libero. Nulla facilisi. Maecenas id lectus tortor. Nam faucibus et enim ut gravida. Praesent lacinia at tellus sit amet interdum. Praesent lobortis non lectus id suscipit. Mauris eu erat non risus tempor cursus.", "I agree bitch", "I no like", "uhuh", "Advocacy"),
    new TestQuestion(4, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pharetra tellus, a finibus libero. Nulla facilisi. Maecenas id lectus tortor. Nam faucibus et enim ut gravida. Praesent lacinia at tellus sit amet interdum. Praesent lobortis non lectus id suscipit. Mauris eu erat non risus tempor cursus.", "I agree bitch", "I no like", "uhuh", "Advocacy"),
    new TestQuestion(5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pharetra tellus, a finibus libero. Nulla facilisi. Maecenas id lectus tortor. Nam faucibus et enim ut gravida. Praesent lacinia at tellus sit amet interdum. Praesent lobortis non lectus id suscipit. Mauris eu erat non risus tempor cursus.", "I agree bitch", "I no like", "uhuh", "Advocacy"),
    new TestQuestion(6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pharetra tellus, a finibus libero. Nulla facilisi. Maecenas id lectus tortor. Nam faucibus et enim ut gravida. Praesent lacinia at tellus sit amet interdum. Praesent lobortis non lectus id suscipit. Mauris eu erat non risus tempor cursus.", "I agree bitch", "I no like", "uhuh", "Advocacy"),
];
const questionCount = testQuestions.length;
const statusPercent = 100 / testQuestions.length; 
let questionNumber = 1;


function setTestQuestion(number) {
    advocacy.innerText = testQuestions[number- 1].advocacy;
    questionNoLabel.innerText = testQuestions[number - 1].number;
    questionCountLabel.innerText = questionCount;
    questionTitle.innerText = testQuestions[number - 1].advocacy;
    questionBody.innerText = testQuestions[number - 1].content;
    currentProgress.style.width = ((questionNumber - 1) * statusPercent) + "%";
    flushAllRadioButtons();
    if (testQuestions[number - 1].answer !== null) {
        document.getElementById(testQuestions[number - 1].answer + "-button").style.backgroundColor = "#2B2B2B";

        if(testQuestions[number - 1].answer === "yes"){
            answerDisplay.innerText = testQuestions[number - 1].yesAnswer;
        } else if (testQuestions[number - 1].answer === "no"){
            answerDisplay.innerText = testQuestions[number - 1].noAnswer;
        } else {
            answerDisplay.innerText = testQuestions[number - 1].neutralAnswer;
        }
    } else {
        answerDisplay.innerText = "";
    }
}

/* Radio Button Properties and Functions */
const radioButtons = [
    yesButton,
    noButton,
    neutralButton
];
function flushAllRadioButtons() {
    for (let button of radioButtons) {
        button.style.removeProperty("background-color");
    }
}

/* Button OnClick EventListeners */
startButton.addEventListener("click", e => {
    e.preventDefault();
    startPage.style.display = "none";
    testPage.style.display = "block";       
    setTestQuestion(questionNumber);
});

nextButton.addEventListener("click", e => {
    e.preventDefault();
    if (testQuestions[questionNumber - 1].answer === null) {
        answerDisplay.innerText = "Please choose an answer";
        return
    }

    if (questionNumber === questionCount ) {
        testPage.style.display = "none";
        additionalInfoPage.style.display = "block";        
    } else {
        questionNumber++;  
        setTestQuestion(questionNumber);
    }
    
});
prevButton.addEventListener("click", e => {
    e.preventDefault();
    if (questionNumber === 1) {
        startPage.style.display = "block";
        testPage.style.display = "none";             
    } else {
        questionNumber--;  
        setTestQuestion(questionNumber);
    }
});

additionalInfoNextButton.addEventListener("click", e => {
    e.preventDefault();
    // accountCreationPage.style.display = "block";
    finishPage.style.display = "block";
    additionalInfoPage.style.display = "none";
});

additionalInfoPrevButton.addEventListener("click", e => {
    e.preventDefault();
    testPage.style.display = "block";
    additionalInfoPage.style.display = "none";
    setTestQuestion(questionNumber);
});

// saveDataNextButton.addEventListener("click", e => {
//     e.preventDefault();
//     accountCreationPage.style.display = "block";
//     saveDataPage.style.display = "none";
// });

// saveDataPrevButton.addEventListener("click", e => {
//     e.preventDefault();
//     additionalInfoPage.style.display = "block";
//     saveDataPage.style.display = "none";
// });

// creationNextButton.addEventListener("click", e => {
//     e.preventDefault();
//     finishPage.style.display = "block";
//     accountCreationPage.style.display = "none";

    /* 
     * FOR THE BACKEND PEOPLE:
     *
     * Put all answers from testQuestions as well as 
     * additional info and account info to database 
     * 
     * For the Test Question answers, retrieve answer data
     * from extracting the answer property from each test question 
     * from testQuestions array.
     * 
     * For the additional info, retrieve the values from variables 
     * locationInfo and other variables in that group ny using .value property.
     * Ex. locationInfo.value; 
     * 
     * Moreover, ensure that the values will be matched into possible candidates.
     */
// });

// creationPrevButton.addEventListener("click", e => {
//     e.preventDefault();
//     additionalInfoPage.style.display = "block";
//     accountCreationPage.style.display = "none";
// });


/* Radio Button OnClick EventListeners */
yesButton.addEventListener("click", e => {
    e.preventDefault();
    flushAllRadioButtons();
    yesButton.style.backgroundColor = "#2B2B2B";
    testQuestions[questionNumber - 1].answer = "yes";
    answerDisplay.innerText = testQuestions[questionNumber - 1].yesAnswer;

});
noButton.addEventListener("click", e => {
    e.preventDefault();
    flushAllRadioButtons();
    noButton.style.backgroundColor = "#2B2B2B";
    testQuestions[questionNumber - 1].answer = "no";
    answerDisplay.innerText = testQuestions[questionNumber - 1].noAnswer;
});
neutralButton.addEventListener("click", e => {
    e.preventDefault();
    flushAllRadioButtons();
    neutralButton.style.backgroundColor = "#2B2B2B";
    testQuestions[questionNumber - 1].answer = "neutral";
    answerDisplay.innerText = testQuestions[questionNumber - 1].neutralAnswer;
});



