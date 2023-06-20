function insertionSort(a){
    for(let i=1;i<arr.length;i++){
        let temp=a[i]
        let j=i-1
        while(j>=0 && a[j]>temp){
            a[j+1]=a[j]
            j--
        }
        a[j+1]=temp
    }
    insertionSort2(arr2)
}
function insertionSort2(b){
    for(let i=1;i<arr2.length;i++){
        let temp=b[i]
        let j=i-1
        while(j>=0 && j<temp){
            b[j+1]=b[j]
            j--
        }
        b[j+1]=temp
    }
}
const arr=[1,9,2,8,3,7,4,0,5]
const arr2=[5,6,4,1,2,3,7]
insertionSort(arr)
console.log(arr)
console.log(arr2)