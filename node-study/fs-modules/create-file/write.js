const fs = require('fs');

let data = 'this is the write file test'

fs.writeFile('write-file.text',data,function(err){
    if(err){
        console.err('here some error',err);
        
    }else{
        console.log('wite file created succesfully');
        
    }
})



//created a file name (wite-file.text)

