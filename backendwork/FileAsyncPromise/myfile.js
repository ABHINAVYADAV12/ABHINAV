const { error } = require('console')
const { readFile } = require('fs')

const fs=require('fs').promises
const promise=fs.writeFile("data.txt","Hello,Writing data",{encoding:'utf-8'})
// console.log(promise)
promise.then((msg)=>{
console.log("data written successfully")
}).catch(error=>{
    console.log("Error is "+error)
}).finally(msg=>{console.log("Finally Done")})
const readfil=fs.readFile("data.txt",{encoding:'utf-8'});
readfil.then((data)=>{
   console.log(data)
}).catch(error=>{
  console.log(error)
}).finally(()=>{console.log("message read successfully")})