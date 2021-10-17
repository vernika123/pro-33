class snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
      this.image= loadImage("snow4.webp")
         World.add( this.body , world);
    }
    
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        ellipseMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop();
    }

};