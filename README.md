# Prettier formatter for Visual Studio Code

VS Code package to format your Javascript using [Prettier] and [Standard]. It uses [prettier-standard] under the hood. You can customize output by adding a `.prettierrc` file to your project.

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

### Contribute

This is my first Visual Studio Extension so I probably made some terrible choices. Feel free to [open issues or PRs on the GitHub page][github page]!

### Credit

This plugin started with a fork of [esbenp's great plugin] with cues taken from [dtinth's atom plugin] to apply standard to it.

[Prettier]: https://github.com/prettier/prettier
[Standard]: https://github.com/feross/standard
[prettier-standard]: https://github.com/sheerun/prettier-standard
[esbenp's great plugin]: https://github.com/esbenp/prettier-vscode
[dtinth's atom plugin]: https://github.com/dtinth/prettier-standard-formatter
[github page]: https://github.com/numso/prettier-standard-vscode
