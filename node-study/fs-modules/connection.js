let http = require("http")
let fs = require("fs")


http.createServer(function (req,res){
    if(req.url==='/'){
    fs.readFile("connection.html",function(err,data){
    res.writeHead(200,{'content-type':'text/html'})
      res.write(data)
      res.end()
    })
}else if(req.url==='/login'){
    fs.readFile('login.html',(err,data)=> {
     res.writeHead(200,{'content-type':'text/html'})
     res.write(data)
     res.end()   
    })
    
}else{
    res.writeHead(404)
    res.write('err')
    res.end()
}


}).listen(7000,()=>{
    console.log("this server is running");
})
