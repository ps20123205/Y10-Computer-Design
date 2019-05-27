var b1;
var b2;
var b3;
var b4;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,150,25);
	b1.setText("Learn French again");
	b1.setTextOver("Learn how to get good!");
	b1.setButtonOverFill(255,255,50);

	b2 = new Button(10,100,150,25);
	b2.setText("Restart game");
	b2.setTextOver("Wow, so confident!");
	b2.setButtonOverFill(255,128,0);

}

function draw()
{
	background(125,125,125);

	b1.showButton();
	b2.showButton();

  // The code "_self" disables opening in another tab

	if (b1.getButtonState() == 1)
	{
		window.open("../../HowtoFrench/howtofrench.html","_self");
	}

	if (b2.getButtonState() == 1)
	{
		window.open("../fitb.html","_self");
	}

}
