const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('hello this is a require test in express')
})

app.get('/about',(req,res)=>{
    res.send('this is a about page for test routing in express')
})
app.listen(7002,()=>{
    console.log('server is running');
})