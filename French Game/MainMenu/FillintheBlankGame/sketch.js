// ------- CUSTOM THE CODE BELOW ------
var q1; // question 1 data variable
var q2; // question 2 data variable
var q3; // question 3 data variable
var questionManager = new QuestionManager(3);  // setup 3 questions to be managed
var questionImage1 = new Array(5);  // setup 5 photos to be stored; 1 for the question; 4 for the choices
var questionImage2 = new Array(5);  // setup 5 photos to be stored; 1 for the question; 4 for the choices
var questionImage3 = new Array(5);  // setup 5 photos to be stored; 1 for the question; 4 for the choices
// ------- CUSTOM THE CODE ABOVE ------



var currentQuestion = 0;
var delayTimer = new Timer(0,0,0,0);

function setup()
{
	createCanvas(1000,1000);

	// setup all question data; see function at the bottom
	setupQuestions();


	// ------- CUSTOM THE 1 LINE OF CODE BELOW ------
	delayTimer.setMaxTime(3);  // set timer to countdown from 3 seconds
	delayTimer.resetTimer(); 	// reset the timer


	// ------- CUSTOM THE CODE BELOW ------
	// add all questions to the question manager; as you add more questions
	// you will need to add more to the question manager
	questionManager.addQuestionData(q1);
	questionManager.addQuestionData(q2);
	questionManager.addQuestionData(q3);

}

function draw()
{
	background(255,255,255);

	// go to a new .html file when last question is complete
	if (questionManager.isLastQuestion() == true)
	{
		// ------- CUSTOM THE CODE BELOW ------ WHERE TO GO AFTER LAST QUESTION
		window.open("Endgame/endgame.html","_self");
	}


	currentQuestion = questionManager.getCurrentQuestionData();


	if (currentQuestion.isQuestionAnswered() == 0)
	{
		// show the current question when no button has been pressed
		currentQuestion.showQuestion();
	}
	else if (currentQuestion.isQuestionAnswered() == 1)
	{
		// ------ START --------- CUSTOM THE CODE BELOW --------------
		fill(0,255,0);
		text("Correct",10,10);
		delayTimer.startTimer();  		// start a delay Timer
		// ------ END ----------- CUSTOM THE CODE ABOVE --------------
	}
	else if (currentQuestion.isQuestionAnswered() == -1)
	{
		// ------ START --------- CUSTOM THE CODE BELOW --------------
		fill(255,0,0);
		text("Incorrect",10,10);
		delayTimer.startTimer();  		// start a delay Timer
		// ------ END ----------- CUSTOM THE CODE ABOVE --------------
	}




	// -------- START ---------- DO NOT TOUCH THIS CODE -----------
	// initiate a delay timer when a question is answered
	if (currentQuestion.isQuestionAnswered() != 0)
	{
		if (delayTimer.isTimerFinished() == false)
		{
			delayTimer.startTimer();
		}
		else {
			questionManager.nextQuestion();
			delayTimer.resetTimer();
		}
		// -------- END ---------- DO NOT TOUCH THIS CODE -----------
	}


}

function setupQuestions()
{
	// START ------- CUSTOM THE CODE BELOW -----------------------------------------
	// setup question 1 below
	questionImage1[0] = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Fill%20in%20the%20Black%20Class%20Q%26As/Question%201%2011.59.10%20AM.png');
	questionImage1[1] = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Fill%20in%20the%20Black%20Class%20Q%26As/Answer%201%20Q1%2011.59.10%20AM.png');
	questionImage1[2] = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Fill%20in%20the%20Black%20Class%20Q%26As/Answer%202%20Q1%2011.59.10%20AM.png');
	questionImage1[3] = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Fill%20in%20the%20Black%20Class%20Q%26As/Answer%203%20Q1%2011.59.10%20AM.png');
	questionImage1[4] = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Fill%20in%20the%20Black%20Class%20Q%26As/Answer%204%20Q1%2011.59.10%20AM.png');
	q1 = new Question(4);					// set the maximum number of choices; in this case 4 choices
	q1.setCorrectAnswer(1);  // set the correct answer in the 1st parameter; in this case choice 1
	q1.setQuestion(questionImage1[0],50,10,200,40);
	q1.setAnswer(1,questionImage1[1],50,150,239,40);
	q1.setAnswer(2,questionImage1[2],50,200,149,40);
	q1.setAnswer(3,questionImage1[3],50,250,176,40);
	q1.setAnswer(4,questionImage1[4],50,300,184,40);



	// setup question 2 below
	questionImage2[0] = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Fill%20in%20the%20Black%20Class%20Q%26As/Question%202.png');
	questionImage2[1] = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Fill%20in%20the%20Black%20Class%20Q%26As/Answer%201%20Q2.png');
	questionImage2[2] = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Fill%20in%20the%20Black%20Class%20Q%26As/Answer%202%20Q2.png');
	questionImage2[3] = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Fill%20in%20the%20Black%20Class%20Q%26As/Answer%203%20Q2.png');
	questionImage2[4] = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Fill%20in%20the%20Black%20Class%20Q%26As/Answer%204%20Q2.png');
	q2 = new Question(4);					// set the maximum number of choices; in this case 4 choices
	q2.setCorrectAnswer(1);  // set the correct answer in the 1st parameter; in this case choice 1
	q2.setQuestion(questionImage2[0],50,10);
	q2.setAnswer(1,questionImage2[1],50,150,239,40);
	q2.setAnswer(2,questionImage2[2],50,200,149,40);
	q2.setAnswer(3,questionImage2[3],50,250,176,40);
	q2.setAnswer(4,questionImage2[4],50,300,184,40);


	// setup question 3 below
	questionImage3[0] = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Fill%20in%20the%20Black%20Class%20Q%26As/Question%203.png');
	questionImage3[1] = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Fill%20in%20the%20Black%20Class%20Q%26As/Answer%201%20Q3.png');
	questionImage3[2] = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Fill%20in%20the%20Black%20Class%20Q%26As/Answer%202%20Q3.png');
	questionImage3[3] = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Fill%20in%20the%20Black%20Class%20Q%26As/Answer%203%20Q3.png');
	questionImage3[4] = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Fill%20in%20the%20Black%20Class%20Q%26As/Answer%204%20Q3.png');
	q3 = new Question(4);				 // set the maximum number of choices; in this case 4 choices
	q3.setCorrectAnswer(3); // set the correct answer in the 1st parameter; in this case choice 3
	q3.setQuestion(questionImage3[0],50,10);
	q3.setAnswer(1,questionImage3[1],50,150,239,40);
	q3.setAnswer(2,questionImage3[2],50,200,149,40);
	q3.setAnswer(3,questionImage3[3],50,250,176,40);
	q3.setAnswer(4,questionImage3[4],50,300,184,40);
	// END ------- CUSTOM THE CODE ABOVE -----------------------------------------

}
