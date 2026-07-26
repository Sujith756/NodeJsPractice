const express=require('express');
const student=require('./students.json')
const app=express()
app.get('/students',(req,res)=>{
    const course=req.query.course
    if(course){
        const filteredstudents=student.filter((student)=>(
            course.toLowerCase()===student.course.toLowerCase()
        ))
        res.json(filteredstudents)
    }
    res.json(student)
})
app.listen(3000,()=>{
    console.log("server running successfully")
})