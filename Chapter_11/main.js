// Stacks and Queues

//stacks 
//LIFO


class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.isEmpty()){
            return "underFlow"
        }
        return this.items.pop();
    }

    peek(){
        if(this.isEmpty()){
            return 'No elements in the stack'
        }
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length === 0
    }

    printStack(){
        return this.items.join(' ')
    }
}

const stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(5)
stack.push(8)

console.log(stack.printStack())
console.log(stack.pop())



//Queues 

//FIFO

class Queue{
    constructor(){
        this.items=[]
    }

    enques(element){
        this.items.push(element)
    }

    deques(){
        if(this.isEmpty()){
            return "Undefined"
        }
    }

    front(){
        if(this.isEmpty()){
            return "no elements found"
        }
    }
    isEmpty(){
        return this.items.length === 0
    }
    printQues(){
        return this.items.join(" ")
    }
}

const queue = new Queue()
queue.enques(10)
queue.enques(20)
queue.enques(30)


console.log(queue.printQues())
console.log(queue.deques())
console.log(queue.front())
