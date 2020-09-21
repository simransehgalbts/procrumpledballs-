class Paper {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density :1.2
      }
      this.body = Bodies.circle(x, y, width, height, options);
      ellipseMode(RADIUS);
      ellipse(56,46,55,55);
      
      World.add(world, this.body);
    }
    display(){
      
    }
  };
  