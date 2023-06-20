function descendinginsertionSort(a){
    for(let i=1;i<arr.length;i++){
        let temp=a[i]
        let j=i-1
        while(j>=0 && a[j]<temp){
            a[j+1]=a[j]
            j--
        }
        a[j+1]=temp
    }
}
const arr=[1,9,2,0,3,8,4,6,5,7]
descendinginsertionSort(arr)
console.log(arr)