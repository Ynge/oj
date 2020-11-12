module.exports = function(arr){
  function merge(a,b){
    let i = 0,j=0;
    let c = [];
    while(i < a.length && j < b.length){
      if(a[i]<b[j]){
        c.push(a[i]);
        i++;
      }else{
        c.push(b[j]);
        j++;
      }
    }
    if(i < a.length){
      for(;i < a.length;i++) c.push(a[i]);
    }
    if(j < b.length){
      for(;j < b.length;j++) c.push(b[j]);
    }
    return c;
  }
  function sort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    //左
    let a = sort(arr.slice(0,mid));
    //右
    let b = sort(arr.slice(mid));
    //合
    let res = merge(a,b);
    return res;
  }
  return sort(arr)
}
