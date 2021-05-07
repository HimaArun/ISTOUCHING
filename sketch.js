var fr,mr


function setup() {
  createCanvas(800,400);
 mr=createSprite(400,100,50,30)
 mr.shapeColor="pink"
 mr.velocityY=-5
 fr=createSprite(400, 500, 50, 50);
 fr.shapeColor="pink"
 fr.velocityY=5
 fr.debug="true"
 mr.debug="true"
}

function draw() {
  background(255,255,255);  
  //mr.x=World.mouseX
  //mr.y=World.mouseY

  if (mr.x-fr.x<fr.width/2+mr.width/2&&fr.x-mr.x<fr.width/2+mr.width/2&&
    mr.y-fr.y<fr.height/2+mr.height/2&&fr.y-mr.y<fr.height/2+mr.height/2){
     mr.shapeColor="blue"
     fr.shapeColor="blue"

  }
  if (mr.x-fr.x<fr.width/2+mr.width/2&&fr.x-mr.x<fr.width/2+mr.width/2&&
    mr.y-fr.y<fr.height/2+mr.height/2&&fr.y-mr.y<fr.height/2+mr.height/2){
    


    }

  else{fr.shapeColor="green"
  mr.shapeColor="green" 
  }


  drawSprites();
}