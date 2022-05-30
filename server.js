'use strict';

const express = require("express");

const app= express();


function start(port){
app.listen(port,()=>{
console.log(`listening to port ${port}`)
})
}

app.get("/",(req,res)=>{
    res.send("hello from home route");
})

app.get("/profile",(req,res)=>{
    res.send({
        name:"Nooraldeen",
        age:25,
        gender:"male"
    })
})



module.exports={
    start:start,
    app:app,
}