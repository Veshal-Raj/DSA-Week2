function bubbleSort(arr){
    let swapped
    do{
        swapped=false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true
            }
           
        }
    }while(swapped)
    bubbleSort2(arr2)
}
function bubbleSort2(arr2){
    let swapped
    do{
        swapped=false
        for(let i=0;i<arr2.length;i++){
            if(arr2[i]<arr2[i+1]){
                let temp=arr2[i]
                arr2[i]=arr2[i+1]
                arr2[i+1]=temp
                swapped=true
            }
        }
    }while(swapped)
}
const arr=[2,11,3,14,5,66]
const arr2=[5,8,3,2,0,9]
bubbleSort(arr)
console.log(arr)
console.log(arr2)