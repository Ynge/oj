/*
 * 在冒泡排序的基础上减少交换次数,每一轮将最大的值交换到最后
*/
module.exports = function (arr){
    function swap(arr,i,j){
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    for(let i = 0;i< arr.length-1;i++){
        let cur_max_index = 0;
        for(let j = 0;j<=arr.length-i-1;j++){
            if(arr[j]>arr[cur_max_index]){
                cur_max_index = j;
            }
        }
        if(cur_max_index != arr.length -i -1) swap(arr,cur_max_index,arr.length - i -1);
    }
    return arr;
}
