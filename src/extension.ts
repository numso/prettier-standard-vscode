import {
  languages,
  ExtensionContext,
  DocumentSelector,
  window,
  workspace
} from 'vscode'

import EditProvider from './EditProvider'

const VALID_LANG: DocumentSelector = ['javascript', 'javascriptreact']

export function activate(context: ExtensionContext) {
  const editProvider = new EditProvider()
  context.subscriptions.push(
    languages.registerDocumentRangeFormattingEditProvider(
      VALID_LANG,
      editProvider
    )
  )
  context.subscriptions.push(
    languages.registerDocumentFormattingEditProvider(VALID_LANG, editProvider)
  )
}

export function deactivate() {}
