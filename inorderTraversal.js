class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
function inorderTraversal(root){
    if(root===null)return;
    inorderTraversal(root.left)
    console.log(root.value)
    inorderTraversal(root.right)

}
const temp = new TreeNode(1)
temp.left = new TreeNode(2)
temp.right = new TreeNode(3)
temp.left.left = new TreeNode(4)
temp.left.right = new TreeNode(5)
temp.right.left = new TreeNode(6)
temp.right.right = new TreeNode(7)
inorderTraversal(temp)