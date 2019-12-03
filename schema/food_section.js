const mongoose=require('mongoose')
const foodSection=mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
},{collection:'FoodSection',timestamps:true})

const FoodSection=mongoose.model('FoodSection',foodSection)

// const temp=new FoodSection({name:"Main Course"})

// try{
//      temp.save().then((doc)=>{
//         console.log(doc)
//      })

// }catch(e)
// {
//     console.log(e)
// }

module.exports=FoodSection