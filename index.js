const express = require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("started");
})

app.listen(5000,()=>{
    console.log("up")
})