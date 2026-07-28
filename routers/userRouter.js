const express=require('express')
const app=express()
const signupController=require('../controllers/signupController')
app.post('/signup',signupController.signup)
app.listen(3000,()=>{
    console.log("Server running successfully")
})