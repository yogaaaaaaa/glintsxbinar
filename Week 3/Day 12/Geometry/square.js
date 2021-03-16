const TwoDimention = require("./twoDimention");

class Square extends TwoDimention{
    constructor(length){
        super("Square");
        this.length = length;
    }


    introduce(){
        super.introduce();
        console.log(`this is ${this.name}`);
    }

    //overloading
    calculateArea(message){
        super.calculateArea();
        console.log(`${mesage}: ${this.name}`)
    }
    calculateCircumference(){
        super.calculateCircumference();
        console.log(4 * this.length);
    }
}