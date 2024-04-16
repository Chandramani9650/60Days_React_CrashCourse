// fill in javascript code here
const form = document.querySelector("form")
const input = document.querySelectorAll("form>input")
const tbody = document.querySelector("tbody")
const select = document.querySelector("select")
let arr = []
form.addEventListener('submit', function(e){
  e.preventDefault()
  ShowData()
})

function ShowData(){

let obj = {
  name:input[0].value,
  Id:input[1].value,
  Depart:select.value,

  Exp:input[2].value,
  Email:input[3].value,
  mobile:input[4].value
}

arr.push(obj)
AddData(arr)

}


function AddData(arr){
  localStorage.setItem("DataItem", JSON.stringify(arr))
  DataInsert()

  
}

function DataInsert(){
  let data = JSON.parse(localStorage.getItem("DataItem"))
  if(data){
    data = data
    ShowDataUi(data)
  }
 
}
function ShowDataUi(data, i){
  tbody.innerText = " "
  data.map((item, i)=>{
    let tr = document.createElement("tr")
      let name = document.createElement("td")
      let Id = document.createElement("td")
      let Depart = document.createElement("td")
      let exp = document.createElement("td")
      let email = document.createElement("td")
      let Mob = document.createElement("td")
      let role = document.createElement("td")
      let del = document.createElement("td")
      let button = document.createElement("button")
      name.innerText = item.name
      Id.innerText = item.Id
      Depart.innerText = item.Depart
      email.innerText = item.Email
      exp.innerText = item.Exp
      Mob.innerText = item.mobile
      button.innerText = "Delete"
    //  `${exp>5?role.innerText = "Senior":"Junior"}`
  //    button.innerText = "Delete"
  if(item.Exp>5){
    role.innerText = "Senior"
  }else if(item.Exp<5 && item.Exp>3){
    role.innerText = "Junior"
  }else{
    role.innerText = "Fresure"
  }
     button.addEventListener('click', function(){
   DeleteData(data,i)
     })
  del.append(button)
     tr.append(name, Id, Depart, exp, email, Mob, role, del)
     tbody.append(tr)
  })

  
}

function DeleteData(data,i){
console.log(i, "i");

console.log(data[i]);
data.splice(i,1)
AddData(data)
ShowDataUi(data)

}


DataInsert()
