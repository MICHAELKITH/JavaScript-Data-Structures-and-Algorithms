//JavaScript Objects
var JsObjct ={}
var test1 =[1,2,3,4]

JsObjct.array = test1
console.log(JsObjct)


//inhertance


function JsEx(){
    this.name ="JavaScript"
    this.company ="Canonical"

    this.sayName = function(){
        console.log(this.name)
        console.log(this.company)
    }
}

var example1  = new JsEx()


example1.sayName()