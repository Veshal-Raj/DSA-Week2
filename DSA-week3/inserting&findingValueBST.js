class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BTS {
  constructor() {
    this.root = null;
  }

  Insert(val) {
    const newNode = new TreeNode(val);
    if (this.root === null) this.root = newNode;
    else this.InsertNode(this.root, newNode);
  }

  InsertNode(node, newNode) {
    if (newNode.val < node.val) {
      if (node.left === null) node.left = newNode;
      else this.InsertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.InsertNode(node.right, newNode);
    }
  }

  search(val) {
    return this.searchNode(this.root, val);
  }

  searchNode(node, val) {
    if (node === null || node.val === val) return node;
    if (val < node.val) return this.searchNode(node.left, val);
    else return this.searchNode(node.right, val);
  }
   findClosestValue(val){
    if(this.search(val))return val
    let prev = val-1
    let post = val+1
    while(true){
      if(this.search(prev)) return prev
      else prev--
      if(this.search(post))return post
      else post++
    }
   }

  delete(val) {
    this.root = this.deleteNode(this.root, val);
  }

  deleteNode(node, val) {
    if (node === null) return null;
    if (val < node.val) node.left = this.deleteNode(node.left, val);
    else if (val > node.val) node.right = this.deleteNode(node.right, val);
    else {
      if (node.left === null && node.right === null) return null;
      else if (node.left === null) return node.right;
      else if (node.right === null) return node.left;
      else {
        const minValue = this.findMinValue(node.right);
        node.val = minValue;
        node.right = this.deleteNode(node.right, minValue);
      }
      return node;
    }
  }

  findMinValue(node) {
    let curr = node;
    while (curr.left) {
      curr = curr.left;
    }
    return curr.val;
  }
  min(root){
    if(!root.left) return root.val
    else return this.min(root.left)
  }

  max(root){
    if(!root.right) return root.val
    else return this.max(root.right)
  }

  print() {
    this.printnode(this.root);
  }

  printnode(node) {
    if (node === null) return;
    console.log(node.val);
    if (node.left) this.printnode(node.left);
    if (node.right) this.printnode(node.right);
  }
}


const bts = new BTS();
bts.Insert(10);
bts.Insert(2);
bts.Insert(33);
bts.Insert(4);
bts.Insert(55);
bts.Insert(6);
bts.print();
console.log(bts.findClosestValue(30))
console.log("max: "+bts.min(bts.root))
console.log("min: "+bts.max(bts.root))