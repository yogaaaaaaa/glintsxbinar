const fs = require("fs");

const readFile = (file, option) =>
new Promise((success, failed) =>{
    fs.readFile(file, option, (err, content)=>{
        if (err) failed(err);
        return success(content);
    });
});

const readAllFiles = async() =>{
    try {
        let content1 = await readFile("./contents/content1.txt", "utf-8");
        console.log(content1);

        let content2 = await readFile("./contents/content2.txt", "utf-8");
        console.log(content2);

        let content3 = content1 + content2;
        console.log(content3);
    }catch (e) {
        console.log("errorrrr");
    }
};

readAllFiles();