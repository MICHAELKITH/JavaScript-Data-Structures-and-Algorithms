
//Hash tables are a fundamental data structure used in 
//computer science for efficient data storage and retrieval. 


//simple hash table implementation

class HashTable{
    constructor(size=50){
        this.table = new Array(size) //initialize table
        this.size =0// keep of track key pairs
    }
        //basic 

        _hash(key){
            let hash = 0;
            //iteration 

            for(let i = 0; i<key.length; i++){
                hash += key.charCodeAt(i);
            } 

            return hash % this.table.length
        }


        //insert

        insert(key, value){
            const index = this._hash(key)

            if(!this.table[index]){
                this.table[index] = []
            }

            this.table[index].push([key, value])
            this.size++
        }


        //retrieve

        get(key){
            const index = this._hash(key)
            const bucket = this.table[index]

            if(bucket){
                for(let i = 0; i<bucket.lenth; i++){
                    if (bucket[i][0] == key){
                        return bucket[i][1]
                    }
                } 
            }

            return undefined //no key found 
        }


        remove(key){
            const index = this._hash(key)
            const bucket = this.table[index]

            if(bucket){
                for(let i = 0; i<bucket.lenth; i++){
                    if (bucket[i][0] == key){
                        const removed = bucket.splice(i, 1)
                        this.size--

                        return removed[i][1]//return remove value
                    }
                } 
            }

            return undefined //no key found 
        }

        display(){
            this.table.forEach((bucket, index)=>{
                if(bucket){
                    console.log(index, bucket)
                }
            });
        }

  
}

const hashTable = new HashTable()

hashTable.insert('name', 'Christine')
hashTable.insert('age', 22)
hashTable.insert('City', 'Nairobi')


console.log(hashTable.get('name'))
console.log(hashTable.get('age'))
console.log(hashTable.get('City'))
hashTable.remove('age')
hashTable.remove('name')
hashTable.remove('City')

console.log(hashTable.get('age'))
console.log(hashTable.get('name'))
console.log(hashTable.get('City'))


hashTable.display()