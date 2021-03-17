const Geometry = require("./geometry");

class TwoDimention extends Geometry {
  constructor(name) {
    super(name, "2d");
    if (this.contructor == TwoDimention) {
      throw new Error("cannot make object!");
    }
  }

  //overriding method
  introduce() {
    super.introduce();
    console.log(`${this.name} this is ${this.type}`);
  }
  calculateArea(){
      super.introduce(`${this.name} Area`);
  }

  calculateCircumference(){
      console.log(`${this.name} circumference`);
  }
}

let twoD = new TwoDimention("two dimention");

// console.log(twoD);
twoD.introduce();

module.exports = TwoDimention;
