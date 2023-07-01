class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
function postorderTraversal(root){
    if(root===null) return
    postorderTraversal(root.left)
    postorderTraversal(root.right)
    console.log(root.value)
}
const temp = new TreeNode(1)
temp.left = new TreeNode(2)
temp.right = new TreeNode(3)
temp.left.left = new TreeNode(4)
temp.left.right = new TreeNode(5)
temp.right.left = new TreeNode(6)
temp.right.right = new TreeNode(7)

postorderTraversal(temp)
