const fs=require('fs').promises;
const http=require('http');
const PORT=2500;
const server=http.createServer(async(req,res)=>{
    res.setHeader("Content-Type","text/html")
    const err=await fs.readFile('abc.html',{encoding:'utf-8'});
    if(req.url=='/data' && req.method=='GET'){
        res.end("<h2>Hi endpoint available</h2>")
    }
    else if(req.url=='/welcome' && req.method=='GET'){
        res.end("<h2>Welcome to abes</h2>")
    }
    // else if(req.url=='/msg' && req.method=='POST'){
    //     res.end("<h2>Hi post endpoint available</h2>")
    // }
    else{
        res.end(err)
    }
    // res.end("Server response has completed")
})

server.listen(`${PORT}`,()=>{
    console.log("server is running on :"+2500)
})