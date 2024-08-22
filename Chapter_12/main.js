//Linked Lists
//Single and Double Linked list


//Single

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
    
// }

// class SingleList{
//     constructor(){
//         this.head = null
//     }


//     //insert at the end 

//     append(data){
//         const newNode = new Node(data)
//         if(!this.head){
//             this.head = newNode

//             return;
//         }

//         let current = this.head
//         while(current.next){
//             current = current.next
//         }

//         current.next = newNode
//     }

//     prepend(data){
//         const newNode =new Node(data)
//         newNode.next = this.head

//         this.head = newNode
//     }


//     delete(data){
//         if(!this.head)
//             return; 

//             if(this.head.data ===data ){
//                 this.head= this.head.next

//                 return;
//             }

//             let current = this.head
//             while(current.next && current.next.data == data){
//                 current = current.next
//             }
//     }

//     printList(){
//         let current = this.head
//         while(current){
//             console.log(current.data)
//             current =current.next
//         }
//     }
// }

// const list = new SingleList()

// console.log('add')
// list.append(10)
// list.append(20)
// list.append(50)
// list.append(70)

// list.printList()
//   console.log('remove')
// list.delete(10)

// list.printList()

//Doubly Linked List


console.log('Doubly Linked List')
class Doubly{
    constructor(data){
        this.data =data
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail= null
    }

    //insert at the end

    append(data){
        const newNode = new  Doubly(data)

        if (!this.tail){
            this.head = this.tail = newNode
            return;
        }

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
    }

    prepend(data){
        const newNode = new  Doubly(data)
        if(!this.head){
            this.head = this.tail = newNode
            return;
        }
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
    }
    delete(data){
        if(!this.head) return;

        if(this.head.data===data){
            this.head = this.head.next
            if(this.head){
                this.head.prev = null
            }else{
                this.tail = null
            }
            return ;
        }

        let current = this.head 
        while(current && current.data !==data){
            current = current.next
        }

        if(current){
            current.prev.next = current.next
            if(current.next){
                current.next.prev = current.prev
            }else{
                this.tail = current.prev
            }
        }
    }


    printDoublyF(){
        let current= this.head 
        while(current){
            console.log(current.data)
            current =current.next
        }
    }

    printDoublyB(){
        let current= this.tail 
        while(current){
            console.log(current.data)
            current =current.prev
        }
    }
}

const list = new DoublyLinkedList()

list.append(10)
list.append(50)
list.append(80)
list.append(100)
list.append(1000)
list.printDoublyF() //display
console.log('delete')
list.delete(1000)
console.log('After delete')
list.printDoublyF() 

//display

console.log('Backward')
list.printDoublyB()