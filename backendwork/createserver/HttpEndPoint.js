const http=require('http')
const { data } = require('react-router-dom')
// exchage data from client to server
const PORT=2500
const server=http.createServer((req,res)=>{
  res.write("Welcome to node js server")
//   console.log(Object.keys(req))
  console.log(req.method+req.url)
  
  if(req.url=="/data" && req.method=="GET"){
    res.end("HI I am at end point")
  }
  if(req.url=="/msg" && req.method=="POST"){
    res.end("HI I am at end point")
  }
  })
server.listen(PORT,()=>{
   console.log(PORT)
})
// default method of http get
