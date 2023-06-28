    class TreeNode{
        constructor(val){
            this.val=val
            this.left=null
            this.right=null
        }
    }
    class BTS{
        constructor(){
            this.root=null
        }
        Insert(val){
            const newNode = new TreeNode(val)
            if(this.root===null)this.root=newNode
            else this.InsertNode(this.root,newNode)
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
          
        print(){
            this.printnode(this.root)
        }
        
        printnode(node) {
            if (node === null) return;
            this.printnode(node.left);
            console.log(node.val);
            this.printnode(node.right);
          }
          
    }
    const bts = new BTS()
    bts.Insert(1)
    bts.Insert(2)
    bts.Insert(3)
    bts.print()