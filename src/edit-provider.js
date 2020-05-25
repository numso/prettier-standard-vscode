const prettierStandard = require('prettier-standard')
const { workspace, window, Range, TextEdit } = require('vscode')

const { getPrettierParser } = require('./language-map')

function fullDocumentRange (document) {
  const lastLineId = document.lineCount - 1
  return new Range(0, 0, lastLineId, document.lineAt(lastLineId).text.length)
}

module.exports = class PrettierEditProvider {
  constructor () {
    this.prettier = prettierStandard
    this.loadPackagedVersion()
  }

  async loadPackagedVersion () {
    const PATH = 'node_modules/prettier-standard/package.json'
    const [uri] = await workspace.findFiles(PATH)
    if (!uri) return
    const prettier = require(uri.fsPath.replace(/\/package\.json$/, ''))
    if (prettier && prettier.resolveConfig && prettier.resolveConfig.sync) {
      this.prettier = prettier
    }
  }

  getConfigPath (document) {
    if (!document.isUntitled) return document.fileName
    const { uri } = (workspace.workspaceFolders || [])[0] || {}
    if (uri && uri.scheme === 'file') return uri.fsPath
  }

  getConfig (document) {
    const opts = { editorconfig: true, useCache: false }
    const path = this.getConfigPath(document)
    const config = (path && this.prettier.resolveConfig.sync(path, opts)) || {}
    config.filepath = '(stdin)'
    config.parser = getPrettierParser(document.languageId)
    return config
  }

  format (document, range) {
    try {
      const text = range ? document.getText(range) : document.getText()
      const newText = this.prettier.format(text, this.getConfig(document))
      return [TextEdit.replace(range || fullDocumentRange(document), newText)]
    } catch (e) {
      console.error(e)
      window.showErrorMessage(e.message)
      return []
    }
  }

  provideDocumentRangeFormattingEdits (document, range) {
    return this.format(document, range)
  }

  provideDocumentFormattingEdits (document) {
    return this.format(document)
  }
}
