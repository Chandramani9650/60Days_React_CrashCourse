
let btn = document.querySelector("button")
let cont = document.querySelector("#container")
let url = "https://reqres.in/api/users?page=2"
function FetchUser(){
 fetch(url).then(res=>res.json()).then((res)=>{
    showData(res.data)
 })
}


function showData(data){
    console.log(data);
    data.map((item)=>{
        let div = document.createElement("div")
        let avatar = document.createElement("img")
        avatar.src = item.avatar
        // let 
        let id = document.createElement("h3")
        id.innerText ="Id : " + item.id
        let name = document.createElement("h3")
        name.innerText = "Name: " +item.first_name + item.last_name
        let email = document.createElement("p")
        email.innerText = "Email : " + item.email
       div.append(avatar, id,name,email)
       cont.append(div)

        console.log(item);
    })
}
let flag =false
btn.addEventListener('click',function(){
    if(flag ==false){
        FetchUser()
        console.log("hello");
        flag = true
    }else{
        flag = false
        cont.innerHTML = ""
    }
} )