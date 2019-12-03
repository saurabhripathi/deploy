const mongoose=require('mongoose')
const FoodCategory=require('./food_category')
const FoodSection=require('./food_section')

const allOfferedDishes =mongoose.Schema({
    // kitchenId:{
    //  type:mongoose.Schema.Types.ObjectId,
    //  ref:
    // },
    dishes:[{
        name:{
            type:String,
            unique:true,
            required:true
        },
        isVeg:{
            type:Boolean,
            required:true,
        },
        foodCategory:{
            type:mongoose.Schema.Types.ObjectId,
            ref:FoodCategory
        },
        foodSection:{
            type:mongoose.Schema.Types.ObjectId,
            ref:FoodSection
        },
        todaysAvailability:{
            type:Boolean,
            required:true,
        },
        dishOfTheDay:{
            type:Boolean,
            required:true
        },
        variants:[{
            quantity:{
                type:Number,
                required:true
            },
            price:{
                type:Number,
                required:true
            }
        }],
        description:{
            type:String,
            required:true,
            unique:true
        },
        preprationTime:{
            type:Number,
            required:true,
        }

    }]
},{collection:"AllOfferedDishes"})

const AllOfferedDishes=mongoose.model("AllOfferedDishes",allOfferedDishes)
const temp=new AllOfferedDishes({
    dishes:[{name:"Rotii",isVeg:true,
    foodCategory:"5de3e7ff4b1ffe31706ebd8c",foodSection:"5de3e588b81b3d307019a7a6",
    todaysAvailability:true,dishOfTheDay:true,preprationTime:40,description:"Roti",
    variants:[{quantity:5,price:5}]}]
})

try{
     temp.save().then((doc)=>{
        console.log(doc)
     })

}catch(e)
{
    console.log(e)
}



module.exports=AllOfferedDishes