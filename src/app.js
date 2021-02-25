const express=require('express')
require("./db/conn")
const Student = require("./models/meetings")
const app=express();
const port=process.env.PORT || 5000;

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hey priya")
})


app.post("/meetings",async(req,res)=>{
    try {
        const user=new Student(req.body);
        const createUser=await user.save()
        res.status(201).send(createUser);
        
    } catch (e) {
        res.status(400).send(e)
    }
 

    
})

app.get("/meetings",async(req,res)=>{
    try {
        const studentData=await Student.find()
        res.send(studentData)
        
    } catch (error) {
        res.send(error)
        
    }
})

app.get("/meetings/:id", async(req,res)=>{
    try {
        const _id=req.params.id;
        const studentData = await Student.findById(_id)
        res.send(studentData)
        
    } catch (error) {
        res.send(error)
    }
})



app.listen((port),()=>{
    console.log("success")
});