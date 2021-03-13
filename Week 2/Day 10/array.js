let fridge = ["Apple", "Milk", "Carrot", "Orange", "Leech", "Cabbage"];

console.log(fridge.includes("Apple"));
console.log(fridge.includes("Banana"));



for(var i=0; i<fridge.length; i++){
    if (fridge[i].toLowerCase() == "apple"){
        console.log(true)
    }
}

