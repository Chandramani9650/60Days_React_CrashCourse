let product = ["Rice", "Dal", "Salt"]
let quantity = [2, 3, 1]
let price = [60, 50, 20]
let array = []
let object = {}
for(let i =0; i<product.length;i++){
    let obj = {}
    obj.name = product[i]
    obj.quantity = quantity[i]
    obj.price = price[i]
    array.push(obj)
    object.data = array
    

}
object.total = function(){
    let totalValues  = 0
    for(let i = 0;i<this.data.length;i++){
      totalValues+=this.data[i]["quantity"]*this.data[i]["price"]
      
    }
    return totalValues
}
console.log(object.total());

