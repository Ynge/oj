/*
 *堆排序
 *1.构造初始堆
 *2.将堆顶元素与末尾元素交换,使得末尾元素最大或最小,然后将排除已交换到的队尾的元素重新调整堆,反复进行(下沉)
*/
module.exports = function (arr){
    function swap(arr,i,j){
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    //初始化堆,可以利用adjustHeap方法
    //从下到上,从左到右数第一个非叶子点开始,依次往堆顶添加一个元素进行调整
    //第一个非叶子节点对应数组的[length/2]-1(由堆的性质推出2k+1 = length or 2k+2 = length;k=i+1;i为第一个非叶子节点数组索引)
    function buildHeap(arr){
        for(let i = Math.floor(arr.length/2)-1;i>=0;i--){
            adjustHeap(arr,i,arr.length);
        }
    }

    //调整堆,下沉
    function adjustHeap(arr,i,length){
        let max_idx = i;
        if(2*i+1 < length && arr[2*i+1] > arr[max_idx]){
            max_idx = 2*i+1;
        }
        if(2*i+2 < length && arr[2*i+2] > arr[max_idx]){
            max_idx = 2*i+2;
        }
        if(max_idx !== i){
            swap(arr,i,max_idx)
            adjustHeap(arr,max_idx,length)
        }
    }

    buildHeap(arr);
    for(let i = arr.length -1 ;i > 0;i--){
        console.log(arr);
        swap(arr,0,i);
        adjustHeap(arr,0,i);
    }
    return arr;
}
