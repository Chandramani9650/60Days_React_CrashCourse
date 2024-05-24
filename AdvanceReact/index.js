let obj = {a:1,b:2,c:3}
function newObj(key, value){
    obj = {...obj,[key]:value}
}
newObj("d",5)
console.log(obj);