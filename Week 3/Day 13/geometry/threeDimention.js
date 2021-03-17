const Geometry = require("./geometry");

class ThreeDimention extends Geometry {
  constructor(name) {
    super(name, "3d");
    if (this.contructor == ThreeDimention) {
      throw new Error("cannot make object!");
    }
  }

  //overriding method
  introduce() {
    super.introduce();
    console.log(`${this.name} this is ${this.type}`);
  }
  calculateVolume(){
      // super.introduce(`${this.name}`);
  }

}

// let threeD = new ThreeDimention("three dimention");

// // console.log(twoD);
// threeD.introduce();

module.exports = ThreeDimention;
