import {elevator} from "../../shared/elevator/elevator.js"
import {TextFilesGerman} from "../../shared/TextFiles/TextFilesGerman.js";
import {TextFilesEnglish} from "../../shared/TextFiles/TextFilesEnglish.js";

let TextFiles: any = TextFilesEnglish;
let currentItem: any = undefined;
let currentTriggerMessage: any = undefined;

let quest_1: boolean = false;
let quest_2: boolean = false;
let quest_3: boolean = false;

WA.onInit().then(() => {
    questMatch()
    WA.state.onVariableChange('quest_1_1').subscribe(() => {
        questMatch('quest_1_1')
    })
    WA.state.onVariableChange('quest_1_2').subscribe(() => {
        questMatch('quest_1_2')
    })
    WA.state.onVariableChange('quest_1_3').subscribe(() => {
        questMatch('quest_1_3')
    })
})

elevator.setCurrentLevel("Level1.json");
elevator.setMaxLevelAvailable(2);

WA.room.hideLayer("Paper_Highlight");
WA.room.hideLayer("Kylo_Highlight");

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

WA.room.onEnterLayer("Kylo_Popup").subscribe(() => {
    WA.state.saveVariable('quest_1_3_visible', true)
})

WA.room.onEnterLayer("Paper_Pickup").subscribe(() => {
    WA.state.saveVariable('quest_1_1_visible', true)
})

WA.room.onEnterLayer("Feature l").subscribe(() => {
    WA.state.saveVariable('quest_1_2_visible', true)
})

WA.room.onEnterLayer("Paper_Highlight_Zone").subscribe(() => {
    WA.room.showLayer("Paper_Highlight");
});

WA.room.onEnterLayer("Paper_Dehighlight_Zone").subscribe(() => {
    WA.room.hideLayer("Paper_Highlight");
});

WA.room.onEnterLayer("Kylo_Highlight_Zone").subscribe(() => {
    WA.room.showLayer("Kylo_Highlight");
});

WA.room.onEnterLayer("Kylo_Dehighlight_Zone").subscribe(() => {
    WA.room.hideLayer("Kylo_Highlight");
});

WA.room.onEnterLayer("F1_Notebook").subscribe( () => {
    currentTriggerMessage = WA.ui.openPopup("popUp_1_notebook", TextFiles.f1_notebook, []);
});

WA.room.onLeaveLayer("F1_Notebook").subscribe(() => {
    closePopUp();
});

function questMatch(quest: string = "") {
    switch (quest) {
        case "quest_1_1":
            WA.state.saveVariable("quest_1_1", true).catch((e) => console.error(e));
            break;
        case "quest_1_2":
            WA.state.saveVariable("quest_1_2", true).catch((e) => console.error(e));
            break;
        case "quest_1_3":
            WA.state.saveVariable("quest_1_3", true).catch((e) => console.error(e));
            break;
        default:
            break;
    }
    if (
        WA.state.loadVariable("quest_1_1") &&
        WA.state.loadVariable("quest_1_2") &&
        WA.state.loadVariable("quest_1_3")
    ) {
        if ((elevator.getHighestLevel() + 1) === (elevator.getCurrentLevel() + 1)) {
            elevator.increaseMaxLevelAvailable();
        }
    }
}

function closePopUp() {
    if (currentTriggerMessage !== undefined) {
        currentTriggerMessage.close();
        currentTriggerMessage = undefined;
    }
}

function closeTriggerMessage() {
    if (currentTriggerMessage !== undefined) {
        currentTriggerMessage.remove();
        currentTriggerMessage = undefined;
    }
}

