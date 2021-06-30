var spaceShip,iss;
var spaceShipImg,issImg,scImg;
var hasDocked=false;

function preload(){
  backGround=loadImage("spacebg.jpg");
  issImg=loadImage("iss.png");
  scImg=loadImage("spacecraft1.png");
  scImg1=loadImage("spacecraft2.png");
  scImg2=loadImage("spacecraft3.png");
  scImg3=loadImage("spacecraft4.png");

}
function setup() {
  createCanvas(600,400);
  spaceShip=createSprite(285,240)
  spaceShip.addImage(scImg)
  spaceShip.scale=0.18

  iss = createSprite(330,130);
  iss.addImage(issImg);
  iss.scale =0.8}

function draw() {
  background(backGround);  

if(!hasDocked){
  spaceShip.x=spaceShip.x+random(-1,1);

  spaceShip.addImage(scImg);

  if(keyDown("UP_ARROW")){
    spaceShip.addImage(scImg1);
    spaceShip.y=spaceShip.y-2
  }
  if(keyDown("DOWN_ARROW")){
    spaceShip.y=spaceShip.y

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(scImg3);
    spacecraft.x = spacecraft.x - 10;
  }
    
  if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scImg2);
    spacecraft.x = spacecraft.x + 10;
  }

    }
    if(spaceShip.y <= (iss.y+70) && spaceShip.x <= (iss.x-10)){
      hasDocked = true;
      textSize(25);
      fill("white")
      text("Docking Successful!", 200, 300);
    }

  }
  drawSprites()
}
