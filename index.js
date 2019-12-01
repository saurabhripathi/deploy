const express = require('express');
require('./connection/connect')
const app=express();
const bodyParser=require('body-parser')
const port=process.env.PORT||3000

const User = require('./schema/user')
require('./schema/food_section')
require('./schema/food_category')
app.use(bodyParser.json());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/',async(req,res)=>{
    try{
        var z= await User.find()
        res.send(z);
    }
    catch(e)
    {
        console.log(e)
    }
    

})

app.post('/save',async(req,res)=>{
    console.log(req.body)
    const user=new User(req.body)
    try{
        
    
         await user.save()
    }
   catch(e)
   {
     console.log(e)  
   }

})

app.listen(port,()=>{
    console.log("up")
})