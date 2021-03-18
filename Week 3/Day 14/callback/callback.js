const fs = require("fs");

fs.readFile("./contents/content1.txt", "utf-8", (err, content1) => {
  if (err) throw err;
  fs.readFile("./contents/content2.txt", "utf-8", (err, content2) => {
      if(err) throw err;
      console.log(content2);
      console.log(content1);

  });
});
