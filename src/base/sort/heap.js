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

    function buildHeap(arr){

    }

    function adjustHeap(arr){

    }
    return arr;
}
