const ThreeDimention = require("./threeDimention");


class Cube extends ThreeDimention {
  constructor(length) {
    super("Cubeee");
    this.length = length;
  }
  //overloading method
  introduce(intro) {
    super.introduce();
    console.log(`${intro}, this is ${this.name}, length ${this.length}`);
  }

  //overriding
  calculateVolume(){
      super.calculateVolume();
      let cubeVolume = this.length **3;

      console.log(`this is ${cubeVolume} cm3 \n`);
  }
}

//  let kotak = new Square(10);

// kotak.introduce("haiii");
// kotak.calculateArea();
module.exports = Cube;