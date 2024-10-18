// // // console.log("hello world")
// // // var a=12
// // // if(a>10){
// // //     let b=23
// // //     console.log(a)
// // // }
// // // // function fun(){
// // // //     console.log("hello")
// // // // }
// // // // fun()
// // // function fun(a,b){
// // //       console.log("hello")
// // //       return a+b
// // //      }
// // // let b=fun()
// // // console.log(a)
// // // function cCompiler() {
// // //     return "c compiler"
// // //   }
  
// // //   function javaCompiler() {
// // //     return "java compiler"
// // //   }
// // //   function selectLanguage(clb) {
// // //     return "we have selected " + clb();
// // //   }
// // // a=selectLanguage(cCompiler)  
// // // console.log(a)
// // function selectLanguage(language) {
// //     let data;
    
// //     if (language === 'c') {
// //       function cCompiler() {
// //         return "c compiler";
// //       }
// //       data = cCompiler; 
// //     }
// //     if (language === 'java') {
// //       function javaCompiler() {
// //         return "java compiler";
// //       }
// //       data = javaCompiler; 
// //     } 
// //     return data();
// //   }
  
// //   let a = selectLanguage('c');
// // //   console.log(a);  
  
// // let b = document.getElementsByClassName("a");
// // console.dir(b);
// // b[0].innerHTML = "<h1>ABES Engineering College</h1>";
// // console.log(b[0].innerHTML);
// // const b1 = document.createElement("h1");
// // b1.innerText = "ABC"
// // b1.style.backgroundColor='cyan';
// // b[0].appendChild(b1); 
// // const img=document.createElement('img')
// // console.log(img)
// // img.src="./img1/logo.png"
// // img.setAttribute("height","100")
// // b[0].appendChild(img); 
// const disc=document.getElementById("disc")
// const btn=document.getElementById("button")
// console.dir(disc)
// function getdata(){
//     console.log("we have button")
//     disc.innerHTML="<h1>hello you have get data</h1>"
// }
// btn.addEventListener("click",getdata)
// Create a new Promise
const promise = new Promise((resolve, reject) => {
    let a = 12; 
    if (a > 10) {
      resolve("Resolved"); 
    } else {
      reject("Rejected"); 
    }
  });
  promise
    .then((msg) => console.log(msg))
    .catch((error) => console.log("Error:", error)); 
  