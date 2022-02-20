function Quiz(questions) {
    this.score = 0;
    this.questions = questions; //[Q1, Q2,...]
    this.questionIndex = 0; //0
}

//Get the Question by Index
Quiz.prototype.getQuestionByIndex = function() {
    return this.questions[this.questionIndex];
};

//Verify the answer with option and goto next question.
Quiz.prototype.checkOptionWithAnswer = function(answer) {
    console.log("answer : ", answer);
    console.log("Question : ", quiz.getQuestionByIndex());
    if (this.getQuestionByIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
};

//Checks wether the questions got over or not.
Quiz.prototype.isFinished = function() {
    return this.questionIndex === this.questions.length;
};

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
};

function showScores() {
    var quizElement = document.getElementById("quiz");
    var resPercentage = (quiz.score / questions.length) * 100;
    var result = `<h1> Result </h1>
          <h2 id='score'> Your Scores: ${quiz.score} and mark percentage is ${resPercentage}% </h2>`;
    quizElement.innerHTML = result;
}

function loadQuestions() {
    if (quiz.isFinished()) {
        showScores();
    } else {
        // show question
        var questionElement = document.getElementById("question");
        var questionLoaded = quiz.getQuestionByIndex();
        questionElement.innerHTML = questionLoaded.text;

        //show options
        var choices = questionLoaded.choices;
        for (let idx = 0; idx < choices.length; idx++) {
            var choiceElement = document.getElementById("choice" + idx);
            choiceElement.innerHTML = choices[idx];

            var btnElement = document.getElementById("btn" + idx);
            btnElement.onclick = () => {
                quiz.checkOptionWithAnswer(choices[idx]);
                loadQuestions();
            };
        }
        showProgress();
    }
}

function showProgress() {
    var currQuestIndex = quiz.questionIndex + 1;
    var progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${currQuestIndex} of ${quiz.questions.length}`;
}

var questions = [
    new Question(
        "Two incandescent light bulbs of 40W and 60W are connected in series across the mains then?", ["The bulbs together consume 100W", "The bulbs together consume 50W", "60W bulb glows brighter", "The 40W bulb glows brighter"],
        "The 40W bulb glows brighter"
    ),
    new Question(
        "A series circuit consists of 4.7k, 5.6k, 9k and 10k ohm resistors. The resistor has highest voltage across it is", ["4.7k ohm", "5.6k ohm", "9k ohm", "10k ohm"],
        "10k ohm"
    ),
    new Question(
        "Power dessipation in each of the three parallel branches of a circuit is 1W, the total power dissipation of the circuit will be", ["1W", "4W", "3W", "9W"],
        "3W"
    ),
    new Question(
        "The resistance of 200W, 250V incandescent bulb is", ["625 ohm", "1250 ohm", "312.5 ohm", "31.25 ohm"],
        "312.5 ohm"
    ),
    new Question(
        "Voltage applied across an electric iron is halved, the power consumption of the iron reduces to", ["One half", "Three fourth", "One fourth", "Remains same"],
        "One fourth"
    ),

    new Question(
        "The practical unit of electrical energy is", ["kW-h", "W-h", "W-s", "J-s", ],
        "kW-h"
    ),
];

var quiz = new Quiz(questions);
loadQuestions();