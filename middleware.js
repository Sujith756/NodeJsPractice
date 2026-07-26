const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())
app.use((req,res,next)=>{
    console.log('middle ware function executed')
    next()
})
app.post('/signup',(req,res)=>{
    console.log(req.body)
    res.send("data submitted successfully")
})
app.listen(3000,()=>{
    console.log("Server running")
})