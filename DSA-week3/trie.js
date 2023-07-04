class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let current = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
  
        if (!current.children[char]) {
          current.children[char] = new TrieNode();
        }
  
        current = current.children[char];
      }
  
      current.isEndOfWord = true;
    }
  
    search(word) {
      let current = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
  
        if (!current.children[char]) {
          return false;
        }
  
        current = current.children[char];
      }
  
      return current.isEndOfWord;
    }
  
    startsWith(prefix) {
      let current = this.root;
  
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
  
        if (!current.children[char]) {
          return false;
        }
  
        current = current.children[char];
      }
  
      return true;
    }
  }

const trie = new Trie();
trie.insert("aeroplane");
trie.insert("butterfly");

console.log(trie.search("butter")); 
console.log(trie.search("banana")); 
console.log(trie.search("butterfly")); 

console.log(trie.startsWith("aero")); 
console.log(trie.startsWith("ban")); 
console.log(trie.startsWith("but")); 
