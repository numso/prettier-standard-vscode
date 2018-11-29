# Prettier formatter for Visual Studio Code

VS Code package to format your Javascript using [Prettier] and [Standard].

### Installation

Install through VS Code extensions. Search for `Prettier-Standard - JavaScript formatter`

[Visual Studio Code Market Place: Prettier-Standard - JavaScript formatter](https://marketplace.visualstudio.com/items?itemName=numso.prettier-standard-vscode)

Can also be installed using

```
ext install prettier-standard-vscode
```

### Usage

#### Using Command Palette (CMD + Shift + P)

```
1. CMD + Shift + P -> Format Document
OR
1. Select the text you want to Pretty-Standardify
2. CMD + Shift + P -> Format Selection
```

#### Format On Save

Respects `editor.formatOnSave` setting.

### Settings

#### printWidth (default: 80)

Fit code within this line limit

#### trailingComma (default: 'none')
Controls the printing of trailing commas wherever possible. Valid options:
 - "none" - No trailing commas
 - "es5"  - Trailing commas where valid in ES5 (objects, arrays, etc)
 - "all"  - Trailing commas wherever possible (function arguments)

#### bracketSpacing (default: true)
Controls the printing of spaces inside object literals

#### jsxBracketSameLine (default: false)
If true, puts the `>` of a multi-line jsx element at the end of the last line instead of being alone on the next line

#### parser (default: 'babylon')
Which parser to use. Valid options are 'flow' and 'babylon'

### Contribute

This is my first Visual Studio Extension so I probably made some terrible choices. Feel free to [open issues or PRs on the GitHub page][github page]!

### Credit

This plugin started with a fork of [esbenp's great plugin] with cues taken from [dtinth's atom plugin] to apply standard to it.

[Prettier]: https://github.com/prettier/prettier
[Standard]: https://github.com/feross/standard
[esbenp's great plugin]: https://github.com/esbenp/prettier-vscode
[dtinth's atom plugin]: https://github.com/dtinth/prettier-standard-formatter
[github page]: https://github.com/numso/prettier-standard-vscode
