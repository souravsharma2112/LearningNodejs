// import "./styles.css";

let app = document.getElementById("app");
let target = document.getElementById("li");
let arr=[app];
// console.log(arr);

let  approot =Array.from(app.children);
function find(root,target) {
    root.forEach((e)=>{
        if (e.id==target.id) {
         arr.push(e);
        //  console.log(arr);
         return;
        }
        if (e.children.length>0) {
            arr.push(e)
        find(Array.from(e.children),target)
        
            
        }
        else{
            return
        }
        
        
       
     })
}

find(approot, target)

const selector =Array.from(arr);
console.log(selector.join(" "));