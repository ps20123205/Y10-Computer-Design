var b1;
var b2;
var b3;
var b4;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,100,25);
	b1.setText("Instructions");
	b1.setTextOver("Learn how to get good!");
	b1.setButtonOverFill(255,255,50);

	b2 = new Button(10,100,100,25);
	b2.setText("Play Easy Version");
	b2.setTextOver("Proceed?");
	b2.setButtonOverFill(255,128,0);

	b3 = new Button(10,190,100,25);
	b3.setText("Play Hard Version");
	b3.setTextOver("Proceed?");
	b3.setButtonOverFill(255,128,0);

	b4 = new Button(10,280,100,25);
	b4.setText("High Score");
	b4.setTextOver("mission failed");
	b4.setButtonOverFill(255,128,0);

}

function draw()
{
	background(125,125,125);

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
		window.open("Level1Easy/level1easy.html","_self");
	}

	if (b3.getButtonState() == 1)
	{
		window.open("Level1Hard/level1hard.html","_self");
	}

	if (b4.getButtonState() == 1)
	{
		window.open("HighScore/highscore.html","_self");
	}

}
