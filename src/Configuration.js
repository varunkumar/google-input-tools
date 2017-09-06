const vscode = require('vscode'); // eslint-disable-line

class Configuration {
  static getLanguageCode() {
    return vscode.workspace.getConfiguration().get('google.input.tools.language', 'ta');
  }

  static getSuggestionsCount() {
    return vscode.workspace.getConfiguration().get('google.input.tools.suggestions', 5);
  }

  static getErrrorMessage() {
    return 'Unable to transliterate your text';
  }
}

module.exports = Configuration;
