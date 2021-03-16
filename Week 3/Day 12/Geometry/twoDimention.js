const Geometry = require("./geometry");

class TwoDimention extends Geometry{
    constructor(name){
        super(name, "2d");
    }

    //overrideing method
    introduce(){
        super.introduce();
        console.log(`Hello, im $this{this.name}`);
    }
    calculateArea(){
        console.log(`${this.name} AREA !`);
    }

    calculateCircumference(){
        console.log(`${this.name} Circumference`);
    }

}

module.exports = TwoDimention;