/*
 *是一种改进的插入排序,也称为缩小增量排序,冲破O(n^2)的第一批算法之一
 *基本思想:
 *希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；
 *随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止。
 *在选取增量的时候，是按一定的序列最终减小到1，常见的序列gap初始化为数组长度一半，gap = gap/2
 *优化过得增量序列Hibbard,最坏时间复杂度O(n^3/2)
*/
module.exports = function (arr){
    function swap(arr,i,j){
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    let gap = Math.floor(arr.length/2);
    while(gap > 0){
        //多次
        for(let i = 0;i < gap;i++){
            for(let j = i + gap;j < arr.length;j+=gap){
                for(let k = j + gap;k > i;k -= gap){
                    if(arr[k] < arr[k-gap]) swap(arr,k,k-gap);
                }
            }
        }
        gap = Math.floor(gap/2);
    }
    return arr;
}
