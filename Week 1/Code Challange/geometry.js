// hitung volume kubus
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function cubeFormula(x){
    return x**3;
}




// let cubeA = cubeFormula(20);


// console.log("volume kubus A = "+cubeA+" cm3");


//hitung volume tabung
function tubeFormula(jarijari, tinggi){
    let luasAlas = Math.PI * jarijari ** 2;
    let volumeTabung = luasAlas * tinggi;

    return volumeTabung;
}

let tabungA = tubeFormula(11,21);

// console.log("volume tabung A = "+tabungA+" cm3");




function input() {
  rl.question("Panjang sisi: ", (x) => {
 
        if (!isNaN(x) ) {
          console.log(`\n Kubus: ${cubeFormula(x)}`);
          rl.close();
        } else {
          console.log(`sisi harus angka\n`);
          input();
        }
   
  });
}

console.log(`Kubus`);
console.log(`=========`);
// inputLength(); // Call way 1
input() // Call Alternative Way
