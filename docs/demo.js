const element = document.getElementById('kb-input')
const kb = new Keyboard(element, 'ru')

const keys = document.querySelectorAll('.key')

for(const key of keys){
    key.onmouseup = function(){
        if(this.dataset.key){
            kb.typeChar(kb.getChar(this.dataset.key))
        }
    }
}

document.getElementById('locale-select').addEventListener('change', function(){
    kb.locale = this.value;

    for(const key of keys){
        if(!key.firstElementChild)
            continue
        
        key.firstElementChild.innerText = kb.getChar(key.dataset.key)
    }

})

element.addEventListener('keydown', (e) => {
    if(e.ctrlKey || e.altKey)
        return
    
    const el = document.querySelector(`[data-key="${e.code}"]`)

    if(el)
        el.classList.add('pressed')
})

element.addEventListener('keyup', (e) => {
    const el = document.querySelector(`[data-key="${e.code}"]`)

    if(el)
        el.classList.remove('pressed')
})

function downloadTextfile(){
    if(!element.value)
        return

    const link = document.createElement('a')
    const blob = new Blob([element.value], {type: 'text/plain'})
    
    link.download = 'Demo-souvenir.txt'
    link.href = window.URL.createObjectURL(blob)
    
    link.click()
}