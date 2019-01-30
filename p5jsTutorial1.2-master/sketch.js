function setup()
{
  createCanvas(700,500);

}

function draw()
{
	background(255,255,255)

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the inside color of a shape
	fill(0,0,0);

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the outside color of a shape
	stroke(255,51,51);

	// modifies the thickness of the border of an object
	strokeWeight(10);


	rect(215,220,100,50);
	rect(500/2-215,320,500,100);

  fill(255,255,255);
  stroke(255,204,229);
  strokeWeight(3);

  rect(263,70,140,129);
  rect(124,70,140,129);


	fill(255,255,0);
	stroke(200,255,255);
	strokeWeight(20);

	rect(280,100,100,70);
	rect(150,100,100,50);


  fill(255,255,255);
  stroke(0,0,0);
  strokeWeight(1);

  rect(40,325,20,40);
  rect(100,325,20,40);
  rect(160,325,20,40);
  rect(220,325,20,40);
  rect(280,325,20,40);
  rect(340,325,20,40);
  rect(400,325,20,40);
  rect(460,325,20,40);
  rect(520,325,20,40);

  rect(40,375,20,40);
  rect(100,375,20,40);
  rect(160,375,20,40);
  rect(220,375,20,40);
  rect(280,375,20,40);
  rect(340,375,20,40);
  rect(400,375,20,40);
  rect(460,375,20,40);
  rect(520,375,20,40);

}
