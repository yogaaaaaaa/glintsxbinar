const ThreeDimention = require("./threeDimention");

class Tube extends ThreeDimention{
    constructor(r, height){
        super("Tube");
        this.r = r;
        this.height = height;
    }

    //overloading
    introduce(who){
        super.introduce();
        console.log(`${who}\n this is ${this.name}, jari2= ${this.r}, tinggi= ${this.height}`)
    }

    //overriding
    calculateVolume(){
        super.calculateVolume();
        let tubeVolume = this.height * Math.PI * this.r ** 2;

        console.log(`volume of tube is ${tubeVolume} cm3 \n`);
    };
}
module.exports = Tube;