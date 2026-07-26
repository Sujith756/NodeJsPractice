const express=require('express')
const app=express()
app.get('/profile/:username',(req,res)=>{
   console.log(req.params)
   res.send(`welcome${req.params.username}`)
})
app.get('/students/:name/:course',(req,res)=>{
    console.log(req.params)
    res.send(`${req.params.name} enrolled in${req.params.course}`)
})
app.listen(3000)