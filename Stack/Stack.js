class Stack{
    
    constructor(){
        this.items = [];
        this.length = 0;
    }

    push(data){
        this.items[this.length]= data;
        this.length++;
    }

    pop(){
        if(this.length == 0){
            return null;
        }
        let topElement = this.items[this.length-1];
        this.items.splice(this.length-1,1);
        this.length--;
        return topElement;
    }

}

// creating a stack using linked list
class StackList{
    constructor(){
        this.top = null;
        this.length = 0;
    }
    push(data){
        if(this.length== 0){
            let newNode = new Node(data,null);
            this.top = newNode;
             
        }
        else{
            let newNode = new Node(data,this.top);
            this.top = newNode;
        }
        this.length++;
    }

    pop(){
        if(this.length == 0){
            return null;
        }
        
        let currentTop = this.top;
        this.top = this.top.next;
        currentTop.next = null;
        this.length--;
        return currentTop;
    }
}

class Node{
    constructor(value,next){
        this.value= value;
        this.next = next;
    }
}

// let newStack = new Stack();
// console.log(newStack);
// newStack.push('ashok');
// newStack.push('sow');
// console.log(newStack);
// let top = newStack.pop();
// console.log(top);
// console.log(newStack);
//  top = newStack.pop();
// console.log(top);
// console.log(newStack);
//  top = newStack.pop();
// console.log(top);
// console.log(newStack);

let newStack = new StackList();
newStack.push('ash');
newStack.push('sow');
console.log(newStack);
console.log(newStack.pop());
console.log(newStack);
console.log(newStack.pop());
console.log(newStack.pop());

