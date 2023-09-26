const mongoose=require('mongoose')


mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Database Connected")
}).catch(()=>{
    console.log("Error in Database Connection")
})