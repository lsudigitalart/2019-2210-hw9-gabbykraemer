//gabby kraemer//

var ball1;
var ball2;
var ball3;
var ball4;

var randYPos1;
var randYPos2;
var randYPos3;
var randYPos4;

function setup() {
  createCanvas(800, 600);

  randYPos1 = random(height);
  randYPos2 = random(height);
  randYPos3 = random(height);
  randYPos4 = random(height);

  ball1 = new ball(35, 100, randYPos1, 1, 8);
  ball2 = new ball(50, 250, randYPos2, 0, 5);

    ball3 = new ball(25, 10, randYPos1, 0, 2);
    ball4 = new ball(75, 300, randYPos2, 0, 4);

}

function draw() {
  background(94,204,245);

strokeWeight(5);
line(780,600,780,0);
line(700,600,700,0);

  ball1.update();
  ball1.display();

  ball2.update();
  ball2.display();

  ball3.update();
  ball3.display();

  ball4.update();
  ball4.display();

}

function ball(tempSize, tempColorR, tempY, tempX, tempSpeed) {
  this.size = tempSize;
  this.colorR = tempColorR;
  this.yPos = tempY;
  this.xPos = tempX;
  this.speed = tempSpeed;

  this.update = function () {
    this.xPos = this.xPos + this.speed;

    if (this.xPos > width) {
      this.xPos = 0;
    }

  }

  this.display = function () {
    fill(this.colorR, 10, 110);
    circle(this.size * .5 + this.xPos, this.yPos, this.size);
  circle(this.size * .75 + this.xPos, random, this.size);

  }



  // this.ineract = function () {

  // }

}
