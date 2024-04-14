let Product = {
 Fruit:[
    {image:"https://www.bigbasket.com/media/uploads/p/m/10000207_24-fresho-watermelon-small.jpg?tr=w-1920,q=80",title:"Watermelon - Small", Off:"46", price:"59", ActualPrice:"102"},
    {image:"https://www.bigbasket.com/media/uploads/p/m/40057966_6-fresho-tender-coconut-medium.jpg?tr=w-1920,q=80",title:"Tebder Coconut", Off:"31", price:"54", ActualPrice:"78.7"},
    {image:"https://www.bigbasket.com/media/uploads/p/m/10000263_12-fresho-strawberry.jpg?tr=w-1920,q=80",title:"Strawberry", Off:"27", price:"41", ActualPrice:"56.16"},
    {image:"https://www.bigbasket.com/media/uploads/p/m/10000033_25-fresho-banana-yelakki.jpg?tr=w-1920,q=80",title:"Banana - Yelakki", Off:"40", price:"23", ActualPrice:"38.23"},
    {image:"https://www.bigbasket.com/media/uploads/p/m/1222181_1-fresho-orange-nagpur-regular.jpg?tr=w-1920,q=80",title:"Orange - NagPur, Regular", Off:"27", price:"228", ActualPrice:"312.33"},
    {image:"https://www.bigbasket.com/media/uploads/p/m/50000449_5-fresho-mango-alphonso-ratnagiri-organic.jpg?tr=w-1920,q=80",title:"Mango Alphonso (Ratnagiri) - Organic", Off:"27", price:"327.77", ActualPrice:"449"}
 ],
 Rice:[
    {image:"https://www.bigbasket.com/media/uploads/p/m/40075895_5-bb-royal-sona-masoori-rice-raw-rice-super-premium.jpg?tr=w-1920,q=80",title:"Sona Masoori Rice/Akki Raw Rice/Akki - Super", Off:"46", price:"59", ActualPrice:"102"},
    {image:"https://www.bigbasket.com/media/uploads/p/m/20001214_15-bb-royal-sona-masoori-raw-rice.jpg?tr=w-1920,q=80",title:"Sona Masoori Raw Rice/Akki", Off:"46", price:"59", ActualPrice:"102"},
    {image:"https://www.bigbasket.com/media/uploads/p/m/60000037_3-bb-royal-sona-masoori-steam-rice.jpg?tr=w-1920,q=80",title:"Sona Masoori Steam Rice/Akki", Off:"46", price:"59", ActualPrice:"102"},
    {image:"https://www.bigbasket.com/media/uploads/p/m/40160056_4-super-saver-dosa-rice.jpg?tr=w-1920,q=80",title:"Dosa Rice/Akki", Off:"46", price:"269", ActualPrice:"302"},
    {image:"https://www.bigbasket.com/media/uploads/p/m/1223978_2-tata-sampann-white-thick-poha-high-in-fibre-for-breakfast-evening-tea.jpg?tr=w-1920,q=80",title:"White Thick Poha - High In Fibre,", Off:"46", price:"59", ActualPrice:"102"},
    
 ],
 Beauty:[
    {image:"https://www.bigbasket.com/media/uploads/p/m/40075895_5-bb-royal-sona-masoori-rice-raw-rice-super-premium.jpg?tr=w-1920,q=80",title:"Sona Masoori Rice/Akki Raw Rice/Akki - Super", Off:"46", price:"59", ActualPrice:"102"},
    {image:"https://www.bigbasket.com/media/uploads/p/m/20001214_15-bb-royal-sona-masoori-raw-rice.jpg?tr=w-1920,q=80",title:"Sona Masoori Raw Rice/Akki", Off:"46", price:"59", ActualPrice:"102"},
    {image:"https://www.bigbasket.com/media/uploads/p/m/60000037_3-bb-royal-sona-masoori-steam-rice.jpg?tr=w-1920,q=80",title:"Sona Masoori Steam Rice/Akki", Off:"46", price:"59", ActualPrice:"102"},
    {image:"https://www.bigbasket.com/media/uploads/p/m/40160056_4-super-saver-dosa-rice.jpg?tr=w-1920,q=80",title:"Dosa Rice/Akki", Off:"46", price:"269", ActualPrice:"302"},
    {image:"https://www.bigbasket.com/media/uploads/p/m/1223978_2-tata-sampann-white-thick-poha-high-in-fibre-for-breakfast-evening-tea.jpg?tr=w-1920,q=80",title:"White Thick Poha - High In Fibre,", Off:"46", price:"59", ActualPrice:"102"},
    
 ],
 Cleaning:[
    {image:"https://www.bigbasket.com/media/uploads/p/m/40075895_5-bb-royal-sona-masoori-rice-raw-rice-super-premium.jpg?tr=w-1920,q=80",title:"Sona Masoori Rice/Akki Raw Rice/Akki - Super", Off:"46", price:"59", ActualPrice:"102"},
    {image:"https://www.bigbasket.com/media/uploads/p/m/20001214_15-bb-royal-sona-masoori-raw-rice.jpg?tr=w-1920,q=80",title:"Sona Masoori Raw Rice/Akki", Off:"46", price:"59", ActualPrice:"102"},
    {image:"https://www.bigbasket.com/media/uploads/p/m/60000037_3-bb-royal-sona-masoori-steam-rice.jpg?tr=w-1920,q=80",title:"Sona Masoori Steam Rice/Akki", Off:"46", price:"59", ActualPrice:"102"},
    {image:"https://www.bigbasket.com/media/uploads/p/m/40160056_4-super-saver-dosa-rice.jpg?tr=w-1920,q=80",title:"Dosa Rice/Akki", Off:"46", price:"269", ActualPrice:"302"},
    {image:"https://www.bigbasket.com/media/uploads/p/m/1223978_2-tata-sampann-white-thick-poha-high-in-fibre-for-breakfast-evening-tea.jpg?tr=w-1920,q=80",title:"White Thick Poha - High In Fibre,", Off:"46", price:"59", ActualPrice:"102"},
    
 ],
}


let slider = document.querySelector(".slider")
let img = document.querySelectorAll(".slider>img")
// let form = document.querySelector("form")
let select = document.querySelector("#select")
let Hidefilter = document.querySelector("#Hidefilter")
let SortData = document.querySelector("#SortData")
let Searchbar = document.querySelector("#Searchbar")
Searchbar.addEventListener('keyup', function(event){
   if(event.key=="Enter"){
      event.preventDefault()
      let searchvalue = event.target.value
      handleSearch(searchvalue)
   }
})
// console.log(select);

let currentIndex = 0;
for(let i = 0; i<img.length;i++){

    img[i].style.left = `${i*100}%`
}

let status = true
Hidefilter.addEventListener('click', function(){
  
   if(status){
      SortData.style.display = "none"
      Hidefilter.innerText = 'Show Filter'
      status = false
   }else{
      SortData.style.display = "block"
      Hidefilter.innerText = 'Hide Filter'
      status = true 
   }
   
})

function slide() {
    currentIndex = (currentIndex + 1) % img.length;
  
    for (let i = 0; i < img.length; i++) {
        img[i].style.transition = "left 2s"; 
        img[i].style.left = `${(i - currentIndex) * 100}%`; 
    }
   
}
setInterval(slide, 3000);
let Product_Show = document.querySelector(".Product_Show")


function ProductShow(data, i){
   Product_Show.innerHTML = ""
   data.map((item)=>{
      // console.log(item);
      let img = document.createElement("img")
      let div = document.createElement("div")
      let div1 = document.createElement("div")
      let discount = document.createElement("p")
      let Category = document.createElement("p")
      let title = document.createElement("p")
      let price = document.createElement("h3")
      let brand = document.createElement("p")
      let rating = document.createElement("p")
      let count = document.createElement("p")
      let AddToCart = document.createElement("button")
      let Quantity = 1
      let plus = document.createElement("button")
  
      let minus = document.createElement("button")
    
      count.innerText = Quantity
      img.src = item.images[0]
      // img.style.width = "200px"
      img.style.height = "200px"
      title.innerText = item.title
    price.innerText = "Price "+item.price + "₹"
    discount.innerText = item.discountPercentage+"%OFF"
    discount.style.backgroundColor = "green"
    discount.style.width = "100px"
    discount.style.color = "white"
    discount.style.marginBottom = "10px"
    brand.innerText = item.brand
    Category.innerText = item.category
    rating.innerText ="Rating "+ item.rating
  




   AddToCart.innerText = "Add To Cart"
   AddToCart.style.backgroundColor = "green"
   AddToCart.style.padding = "4px 20px 4px 20px"
   AddToCart.style.color = "white"
   AddToCart.style.textAlign = "center"
   AddToCart.addEventListener('click', function(){
      AddCart(item, i)
   })
    div.append(discount, img, title, brand, price, rating,AddToCart )
    div.style.textAlign = "center"
    Product_Show.append(div)
      
   }) 
}



async function fetchData() {
   try {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json(); // Await here to get the actual JSON data
      // console.log(data);
     ProductShow(data.products)
   //   HandleSubmit(data.products)
   } catch (error) {
      console.log(error);
   }
}
let arr = []
fetchData();
function AddCart(data, index){
   arr.push(data)
   alert("Sucessfuly added in to cart")
   AddLocalStorage(arr)
   console.log(arr);
}

function AddLocalStorage(data){
localStorage.setItem("CartData", JSON.stringify(data))
}

select.addEventListener('change',function(){
   HandleSubmit()
})

async function HandleSubmit(){

     let data = await DataFetch()
   
     if(select.value=="LowToHigh"){
      let newData = data.sort((a,b)=>a.price-b.price)
      console.log(newData);
      ProductShow(newData)

     }else if(select.value=="HighToLow"){
      let newData = data.sort((a,b)=>b.price-a.price)
      console.log(newData);
      ProductShow(newData)
     }else if(select.value=="RatingHighToLow"){
      let newData = data.sort((a,b)=>b.rating-a.rating)
      ProductShow(newData)
      console.log(newData);
     }else{
      ProductShow(data)
     }
     
   
   console.log(select.value);
  

}
async function DataFetch() {
   try {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json(); // Await here to get the actual JSON data
   
   return data.products
   } catch (error) {
      console.log(error);
   }
}

async function handleSearch(vs){
let data = await DataFetch()
console.log(data);
let newdata = data.filter((item)=>item.brand.toLowerCase()==vs.toLowerCase())
ProductShow(newdata)

}







