const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/meetingss-api",
{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("conn is successful")
}).catch((e)=>{
    console.log("No connection")
});
