/*
 *每一轮从头开始两两比较，将较大的项放在较小项的右边，
 *这样每轮下来保证该轮最大的数在最右边。
 *优化:可以标记每轮比过后是否有交换,没有交换可以提前结束排序
*/
module.exports = function (arr){
    function swap(arr,i,j){
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    for(let i = 0;i< arr.length-1;i++){
        for(let j = 0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1);
            }
        }
    }
    return arr;
}
