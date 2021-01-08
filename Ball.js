class Ball{
    constructor(m,a) {
    var order1 ={
        restitution:1,
     friction:3
     }
     this.body=Bodies.rectangle(m,a,50,50,order1);
     World.add(world,this.body);
    // this.boximage=loadImage("image/wood1.png")
 }
 
 
 
 
 display(){
                    imageMode(CENTER)
                    fill  ("blue")  
                    ellipse(this.body.position.x,this.body.position.y,50,50);
 }
} 

