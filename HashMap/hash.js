class HashTable{
    constructor(size){
        this.items= [];
        this.size = size;

        // creating empty objects in each item location
        for(let i = 0; i < this.size; i++){
            this.items[i] = {
                
            }
        }
    }

    insert(key, data){

        let index = this.computeHash(key,this.size);

        this.items[index][key] = data;

    }

    delete(key){
        let index = this.computeHash(key,this.size);

        let data = this.items[index][key];

        delete this.items[index][key]; 

        return data;
    }

    search(key){
        let index = this.computeHash(key,this.size);
        let data = this.items[index][key];
        return data;
    }

    computeHash(key, size){

        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = hash + key.charCodeAt(i);
        }

        return hash % size;
    }
}

// const myHashTable = new HashTable(5);
// myHashTable.insert('sow', 28);
// myHashTable.insert('wos', 82);
// myHashTable.insert('ash', 32);
// myHashTable.insert('lava', 23);
// myHashTable.insert('yalu', 10);

// console.log(myHashTable);

// console.log(myHashTable.search('yalu'));
// console.log(myHashTable.search('wos'));

// console.log(myHashTable.delete('wos'));
// console.log(myHashTable);


// let newHashTable = {

// }

// newHashTable['sow'] = 28;

// newHashTable['lava'] = 23;

// newHashTable['ash'] = 32;

// newHashTable['wos'] = 82;

// console.log(newHashTable)

// console.log(newHashTable['sow']);

// const deleteFromHashTable = (key) => {
//     let deleted = newHashTable[key];
//     delete newHashTable[key];
//     return deleted;
// }

// let deleted = deleteFromHashTable('wos')
// console.log(deleted)

// console.log(newHashTable)


let hashtable = {}

const inputArray = [1,2,3,4,5]
const targetSum = 6;

//output = [1,5], [2,4]

for(let i = 0; i < inputArray.length; i++){

    if (hashtable[inputArray[i]]) {
        console.log([inputArray[i], hashtable[inputArray[i]]])
    }
    else {
        hashtable[inputArray[i]] = targetSum - inputArray[i]; 
    }
    
}

console.log(hashtable)
