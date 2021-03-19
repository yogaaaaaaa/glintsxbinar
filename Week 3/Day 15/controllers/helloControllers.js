class HelloController{
    get(req, res){
        console.log("This is for");
        console.log("terminal 1");
        console.log("terminal 2");
      
        res.send(
          `Postman!!! ${req.query.name} kotanya ${req.params.city}`);
    }

    post(req, res){
            console.log("for adding data!");
            res.send("Posttt");
    }

    put(req, res){
        console.log("for update data!");
        res.send("Putttt");
    }

    delete(req, res){
        console.log("for delete data!");
         res.send("delete");
    }
}

module.exports = new HelloController;