var b1;
var b2;
var b3;
var b4;
var b5;
var bg;

function setup()
{
	createCanvas(1800,1200);
	b1 = new Button(10,10,150,25);
	b1.setText("Instructions");
	b1.setTextOver("Proceed?");
	b1.setButtonOverFill(255,255,50);

	b2 = new Button(10,100,150,25);
	b2.setText("How to French");
	b2.setTextOver("Proceed?");
	b2.setButtonOverFill(255,128,0);

	b3 = new Button(10,200,237,25);
	b3.setText("Game Mode 1: Card Matching Game");
	b3.setTextOver("Proceed?");
	b3.setButtonOverFill(255,128,0);

	b4 = new Button(10,250,237,25);
	b4.setText("Game Mode 2: Fill-in-the-Blank Game");
	b4.setTextOver("Proceed?");
	b4.setButtonOverFill(255,128,0);

	bg = loadImage('https://ps20123205.github.io/Y10-Computer-Design/France%20Flag.png')

}

function draw()
{
	background(125,125,125);

	image(bg,0,0)

	b1.showButton();
	b2.showButton();
	b3.showButton();
	b4.showButton();

  // The code "_self" disables opening in another tab

	if (b1.getButtonState() == 1)
	{
		window.open("Instructions/instructions.html","_self");
	}

	if (b2.getButtonState() == 1)
	{
		window.open("HowtoFrench/howtofrench.html","_self");
	}

	if (b3.getButtonState() == 1)
	{
		window.open("CardMatchingGame/cardmatchinggame.html","_self");
	}

	if (b4.getButtonState() == 1)
	{
		window.open("FillintheBlankGame/fitb.html","_self");
	}

}
