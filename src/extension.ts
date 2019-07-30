import * as vscode from 'vscode';

import createComponent from './createComponent';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("extension.create-component", async args => {
    const componentName = await vscode.window.showInputBox({
      prompt: `Component name`,
      ignoreFocusOut: true,
      valueSelection: [-1, -1]
    });

    if (!componentName) {
      return;
    }

    if (args) {
      const path = args.fsPath;
      createComponent(componentName, path);
    } else {
      createComponent(componentName);
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
