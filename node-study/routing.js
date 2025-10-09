let http = require("http")
let fs = require("fs")


http.createServer(function (req,res){
    if(req.url==='/'){
       res.write("this is routing page")
       res.end()
    }else if(req.url==='/login'){

       res.write('this is a login page')
       res.end()   
    }else{
    res.writeHead(404)
    res.write('err')
    res.end()
    }

}).listen(3001,()=>{
    console.log("this server is running");
})
