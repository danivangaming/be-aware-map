let password3 = document.getElementById('link3') as HTMLElement
let input3 = document.getElementById('password3') as HTMLInputElement
let login3 = document.getElementById('login3') as HTMLElement

let button_container3 = document.getElementById('button-container3') as HTMLElement

let button13 = document.getElementById('button_13') as HTMLButtonElement
let button23 = document.getElementById('button_23') as HTMLButtonElement
let button33 = document.getElementById('button_33') as HTMLButtonElement


WA.state.onVariableChange('quest_1_3_visible').subscribe(() => {
    login3.hidden = false
    button_container3.hidden = false
})

button23.addEventListener('click', function () {
    input3.value = button23.innerText
})

button13.addEventListener('click', function () {
    input3.value = button13.innerText
})

button33.addEventListener('click', function () {
    input3.value = button33.innerText
})


password3.addEventListener('click', function () {
    execute()
})

input3.addEventListener('keydown', function (key) {
    if (key.code == 'Enter') {
        execute()
    }
})

function execute() {

    let right_password = document.getElementById('right-password3') as HTMLElement

    let value: string = input3.value
    if (value === right_password.innerText) {

        WA.state.saveVariable('quest_1_3', true).catch(e => console.error(e))

        document.body.innerHTML = '<div class="success-desktop-background">\n' +
            '                       <div class="success-symbol-layer">\n' +
            '                           <div class="success-time"></div>\n' +
            '                           <div class="success-power"></div>\n' +
            '                       </div>\n' +
            '                   <div class="success-box">\n' +
            '                       <div class="success-watermelon"></div>\n' +
            '                       <div class="success-trash_can"></div>\n' +
            '                       <div class="success-data"></div>\n' +
            '                       <div class="success-safari"></div>\n' +
            '                       <div class="success-terminal"></div>\n' +
            '                   </div>\n' +
            '                   </div>'
    } else {
        setTimeout(() => {
            input3.style.color = 'black'
        }, 3000)
        input3.style.color = 'red'
    }
}

