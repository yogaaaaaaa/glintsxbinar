const EventEmitter = require("events");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const my = new EventEmitter();

//event listener

my.on("login failed", (email, password)=>{
    console.log(`${email} and ${password} is failed to login`);
    rl.close();
});

my.on("login success", (email)=>{
    console.log(`${email} succesfully login!`);

   require(("../Day-10/assignment2.js"));

    rl.close();
});

function login(email, password){
    const passwordInDB = "123456";

    if (password != passwordInDB){
        my.emit("login failed", email, password);
    }else{
        my.emit("login success", email);
    }
}


rl.question("email: ", (email)=>{
    rl.question("password: ", (password)=>{
        login(email, password);
    });
});