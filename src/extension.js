import {
  languages,
  ExtensionContext,
  DocumentSelector,
  window,
  workspace
} from 'vscode'

import EditProvider from './edit-provider'

const VALID_LANG = ['javascript', 'javascriptreact']

export function activate (context) {
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

export function deactivate () {}
