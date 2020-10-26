const vscode = require('vscode'); // eslint-disable-line
const fetch = require('node-fetch');
const Configuration = require('./Configuration');

const getSearchText = (lineText, position) => {
  const matches = lineText.substr(0, position.character).trim().match(/\w*$/);
  if (matches) {
    return matches[0];
  }
  return '';
};

/**
 *  Input auto-completion provider
 */
class InputAutoCompletionProvider {
  // eslint-disable-next-line class-methods-use-this
  provideCompletionItems(document, position) {
    const lineAt = document.lineAt(position);
    const lineText = document.getText(lineAt.range);

    const searchText = getSearchText(lineText, position);
    const language = Configuration.getLanguageCode();
    const suggestionsCount = Configuration.getSuggestionsCount();

    if (searchText !== '') {
      return new Promise((resolve, reject) => {
        fetch(
          `https://inputtools.google.com/request?text=${searchText}&itc=${language}-t-i0-und&num=${suggestionsCount}`
        )
          // eslint-disable-next-line arrow-parens
          .then((res) => res.json())
          .then((response) => {
            if (typeof response[0] === 'string' && response[0] !== 'SUCCESS') {
              vscode.window.showWarningMessage(
                Configuration.getErrrorMessage()
              );
              reject(new Error(response[0]));
            }
            const results = response[1][0][1];
            const items = [];
            let i = 0;
            for (i = 0; i < results.length; i += 1) {
              const result = results[i];
              const item = new vscode.CompletionItem(result);
              item.filterText = searchText;
              item.sortText = String(i); // eslint-disable-line no-plusplus
              items.push(item);
            }

            // Add the actual typed text to suggestions list
            const item = new vscode.CompletionItem(searchText);
            item.sortText = String(i);
            items.push(item);

            resolve(items);
          })
          .catch((err) => {
            vscode.window.showWarningMessage(Configuration.getErrrorMessage());
            reject(err);
          });
      });
    }
    return [];
  }
}

module.exports = InputAutoCompletionProvider;
