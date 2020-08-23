
function maxHeapify(arr,i) {
    let left = 2*i;
    let right = 2*i+1;
    let largest=i;
    if(left <= arr.heapSize && arr[left] > arr[largest]){
        largest = left;
    }else{
        largest = i;
    }
    if(right<=arr.heapSize && arr[right] > arr[largest]){
        largest = right;
    }
    if (largest !== i){
        let temp = arr[i];
        arr[i]= arr[largest];
        arr[largest]= temp;
        maxHeapify(arr,largest);
    }
}

function build_max_heap(arr) {
    arr.heapSize = arr.length-1;
    for (let i = Math.floor(arr.heapSize/2); i >=0 ; i--) {
        maxHeapify(arr,i);
    }
}

function heapsort(arr){
    build_max_heap(arr)
    for (let i = arr.length-1; i >= 1 ; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        arr.heapSize -= 1;
        maxHeapify(arr, 0);
    }
    delete arr.heapSize;
}

let input = [5,2,3,4,1];
console.log(input);
heapsort(input);
console.log(input);