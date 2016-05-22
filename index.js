'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

/** @param {Object} browser */
module.exports = function (browser) {
    chai.should();
    chai.use(chaiAsPromised);
    chaiAsPromised.transferPromiseness = browser.transferPromiseness;
};
