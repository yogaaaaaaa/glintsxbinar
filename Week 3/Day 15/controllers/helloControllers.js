class HelloController{
    get(req, res){
        console.log("This is for");
        console.log("terminal 1");
        console.log("terminal 2");
      

        if(req.params.name=="yoga"){
            res.send(
                  `Yoga ADhipratama`);
        }else{
            res.send( "gsbisa");
        }
       

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