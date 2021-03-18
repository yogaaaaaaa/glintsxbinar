const fs = require("fs");

const readFile = (file, option) =>
new Promise((success, failed)=>{
    fs.readFile(file, option, (err, content)=>{ 
        if (err) throw err;
    return success(content);
    });
});

readFile("./contents/content1.txt", "utf-8")
.then((result)=>{
    console.log(result);
    return readFile("./contents/content2.txt", "utf-8");
})
.then((result)=>{
    console.log(result);
})
.catch((err)=>console.error("salahh"));


// fs.readFile("./contents/content1.txt", "utf-8", (err, content1) => {
//   if (err) throw err;
//   fs.readFile("./contents/content2.txt", "utf-8", (err, content2) => {
//     if (err) throw err;
//     console.log(content2);
//     console.log(content1);
//   });
// });
