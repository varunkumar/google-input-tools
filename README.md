# [Google Input Tools](https://github.com/varunkumar/google-input-tools)

[![Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/varunkumar.google-input-tools)](https://marketplace.visualstudio.com/items?itemName=varunkumar.google-input-tools)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/varunkumar.google-input-tools)](https://marketplace.visualstudio.com/items?itemName=varunkumar.google-input-tools)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/varunkumar.google-input-tools)](https://marketplace.visualstudio.com/items?itemName=varunkumar.google-input-tools)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/varunkumar.google-input-tools)](https://marketplace.visualstudio.com/items?itemName=varunkumar.google-input-tools)[![Last Updated](https://img.shields.io/visual-studio-marketplace/last-updated/varunkumar.google-input-tools)](https://marketplace.visualstudio.com/items?itemName=varunkumar.google-input-tools) [![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](https://varunkumar.mit-license.org/)

An extension which adds support for Google Input Tools (Transliteration) in VS Code.

```
ext install google-input-tools
```

[Extension marketplace](https://marketplace.visualstudio.com/items?itemName=varunkumar.google-input-tools)

[Open VSX](https://open-vsx.org/extension/varunkumar/google-input-tools)

[![Marketplace Version](https://img.shields.io/open-vsx/v/varunkumar/google-input-tools)](https://open-vsx.org/extension/varunkumar/google-input-tools)
[![Installs](https://img.shields.io/open-vsx/dt/varunkumar/google-input-tools)](https://open-vsx.org/extension/varunkumar/google-input-tools)
[![Rating](https://img.shields.io/open-vsx/rating/varunkumar/google-input-tools)](https://open-vsx.org/extension/varunkumar/google-input-tools) [![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](https://varunkumar.mit-license.org/)

## Usage

Google Input Tools can be activated through the command 'Toggle Google Input Tools' or using the keybinding (defaults to shift+cmd+i). Once you activate and type any word, it will be transliterated to the chosen language. You can toggle it once you are done typing in your chosen language. Status bar will indicate if Google input tools is active or not.

![IDE](assets/images/demo.gif)

## Requirements

No external dependency

## Extension Settings

This extension contributes the following settings:

- `google.input.tools.language`: [ISO 639-1 Code](https://www.loc.gov/standards/iso639-2/php/code_list.php) of language to transliterate to. For example, 'ta' for Tamil (தமிழ்). List of [supported languages](https://www.google.com/inputtools/help/languages.html).
- `google.input.tools.suggestions`: Number of suggestions to show for the word. Defaults to 5.

## TouchBar support

This extension contributes `Toggle Google Input Tools` TouchBar menu item. You need to have MacBook Pro 2016+ for using this feature.

## Keybindings

You can also set custom shortcut in `keybindings.json` via `Code => Preferences => Keyboard Shortcuts`
For example:

```
[
    { "key": "shift+cmd+i", // set to your favorite shortcut
      "command": "extension.googleInputTools",
      "when": "editorTextFocus" }
]
```

## Known Issues

None

## License

The source code is available [here](https://github.com/varunkumar/google-input-tools) under [MIT license](https://varunkumar.mit-license.org/). Feel free to use any part of the code. Please send any bugs, feedback, complaints, patches to me at varunkumar[dot]n[at]gmail[dot]com.

-- [Varun](https://varunkumar.dev)
