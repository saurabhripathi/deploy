const mongoose=require('mongoose')
// const validator=require('validator')
const user= mongoose.Schema({
        name:{
    type:String,
    // required:true

}

},{collection:'User'})
const User=mongoose.model('User',user)


module.exports=User
