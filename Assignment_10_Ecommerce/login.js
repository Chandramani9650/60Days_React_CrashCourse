

let form = document.querySelector("form")
let input = document.querySelectorAll("input")
let p = document.querySelector("p")

function getDeta(){
    fetch("http://localhost:8085/users").then(res=>res.json()).then((res)=>{
    // console.log(res);
    LoginData(res)
    }).catch((err)=>{
        console.log(err);
    })
}

let obj = {}
form.addEventListener('submit', function(e){
    e.preventDefault()
    obj.email = input[1].value
    obj.pass = input[2].value
    console.log(obj);
    getDeta()
})
function LoginData(data){
console.log(data);
flag = true
data.map((item)=>{
    if(obj.email==item.email && obj.pass==item.password){
     flag = false
     localStorage.setItem("LoginData",JSON.stringify(item))
    }
    

})
if(flag){
  if(input[1].value=='' || input[2].value==''){
    p.innerText  = "Please Enter email and password"
    p.style.color = "red"
  }else{
    p.innerText  = "You Have Enterd wrong email or password"
  p.style.color = "red" 
  } 
}else{
    p.innerText  = "Login Successful !"
    p.style.color = "green" 
    setTimeout(()=>{
    window.location.href = "index.html"
    },2000)
}

}


   


