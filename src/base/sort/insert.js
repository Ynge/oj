/*
 * 从集合中取一个元素初始化一个有序的序列
 * 每次从需要排序的集合中取一个元素从后向前比较,找到第一个比自己小的位置,拆入到这个位置后面
 */
module.exports = function (arr){
    function swap(arr,i,j){
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    for(let i = 1;i<= arr.length-1;i++){
        for(let j = i ;j >= 0 ;j--){
            if(arr[j] < arr[j-1]) swap(arr,j,j-1)
        }
    }
    return arr;
}
