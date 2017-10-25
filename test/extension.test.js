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

suite('Configuration', () => {
  const Configuration = require('../src/Configuration'); // eslint-disable-line
  test('language code', () => {
    assert.notEqual(Configuration.getLanguageCode(), null);
    assert.notEqual(Configuration.getLanguageCode(), undefined);
  });

  test('suggestions count', () => {
    assert.notEqual(Configuration.getSuggestionsCount(), null);
    assert.notEqual(Configuration.getSuggestionsCount(), undefined);
  });
});
