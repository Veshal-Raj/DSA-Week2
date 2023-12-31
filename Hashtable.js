class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key);
        this.table[index] = value
    }

    get(key) {
        const index = this.hash(key);
        return this.table[index]
    }

    remove(key) {
        const index = this.hash(key)
        this.table[index] = undefined;
    }

    search(key) {
        const index = this.hash(key)
        if (this.table[index] !== 0) return this.table[index]
        else return "no value found"
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i + '=' + this.table[i]);
            }
        }
    }
}

const hash = new HashTable(10);
hash.set("Name","Rodriguez");
hash.set("age",35);
hash.set("place","Miami");  // collisiion condition
hash.set("origin","USA");
hash.display()  