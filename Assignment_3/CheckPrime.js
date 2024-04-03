function Prime(number){
    if(number==2){
        console.log(number)
    
    }else if(number>2){
        let flag = true
        for(let i =2; i<number;i++){
            if(number%i==0){
                flag = false
                break
            }
    
           
        }
        if (!flag) {
            console.log(number + " is not prime number");
        } else {
           console.log(number + " is a prime number"); 
        }
    }else{
        console.log(number + " is not prime");
    }
    
    }
    
    let number  = -1
    Prime(number)