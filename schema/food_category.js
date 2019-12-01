/////regional food for ex. "North Indian"/////

const mongoose=require('mongoose')
const foodCategory=mongoose.Schema({
    name:{
        type:String,
        createdAt:Date,
        unique:true
    }},{collection:'FoodCategory',timestamps:true})


const FoodCategory=mongoose.model('FoodCategory',foodCategory)


// const temp=new FoodCategory({name:"Chinese"})

// try{
//      temp.save().then((doc)=>{
//         console.log(doc)
//      })

// }catch(e)
// {
//     console.log(e)
// }

module.exports=FoodCategory
