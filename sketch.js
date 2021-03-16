//Game States
var PLAY=1;
var END=0;
var gameState=1;
var score;

var select_Sprites, select_Monster;

var knife, alien1, alien2, fruit, fruit1, fruit2, fruit3, fruit4, mons, gameOver;
var knifeImage, alien1Image, alien2Image, fruit1Image, fruit2Image, fruit3Image, fruit4Image, gameOverImage ;
var fruit1G, fruit2G,fruit3G, fruit4G,alien1G, alien2G;


function preload(){
  
  knifeImage = loadImage("knife.png");
  alien1Image = loadImage("alien1.png");
  alien2Image = loadImage("alien2.png");
  fruit1Image = loadImage("fruit1.png");
  fruit2Image = loadImage("fruit2.png");
  fruit3Image = loadImage("fruit3.png");
  fruit4Image = loadImage("fruit4.png");
  
  gameOverImage = loadImage("gameover.png");
}



function setup() {
  createCanvas(600, 600);
  
  //creating sword
   knife = createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.5
  
  //set collider for sword
 // knife.setCollider("rectangle",0,0,40,40);

  score=0;
  //create fruit and monster Group variable here
  fruit1G=new Group();
  fruit2G=new Group();
  fruit3G=new Group();
  fruit4G=new Group();
  alien1G=new Group();
  alien2G=new Group();
}

function draw(){
  background("lightblue");
  
  if(gameState===PLAY){
    
    // Move knife with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
    
 frameRate(100);

    if (frameCount % 50 == 0){
  select_Sprites = Math.round(random(1,4)) ;
   createFruits1();
   createFruits2();
   createFruits3();
   createFruits4();
    } 

  if (frameCount % 120 == 0){
   select_Monster = Math.round(random(1,2)) ;
    createMonster1();
    createMonster2();
      }
 //================================
    if (fruit1G.isTouching(knife)) {
      fruit1G.destroyEach();
      score = score + 50;
    }
    if (fruit2G.isTouching(knife)) {
      fruit2G.destroyEach();
      score = score + 60;
    }
      if (fruit3G.isTouching(knife)) {
      fruit3G.destroyEach();
      score = score + 70;
    }
      if (fruit4G.isTouching(knife)) {
      fruit4G.destroyEach();
      score = score + 80;
    }
}
  if(alien1G.isTouching(knife)) {
    alien1G.destroyEach();
    fruit1G.destroyEach();
    fruit2G.destroyEach();
    fruit3G.destroyEach();
    fruit4G.destroyEach();
  
    gameState = END;
  }
  
  if(alien2G.isTouching(knife)) {
    alien2G.destroyEach();
    fruit1G.destroyEach();
    fruit2G.destroyEach();
    fruit3G.destroyEach();
    fruit4G.destroyEach();
    knife.destroy;
    gameState = END;
  }
    
  if(gameState === END){
    gameOver = createSprite(300,300,20,20);
    gameOver.addImage(gameOverImage);
  }
  drawSprites();
 
  //Display score
   // Increase score if knife touching fruit
   // Go to end state if knife touching enemy
  textSize(25);
  text("Score : "+ score,250,50);

}

function createFruits1(){
  if(select_Sprites == 1){
 fruit1 = createSprite (590, random (50,400),20,20);
 fruit1.addImage (fruit1Image) ;
 fruit1.scale = random (0.2, 0.3) ;
 fruit1.velocityX = random (-4,-8);
 fruit1.setLifetime = 100;
 fruit1G.add(fruit1);
  }

}
function createFruits2(){
  if(select_Sprites == 2){
 fruit2 = createSprite (590, random (50,400),20,20);
 fruit2.addImage (fruit2Image) ;
 fruit2.scale = random (0.2, 0.3) ;
 fruit2.velocityX = random (-4,-8);
 fruit2.setLifetime = 100;
 fruit2G.add(fruit2);
}
  
}

function createFruits3(){
  if(select_Sprites == 3){
 fruit3 = createSprite (590, random (50,400),20,20);
 fruit3.addImage (fruit3Image) ;
 fruit3.scale = random (0.2, 0.3) ;
 fruit3.velocityX = random (-4,-8);
 fruit3.setLifetime = 100;
 fruit3G.add(fruit3);
}
  
}

function createFruits4(){
  if(select_Sprites == 4){
 fruit4 = createSprite (590, random (50,400),20,20);
 fruit4.addImage (fruit4Image) ;
 fruit4.scale = random (0.2, 0.3) ;
 fruit4.velocityX = random (-4,-8);
 fruit4.setLifetime = 100;
 fruit4G.add(fruit4);
}
  
}


 
function createMonster1(){
  if(select_Monster == 1){
   alien1 = createSprite(590, random (50,400),20,20);
   alien1.scale= 1.2;
   alien1.addImage(alien1Image);
   alien1.velocityX = random (-4,-8);
   alien1.velocityY = random(3,-3);
   alien1.setLifetime = 100;
   alien1G.add(alien1);
  }
}
    
 function createMonster2(){
    if(select_Monster == 2){
   alien2 = createSprite(590, random (50,400),20,20);
   alien2.scale=1.1;
   alien2.addImage(alien2Image);
   alien2.velocityX = random(-4, -10);
   alien2.velocityY = random(3,-3);
   alien2.setLifetime = 100;
   alien2G.add(alien2);
  }
 }
       
   //monsterGroup.add(monster);
  

  
  