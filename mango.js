class Mango {
    constructor(a,b)
    {
        var option={
            isStatic:true,
            restitution : 0,
            friction:1,
  
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
  
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    
        }
    }
  
    display()
    {
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y,this.width,this.height)
        rotate(this.body.angle)
        rectMode(CENTER);
        rect(0,0,this.width,this.height);  
        
        pop()
    }
}