let password2 = document.getElementById('link2') as HTMLElement
let input2 = document.getElementById('password2') as HTMLInputElement
let login2 = document.getElementById('login2') as HTMLElement

let button_container2 = document.getElementById('button-container2') as HTMLElement

let button12 = document.getElementById('button_12') as HTMLButtonElement
let button22 = document.getElementById('button_22') as HTMLButtonElement
let button32 = document.getElementById('button_32') as HTMLButtonElement


WA.state.onVariableChange('quest_1_2_visible').subscribe(() => {
    login2.hidden = false
    button_container2.hidden = false
})

button22.addEventListener('click', function () {
    input2.value = button22.innerText
})

button12.addEventListener('click', function () {
    input2.value = button12.innerText
})

button32.addEventListener('click', function () {
    input2.value = button32.innerText
})


password2.addEventListener('click', function () {
    execute()
})

input2.addEventListener('keydown', function (key) {
    if (key.code == 'Enter') {
        execute()
    }
})

// @ts-ignore
function execute() {

    let right_password = document.getElementById('right-password2') as HTMLElement

    let value: string = input2.value
    if (value === right_password.innerText) {

        WA.state.saveVariable('quest_1_2', true).catch(e => console.error(e))

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
            input2.style.color = 'black'
        }, 3000)
        input2.style.color = 'red'
    }
}

