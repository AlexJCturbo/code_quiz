//Defining the variables for the quiz
var btnStart = document.getElementById("startBtn");
var startQuizPage = document.getElementById("startPage");
var questionsSection = document.getElementById("displayQuestions");

var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var optionD = document.getElementById("optionD");

var currentQuestionNumber = document.getElementById("questionsTittle");
var currentQuestion = document.getElementById("showQuestion");

var resultAnswer = document.getElementById("answerResult");
var addInitialsSection = document.getElementById("initialsSection");
var userInitials = document.getElementById("userInitials");
var submitInitials = document.getElementById("sendInitials");
var showFinalScore = document.getElementById("displayFinalScore");
var displayHighScores = document.getElementById("allHighScores");
var userScore = document.getElementById("eachHighScore");

var countDown = 0;
var score = 0;
var currentQuestionIndex = 0;
var q;
var correctSol;
var stopTimer = false
var counter = 0;
var userInitialsTag;



// Questions for the quiz
let questions = [
    {   //Question 1
        "identifier": "1",
        "displayQn": "Which of the following is not a primitive-value data type element in JavaScript?",
        "option_A":"String",
        "option_B":"Boolean",
        "option_C":"Array",
        "option_D":"Undefined",
        "solution": "C"
    },
    {   //Question 2
        "identifier": "2",
        "displayQn": "Which of the following is not a reference type element in JavaScript?",
        "option_A":"Boolean",
        "option_B":"Objects",
        "option_C":"Function",
        "option_D":"Array",
        "solution": "A"
    },
    {   //Question 3
        "identifier": "3",
        "displayQn": "What is the Dot Notation used for?",
        "option_A":"To read the value of a property",
        "option_B":"To modify properties of an object",
        "option_C":"To modify properties of an array",
        "option_D":"A and B",
        "solution": "D"
    },
    {   //Question 4
        "identifier": "4",
        "displayQn": "What is the difference between == and ===?",
        "option_A":"== checks for value equality and === checks for type equality.",
        "option_B":"== checks for type equality and === checks for equality and type equality.",
        "option_C":"== checks for value equality and === checks for value and type equality.",
        "option_D":"There is no difference",
        "solution": "C"
    },
    {   //Question 5
        "identifier": "5",
        "displayQn": "What option is not true about an undefined value in JavaScript?",
        "option_A":"The variable used in the code doesn't exist.",
        "option_B":"The variable is not assigned to any value.",
        "option_C":"The variable is trying to read an argument",
        "option_D":"The property does not exist.",
        "solution": "C"
    },
    {   //Question 6
        "identifier": "6",
        "displayQn": "Which is not a types of Pop up boxes available in JavaScript?",
        "option_A":"Alert",
        "option_B":"Pop",
        "option_C":"Confirm",
        "option_D":"Prompt",
        "solution": "B"
    },
    {   //Question 7
        "identifier": "7",
        "displayQn": "What is the only variable that can be used everywhere in the JavaScript code",
        "option_A":"local",
        "option_B":"var",
        "option_C":"let",
        "option_D":"global",
        "solution": "D"
    },
    {   //Question 8
        "identifier": "8",
        "displayQn": "What represents the Null value",
        "option_A":"When a variable is declared but not assigned.",
        "option_B":"It represents a non-existent or a invalid value.",
        "option_C":"It represents a logical entity.",
        "option_D":"It represents a series of characters and is written with quotes",
        "solution": "B"
    },
    {   //Question 9
        "identifier": "9",
        "displayQn": "What is NaN property in JavaScript",
        "option_A":"Error value that means 'no value is available'.",
        "option_B":"Not value assigned to a variable.",
        "option_C":"Not number assigned to a function.",
        "option_D":"Not-a-Number.",
        "solution": "D"
    },
    {   //Question 10
        "identifier": "10",
        "displayQn": "Which option is not true about the 'this' keyword?",
        "option_A":"It calls a function within the function it is included.",
        "option_B":"It refers to the object that the function is a property of.",
        "option_C":"Alone, this refers to the global object.",
        "option_D":"The value of the “this” keyword will depend on the object that is invoking the function.",
        "solution": "A"
    },
]


var showScores = function(){
    console.log(score);
    userScore.innerHTML = score;
}


var setName = function(){
    stopTimer = true;
    counter ++;
    console.log(counter);
    
    startQuizPage.style.display = "none";
    questionsSection.style.display = "none";
    addInitialsSection.style.display = "inline"
    displayHighScores.style.display = "none";

    showFinalScore.innerHTML = score;

    //document.getElementById("sendInitials").onclick = function(){}
    //submitInitials.addEventListener("click", function(){
    submitInitials.onclick = function(){
        userInitialsTag = localStorage.getItem("Initials");
        highScore = localStorage.getItem("Highscore");

        if (highScore === null){
            highScore = 0;
        }

        if (score > highScore){
            userInitials.setItem("Initials", userInitials);
            localStorage.setItem("highscore", score);
        }
    }
}


//Function to render questions
var renderQuestion = function() {
    //variable to assign questions[index]
    q = questions[currentQuestionIndex];
    resultAnswer.innerHTML = "";

    for(var i = 0; i < questions.length; i++){
        currentQuestionNumber.innerHTML = "Question " + q.identifier;
        currentQuestion.innerHTML = q.displayQn;
        optionA.innerHTML = q.option_A;
        optionB.innerHTML = q.option_B;
        optionC.innerHTML = q.option_C;
        optionD.innerHTML = q.option_D;
    
        console.log(q);
        console.log(currentQuestion.innerHTML);
        console.log(optionA.innerHTML);
        console.log(optionB.innerHTML);
        console.log(optionC.innerHTML);
        console.log(optionD.innerHTML);
    }
}

//Function to check answers
var confirmAnswer = function (clicked){
    correctSol = q.solution;
    
    if (clicked === correctSol){
        score = score + 10;
        currentQuestionIndex++;
        resultAnswer.innerHTML = "Correct!"
        console.log(clicked);
        console.log("Correct!")
        console.log(currentQuestionIndex);
        setTimeout(function(){ renderQuestion(); }, 1000);
    }
    else if (clicked !== correctSol) {
        currentQuestionIndex++;
        countDown = countDown - 5;
        resultAnswer.innerHTML = "Wrong!"
        console.log(currentQuestionIndex);
        console.log(clicked);
        console.log("Wrong!");
        setTimeout(function(){ renderQuestion(); }, 500);
        //setTimeout(() => { renderQuestion(); }, 1500);
    }

    //When index of question is equal to questions.length send setName() function
    if (currentQuestionIndex === questions.length){
        setName();
    }
}

//Timer function
var runTimer = function(){
    const timerText = document.getElementById("timerDown");
    //btnStart.addEventListener("click", function(){
    timerInterval = setInterval(function(){
        if(countDown > 0){
        countDown--;
        }else if (countDown == 0 || countDown < 0){
            alert("Time is up!");
            clearInterval(timerInterval);
            countDown = 50;
            setName();
        }
        if (stopTimer){
            clearTimeout(countDown);
        }
        timerText.textContent = 'Time remaining: ' + countDown;
    }, 1000)
}

//Function that calls timer and questions functions
var displayQuestions = function(){
    startQuizPage.style.display = "none";
    questionsSection.style.display = "inline";
    addInitialsSection.style.display = "none"
    displayHighScores.style.display = "none";
    runTimer();
    renderQuestion();
}

//Start quiz function
var startQuiz = function (){
    //Ressetting values
    countDown = 50;
    score = 0;
    currentQuestionIndex = 0;
    stopTimer = false
    displayQuestions ();
}

//start the quiz after clicking the start button
btnStart.addEventListener('click', function(event) {
    event.preventDefault();
    startQuiz();
});
