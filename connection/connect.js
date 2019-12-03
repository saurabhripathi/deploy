const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://saurabh:Infy@123@cluster0-zxhxb.mongodb.net/Database?retryWrites=true&w=majority',{
    useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true},(error,result)=>{
        if(error)
        {
            console.log(error);
        }
    })

    // mongoose.connect('mongodb://127.0.0.1:27018/newDB',{
    // useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true},(error,result)=>{
    //     if(error)
    //     {
    //         console.log(error)
    //     }
    // })