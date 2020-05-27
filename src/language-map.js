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

exports.getPrettierParser = id => {
  if (['javascript', 'javascriptreact'].includes(id)) return 'babel'
  if (['typescript', 'typescriptreact'].includes(id)) return 'typescript'
  if (id === 'jsonc') return 'json'
  return id
}
