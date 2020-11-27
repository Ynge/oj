/*
 *计数排序
 *限制:
 *排序元素必须是整数,排序元素取值在一定范围
 *优化点:
 *1.空间优化，取最大值与最小值差值初始化计数空间
 *2.计数空间记录排序后索引位置而不是出现的次数
 *3.保持排序稳定性优化
*/
module.exports = function (arr){
    return sort4(arr);
}

/*
 * 基础排序
*/
function sort1(arr){
    if(arr.length === 0) return [];
    let result = [];
    let max_ele = Number.MIN_VALUE;
    for(let ele of arr){
        max_ele = Math.max(max_ele,ele);
    }
    let count = new Array(max_ele);
    for(let ele of arr){
        count[ele] = count[ele]?count[ele]++:1;
    }
    for(let i in count){
        if(count[i]){
            result.push(Number(i));
            count[i]--;
        }
    }
    return result;
}

/*
 * 空间优化
*/
function sort2(arr){
    if(arr.length === 0) return [];
    let result = [];
    let max_ele = Number.MIN_VALUE;
    let min_ele = Number.MAX_VALUE;

    for(let ele of arr){
        max_ele = Math.max(max_ele,ele);
        min_ele = Math.min(min_ele,ele);
    }
    let len = max_ele - min_ele;
    let count = new Array(len);
    for(let ele of arr){
        let offset = ele - min_ele;
        count[offset] = count[offset]?count[offset]++:1;
    }
    for(let i in count){
        if(count[i]){
            result.push(Number(i) + min_ele);
            count[i]--;
        }
    }
    return result;
}

/*
 *存储位置
 */
function sort3(arr){
    if(arr.length === 0) return [];
    let max_ele = Number.MIN_VALUE;
    let min_ele = Number.MAX_VALUE;

    for(let ele of arr){
        max_ele = Math.max(max_ele,ele);
        min_ele = Math.min(min_ele,ele);
    }
    let len = max_ele - min_ele;
    let count = new Array(len);
    for(let ele of arr){
        let offset = ele - min_ele;
        count[offset] = count[offset]?count[offset]++:1;
    }
    for(let i = 1;i<count.length;i++){
        count[i] += count[i-1];
    }
    let result = new Array(arr.length);
    for(let ele of arr){
        result[count[ele - min_ele] -1] = ele;
        count[ele - min_ele]--;
    }
    return result;
}

/*
 *保持排序稳定性
 */
function sort4(arr){
    if(arr.length === 0) return [];
    let max_ele = Number.MIN_VALUE;
    let min_ele = Number.MAX_VALUE;

    for(let ele of arr){
        max_ele = Math.max(max_ele,ele);
        min_ele = Math.min(min_ele,ele);
    }
    let len = max_ele - min_ele;
    let count = new Array(len);
    for(let ele of arr){
        let offset = ele - min_ele;
        count[offset] = count[offset]?count[offset]++:1;
    }
    for(let i = 1;i<count.length;i++){
        count[i] += count[i-1];
    }
    let result = new Array(arr.length);
    for(let i = arr.length -1 ;i>=0;i--){
        let ele = arr[i];
        result[count[ele - min_ele] -1] = ele;
        count[ele - min_ele]--;
    }
    return result;
}

