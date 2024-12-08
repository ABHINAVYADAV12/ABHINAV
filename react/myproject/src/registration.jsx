import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Registration = (reqdata) => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [mydata,setmydata]=useState('')
    function getdata(e){
        e.preventDefault()
        console.log(name)
        const data={
            name,password,email
        }
        setmydata(data);
        reqdata(data)
    }
  return (
    <div>
        <div>
            {JSON.stringify(mydata)}
        </div>
        Registration
   <form>
    <div class="form-group">
    <label for="exampleInputname">Name</label>
    <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control" id="exampleInputName"  placeholder="Enter name" />
    <small id="nameHelp" class="form-text text-muted">We'll never share your name with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={getdata}>Submit</button>
</form>
    </div>
  )
}

export default Registration