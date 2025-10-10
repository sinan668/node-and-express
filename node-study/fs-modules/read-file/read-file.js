const fs =require('fs');

fs.readFile('read-file.text','utf-8',function(err,data){
    if(err){
        console.log('error read file',err);
    }
    console.log('file content',data);
    
})