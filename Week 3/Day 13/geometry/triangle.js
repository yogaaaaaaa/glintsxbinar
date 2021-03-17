const TwoDimention = require("./twoDimention");

class Rectangle extends twoDimention{
    constructor(base, height){
        super("Triangle");
        this.base = base;
        this.height = height;
    }

    //overloading method
    introduce(who){
        super.introduce();
        console.log(`${who}, this is ${this.name} \n`);
    }

    //overriding
    calculateArea(){
    super.calculateArea();
    let area = this.base * this.height / 2;

    console.log(`This area is ${area} cm2 \n`);
    }

    calculateCircumference(){
        super.calculateCircumference();
        let circumference = 3 * this.base;

        console.log(`this circumference is ${circumference} cm \n`);
    }
}

module.exports = Triangle;

