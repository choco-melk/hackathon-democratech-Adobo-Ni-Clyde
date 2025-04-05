function TestQuestion(number, content, advocacy) {
    this.number = number;
    this.content = content;
    this.advocacy = advocacy;
    this.answer = null;
} 

/* Page Sections */
const startPage = document.getElementById("start-test");
const testPage = document.getElementById("test-proper");
const additionalInfoPage = document.getElementById("additional-information");
const accountCreationPage = document.getElementById("account-creation");
const finishPage = document.getElementById("finish-test");

/* Page Buttons */
const startButton = document.getElementById("start-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const additionalInfoPrevButton = document.getElementById("additional-information-prev-button");
const additionalInfoNextButton = document.getElementById("additional-information-next-button");
const creationPrevButton = document.getElementById("creation-prev-button");
const creationNextButton = document.getElementById("creation-finish-button");

/* Question Page Elements */
const advocacy = document.getElementById("advocacy");
const questionNoLabel = document.getElementById("question-number");
const questionCountLabel = document.getElementById("question-count");
const questionTitle = document.getElementById("question-title");
const questionBody = document.getElementById("question-body");
const stronglyAgreeRadioButton = document.getElementById("strongly-agree");
const agreeRadioButton = document.getElementById("agree");
const neutralRadioButton = document.getElementById("neutral");
const disagreeRadioButton = document.getElementById("disagree");
const stronglyDisagreeRadioButton = document.getElementById("strongly-disagree");


/* Additional Information*/
const locationInfo = document.getElementById("location-selection");
const occupationInfo = document.getElementById("occupation-selection");
const nameInfo = document.getElementById("name-information");
const passwordInfo = document.getElementById("password-information");

/* Button Properties and Functions */
const testQuestions = [
    new TestQuestion(1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pharetra tellus, a finibus libero. Nulla facilisi. Maecenas id lectus tortor. Nam faucibus et enim ut gravida. Praesent lacinia at tellus sit amet interdum. Praesent lobortis non lectus id suscipit. Mauris eu erat non risus tempor cursus.", "Advocacy"),
    new TestQuestion(2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pharetra tellus, a finibus libero. Nulla facilisi. Maecenas id lectus tortor. Nam faucibus et enim ut gravida. Praesent lacinia at tellus sit amet interdum. Praesent lobortis non lectus id suscipit. Mauris eu erat non risus tempor cursus.", "Advocacy"),
    new TestQuestion(3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pharetra tellus, a finibus libero. Nulla facilisi. Maecenas id lectus tortor. Nam faucibus et enim ut gravida. Praesent lacinia at tellus sit amet interdum. Praesent lobortis non lectus id suscipit. Mauris eu erat non risus tempor cursus.", "Advocacy"),
    new TestQuestion(4, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pharetra tellus, a finibus libero. Nulla facilisi. Maecenas id lectus tortor. Nam faucibus et enim ut gravida. Praesent lacinia at tellus sit amet interdum. Praesent lobortis non lectus id suscipit. Mauris eu erat non risus tempor cursus.", "Advocacy"),
    new TestQuestion(5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pharetra tellus, a finibus libero. Nulla facilisi. Maecenas id lectus tortor. Nam faucibus et enim ut gravida. Praesent lacinia at tellus sit amet interdum. Praesent lobortis non lectus id suscipit. Mauris eu erat non risus tempor cursus.", "Advocacy"),
    new TestQuestion(6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pharetra tellus, a finibus libero. Nulla facilisi. Maecenas id lectus tortor. Nam faucibus et enim ut gravida. Praesent lacinia at tellus sit amet interdum. Praesent lobortis non lectus id suscipit. Mauris eu erat non risus tempor cursus.", "Advocacy")
];
const questionCount = testQuestions.length;
let questionNumber = 1;

function setTestQuestion(number) {
    advocacy.innerText = testQuestions[number- 1].advocacy;
    questionNoLabel.innerText = testQuestions[number - 1].number;
    questionCountLabel.innerText = questionCount;
    questionTitle.innerText = testQuestions[number - 1].advocacy;
    questionBody.innerText = testQuestions[number - 1].content;
    flushAllRadioButtons();
    if (testQuestions[number - 1].answer !== null) {
        document.getElementById(testQuestions[number - 1].answer).style.backgroundColor = "#2B2B2B";
    }
}

/* Radio Button Properties and Functions */
const radioButtons = [
    stronglyAgreeRadioButton,
    agreeRadioButton,
    neutralRadioButton,
    disagreeRadioButton,
    stronglyDisagreeRadioButton
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
    accountCreationPage.style.display = "block";
    additionalInfoPage.style.display = "none";
});

additionalInfoPrevButton.addEventListener("click", e => {
    e.preventDefault();
    testPage.style.display = "block";
    additionalInfoPage.style.display = "none";
    setTestQuestion(questionNumber);
});

creationNextButton.addEventListener("click", e => {
    e.preventDefault();
    finishPage.style.display = "block";
    accountCreationPage.style.display = "none";

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
});

creationPrevButton.addEventListener("click", e => {
    e.preventDefault();
    additionalInfoPage.style.display = "block";
    accountCreationPage.style.display = "none";
});


/* Radio Button OnClick EventListeners */
stronglyDisagreeRadioButton.addEventListener("click", e => {
    e.preventDefault();
    flushAllRadioButtons();
    stronglyDisagreeRadioButton.style.backgroundColor = "#2B2B2B";
    testQuestions[questionNumber - 1].answer = "strongly-disagree";
});
disagreeRadioButton.addEventListener("click", e => {
    e.preventDefault();
    flushAllRadioButtons();
    disagreeRadioButton.style.backgroundColor = "#2B2B2B";
    testQuestions[questionNumber - 1].answer = "disagree";
});
neutralRadioButton.addEventListener("click", e => {
    e.preventDefault();
    flushAllRadioButtons();
    neutralRadioButton.style.backgroundColor = "#2B2B2B";
    testQuestions[questionNumber - 1].answer = "neutral";
});
agreeRadioButton.addEventListener("click", e => {
    e.preventDefault();
    flushAllRadioButtons();
    agreeRadioButton.style.backgroundColor = "#2B2B2B";
    testQuestions[questionNumber - 1].answer = "agree";
});
stronglyAgreeRadioButton.addEventListener("click", e => {
    e.preventDefault();
    flushAllRadioButtons();
    stronglyAgreeRadioButton.style.backgroundColor = "#2B2B2B";
    testQuestions[questionNumber - 1].answer = "strongly-agree";
});



