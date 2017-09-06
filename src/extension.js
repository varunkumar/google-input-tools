const vscode = require('vscode'); // eslint-disable-line

function activate(context) {
  const disposable = vscode.commands.registerCommand('extension.googleInputTools', () => {
    // Display a message box to the user
    vscode.window.showInformationMessage('Hello World!');
  });

  context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;
