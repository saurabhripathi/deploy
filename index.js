const express = require('express');
require('./connection/connect')
const app=express();
const bodyParser=require('body-parser')
const port=process.env.PORT||3000

const User = require('./schema/user')
require('./schema/food_section')
require('./schema/food_category')
require('./schema/all_offered_dishes')
require('./schema/kitchen')
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
    
    try{
        const user=new Kitchens(req.body)
    
      var z= await user.save()
      res.status(200).send("ok")
    }
   catch(e)
   {
     console.log(e)  
   }

})

app.listen(port,()=>{
    console.log("up")
})