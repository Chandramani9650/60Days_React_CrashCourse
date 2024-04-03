function Prime(number){
    if(number==2){
        console.log(number)
    
    }else if(number>2){
        let flag = true
        for(let i =2; i<=number;i++){
            for(let j = 2;j<i;j++){
              if(i==2){
                flag = true
                 break
              }else if(i%j==0){
                flag = false
                break
               }else{
                flag = true
               }
    
            }
    
            if (!flag) {
                let p = 0
            } else {
               console.log(i); 
            }
        }
    }
    
    }
    
    let number  = 13
    Prime(number)