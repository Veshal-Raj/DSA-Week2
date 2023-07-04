function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // Left child
    let right = 2 * i + 2; // Right child
  
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    // If largest is not root
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap elements
      heapify(arr, n, largest); // Recursively heapify the affected sub-tree
    }
  }
  
  function heapSort(arr) {
     
    const n = arr.length;
  
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // Extract elements one by one from the heap
    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]]; // Move current root to the end
  
      heapify(arr, i, 0); // Heapify the reduced heap
    }
  
    return arr;
  }
  
  // Example usage:
  const arr = [100, 11, 13,22, 155, 6, 27];
  console.log("Original array:", arr);
  console.log("Sorted array:", heapSort(arr));
  