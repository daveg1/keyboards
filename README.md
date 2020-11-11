# Keyboards.js
A virtual keyboard to let you type with keyboard layouts of other languages.

## Layouts

| Locale  | code |
|---------|------|
| Belarusian |  by  |
| English |  en  |
| German  |  de  |
| Polish  |  pl  |
| Russian |  ru  |
| Ukranian  |  ua  |

## Usage
Simply add the file into your webpage, then create a new Keyboard instance like so:
```html
<script src="keyboard.js"></script>
<script>

const element = document.getElementById('input') // Either an <input> or <textarea>
const kb = new Keyboard(element, 'en') // The second parameter is the layout (a.k.a. locale), 'en' by default (English)

// You can change the locale on the fly:
kb.locale = 'ru' // Russian

// You can also update the layout to your liking
kb.updateLayout(
    new Map([
        // Single locale
        ['KeyA', {
            'ru': [8212,8211]
        }],

        // Many locales at once
        ['KeyG', {
            'en': [3920,2932],
            'pl': [9999,99999],
            'ru': [23487,27138],
            'ua': [8721,966]
        }]
    ])
)
</script>
```

## Todo
- Add number row for the visual keyboard (demo)
- Update updateLayout to let you add new locales

You can view the demo <a href="./docs">here</a>.