const EventEmitter =require("events");
const my = new EventEmitter();

//event listener
my.on("Mas yoga", ()=>{
    console.log("something happened yog!!");
});


my.emit("Mas yoga");
my.emit("Mas yoga");