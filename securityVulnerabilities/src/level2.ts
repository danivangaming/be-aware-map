import {elevator} from "../../shared/elevator/elevator.js"
import {TextFilesGerman} from "../../shared/TextFiles/TextFilesGerman.js";
import {TextFilesEnglish} from "../../shared/TextFiles/TextFilesEnglish.js";

WA.onInit().then(() => {
    questMatch()
    WA.state.onVariableChange('quest_2_2').subscribe(() => {
        questMatch('quest_2_2')
    })
    WA.state.onVariableChange('quest_2_3').subscribe(() => {
        questMatch('quest_2_3')
    })
})

let TextFiles: any = TextFilesEnglish;

WA.room.hideLayer("USB_Highlight");

let currentItem: any = undefined;
let currentTriggerMessage: any = undefined;
let pickedUp: boolean = false;
let usbQuest: boolean = false;
WA.room.setProperty("exit", "exitUrl", "Level2.json");
elevator.setCurrentLevel("Level2.json");
elevator.setMaxLevelAvailable(3);

WA.ui.openPopup("popUp_elevator", elevator.getCurrentLevel().toString(), []);

WA.room.onEnterLayer("interact_down").subscribe(() => {
    currentTriggerMessage = WA.ui.displayActionMessage({
        message: TextFiles.elevator_interact_message,
        callback: () => {
            WA.room.setProperty("exit", "exitUrl", elevator.setLevelDown());
            WA.ui.openPopup("popUp_elevator", elevator.getCurrentLevel().toString(), []);
        },
    });
});

WA.room.onLeaveLayer("interact_down").subscribe(() => closeTriggerMessage());

WA.room.onEnterLayer("interact_up").subscribe(() => {
    currentTriggerMessage = WA.ui.displayActionMessage({
        message: TextFiles.elevator_interact_message,
        callback: () => {
            WA.room.setProperty("exit", "exitUrl", elevator.setLevelUp());
            WA.ui.openPopup("popUp_elevator", elevator.getCurrentLevel().toString(), []);
        },
    });
});

WA.room.onLeaveLayer("interact_up").subscribe(() => closeTriggerMessage());


WA.room.onEnterLayer("USB_PickUp").subscribe(() => {
    if (!pickedUp) {
        currentTriggerMessage = WA.ui.displayActionMessage({
            message: TextFiles.usb_pickup,
            callback: () => {
                pickedUp = true;
                WA.room.hideLayer("USB");
                WA.room.hideLayer("USB_Highlight");
                // TODO: not possible with this engine version
                // WA.ui.setCharacterSprite("set", "accessory_usb", "accessory")
            },
        });
    }
});

WA.room.onLeaveLayer("USB_PickUp").subscribe(() => closeTriggerMessage());

WA.room.onEnterLayer("USB_Highlight_Zone").subscribe(() => {
    if (!pickedUp) {
        WA.room.showLayer("USB_Highlight");
    }
});

WA.room.onLeaveLayer("USB_Highlight_Zone").subscribe(() => {
    WA.room.hideLayer("USB_Highlight");
});


WA.room.onEnterLayer("USB_Quest_Right_Zone").subscribe(() => {
    if (pickedUp && !usbQuest) {
        currentTriggerMessage = WA.ui.displayActionMessage({
            message: TextFiles.f2_usb_quest_right_m,
            callback: () => {
                // TODO: not possible with this engine version
                // currentItem = WA.ui.openBubble(
                //     "USB_quest_right",
                //     TextFiles.f2_usb_quest_right
                // );
                WA.state.saveVariable('gave_to_boss', true).catch(e => console.error('something wrong'))
                questMatch("quest_2_1");
                // TODO: not possible with this engine version
                // WA.ui.setCharacterSprite("remove", "accessory_usb", "accessory")
                usbQuest = true;
            },
        });
    }
});

WA.room.onLeaveLayer("USB_Quest_Right_Zone").subscribe(() => {
    closeItem();
    closeTriggerMessage();
});

WA.room.onEnterLayer("USB_Quest_Wrong_Zone").subscribe(() => {
    if (pickedUp && !usbQuest) {
        currentTriggerMessage = WA.ui.displayActionMessage({
            message: TextFiles.f2_usb_quest_wrong_m,
            callback: () => {
                // TODO: not possible with this engine version
                // currentItem = WA.ui.openPopup("USB_quest_wrong", "", [], "virus");
                /*currentItem = WA.ui.openPopup("USB_quest_wrong", "virus", [])*/
                WA.state.saveVariable('inserted_into_pc', true).catch(e => console.error('something wrong'))
                pickedUp = false;
                WA.room.showLayer("USB");
                // TODO: not possible with this engine version
                // WA.ui.setCharacterSprite("remove", "accessory_usb", "accessory")
            },
        });
    }
});

WA.room.onLeaveLayer("USB_Quest_Wrong_Zone").subscribe(() => {
    closeItem();
    closeTriggerMessage();
});

function questMatch(quest: string = "") {
    switch (quest) {
        case "quest_2_1":
            WA.state.saveVariable("quest_2_1", true).catch((e) => console.error(e));
            break;
        case "quest_2_2":
            WA.state.saveVariable("quest_2_2", true).catch((e) => console.error(e));
            break;
        case "quest_2_3":
            WA.state.saveVariable("quest_2_3", true).catch((e) => console.error(e));
            break;
        default:
            break;
    }
    if (
        WA.state.loadVariable("quest_2_1") &&
        WA.state.loadVariable("quest_2_2") &&
        WA.state.loadVariable("quest_2_3")
    ) {
        if ((elevator.getHighestLevel() + 1) === (elevator.getCurrentLevel() + 1)) {
            elevator.increaseMaxLevelAvailable();
        }
    }
}

function closeItem() {
    if (currentItem !== undefined) {
        currentItem.close();
        currentItem = undefined;
    }
}

function closeTriggerMessage() {
    if (currentTriggerMessage !== undefined) {
        currentTriggerMessage.remove();
        currentTriggerMessage = undefined;
    }
}
