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

function togglePressed(e){
    const el = document.querySelector(`[data-key="${e.code}"]`);
    
    if(el)
        if(el.classList.contains('pressed'))
            el.classList.remove('pressed');
        else
        el.classList.add('pressed');
}

element.addEventListener('keydown', togglePressed)
element.addEventListener('keyup', togglePressed)

function downloadTextfile(){
    if(!element.value)
        return

    const link = document.createElement('a')
    const blob = new Blob([element.value], {type: 'text/plain'})
    
    link.download = 'Demo-souvenir.txt'
    link.href = window.URL.createObjectURL(blob)
    
    link.click()
}