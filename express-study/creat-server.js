const express = require('express');

const app = express()



app.get('/',(req,res)=>
    res.send('hello the server creation is running sucssesfuly')
)




app.listen(7001,()=>{
    console.log('server is runnig');  
})