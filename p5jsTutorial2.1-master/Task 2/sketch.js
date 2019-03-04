var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 10;
  button2Y = 150;


}

function draw()
{
	background(125,125,125)


	if (mouseX > 10 && mouseX < 10 + 100 && mouseY > 10 && mouseY < 10+50)
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,10,100,50);
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,10,100,50);
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(12);
	text("Practice 1",35,40);

  //Task 1 - Creating a new button in the middle with my first name on it.
  //For x-value, 1 and 598 are the closest coordinates the rectangle can get to the left side and right side respectively without compromising strokeweight.
  //For y-value, 1 and 448 are the closest coordinates the rectangle can get to the top and bottom respectively without compromising strokewright.
	if (mouseX > 598 && mouseX < 598+100 && mouseY > 448 && mouseY < 448+50)
	{
		fill(0,0,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(598,448,100,50);
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(598,448,100,50);
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(12);
	text("Danny",598+33,448+29);


	fill(200,200,255);
	stroke(0,0,0);
	rect(button2X,button2Y,106,50);

	if (mouseX > button2X && mouseX < button2X + 100 && mouseY > button2Y && mouseY < button2Y+50)
	{
		fill(248,89,255);
		stroke(51,70,190);
		textSize(16);
		text("Options",button2X+30-5,button2Y+30+2);
	}
	else
	{
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Options",button2X+30,button2Y+30);
	}

}
