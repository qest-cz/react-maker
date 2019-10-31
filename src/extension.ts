import * as vscode from 'vscode';

import createComponent from './createComponent';

const handleCreateComponent = async (args: any, styled?: boolean) => {
  const newComponentName = await vscode.window.showInputBox({
    prompt: `Component name`,
    ignoreFocusOut: false,
    valueSelection: [-1, -1]
  });

  if (!newComponentName) {
    return;
  }

  if (args) {
    const path = args.fsPath;
    const status = 'TBD for future changes.'
    createComponent(newComponentName, { dir: path, styled });
  } else {
    createComponent(newComponentName, { styled });
  }
};

export function activate(context: vscode.ExtensionContext) {
  let disposable = [
    vscode.commands.registerCommand("extension.create-component", args => {
      handleCreateComponent(args);
    }),
    vscode.commands.registerCommand("extension.create-styled-component", args => {
      handleCreateComponent(args, true);
    })
  ];

  context.subscriptions.push(...disposable);
}

export function deactivate() {}
