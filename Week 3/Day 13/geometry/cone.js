const ThreeDimention = require("./threeDimention");

class Cone extends ThreeDimention{
    constructor(r, height){
        super("Cone");
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
        let coneVolume = 1/3 * Math.PI* this.r**2 * this.height;

        console.log(`volume of cone is ${coneVolume} cm3 \n`);
    };
}
module.exports = Cone;