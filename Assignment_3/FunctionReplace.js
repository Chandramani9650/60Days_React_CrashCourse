function SpaceReplace(str1){    
let str2 = ""
for(let i = 0; i<str1.length;i++){
   
if(str[i]==" "){
    str2+="-"

}else{
    str2+=str1[i]
}
}
return str2
}
let str = "hello mr suresh"
let result = SpaceReplace(str)
console.log(result);