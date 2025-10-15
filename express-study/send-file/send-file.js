const express = require('express');
const path = require('path')

const app = express();


app.get('/',(req,res)=>{
    res.send('hello this is a require test in express')
})

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'))
})
app.listen(7002,()=>{
    console.log('server is running');
})

// res.sendFile(path.join(__dirname,'about.html'))
// Here this __filename is check last file name    (/home/sinan/Desktop/node-express/express-study/send-file/send-file.js)
// Here this __direname is check last folder name  (/home/sinan/Desktop/node-express/express-study/send-file)