/*
 * 基本思想是自顶向下,将序列先粗略的分成两组,左边的全部比中间值小,右边全部比中间值大
 * 对左边序列和右边序列分别做相同分组,直到只有一个元素
 * 核心：中间值(定基准),分区算法
 * 相关:荷兰国旗问题,bftrp,topk
*/
module.exports = function(arr){
  function swap(arr,i,j){
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  function sort(arr,left,right){
    if(left >= right) return;
    let mid = partition(arr,left,right);
    sort(arr,left,mid-1);
    sort(arr,mid+1,right);
  }

  function partition(arr,left,right){
    let pivot = arr[left];
    let i = left + 1;//搜索的左界
    let j = right;//搜索的右界限
    while(i <= j){
      //找到比基准值小的最右位置
      while(j>left && arr[j] >= pivot){
        j--;
      }
      //找到比基准值大的最左位置
      while(arr[i] <= pivot){
        i++;
      }
      if(i>=j) break;
      swap(arr,i,j);
    }
    if(left < j) swap(arr,left,j);
    return j;
  }
  if(arr.length <2) return arr;
  sort(arr,0,arr.length-1);
  return arr;
}
