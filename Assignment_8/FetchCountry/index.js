let select = document.querySelector("select")
let cont = document.querySelector("#container")



let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries"
async function getData(){
let res = await fetch(url)
let response = await res.json()
showData(response.data)
return response.data
}
getData()

function showData(data){
    cont.innerHTML = ""
    data.map((item)=>{
       
        let div = document.createElement("div")
        // let country = document.createElement("p")
        // country.innerText = "country : "+ item.country
        // let rank = document.createElement("p")
        // rank.innerText = "Rank : " + item.Rank
        // let population = document.createElement("p")
        // population.innerText = "Population : "+ item.population

        div.innerHTML = `<p><span>country : </span> ${item.country}</p>
        <p><span>Rank : </span> ${item.Rank}</p>
        <p><span>Population : </span> ${item.population}</p>`
        // div.append(country, rank, population)
        cont.append(div)
        // let country = document.createElement("p")

    })
}

async function Sortda(){
    let data = await getData()
    // console.log(data, "hello");
    if(select.value=="inc"){
     let data1  =    data.sort((a,b)=>b.population-a.population)
        showData(data1)
        // console.log(data1);
    }else if(select.value=="dec"){
        let data1  =    data.sort((a,b)=>a.population-b.population)
        showData(data1)
        // console.log(data1);
    }else if(select.value=="ranH"){
        let data1  =    data.sort((a,b)=>b.Rank-a.Rank)
        showData(data1)
    }else{
        let data1  =    data.sort((a,b)=>a.Rank-b.Rank)
        showData(data1)
    }
}


select.addEventListener('change', function(){
   Sortda()
})







  