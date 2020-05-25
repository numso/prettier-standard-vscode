exports.supportedLanguageIds = [
  'javascript',
  'javascriptreact',
  'json',
  'json5',
  'jsonc',
  'typescript',
  'typescriptreact',
  'css',
  'scss',
  'less',
  'graphql',
  'markdown',
  'mdx',
  'html',
  'vue',
  'yaml',
  'flow',
  'angular'
]

exports.getPrettierParser = languageId => {
  if (['javascript', 'javascriptreact'].includes(languageId)) return 'babel'
  if (['typescript', 'typescriptreact'].includes(languageId)) return 'babel'
  if (languageId === 'jsonc') return 'json'
  return languageId
}
