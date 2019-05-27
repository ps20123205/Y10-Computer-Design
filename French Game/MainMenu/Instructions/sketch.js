var b1;
var bg;

function setup()
{
	createCanvas(1200,170);
	b1 = new Button(10,10,100,25);
	b1.setText("Main Menu");
	b1.setTextOver("Proceed?");
	b1.setButtonOverFill(255,255,50);

	bg = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Baguette.jpg')

}

function draw()
{
	background(125,125,125);

	image(bg,0,0)

	fill(255,255,255);
	text("Welcome to How to French for DUMMIES! If you are ready to learn some French, click the Main Menu button above, and then click the How to French button! Once you are ready to play, simply click the Main Menu button",12,100);
	text("again, and choose any of the two game modes shown on the Main Menu page! Once you complete the game, you will be redirected back to Main Menu, where you could either reaffirm your existent knowledge in French, or",12,120);
	text("try another game mode. Good luck, or rather, bonne chance!",12,140);

	b1.showButton();

  // The code "_self" disables opening in another tab

	if (b1.getButtonState() == 1)
	{
		window.open("../MainMenu.html","_self");
	}

}
