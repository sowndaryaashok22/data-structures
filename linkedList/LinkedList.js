class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    insertAtHead(data) {
        const newNode = new Node(data, this.head);
        this.head = newNode;
        this.length++;
    }

    //get node by index
    getNodeAtIndex(index){
        if(index < 0){
            return null;
        }

        else if(index == 0){
            return this.head;
        }
        else if( index >= this.length){
            return null;
        }

        else {
            let currentNode = this.head;
            for(let i = 0; i < index; i++){
                currentNode = currentNode.next;
            }
            return currentNode;
        }
    }
    //insert node at a given Index
    insertNodeAtIndex(data,index){
        if(index < 0){
            return false;
        }
        else if( index >= this.length)    
        {
            return false;
        }
        else if(index == 0){
            this.insertAtHead(data);
            return true;
        }
        else{
            let previousNode = this.getNodeAtIndex(index - 1);
            if(previousNode == null){
                return false;
            }
            
            let newNode = new Node(data, previousNode.next);
            previousNode.next = newNode;
            this.length++;
            return true;
        }
    }

    deleteNodeAtIndex(index){
        if(index < 0){
            return false;
        }
        else if(index >= this.length){
            return false;
        }
        else if(index == 0){
            let oldHead = this.head;
            this.head = this.head.next;
            oldHead = null;
            this.length--;
            return true;
        }
        else{
            let previousNode = this.getNodeAtIndex(index - 1);
            let currentNode = this.getNodeAtIndex(index);
            previousNode.next = currentNode.next;
            currentNode = null;
            this.length--;
            return true;
        }
    }

    printList(){
        let currentNode = this.head;
       for(let i=0; i<this.length; i++){
          console.log(currentNode.value);
            currentNode= currentNode.next;
       }
    }
}

class Node{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}





module.exports = LinkedList;