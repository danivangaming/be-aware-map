let password = document.getElementById('link') as HTMLElement
let input = document.getElementById('password') as HTMLInputElement
let login = document.getElementById('login') as HTMLElement

let button_container = document.getElementById('button-container') as HTMLElement

let button1 = document.getElementById('button_1') as HTMLButtonElement
let button2 = document.getElementById('button_2') as HTMLButtonElement
let button3 = document.getElementById('button_3') as HTMLButtonElement


WA.state.onVariableChange('quest_1_1_visible').subscribe(() => {
    login.hidden = false
    button_container.hidden = false
})

button2.addEventListener('click', function () {
    input.value = button2.innerText
})

button1.addEventListener('click', function () {
    input.value = button1.innerText
})

button3.addEventListener('click', function () {
    input.value = button3.innerText
})


password.addEventListener('click', function () {
    execute()
})

input.addEventListener('keydown', function (key) {
    if (key.code == 'Enter') {
        execute()
    }
})

// @ts-ignore
function execute() {

    let right_password = document.getElementById('right-password') as HTMLElement

    let value: string = input.value
    if (value === right_password.innerText) {

        WA.state.saveVariable('quest_1_1', true).catch(e => console.error(e))

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
            input.style.color = 'black'
        }, 3000)
        input.style.color = 'red'
    }
}

