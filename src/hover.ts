import { CancellationToken, TextEditor, window, MarkdownString, Uri, TextDocument, Position, Hover, HoverProvider } from "vscode";
import * as vscode from 'vscode';
export class ApiHoverProvider implements HoverProvider {
  
  public async provideHover(document: TextDocument, position: Position, token: CancellationToken): Promise<Hover | undefined | null> {
    const editor: TextEditor | undefined = window.activeTextEditor;
    if (!editor) { return; }
    let quotationReg = /[\'\"]+([^\'\"]*)[\'\"]+/g;
    let apiPath = document.getText(document.getWordRangeAtPosition(editor.selection.active, quotationReg));
    let hover: vscode.Hover = new vscode.Hover(' ');
    hover.contents = [new MarkdownString("hello world!")];
    return hover;
  }

}