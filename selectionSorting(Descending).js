function descendingSelectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]<arr[j]){
                min=j
            }   
        }
        if(min!=i){
            let temp = arr[min]
            arr[min]=arr[i]
            arr[i]=temp
        }
    }
}
const arr=[4,5,1,2,7,8,3]
descendingSelectionSort(arr)
console.log(arr)