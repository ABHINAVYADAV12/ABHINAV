console.log("hello")
const parent=document.getElementById("root")
console.log(parent)
const root= ReactDOM.createRoot(parent)
// const h1=React.createElement("h1",  { style: { color: "cyan" } }, "ABES ENGINEERING COLLEGE")
// const list1 = React.createElement("li", null, "Orange");
// const list2 = React.createElement("li", null, "Apple");
// const ul = React.createElement("ul", { style: { backgroundColor: "cyan" } }, list1, list2);
const element = <h1>CSE AIML</h1>;
const l1=<li>orange</li>
const l2=<li>apple</li>
const ul=<ul>{l1}{l2}</ul>
const container=(
    <div>
   <div> {element}</div>
   <div> {ul}</div>
   </div>
)
root.render(container)

