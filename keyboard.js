/**
 * A virtual keyboard that lets you type with other language scripts.
 */
class Keyboard {

    layouts = new Map([
        // Allow keyboards to inherit from one another.
        // Avoids repitition.
        ['Defaults',
            {
                'de': 'en', // Meaning de inherits from en
                // another could be fi: de, Finnish inheriting from German
                'pl': 'en',
                'by': 'ru',
                'ua': 'ru',
            }
        ],

        // 1. Number Row
        ["Backquote", {
            "en": [96,126],
            "ru": [1105,1025]
        }],
        ["Digit1", {
            "en": [49,33],
            "ru": [49,33]
        }],
        ["Digit2", {
            "en": [50,64],
            "ru": [50,34]
        }],
        ["Digit3", {
            "en": [51,35],
            "ru": [51,8470]
        }],
        ["Digit4", {
            "en": [52,36],
            "ru": [52,59]
        }],
        ["Digit5", {
            "en": [53,37],
            "ru": [53,37]
        }],
        ["Digit6", {
            "en": [54,94],
            "ru": [54,58]
        }],
        ["Digit7", {
            "en": [55,38],
            "ru": [55,63]
        }],
        ["Digit8", {
            "en": [56,42],
            "ru": [56,42]
        }],
        ["Digit9", {
            "en": [57,40],
            "ru": [57,40]
        }],
        ["Digit0", {
            "en": [48,41],
            "ru": [48,41]
        }],
        ["Minus", {
            "en": [45,95],
            "de": [45,223],
            "ru": [45,95]
        }],
        ["Equal", {
            "en": [61,43],
            "ru": [61,43]
        }],
        // 1.1 Number row end

        // 2. Top (QUERTY) row
        ["KeyQ", {
            "en": [113,81],
            "ru": [1081,1049]
        }],
        ["KeyW", {
            "en": [119,87],
            "ru": [1094,1062]
        }],
        ["KeyE", {
            "en": [101,69],
            "ru": [1091,1059]
        }],
        ["KeyR", {
            "en": [114,82],
            "ru": [1082,1050]
        }],
        ["KeyT", {
            "en": [116,84],
            "ru": [1077,1045]
        }],
        ["KeyY", {
            "en": [121,89],
            "de": [122,90],
            "ru": [1085,1053]
        }],
        ["KeyU", {
            "en": [117,85],
            "ru": [1075,1043]
        }],
        ["KeyI", {
            "en": [105,73],
            "ru": [1096,1064]
        }],
        ["KeyO", {
            "en": [111,79],
            "ru": [1097,1065],
            "by": [1118,1038]
        }],
        ["KeyP", {
            "en": [112,80],
            "ru": [1079,1047]
        }],
        ["BracketLeft", {
            "en": [91,123],
            "de": [252, 220],
            "pl": [380,324],
            "ru": [1093,1061]
        }],
        ["BracketRight", {
            "en": [93,125],
            "pl": [347,263],
            "ru": [1098,1066],
            "ua": [1111,1031]
        }],
        // 2.1 Top (QWERTY) row end

        // 3. Home row
        ["KeyA", {
            "en": [97,65],
            "ru": [1092,1060]
        }],
        ["KeyS", {
            "en": [115,83],
            "ru": [1099,1067],
            "ua": [1110,1030]
        }],
        ["KeyD", {
            "en": [100,68],
            "ru": [1074,1042]
        }],
        ["KeyF", {
            "en": [102,70],
            "ru": [1072,1040]
        }],
        ["KeyG", {
            "en": [103,71],
            "ru": [1087,1055]
        }],
        ["KeyH", {
            "en": [104,72],
            "ru": [1088,1056]
        }],
        ["KeyJ", {
            "en": [106,74],
            "ru": [1086,1054]
        }],
        ["KeyK", {
            "en": [107,75],
            "ru": [1083,1051]
        }],
        ["KeyL", {
            "en": [108,76],
            "ru": [1076,1044]
        }],
        ["Semicolon", {
            "en": [59,58],
            "de": [246,214],
            "pl": [322,321],
            "ru": [1078,1046]
        }],
        ["Quote", {
            "en": [39,34],
            "de": [228,196],
            "pl": [261,260],
            "ru": [1101,1069],
            "ua": [1108,1028]
        }],
        // 3.1 Home row end

        // 4. Bottom row
        ["Backslash", {
            "en": [92,124],
            "ru": [92,47],
            "ua": [1169,1168]
        }],
        ["IntlBackslash", {
            "en": [92,124],
            "ru": [92,47],
            "ua": [1169,1168]
        }],
        ["KeyZ", {
            "en": [122,90],
            "de": [121,89],
            "ru": [1103,1071]
        }],
        ["KeyX", {
            "en": [120,88],
            "ru": [1095,1063]
        }],
        ["KeyC", {
            "en": [99,67],
            "ru": [1089,1057]
        }],
        ["KeyV", {
            "en": [118,86],
            "ru": [1084,1052]
        }],
        ["KeyB", {
            "en": [98,66],
            "ru": [1080,1048]
        }],
        ["KeyN", {
            "en": [110,78],
            "ru": [1090,1058]
        }],
        ["KeyM", {
            "en": [109,77],
            "ru": [1100,1068]
        }],
        ["Comma", {
            "en": [44,60],
            "pl": [243,378],
            "ru": [1073,1041]
        }],
        ["Period", {
            "en": [46,62],
            "pl": [281,280],
            "ru": [1102,1070]
        }],
        ["Slash", {
            "en": [47,63],
            "ru": [46,44]
        }]
        // 4.1 Bottom row end
    ])

    /**
     * @param {DOMElement} element The element to attach events to
     * @param {String} locale The locale to use when instantiated
     */
    constructor(element, locale){
        if(!element || element.nodeType !== Node.ELEMENT_NODE){
            throw new Error("[Keyboard.js] Error: first argument is not an element")
        } else if(element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA'){
            throw new Error('[Keyboard.js] Error: element is not a valid input box')
        }

        this.element = element
        this.locale = locale || 'en'

        this.#addEvents(this.element)
    }

    /**
     * Gets a character from the layouts.
     * @param {String} code The name of the key. E.g., KeyA
     * @param {Number} shift Whether the shift key was pressed
     */
    getChar(code, shift){
        shift = shift || 0

        const key = this.layouts.get(code)

        if(!key)
            return false

        let charCode = key[this.locale]

        if(!key[this.locale]){
            const locale = this.layouts.get('Defaults')[this.locale]
            charCode = key[locale]
        }

        return String.fromCharCode(charCode[shift])
    }

    /**
     * Adds the necessary events to the given element.
     * @param {DOMElement} element 
     */
    #addEvents(element){
        element.addEventListener('keydown', e => {
            if(e.ctrlKey || e.altKey)
                return
            
            const char = this.getChar(e.code, e.shiftKey >>> 0)

            if(char){
                e.preventDefault()
                this.typeChar(char)
            }
        })
    }

    /**
     * Simulates you typing the given character.
     * @param {String} char 
     */
    typeChar(char){
        const start = this.element.selectionStart
        const end = this.element.selectionEnd

        this.element.value = this.element.value.slice(0,start) + char + this.element.value.slice(end)
        
        this.element.selectionStart = start+1
        this.element.selectionEnd   = start+1
        this.element.focus()
    }

    /**
     * 
     * @param {Map<String, Object>} layoutMap 
     */
    updateLayout(layoutMap){
        for(const key of layoutMap.entries()){
            // Key[0] = KeyA, KeyZ, Comma, etc.
            const entry = this.layouts.get(key[0])

            if(entry)
                // Go through each locale for that key.
                for(const locale in key[1])
                    entry[locale] = key[1][locale]
        }
    }
}