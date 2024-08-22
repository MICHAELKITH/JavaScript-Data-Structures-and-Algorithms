//JavaScript Arrays


var array = [1, 2,3,4]



//looping array 

 var total = 0
for (var i = 0; i<array.length; i++){


total += array[i]*4


}
console.log(total)

//while loop
 var counter =  0 

 while( counter<array.length){
    counter ++
 }

 console.log(counter)

 //forEach 

 var array1  = ['Tesla', 'google', 'canonical']
 array1.forEach(function(element, index){
    console.log(element)
 })

 //Helper Function 

 //slices 

 var slcArray = array.slice(2,4)
 var slcArray1 = array.splice(2,4)

 console.log(slcArray)
 console.log(slcArray1)



