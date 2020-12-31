class Rope{
    constructor(body1,point2,offsetX,offsetY){
        this.offestX=offestX;
        this.offsetY=offsetY;
        var options={
            bodyA:body1,
            pointB:point2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.Rope=Constraint.create(options);
        World.add(myWorld,this.Rope);
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}