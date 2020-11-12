const common = require('../../common');
const _ = require('lodash');
const expect = common.expect;
const sort = require(common.dir.src+'/base/sort/radix');
describe('heap',function(){
  let arr = Array.from({length:20},(item,index) => index + 1);
  let shuffle_arr = _.shuffle(arr);
  it('should sort ok',function(){
    expect(sort(shuffle_arr)).to.eql(arr);
  })
  it('[] should sort ok',function(){
    expect(sort([])).to.eql([]);
  })

  it('[1] should sort ok',function(){
    expect(sort([1])).to.eql([1]);
  })
  it('[1,2,3] should sort ok',function(){
    expect(sort([1,2,3])).to.eql([1,2,3]);
  })

  it('[3,2,1] should sort ok',function(){
    expect(sort([3,2,1])).to.eql([1,2,3]);
  })

})
