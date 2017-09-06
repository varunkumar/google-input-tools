# [Google Input Tools](https://github.com/varunkumar/google-input-tools)

An extension which adds support for Google Input Tools (Transliteration) in VS Code. 

```
ext install google-input-tools
```

## Usage

Google Input Tools can be activated through the command 'Toggle Google Input Tools' or using the keybinding (defaults to shift+cmd+i). Once you activate and type any word, it will be transliterated to the chosen language. You can toggle it once you are done typing in your chosen language. Staus bar will indicate if Google input tools is active or not. 

![IDE](assets/images/demo.gif) 

## Requirements

No external dependency

## Extension Settings

This extension contributes the following settings:

* `google.input.tools.language`: [ISO 639-1 Code](https://www.loc.gov/standards/iso639-2/php/code_list.php) of language to transliterate to. For example, 'ta' for Tamil (தமிழ்). List of [supported languages](https://www.google.com/inputtools/help/languages.html).
* `google.input.tools.suggestions`: Number of suggestions to show for the word. Defaults to 5.

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