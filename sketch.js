var runner1 ,  path , coin , runner1_img ,  path_img , coin_img , bomb , bomb_img;

function preload(){
  runner1_img = loadAnimation("Runner-1.png" , "Runner-2.png");
  path_img    = loadImage("path.png");
  coin_img    = loadImage("coin.png");
  bomb_img    = loadImage("bomb.png");
}

function setup() {
 createCanvas(800,600);

  path = createSprite(400,300,200,800);
  path.addImage("street",path_img);
  path.velocityY =1;

  runner1 = createSprite(400,500,50,50);
  runner1.addAnimation("run",runner1_img);
  runner1.scale=0.10;
 
   

}

function draw() {
background(120);  

if(path.y>400)
{
  path.y=300;  
}

spawnCoins();

drawSprites();
}


// function spawnCoins()
//  {
//  if(frameCount%60===0)
//  {
//   coin = createSprite(400,300,50,50);
//   coin.x = Math.round(random(200,300));
//   coin.addImage("coin",coin_img);
//   coin.scale = 0.5;
//   coin.velocityY = 1;
//   }




// function spawnBombs()
// {
//     if (frameCounts%60===0)
//     {
//         bomb = createSprite(300,300,50,50);
//         bomb.y = Math.round(random(150,250));
//         bomb.addImage("bomb",bomb_img);
//         bomb.scale = 0.5;
//         bomb.velocityY = 1;
//     }
// }





