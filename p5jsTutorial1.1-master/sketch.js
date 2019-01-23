function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(700,500);

}

function draw()
{
  //create a background using RGB values
  background(102,255,102)

  // change the paint brush to a specific color according to RGB values
  fill(255,255,255);

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(669,0,30,150);
  rect(0,0,30,150);
  rect(669,349,30,150);
  rect(0,349,30,150);
  rect(300,235,100,30);
}
