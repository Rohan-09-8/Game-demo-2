function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(660,825);
 player = createSprite(350,780,60,60)
 player.shapeColor = "red"
 edge = createEdgeSprites()
 target = createSprite(600,115,50,50)
 target.shapeColor = "lime"

 o1 = createSprite(300,200,200,50)
 o1.shapeColor = "orangered"
 o1.velocityX=6

 o2 = createSprite(300,300,300,50)
 o2.shapeColor = "blue"
 o2.velocityX=-9

 o3 = createSprite(300,400,200,50)
 o3.shapeColor = "deeppink"
 o3.velocityX=-6

 o4 = createSprite(300,500,300,50)
 o4.shapeColor = "yellow"
 o4.velocityX=-15

 o5 = createSprite(300,600,200,50)
 o5.shapeColor = "aqua"
 o5.velocityX=7

 o6 = createSprite(300,700,300,50)
 o6.shapeColor = "lawngreen"
 o6.velocityX=-7
}

function draw() {
  background("black");
  
 if(keyDown("w")){
   player.y = player.y-10
 } 

 if(keyDown("d")){
  player.x = player.x+10
} 

if(keyDown("a")){
  player.x = player.x-10
} 

if(keyDown("s")){
  player.y = player.y+10
} 

player.bounceOff(edge[0])
player.bounceOff(edge[1])
player.bounceOff(edge[2])
player.bounceOff(edge[3])
 
o1.bounceOff(edge[0])
o1.bounceOff(edge[1])
o2.bounceOff(edge[0 ])
o2.bounceOff(edge[1]) 
o3.bounceOff(edge[0 ])
o3.bounceOff(edge[1])
o4.bounceOff(edge[0 ])
o4.bounceOff(edge[1])
o5.bounceOff(edge[0 ])
o5.bounceOff(edge[1])
o6.bounceOff(edge[0 ])
o6.bounceOff(edge[1])

drawSprites()
 if(player.isTouching(o1)|| player.isTouching(o2)||
 player.isTouching(o3)|| player.isTouching(o4)|| 
 player.isTouching(o5)|| player.isTouching(o6)){
   textSize(55)
   text("Game Over..!",225,300)
   player.x=350
   player.y=780
 }

 if(player.isTouching(target)){
   textSize(50)
   text("YOU ARE WON THE GAME",29,300)
 }














 
}
