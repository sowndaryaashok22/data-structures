class Queue{
    constructor(){
        this.first= null;
        this.last = null;
        this.length = 0;
    }

    enqueue(data){

        // if there is no element in the queue, create a new element make that as first and last
        if(this.length == 0){
            let newNode = new Node(data);
            this.first = newNode;
            this.last = newNode;
        }
        
        // if the queue has elements create a new element , make that as last element
        else{
            let newNode = new Node(data);
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    dequeue(){
        if(this.length == 0){
            return this.first;
        }
        let firstNode = this.first;
        if(this.first == this.last){
            this.first =  null;
            this.last =  null;
            
        }
        else{
            this.first = this.first.next;   
        }
        this.length--;
        return firstNode;
        
    }

    peek(){
        // console.log('inside peek, printing the first', this.first)
        return this.first;
    }

    isEmpty(){
        if(this.length == 0)
        {
            return true;
        }
        else{
            return false;
        }
    }
}

class Node{
    constructor(data){
        this.data = data;
        this.next = null;

    }
}

class QueueUsingArray{
    constructor(){
        this.items = [];
        this.length = 0;
    }

    enqueue(data){
        this.items[this.length]= data;
        this.length++;
    }

    dequeue(){
        let firstNode = this.items[0];

        for(let i = 0; i<this.length; i++){
            if(i + 1 == this.length) {
                break;
            }
            this.items[i] = this.items[i+1]
        }
        this.items.splice(this.length-1, 1)
        this.length--;
        return firstNode; 
    }

    peek(){
        return this.items[0];
    }

    isEmpty(){
        if(this.length == 0){
            return true;
        }
        else{
            return false;
        }

    }
}

let myQueue = new QueueUsingArray();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
console.log(myQueue);
console.log(myQueue.peek());

myQueue.dequeue();
console.log(myQueue);

//queue testing
// let myQueue = new Queue();
// myQueue.enqueue('ashok');
// // console.log(myQueue);
// // console.log(myQueue.peek());
// myQueue.enqueue('sow');
// // console.log(myQueue);
// // console.log(myQueue.isEmpty());
// myQueue.enqueue('lava');
// myQueue.enqueue('yazhilini');
// // console.log(myQueue.peek());
// console.log('dequeded first', myQueue.dequeue());
// console.log('after dequeing', myQueue);
// console.log('dequeded first', myQueue.dequeue());
// console.log('after dequeing', myQueue);
// console.log('dequeded first', myQueue.dequeue());
// console.log('after dequeing', myQueue);
// console.log('dequeded first', myQueue.dequeue());
// console.log('after dequeing', myQueue);
// console.log('dequeded first', myQueue.dequeue());
// console.log('after dequeing', myQueue);