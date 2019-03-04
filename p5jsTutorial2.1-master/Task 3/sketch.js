var button2X;
var button2Y;
var button3X;
var button3Y;

function setup()
{
  createCanvas(700,500);
  button2X = 10;
  button2Y = 150;
  button3X = (598-1)/2;
  button3Y = (448-1)/2;


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

  // Task 3
  fill(102,0,204);
	rect(button3X,button3Y,100,50);

  if (mouseX > button3X && mouseX < button3X + 100 && mouseY > button3Y && mouseY < button3Y+50)
  {
    fill(0,255,0);
    stroke(51,70,190);
    textSize(16);
    text("Huang",button3X+33,button3Y+30+2);
  }
  else
  {
    fill(255,204,229);
    stroke(0,0,0);
    textSize(12);
    text("Huang",button3X+33,button3Y+30);
  }

}
