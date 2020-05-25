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

#### Using Command Palette

Open the command palette using <kbd>Cmd+Shift+P</kbd> on Mac or <kbd>Ctrl+Shift+P</kbd> on Windows and Linux. Then search for and select "Format Document".

You can format a part of your document by selecting the text you want to format, opening the command palette, and selecting "Format Selection".

#### Using Keyboard Shortcuts

The default vscode shortcut to format the current document is <kbd>Shift+Alt+F</kbd>.

#### Format On Save

Respects `editor.formatOnSave` in your vscode settings.

### Contribute

This is my first Visual Studio Extension so I probably made some terrible choices. Feel free to [open issues or PRs on the GitHub page][github page]!

### Credit

This plugin started with a fork of [esbenp's great plugin] with cues taken from [dtinth's atom plugin] to apply standard to it.

[prettier]: https://github.com/prettier/prettier
[standard]: https://github.com/feross/standard
[prettier-standard]: https://github.com/sheerun/prettier-standard
[esbenp's great plugin]: https://github.com/esbenp/prettier-vscode
[dtinth's atom plugin]: https://github.com/dtinth/prettier-standard-formatter
[github page]: https://github.com/numso/prettier-standard-vscode
