class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.body = Bodies.circle(x, y, radius,options);
        this.radius = radius;
        //this.Image = loadImage("paper.png")
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        angleMode(RADIANS);
        rotate(angle);
        //image(this.Image,0,0)
        circle(0,0,this.radius*2);  
        fill(255);
        pop();

    }
}