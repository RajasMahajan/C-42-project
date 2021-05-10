class Umbrala{
    constructor(){
        this.opition=
        {
          isStatic:true,
        }
        this.x=200;
        this.y=360;
        this.radius=55;
        this.body= Bodies.circle(200,280,55,this.opition)
        World.add(world,this.body);
    }
    display()
    {
        ellipseMode(CENTER);
        // ellipse(this.body.position.x,this.body.position.y,200,200);
    }
}