const { languages } = require('vscode')

const EditProvider = require('./edit-provider')
const { supportedLanguageIds } = require('./language-map')

const langs = [
  // For formatting VSCode Settings
  { scheme: 'vscode-userdata', language: 'jsonc' },
  ...supportedLanguageIds.map(language => ({ scheme: 'file', language })),
  ...supportedLanguageIds.map(language => ({ scheme: 'untitled', language }))
]

exports.activate = function (context) {
  const editProvider = new EditProvider()
  context.subscriptions.push(
    languages.registerDocumentRangeFormattingEditProvider(langs, editProvider)
  )
  context.subscriptions.push(
    languages.registerDocumentFormattingEditProvider(langs, editProvider)
  )
}

exports.deactivate = function () {}
