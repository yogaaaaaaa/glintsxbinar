const TwoDimention = require("./twoDimention");

class Square extends TwoDimention {
  constructor(length) {
    super("Squareee");
    this.length = length;
  }
  //overloading method
  introduce(intro) {
    super.introduce();
    console.log(`${intro}, this is ${this.name}, length ${this.length}`);
  }

  //overriding
  calculateArea(){
      super.calculateArea();
      let area = this.length **2;

      console.log(`this is ${area} cm2 \n`);
  }

  calculateCircumference(){
      super.calculateCircumference();
      let circumference = 4 * this.length;

      console.log(`this circumference is ${circumference}`);
  }
}

module.exports = Square;