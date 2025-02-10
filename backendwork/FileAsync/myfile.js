const fs=require('fs')
function asyncwrite(){fs.writeFile("data.pdf","Hello Writing pdf file data",(err)=>{
 if(err){
    console.log("Error while writing in file"+err)
 }
 console.log("Data written successfully")
})
console.log("resources closed")}
function asyncread(){fs.readFile("data.pdf",{encoding:'utf-8'},(err,data)=>{
    if(err){
        console.log("Error while reading in file"+err)
     }
console.log(data)
})}
const obj={
    asyncwrite:asyncwrite,
    asyncread:asyncread 
}
module.exports=obj
