class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class Stack{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    sizeOf(){
        return this.size
    }
    push(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    pop(){
        if(this.isEmpty()) return null
        let curr=this.head
        this.head=this.head.next
        this.size--
        return curr.value
    }
    display(){
        if(this.isEmpty()) return "Stack is empty"
        let print = "Stack values are : ";
        let curr=this.head
        while(curr){
            print=print+" "+curr.value
            curr=curr.next
        }
        console.log(print)
    }
    search(value){
        if(this.isEmpty())return "not found"
        let curr=this.head
        let index=0
        while(curr){
            if(value===curr.value){
                return "Found at : "+index
            }
            curr=curr.next
            index++
        }
        return "not found"
    }
}
const stk = new Stack()
stk.push(5)
stk.push(3)
stk.push(9)
stk.push(8)
stk.push(6)
stk.pop()
stk.push(2)
stk.push(1)
console.log(stk.isEmpty())
console.log(stk.pop())
stk.display()
