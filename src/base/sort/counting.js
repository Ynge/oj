/*
 *计数排序
 *限制:
 *排序元素必须是整数,排序元素取值在一定范围
 *优化点:
 *1.空间优化，取最大值与最小值差值初始化计数空间
 *2.技术空间记录排序后索引位置而不是出现的次数
 *3.保持排序稳定性优化
*/
module.exports = function (arr){
    function swap(arr,i,j){
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    return arr;
}
