const vscode = require('vscode'); // eslint-disable-line
const Configuration = require('./Configuration');
const fetch = require('node-fetch');

const getSearchText = (lineText, position) => {
  const temp = lineText.substr(0, position.character).trim().split(' ');
  return temp[temp.length - 1];
};

/**
 *  Input auto-completion provider
 */
class InputAutoCompletionProvider {
  provideCompletionItems(document, position) { // eslint-disable-line
    const lineAt = document.lineAt(position);
    const lineText = document.getText(lineAt.range);

    const searchText = getSearchText(lineText, position);
    const language = Configuration.getLanguageCode();
    const suggestionsCount = Configuration.getSuggestionsCount();

    if (searchText !== '') {
      return new Promise((resolve, reject) => {
        fetch(`https://inputtools.google.com/request?text=${searchText}&itc=${language}-t-i0-und&num=${suggestionsCount}`)
          .then(res => res.json()).then((response) => {
            if (typeof response[0] === 'string' && response[0] !== 'SUCCESS') {
              vscode.window.showWarningMessage(Configuration.getErrrorMessage());
              reject(new Error(response[0]));
            }
            const results = response[1][0][1];
            const items = [];

            for (const result of results) { // eslint-disable-line no-restricted-syntax
              const item = new vscode.CompletionItem(result);
              item.filterText = searchText;
              items.push(item);
            }

            // Add the actual typed text to suggestions list
            items.push(new vscode.CompletionItem(searchText));

            resolve(items);
          }).catch((err) => {
            vscode.window.showWarningMessage(Configuration.getErrrorMessage());
            reject(err);
          });
      });
    }
    return [];
  }
}

module.exports = InputAutoCompletionProvider;
