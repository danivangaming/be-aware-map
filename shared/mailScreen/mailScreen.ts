const success = document.getElementById('success') as HTMLButtonElement
const error = document.getElementById('error') as HTMLButtonElement

success.addEventListener('click', () => {
    let i: number = <number>WA.state.loadVariable('quest_3_counter')
    switch (i) {
        case 0:
            WA.state.saveVariable('quest_3_1', true).catch(e => console.error(e))
            WA.state.saveVariable('quest_3_counter', i + 1).catch(e => console.error(e))
            break;
        case 1:
            WA.state.saveVariable('quest_3_2', true).catch(e => console.error(e))
            WA.state.saveVariable('quest_3_counter', i + 1).catch(e => console.error(e))
            break;
        case 2:
            WA.state.saveVariable('quest_3_3', true).catch(e => console.error(e))
            break;
    }

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
})

error.addEventListener('click', () => {
    let i: number = <number>WA.state.loadVariable('quest_3_counter')
    switch (i) {
        case 0:
            WA.state.saveVariable('quest_3_1', true).catch(e => console.error(e))
            WA.state.saveVariable('quest_3_counter', i + 1).catch(e => console.error(e))
            break;
        case 1:
            WA.state.saveVariable('quest_3_2', true).catch(e => console.error(e))
            WA.state.saveVariable('quest_3_counter', i + 1).catch(e => console.error(e))
            break;
        case 2:
            WA.state.saveVariable('quest_3_3', true).catch(e => console.error(e))
            break;
    }

    document.body.innerHTML = '<div class="error-desktop-background">\n' +
        '        <div class="error-symbol-layer">\n' +
        '            <div class="error-time"></div>\n' +
        '            <div class="error-power"></div>\n' +
        '        </div>\n' +
        '        <div class="error-box">\n' +
        '            <div class="error-watermelon"></div>\n' +
        '            <div class="error-trash_can"></div>\n' +
        '            <div class="error-data"></div>\n' +
        '            <div class="error-safari"></div>\n' +
        '            <div class="error-terminal"></div>\n' +
        '        </div>\n' +
        '    </div>'
})