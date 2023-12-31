class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Queue{
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
    enqueue(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }else{
            let curr=this.head
            this.head=curr.next
            return curr.value
        }
        this.size--
    }
    display(){
        let curr=this.head
        let outString="Queue Element : "
        while(curr){
            outString=outString+" "+curr.value
            curr=curr.next
        }
        console.log(outString)
    }
    peek(){
        return this.head.value
    }
    search(value){
        let index=0
        let curr=this.head
        while(curr){
            if(curr.value===value){
                return "Found at index : "+index
            }
            curr=curr.next
            index++
        }
        return "Value not found"
    }
}
const q=new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.display()
q.dequeue()
q.display()
console.log(q.peek())
console.log(q.search(5))