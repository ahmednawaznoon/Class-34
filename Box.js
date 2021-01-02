class Box {
    constructor(x,y,width,height,angle) {
        this.body = Bodies.rectangle(x,y,width,height,{restitution: 1, friction: 1})
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        var position = this.body.position
        var angle = this.body.angle
        push()
        stroke(0)
        fill("yellow")
        translate(position.x,position.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}