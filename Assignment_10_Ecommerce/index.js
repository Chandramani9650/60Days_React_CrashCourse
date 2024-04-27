



let product = document.querySelector("#product")
let form = document.querySelector("form")
let input = document.querySelectorAll("form>input")
let user = JSON.parse(localStorage.getItem("LoginData"))
// console.log(user.name);
let pr = user.name
console.log(pr);

async function getdata(){
   try {
    let res = await fetch("http://localhost:8085/products")
    let response = await res.json()
   
    showdata(response)
   } catch (error) {
    product.innerHTML = "Something went wrong"
   }

}
getdata()
function showdata(data){
    data.map((item, i)=>{
        let div= document.createElement("div")
        let image = document.createElement("img")
        image.src = item.src
        let name = document.createElement("p")
        name.innerText ="Name : " + item.title
        let price = document.createElement("p")
        price.innerText = "Price : " + item.price + "₹"
        let rating = document.createElement("p")
        rating.innerText = "Rating : "+item.ratings
       
        let AddToCart = document.createElement("button")
        AddToCart.innerText = "Add To Cart"
        AddToCart.addEventListener('click', function(){
        AddToCartData(data, i)
        })

        let DeleteFromCart = document.createElement("button")
        DeleteFromCart.innerText = "Delete From Cart"
        DeleteFromCart.addEventListener('click', function(){
            DeleteFromCartData(item.productId)
        })
        div.append(image,name,price,rating, AddToCart, DeleteFromCart)
        product.append(div)

    })
}


function AddToCartData(index){
    console.log({index});
    fetch("http://localhost:8085/allUsersCart", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          [pr]: [index]
      })
  }).then(res => res.json()).then((res) => {
      console.log(res);
  }).catch((item)=>{
    console.log("Error");
  })
}

// function DeleteFromCartData(){

// }


