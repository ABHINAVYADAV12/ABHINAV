import React, { useState } from "react";
import Student from "./student";
import logo from "./image/abc.jpg"
import ImageManipulation from "./imageunderstand";
import Registration from "./registration";
const App = () => {
  // let a=20;
  // let mystyle={
  //   backgroundColor:"cyan",
  //   color:"red"
  // }
  const [mydata,setmydata]=useState('')
  return (
  // <div style={{color:"red"}}>
  //   <h2>ABES ENGINEERING COLLEGE</h2>
  // <Student pic={<img src={logo} width="50px" height="50px" ></img>} name="ABHINAV YADAV" branch="CSE AIML" college="ABES ENGINEERING COLLEGE" roll="6" section="B" />
  // <ImageManipulation/>
  // </div>
  
  
  <div style={{
    display:"flex",
    justifyContent: 'center',
  }}>
    <Registration reqdata={setmydata}/>
  </div>
  )
};

export default App;
