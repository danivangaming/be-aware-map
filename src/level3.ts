/// <reference path="../node_modules/be-aware-api/iframe_api.d.ts" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { TextFilesGerman } from "../Scripts/TextFilesGerman";
import { TextFilesEnglish } from "../Scripts/TextFilesEnglish";
import { elevator } from "./elevator";

let TextFiles: any = TextFilesGerman;

bootstrapExtra().catch((e) => console.error(e));
let currentItem: any = undefined;
let currentTriggerMessage: any = undefined;
let mail_1_quest_done = false;
let mail_2_quest_done = false;
let mail_3_quest_done = false;

/**
 * true = german, false = english or else
 */
WA.state.getLocalStorageData("getLanguage", "", {
  id: "language",
  callback: (data) => {
    if (data === "german") {
      TextFiles = TextFilesGerman;
    } else if (data === "english") {
      TextFiles = TextFilesEnglish;
    }
  },
});

WA.state.getLocalStorageData("getMaxLevelAvailable", "", {
  id: "language",
  callback: (data) => {
    elevator.setMaxLevelAvailable(Number(data));
  }
})

WA.room.setProperty("exit", "exitUrl", "Level5.json");
elevator.setCurrentLevel("Level3.json");

WA.room.onEnterZone("interact_down", () => {
  currentTriggerMessage = WA.ui.displayActionMessage({
    message: TextFiles.elevator_interact_message,
    callback: () => {
      WA.room.setProperty("exit", "exitUrl", elevator.setLevelDown());
    },
  });
});

WA.room.onLeaveZone("interact_down", closeTriggerMessage);

WA.room.onEnterZone("interact_up", () => {
  currentTriggerMessage = WA.ui.displayActionMessage({
    message: TextFiles.elevator_interact_message,
    callback: () => {
      WA.room.setProperty("exit", "exitUrl", elevator.setLevelUp());
    },
  });
});

WA.room.onLeaveZone("interact_up", closeTriggerMessage);

WA.room.onEnterZone("f3_reception", () => {
  currentItem = WA.ui.openBubble("bubble_3_reception", TextFiles.f3_reception);
});

WA.room.onLeaveZone("f3_reception", closeItem);

WA.room.onEnterZone("f3_1", () => {
  currentItem = WA.ui.openBubble("bubble_3_1", TextFiles.f3_1);
});

WA.room.onLeaveZone("f3_1", closeItem);

WA.room.onEnterZone("f3_2", () => {
  currentItem = WA.ui.openBubble("bubble_3_2", TextFiles.f3_2);
});

WA.room.onLeaveZone("f3_2", closeItem);

WA.room.onEnterZone("f3_3", () => {
  currentItem = WA.ui.openBubble("bubble_3_3", TextFiles.f3_3);
});

WA.room.onLeaveZone("f3_3", closeItem);

WA.room.onEnterZone("f3_4", () => {
  currentItem = WA.ui.openBubble("bubble_3_4", TextFiles.f3_4);
});

WA.room.onLeaveZone("f3_4", closeItem);

WA.room.onEnterZone("f3_5", () => {
  currentItem = WA.ui.openBubble("bubble_3_5", TextFiles.f3_5);
});

WA.room.onLeaveZone("f3_5", closeItem);

WA.room.onEnterZone("f3_6", () => {
  currentItem = WA.ui.openBubble("bubble_3_6", TextFiles.f3_6);
});

WA.room.onLeaveZone("f3_6", closeItem);

WA.room.onEnterZone("quest_3_1_zone", () => {
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
              currentItem = WA.ui.openPopup("quest_3_1", "", [], "error");
            },
          },
          {
            label: TextFiles.untrustworthy_label,
            className: "error",
            callback: (popup) => {
              popup.close();
              currentItem = WA.ui.openPopup("quest_3_1", "", [], "login-success");
              questMatch("quest_3_1");
            },
          },
        ],
        "mail",
        null,
        {
          reference: TextFiles.f3_reference_1,
          sender: "Juergen Meyer",
          senderInitials: "JM",
          senderMail: "Juergen.Meyer@sus-mail.com",
          text: TextFiles.f3_mail_1,
        }
    );
  }
});

WA.room.onLeaveZone("quest_3_1_zone", closeItem);

WA.room.onEnterZone("quest_3_2_zone", () => {
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
              currentItem = WA.ui.openPopup("quest_3_2", "", [], "error");
            },
          },
          {
            label: TextFiles.untrustworthy_label,
            className: "error",
            callback: (popup) => {
              popup.close();
              currentItem = WA.ui.openPopup("quest_3_2", "", [], "login-success");
              questMatch("quest_3_2");
            },
          },
        ],
        "mail",
        null,
        {
          reference: TextFiles.f3_reference_2,
          sender: "Robert Avtandiltayn",
          senderInitials: "RA",
          senderMail: "Robert.Avtandiltayn@gmail.com",
          text: TextFiles.f3_mail_2,
        }
    );
  }
});

WA.room.onLeaveZone("quest_3_2_zone", closeItem);

WA.room.onEnterZone("quest_3_3_zone", () => {
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
              currentItem = WA.ui.openPopup("quest_3_3", "", [], "login-success");
              questMatch("quest_3_3");
            },
          },
          {
            label: TextFiles.untrustworthy_label,
            className: "error",
            callback: (popup) => {
              popup.close();
              currentItem = WA.ui.openPopup("quest_3_3", "", [], "error");
            },
          },
        ],
        "mail",
        null,
        {
          reference: TextFiles.f3_reference_3,
          sender: "Sebastian Malz",
          senderInitials: "SM",
          senderMail: "Sebastian.malz@HSA-Informatics.de",
          text: TextFiles.f3_mail_3,
        }
    );
  }
});

WA.room.onLeaveZone("quest_3_3_zone", closeItem);

function questMatch(quest: string) {
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
  }
  if (
    WA.state.loadVariable("quest_3_1") &&
    WA.state.loadVariable("quest_3_2") &&
    WA.state.loadVariable("quest_3_3")
  ) {
    if ((elevator.getHighestLevel() + 1) === (elevator.getCurrentLevel() + 1)) {
      elevator.increaseMaxLevelAvailable();
      WA.state.getLocalStorageData("setMaxLevelAvailable", String(elevator.getHighestLevel()));
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
