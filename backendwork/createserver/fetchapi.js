const http=require("http")
const { text } = require("stream/consumers")
const PORT=2001
const server=http.createServer(async(req,res)=>{
    res.setHeader("Content-Type","text/html")
    const data=await fetch("https://fakestoreapi.com/products")
    const resdata=await data.json()
    const image="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
    console.log(resdata)
    const htmltemplate=`<html> 
     <head>
     <title>Online Shop  </title>
     <style> 
     .container{
     border:2px solid;
     
     }
     </style>
     </head>
     <body>
   ${ resdata.map((ele)=>{
    return(
        `<div class="container">
        <div>
        <img src=${ele.image} height=200 width=200/>
        </div>
        <div>
        <h3>${ele.title}</h3>
        <h3>${ele.description}</h3>
        </div>
         </div>
        `
    )
})}
     </div>
     </body>
    </html>`
    res.end(htmltemplate)
})
server.listen(PORT,()=>{
    console.log("SERVER IS RUNNING"+PORT)
})
