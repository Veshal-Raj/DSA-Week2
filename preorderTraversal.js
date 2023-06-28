// Define the structure of a tree node
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Preorder traversal function
  function preorderTraversal(root) {
    if (root === null) {
      return; // Base case: empty tree
    }
  
    // Process the value of the current node
    console.log(root.value);
  
    // Recursively traverse the left subtree
    preorderTraversal(root.left);
  
    // Recursively traverse the right subtree
    preorderTraversal(root.right);
  }
  
  // Create a sample tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  // Perform preorder traversal on the tree
  preorderTraversal(root);
  