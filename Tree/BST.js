class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    //inserting data
    insert(data){
        let newNode = new Node(data);
        if(this.root == null){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root, newNode)
            //this.height ++;
        }
    }

    insertNode(root, node){
        if(node.data < root.data){
            if(root.left == null){
                root.left = node;
            }
            else{
                this.insertNode(root.left, node)
            }
        }
        else if(node.data > root.data){
            if(root.right == null){
                root.right = node;
            }
            else{
                this.insertNode(root.right , node)
            }
        }
    }

    getRoot(){
        return this.root;
    }

    //preorder(root,left,right)
    preorder(root)
    {
        if(root != null){
            console.log(root.data);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }

    //inoorder(left,root,right)
    inorder(root)
    {
        if(root != null){
            this.inorder(root.left);
            console.log(root.data);
            this.inorder(root.right);
        }
    }

    //postorder(left,right,root)
    postorder(root)
    {
        if(root != null){
          
            this.postorder(root.left);
            this.postorder(root.right);
            console.log(root.data);
        }
    }
    
    search(root, data){
        if(root.data == data){
            return root;
        }
        else if(data < root.data){
            return this.search(root.left, data);

        }
        else if( data > root.data){
            return this.search(root.right, data);

        }
    }
    

    
    delete(root, data){
        //console.log('root data', root.data) 
        if(root == null){
            return null;
        }
        else if(data < root.data){
            root.left = this.delete(root.left, data)

        }
        else if(data > root.data){
            root.right = this.delete(root.right, data)
        }
        else{
          //  console.log('found node', root) 
            //  case : 1 no children
            if(root.left == null && root.right == null){
                root = null;
            }
            // case 2 : one children whether its left or right
            else if(root.left == null) {
                root = root.right;
            }
            else if (root.right == null){
                root = root.left;
            }
            // case 3 : root having two children
            else{
                let minNodeOnRight = this.findMin(root.right) // find minimun in right of rooot
                root.data = minNodeOnRight.data; //copy that minimun to root 
                root.right = this.delete(root.right, minNodeOnRight.data); // delete that minimum node data
            }
        }
        return root;
    }

    findMin(root){
        console.log('root', root)
        let currentNode = root;
        while(currentNode.left){
            currentNode = currentNode.left;
        }

        console.log('currentNode', currentNode)
        return currentNode;
    }
}

let newTree = new BinarySearchTree()
newTree.insert(20);
newTree.insert(12);
newTree.insert(22);
newTree.insert(25);
newTree.insert(2);
newTree.insert(15);
newTree.insert(13);
newTree.insert(16);
//console.log(newTree);
let root = newTree.getRoot()
//console.log(root);
//newTree.preorder(root);
// console.log('-------------')
newTree.inorder(root);
console.log('-------------')
// newTree.postorder(root);
// console.log('-------------')
// let result = newTree.search(root, 22);
// console.log(result);
// let result1 = newTree.search(root, 12);
// console.log(result1);
//   newTree.delete(root, 14);
//  newTree.inorder(root);
console.log(newTree.search(root, 12));
newTree.delete(root, 12);
newTree.inorder(root);
