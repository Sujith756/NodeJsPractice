const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url=="/about"){
        return res.end("about route")
    }
    if(req.url=="/profile"){
        return res.end("profile route")
    }
     return res.end("404 not found")
})
server.listen(3000)