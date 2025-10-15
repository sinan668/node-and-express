const express = require('express')

const app =express()


app.get('/',(req,res)=>{
    res.send('this is test for get method in express')
})

app.listen(7003,()=>{
    console.log('the server is running');
})