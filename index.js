const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('your are in home')
})

app.post('/signup',(req,res)=>{
    console.log('data inserted successfully')
    res.send('data inserted successfully')
})
app.put('/profile',(req,res)=>{
    //console.log('data inserted successfully')
    res.send('updated profile data successfully')
})
app.delete('/posts',(req,res)=>{
    res.send('post deleted ')
})
app.listen(3000,()=>{
    console.log("server running successfully");
})