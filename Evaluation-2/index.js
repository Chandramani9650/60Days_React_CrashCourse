let Department = document.querySelector("#Department")
let gender = document.querySelector("#gender")
let Salary = document.querySelector("#Salary")
let tbody = document.querySelector("tbody")
let button = document.querySelectorAll("button")
let Data = []
let Data1 = []
let count = 1

//Fetch Data here 
async function getdata(page="1"){
try {
    let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=10`)
    let response = await res.json()
    Data = response.data
    //call to the showData function
    showData(Data)
    console.log(response);
} catch (error) {
    
}
}
getdata(1)

//show data on ui
function showData(data){
    tbody.innerHTML = ""
    data.map((item)=>{
          
        let tr = document.createElement("tr")
        tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.gender}</td>
        <td>${item.department}</td>
        <td>${item.salary}</td>
    `
    tbody.append(tr)
    })
}
//pagination for next page
button[1].addEventListener('click', function(){
    if(count<10){
        count+=1
        getdata(count)
    }else{
        button[1].disabled   
    }
})

//pagination for previous page
button[0].addEventListener('click', function(){
    if(count>1){
        count-=1
        getdata(count)
    }
    if(count<1){
        button[0].disabled
        console.log(count);
    }
})



//filter according to department
Department.addEventListener('change', function(){
    console.log(Department.value);
    fetchdata(Department.value)
})

async function FetchData1(){
    let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
    let response = await res.json()
    Data1 = response.data
}
FetchData1()
async function fetchdata(vla){


let newdata = Data1.filter((item)=>item.department==vla)
 showData(newdata)
}

//filter by gender
gender.addEventListener('change', function(){
  console.log(Data1);

      
        showData(newdata)
    
})
// sort data according to salary
Salary.addEventListener('change', function(){
if(Salary.value=="HTL"){
    let newdata = Data1.sort((a,b)=>b.salary-a.salary)
    showData(newdata)
}else if(Salary.value=="LTH"){
    let newdata = Data1.sort((a,b)=>a.salary-b.salary)
    showData(newdata) 
}
})


