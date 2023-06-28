class Stack{
    constructor(){
        this.item=[]
    }
    
    isEmpty(){
        return this.size===0
    }
    push(element){
        this.item.push(element)
    }
    pop(){
        return this.item.pop()
    }
    peek(){
        return this.item[this.item.length-1]
    }
    size(){
        return this.item.length
    }
    print(){
        console.log(this.item.toString())
    }
}
const stack= new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
let middleIndex=Math.floor( stack.size()/2) -1
let middleElement=stack.item[middleIndex]
console.log(middleElement)
// console.log(stack.isEmpty())
// console.log(stack.size())
// console.log(stack.peek())
// console.log(stack.pop())
// stack.print()