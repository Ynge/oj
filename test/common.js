const common = module.exports;
const path = require('path');
const chai = require('chai');

let rootDir = path.join(__dirname, '..');
common.dir = {
  src: rootDir + '/src'
};

common.assert = chai.assert;
common.expect = chai.expect;
common.should = chai.should();
