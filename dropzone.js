class DropZone{
    constructor(x,y,width,height,angle){
        var options={
       isStatic:true
        }
        
        this.body=Bodies.rectangle(x,y,100,20,options);
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body)
       
    }
       
    display(){
        
        var pos=this.body.position;
    var angle=this.body.angle;
        push()
        fill("red")
       
        translate(pos.x,pos.y)
        rect(0,0,100,20)
        angleMode(RADIANS);
        rotate(angle);
        rectMode(CENTER);
        
        

        pop();
    }
}