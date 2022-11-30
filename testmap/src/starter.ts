/// <reference path="../../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
//TEST3



//let clockPopup;
import {Popup} from "@workadventure/iframe-api-typings/Api/iframe/Ui/Popup";

let testPopup : Popup;
let clockPopup : Popup
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();
WA.chat.sendChatMessage("Hello World", "Mr Robot")
WA.chat.sendChatMessage("A magnificent Hello World", "Mr Robot with a crown 25")

WA.room.onEnterZone('clock', () => {
    clockPopup =  WA.ui.openPopup("clockPopup","It's " + time,[]);
})

WA.room.onLeaveZone('clock', () => {
    clockPopup.close()
})


WA.onInit().then(() => {
    const test = WA.room.onEnterLayer("pythonFactorialProblem").subscribe(() => {
        //WA.chat.sendChatMessage("Klappt", "Mr Robot with a crown 2")
        testPopup =  WA.ui.openPopup("Test2","testText",[]);
    })

    WA.room.onLeaveLayer("pythonFactorialProblem").subscribe(() => {
        testPopup.close()
    });


    const elevatorSubscription= WA.room.onEnterLayer("elevator").subscribe(() => {
        WA.nav.goToRoom("../secureCoding/secure_coding_map.json")
    })

})
