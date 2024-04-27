let form = document.querySelector("form")
let input = document.querySelectorAll("input")
let p = document.querySelectorAll("p")
function getDeta(data){
  fetch("http://localhost:8085/users",{
    method:"POST",
    body:JSON.stringify(data)
  }).then(res=>res.json()).then((res)=>{
    console.log(res);
    
  }).catch((err)=>{
    console.log(err);
  })
}


function UserData(e) {
    e.preventDefault(); 
    let data = {};
    data.name = input[0].value;
    data.email = input[1].value;
    data.password = input[2].value;
    console.log(data);
    getDeta(data);
    alert("Signup successful");
    window.location.href = "login.html";
    
}
form.addEventListener('submit',function(e){
    UserData(e)
})



