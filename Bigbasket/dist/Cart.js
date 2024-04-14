const NoOfcart = document.querySelector("#NoOfcart")
let CartData = JSON.parse(localStorage.getItem("CartData"))
let Cart_Product = document.querySelector(".Cart_Product")
NoOfcart.innerText = CartData.length
NoOfcart.style.padding = "2px"
function ProductList(data){
    Cart_Product.innerHTML = " "
data.map((item, i)=>{
    // console.log(item);
    let M = document.createElement("div")
    let M1 = document.createElement("div")
    let M2 = document.createElement("div")
    let M11 = document.createElement("div")
    let M12 = document.createElement("div")
    let M21 = document.createElement("div")
    let M22 = document.createElement("div")
    let img = document.createElement("img")
    let price = document.createElement("p")
    let delet = document.createElement("button")
    let totalPrice = document.createElement("p")
    let button = document.createElement("button")
    let name = document.createElement("h2")
    let icon = document.createElement("i");
    let Add = document.createElement("button")
    Add.innerText = "Add"
    let Remove = document.createElement("button")
    Remove.innerText = "Remove"
    let counter = 1
    let qua = document.createElement("p")
    qua.innerText = counter
    let countdiv = document.createElement("div")
    countdiv.append(Add, qua, Remove)


   Add.addEventListener('click', function(){
    counter++
    if(counter==10){
        Add.disabled = true
    }
    qua.innerText = counter
    // console.log(counter, "sjhd");
    totalPrice.innerText =  item.price*counter + "₹"

   })
  
    Remove.addEventListener('click', function(){
        counter-- 
        
        qua.innerText = counter
        // console.log(counter, "sjhd");
        totalPrice.innerText =  item.price*counter + "₹"
       })
  delet.innerText = "Delete Item"
  delet.style.marginTop = "20px"
  delet.style.backgroundColor = "rgb(79, 77, 77)"
       delet.addEventListener('click', function(){
          DeleteData(CartData, i)
       })

    countdiv.style.display = "flex"
    countdiv.style.alignItems = "center"
    // countdiv.style.border = "1px solid red"
     totalPrice.innerText =  item.price*counter + "₹"
     totalPrice.style.marginLeft = "30px"
   

    icon.className = "fas fa-trash delete-icon"
    img.src = item.images[0]
   
    price.innerText = item.price +"₹"
    name.innerText = item.title
    M11.append(img)
    M12.append(name, price)
    M1.append(M11, M12)
    M1.style.display = "flex"
    M21.append(countdiv, delet)
    M22.append(totalPrice)
    M2.append(M21, M22)
    M2.style.display = "flex"
    M.append(M1, M2)
 
    Cart_Product.append(M)


})
}



function DeleteData(data, index){
    data.splice(index, 1)
    console.log(data);
    let NewData = data
ProductList(NewData)
}
ProductList(CartData)
