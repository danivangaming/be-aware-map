import {elevator} from "../../shared/elevator/elevator.js"
import {TextFilesGerman} from "../../shared/TextFiles/TextFilesGerman.js";
import {TextFilesEnglish} from "../../shared/TextFiles/TextFilesEnglish.js";

WA.onInit().then(() => {
    questMatch();
    WA.state.onVariableChange('quest_3_1').subscribe(() => {
        questMatch('quest_3_1')
    })
    WA.state.onVariableChange('quest_3_2').subscribe(() => {
        questMatch('quest_3_2')
    })
    WA.state.onVariableChange('quest_3_3').subscribe(() => {
        questMatch('quest_3_3')
    })
})

WA.state.saveVariable('quest_3_counter', 0).catch(e => console.error(e))

let TextFiles: any = TextFilesEnglish;

let currentItem: any = undefined;
let currentTriggerMessage: any = undefined;
let mail_1_quest_done = false;
let mail_2_quest_done = false;
let mail_3_quest_done = false;
elevator.setMaxLevelAvailable(4);

WA.room.setProperty("exit", "exitUrl", "Level3.json");
elevator.setCurrentLevel("Level3.json");

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

WA.room.onEnterLayer("quest_3_1_zone").subscribe(() => {
    if (!mail_1_quest_done) {
        currentItem = WA.ui.openPopup(
            "quest_3_1",
            "",
            [
                {
                    label: TextFiles.trustworthy_label,
                    className: "success",
                    callback: (popup) => {
                        popup.close();
                        // TODO: not possible with this engine version
                        //currentItem = WA.ui.openPopup("quest_3_1", "", [], "error");
                    },
                },
                {
                    label: TextFiles.untrustworthy_label,
                    className: "error",
                    callback: (popup) => {
                        popup.close();
                        // TODO: not possible with this engine version
                        //currentItem = WA.ui.openPopup("quest_3_1", "", [], "login-success");
                        questMatch("quest_3_1");
                    },
                },
            ],
            // TODO: not possible with this engine version
            //"mail",
            //null,
            //{
            //  reference: TextFiles.f3_reference_1,
            //  sender: "Juergen Meyer",
            //  senderInitials: "JM",
            //  senderMail: "Juergen.Meyer@sus-mail.com",
            //  text: TextFiles.f3_mail_1,
            //}
        );
    }
});

WA.room.onLeaveLayer("quest_3_1_zone").subscribe(() => closeItem());

WA.room.onEnterLayer("quest_3_2_zone").subscribe(() => {
    if (!mail_2_quest_done) {
        currentItem = WA.ui.openPopup(
            "quest_3_2",
            "",
            [
                {
                    label: TextFiles.trustworthy_label,
                    className: "success",
                    callback: (popup) => {
                        popup.close();
                        // TODO: not possible with this engine version
                        //currentItem = WA.ui.openPopup("quest_3_2", "", [], "error");
                    },
                },
                {
                    label: TextFiles.untrustworthy_label,
                    className: "error",
                    callback: (popup) => {
                        popup.close();
                        // TODO: not possible with this engine version
                        //currentItem = WA.ui.openPopup("quest_3_2", "", [], "login-success");
                        questMatch("quest_3_2");
                    },
                },
            ],
            // TODO: not possible with this engine version
            //"mail",
            //null,
            //{
            //  reference: TextFiles.f3_reference_2,
            //  sender: "Robert Avtandiltayn",
            //  senderInitials: "RA",
            //  senderMail: "Robert.Avtandiltayn@gmail.com",
            //  text: TextFiles.f3_mail_2,
            //}
        );
    }
});

WA.room.onLeaveLayer("quest_3_2_zone").subscribe(() => closeItem());

WA.room.onEnterLayer("quest_3_3_zone").subscribe(() => {
    if (!mail_3_quest_done) {
        currentItem = WA.ui.openPopup(
            "quest_3_3",
            "",
            [
                {
                    label: TextFiles.trustworthy_label,
                    className: "success",
                    callback: (popup) => {
                        popup.close();
                        // TODO: not possible with this engine version
                        //currentItem = WA.ui.openPopup("quest_3_3", "", [], "login-success");
                        questMatch("quest_3_3");
                    },
                },
                {
                    label: TextFiles.untrustworthy_label,
                    className: "error",
                    callback: (popup) => {
                        popup.close();
                        // TODO: not possible with this engine version
                        //currentItem = WA.ui.openPopup("quest_3_3", "", [], "error");
                    },
                },
            ],
            // TODO: not possible with this engine version
            //"mail",
            //null,
            //{
            //  reference: TextFiles.f3_reference_3,
            //  sender: "Sebastian Malz",
            //  senderInitials: "SM",
            //  senderMail: "Sebastian.malz@HSA-Informatics.de",
            //  text: TextFiles.f3_mail_3,
            //}
        );
    }
});

WA.room.onLeaveLayer("quest_3_3_zone").subscribe(() => closeItem());

function questMatch(quest: string = "") {
    switch (quest) {
        case "quest_3_1":
            mail_1_quest_done = true;
            WA.state.saveVariable("quest_3_1", true).catch((e) => console.error(e));
            break;
        case "quest_3_2":
            mail_2_quest_done = true;
            WA.state.saveVariable("quest_3_2", true).catch((e) => console.error(e));
            break;
        case "quest_3_3":
            mail_3_quest_done = true;
            WA.state.saveVariable("quest_3_3", true).catch((e) => console.error(e));
            break;
        default:
            break;
    }
    if (
        WA.state.loadVariable("quest_3_1") &&
        WA.state.loadVariable("quest_3_2") &&
        WA.state.loadVariable("quest_3_3")
    ) {
        if ((elevator.getHighestLevel() + 1) === (elevator.getCurrentLevel() + 1)) {
            elevator.increaseMaxLevelAvailable();
            // TODO: not possible with this engine version
            //WA.state.getLocalStorageData("setMaxLevelAvailable", String(elevator.getHighestLevel()));
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
