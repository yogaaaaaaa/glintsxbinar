// hitung volume kubus
function cubeFormula(x){
    let cubeVolume = x**3;

    return cubeVolume;
}

let cubeA = cubeFormula(20);


console.log("volume kubus A = "+cubeA+" cm3");


//hitung volume tabung
function tubeFormula(jarijari, tinggi){
    let luasAlas = Math.PI * jarijari ** 2;
    let volumeTabung = luasAlas * tinggi;

    return volumeTabung;
}

let tabungA = tubeFormula(11,21);

console.log("volume tabung A = "+tabungA+" cm3");