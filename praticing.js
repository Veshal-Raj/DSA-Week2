class Node{
    constructor(value){
        this.value=value
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
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    pop(){
        if(this.isEmpty())return null
        let curr=this.head
        this.head=this.head.next
        this.size--
        return curr.value
    }
    display(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        let print="stack values are: "
        let curr=this.head
        while(curr){
            print=print+" "+curr.value
            curr=curr.next
        }
        console.log(print)
    }
}
const s=new Stack()
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push(5)
s.display()