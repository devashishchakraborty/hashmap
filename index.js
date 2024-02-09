class HashMap{
    constructor(){
        this.buckets = [];
    }

    hash(key){
        let hashCode = 0;
        const primeNumber = 31;
        for(let i = 0; i < key.length; i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    }

    set(key, value){
        let index = this.hash(key);
        if(this.buckets[index] && key != Object.keys(this.buckets[index])[0]){
            let next = this.buckets[index]["next"];
            while(next != null) next = next["next"];
            next = {key: value, "next": null};
        } else this.buckets[index] = {key: value, "next": null};
    }
    
    get(key){
        return this.buckets[this.hash(key)][key];
    }

    has(key){
        if(this.buckets[this.hash(key)]) return true;
        else return false;
    }

    remove(key){
        if(this.buckets[this.hash(key)]){
            delete this.buckets[this.hash(key)];
            return true;
        }
        return false;
    }

    length(){
        let length = 0;
        for(let bucket of this.buckets){
            if (bucket) length += 1;
            let next = bucket["next"];
            while(next != null){
                length += 1;
                next = next["next"];
            }
        }
        return length;
    }

    clear(){
        this.buckets = [];
    }
    
    keys(){
        let keys = [];
        for(let bucket of this.buckets){
            if(bucket) keys.push(Object.keys(bucket)[0]);
            let next = bucket["next"];
            while(next != null){
                keys.push(Object.keys(next)[0]);
                next = next["next"];
            }
        }
        return keys;
    }

    values(){
        let values = [];
        for(let bucket of this.buckets){
            if(bucket) keys.push(Object.values(bucket)[0]);
            let next = bucket["next"];
            while(next != null){
                values.push(Object.values(next)[0]);
                next = next["next"];
            }
        }
        return values;
    }

    entries(){
        let entries = [];
        for(let bucket of this.buckets){
            if(bucket) entries.push(Object.entries(bucket)[0]);
            let next = bucket["next"];
            while(next != null){
                entries.push(Object.entries(next)[0]);
                next = next["next"];
            }
        }
        return entries;
    }
    
}