class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
    // console.table(this.data);
  }
  get(key) {
    let result = this.data[this._hash(key)].find((item) => item[0] === key);
    return result;
  }
  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      //   console.log(key.charCodeAt(i) * i);
      //   console.log(hash);
    }
    return hash;
  }
}
const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("oranges", 1000);
console.log(myHashTable.get("oranges"));
