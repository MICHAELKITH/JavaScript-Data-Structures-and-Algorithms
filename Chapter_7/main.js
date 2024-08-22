//Recursion

//Counting Down to zero


// function countDown(n){
//     if(n<0){
//         return
//     }else{
//         console.log(n)
//         countDown(n-1)
        
//     }
// }

// countDown(12)

//Fibonacci Sequence 

//1,1,2,3, 5, 8, 

const getFib = (n) =>{
    if (n <=1 ){
        return n
    }else{

        
       const result =  getFib(n-1)+getFib(n-2)
       console.log(`${result}`)
        return result
    }
}
getFib(3)