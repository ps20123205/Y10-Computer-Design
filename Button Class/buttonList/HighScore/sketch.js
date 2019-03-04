var b1;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,100,25);
	b1.setText("Thanks for playing!");
	b1.setTextOver("Play again?");
	b1.setButtonOverFill(255,255,50);

}

function draw()
{
	background(125,125,125);

	b1.showButton();

  // The code "_self" disables opening in another tab

	if (b1.getButtonState() == 1)
	{
		window.open("../buttonlist.html","_self");
	}

}
