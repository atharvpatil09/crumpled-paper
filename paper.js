class Paper {
    constructor() {
       var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 1.2
       }
       this.body = Bodies.circle(250, 540, 20, options)
      this.width = 30
       this.image = loadImage("paper.png")
       World.add(world, this.body)}

       display() {
       var pos = this.body.position
       fill("white");
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,33,33);
    }
 }