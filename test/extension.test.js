/* global suite, test */

//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
const assert = require('assert');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require('vscode'); // eslint-disable-line
const myExtension = require('../src/extension'); // eslint-disable-line

// Defines a Mocha test suite to group tests of similar kind together
suite('Extension Tests', () => {
  // Defines a Mocha unit test
  test('Something 1', () => {
    assert.equal(-1, [1, 2, 3].indexOf(5));
    assert.equal(-1, [1, 2, 3].indexOf(0));
  });
});