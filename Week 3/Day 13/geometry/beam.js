const ThreeDimention = require("./threeDimention");

class Beam extends ThreeDimention{
    constructor(width, height, length){
        super("Beammmm");
        this.width = width;
        this.height = height;
        this.length = length;
    }

    //overloading
    introduce(who){
        super.introduce();
        console.log(`${who} \n this is ${this.name} lebar= ${this.width} panjang= ${this.length} tinggi= ${this.height}`)
    }

    //overriding
    calculateVolume(){
        super.calculateVolume();
        let beamVolume =this.length*this.width* this.height;

        console.log(`volume of beam is ${beamVolume} cm3 \n`);
    };
}
module.exports = Beam;