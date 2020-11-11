# Keyboards.js
A virtual keyboard to let you type with keyboard layouts of other languages.

## Layouts

| Locale  | code |
|---------|------|
| English |  en  |
| German  |  de  |
| Russian |  ru  |

## Usage
Simply add the file into your webpage, then create a new Keyboard instance like so:
```html
<script src="keyboard.js"></script>
<script>

const element = document.getElementById('input') // Can either be an <input> or a <textarea>
const kb = new Keyboard(element, 'en') // The second parameter is the layout (a.k.a. locale), 'en' by default (English)

// You can change the locale on the fly:
kb.locale = 'ru' // Russian

</script>
```

You can view the demo <a href="./docs">here</a>.