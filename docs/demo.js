const element = document.getElementById('kb-input')
const keys = document.querySelectorAll('.key')
const select = document.getElementById('locale-select')
const outputElement = document.getElementById('output')
let fading = false;

const kb = new Keyboard(element, 'ru')

//
// Functions
//
function output(message){
    if(fading)
        return
    else
        fading = true

    const p = document.createElement('p')
    p.innerHTML = message

    outputElement.appendChild(p)

    p.className = 'fadeIn'

    setTimeout(() => p.className = 'fadeOut', 500)
    setTimeout(() => {
        p.remove()
        fading = false
    }, 3500)
}

function refreshVisualKeyboard(){
    kb.locale = select.value

    for(const key of keys){
        if(!key.firstElementChild)
            continue
        
        key.firstElementChild.innerText = kb.getChar(key.dataset.key)
    }
}

function downloadTextfile(){
    if(!element.value)
        return

    const link = document.createElement('a')
    const blob = new Blob([element.value], {type: 'text/plain'})
    
    link.download = 'Demo-souvenir.txt'
    link.href = window.URL.createObjectURL(blob)
    
    link.click()
    output("Enjoy your souvenir!")
}

function updateKB(){
    kb.updateLayout(
        new Map([
            // Single locale
            ['KeyA', {
                'ru': [8212,8211]
            }],

            // Or many locales at once
            ['KeyG', {
                'en': [3920,2932],
                'pl': [9999,99999],
                'ru': [23487,27138],
                'ua': [8721,966]
            }]
        ])
    )
    refreshVisualKeyboard()
    output("The layouts have been updated.")
}

// 
// Event Handlers
// 
select.addEventListener('change', refreshVisualKeyboard)

// Let people click keys on the visual keyboard.
for(const key of keys){
    key.onmouseup = function(){
        if(this.dataset.key){
            kb.typeChar(kb.getChar(this.dataset.key))
        }
    }
}

// Press the relevant key on the visual keyboard when typing with the actual keyboard
element.addEventListener('keydown', (e) => {
    if(e.ctrlKey || e.altKey)
        return
    
    const el = document.querySelector(`[data-key="${e.code}"]`)

    if(el)
        el.classList.add('pressed')
})

// ... then release it
element.addEventListener('keyup', (e) => {
    const el = document.querySelector(`[data-key="${e.code}"]`)

    if(el)
        el.classList.remove('pressed')
})