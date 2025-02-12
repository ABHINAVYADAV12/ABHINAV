const http=require('http')
// exchage data from client to server
const PORT=2500
const server=http.createServer((req,res)=>{
  res.setHeader('Content-Type','application/json');
  // res.write("<h1>Welcome</h1>") 
  // res.write("Sample text typing ")
  const obj={
    "name":"Rahul",
    "branch":"AIML"
  }

  // multiple time
  res.end(JSON.stringify(obj))
})
server.listen(PORT,()=>{
   console.log(PORT)
})
// default method of http get
