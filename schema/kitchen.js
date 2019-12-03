const mongoose=require('mongoose');
const kitchen=mongoose.Schema({
    kitchen_name:{
        type:String,
        required:true
        },
         email_id:{
             type:String,
             required:true
             
         },
         address:{
             name:{
                 type:String
                 },
             location:
             {
            type:{
                type: String, 
                enum: ['Point']
            },
            coordinates: {
                type: [Number],
                required: true
              }
            
         }
         },
         category:
         {
             type:String,
             
         },
         discription:
         {
             type:String,
             
         },
         economic_rating:
         {
         type:String,
         default:"0"
         },
         overall_rating:
         {
             type:String,
             default:"0"
         },
         phonenumber:
         {
             type:Number,
              max:[9999999999,"You are exceeding max length"],
              min:[1000000000,"below limit"]
              
         },
         duty:
         {
             type:Boolean,
             default:false
         },
         kitchen_picture_url:
         {
             type:String
         },
         overall_dishes:
         {
             type:mongoose.Schema.Types.ObjectId
         },
         kitchen_chef:
         {
             type:String
         },
         proof:
         {
             id_number:Number,
             id_Photo_url:[String]
         },
         Offers:
         {
             type:[{dish_id:mongoose.Schema.Types.ObjectId}]
             
         }
},{collection:'Kitchens',timestamps:true})

kitchen.index({
    kitchen_name:1,
    email_id: 1,
    phonenumber: 1,
  }, {
    unique: true,
  });

const Kitchens=mongoose.model('Kitchens',kitchen)



module.exports={Kitchens}