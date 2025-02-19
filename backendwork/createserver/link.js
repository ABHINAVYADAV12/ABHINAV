const fs=require('fs').promises;
const http=require('http');
const PORT=2500;
const server=http.createServer(async(req,res)=>{
    res.setHeader("Content-Type","text/html")
    if(req.url=='/home' && req.method=="GET"){
        // res.end("Hi i am at /home end point")
        const data =await fs.readFile('home.html',{encoding:'utf-8'});
        const studentData= await fs.readFile('data.json',{encoding:'utf-8'});
        const completedata=studentData+data
        // res.write(studentData)
        res.end(completedata)
    }
    // res.end("welcome to node server")
})

server.listen(PORT,()=>{
    console.log("server is running on "+PORT)
})