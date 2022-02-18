/// <reference path="../node_modules/be-aware-api/iframe_api.d.ts" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { TextFilesGerman } from "../Scripts/TextFilesGerman";
import { TextFilesEnglish } from "../Scripts/TextFilesEnglish";
import { elevator } from "./elevator";

bootstrapExtra().catch((e) => console.error(e));

let TextFiles: any = TextFilesGerman;

let currentItem: any = undefined;
let currentTriggerMessage: any = undefined;
let quest_1: boolean = false;
let quest_2: boolean = false;
let quest_3: boolean = false;
WA.room.hideLayer("Paper_Highlight");
WA.room.hideLayer("Kylo_Highlight");
WA.room.setProperty("exit", "exitUrl", "Level1.json");
elevator.setCurrentLevel("Level1.json");

WA.state.getLocalStorageData("getMaxLevelAvailable", "", {
  id: "level",
  callback: (data) => {
    elevator.setMaxLevelAvailable(Number(data));
    WA.ui.openBubble("popUp_Elevator", "MaxLevelAvailable: "+ data+ "CurrentLevel: "+ elevator.getCurrentLevel() )
  }
})

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

WA.room.onEnterZone("paper_highlight", () => {
  WA.room.showLayer("Paper_Highlight");
});

WA.room.onEnterZone("paper_no_highlight", () => {
  WA.room.hideLayer("Paper_Highlight");
});

WA.room.onEnterZone("paper_pickup", () => {
  currentItem = WA.ui.openPopup("paper", "", [], "paper");
});

WA.room.onLeaveZone("paper_pickup", closeItem);

WA.room.onEnterZone("f1_reception", () => {
  currentItem = WA.ui.openBubble(
    "bubble_1_reception",
    TextFiles.f1_reception
  );
});

WA.room.onLeaveZone("f1_reception", closeItem);

WA.room.onEnterZone("f1_notebook", () => {
  currentItem = WA.ui.openPopup("popUp_1_notebook", TextFiles.f1_notebook, []);
});

WA.room.onLeaveZone("f1_notebook", closeItem);

WA.room.onEnterZone("f1_1", () => {
  currentItem = WA.ui.openBubble("bubble_1_1", TextFiles.f1_1);
});

WA.room.onLeaveZone("f1_1", closeItem);

WA.room.onEnterZone("f1_2", () => {
  currentItem = WA.ui.openBubble("bubble_1_2", TextFiles.f1_2);
});

WA.room.onLeaveZone("f1_2", closeItem);

WA.room.onEnterZone("f1_3", () => {
  currentItem = WA.ui.openBubble("bubble_1_3", TextFiles.f1_3);
});

WA.room.onLeaveZone("f1_3", closeItem);

WA.room.onEnterZone("quest_1_1", () => {
  if (!quest_1) {
    currentItem = WA.ui.openPopup("popUp_1_quest_1", "", [], "login", {
      id: "L#4Q!-F/=cMt7",
      callback: (password) => {
        if (password) {
          questMatch("quest_1_1");
          quest_1 = true;
          currentItem.close();
          currentItem = WA.ui.openPopup(
            "popUp_1_quest_1",
            "",
            [],
            "login-success"
          );
        }
      },
    });
  }
});

WA.room.onLeaveZone("quest_1_1", () => {
  currentItem.close();
});

WA.room.onEnterZone("quest_1_2", () => {
  if (!quest_2) {
    currentItem = WA.ui.openPopup("popUp_1_quest_2", "", [], "login", {
      id: "1234",
      callback: (password) => {
        if (password) {
          questMatch("quest_1_2");
          quest_2 = true;
          currentItem.close();
          currentItem = WA.ui.openPopup(
            "popUp_1_quest_2",
            "",
            [],
            "login-success"
          );
        }
      },
    });
  }
});

WA.room.onLeaveZone("quest_1_2", () => {
  currentItem.close();
});

WA.room.onEnterZone("quest_1_3", () => {
  if (!quest_3) {
    currentItem = WA.ui.openPopup("popUp_1_quest_3", "", [], "login", {
      id: "Kylo",
      callback: (password) => {
        if (password) {
          questMatch("quest_1_3");
          quest_3 = true;
          currentItem.close();
          currentItem = WA.ui.openPopup(
            "popUp_1_quest_3",
            "",
            [],
            "login-success"
          );
        }
      },
    });
  }
});

WA.room.onLeaveZone("quest_1_3", () => {
  currentItem.close();
});

WA.room.onEnterZone("kylo_highlight", () => {
  WA.room.showLayer("Kylo_Highlight");
});

WA.room.onEnterZone("kylo_dehighlight", () => {
  WA.room.hideLayer("Kylo_Highlight");
});

WA.room.onEnterZone("kylo", () => {
  currentItem = WA.ui.openPopup("Kylo", "", [], "kylo");
});

WA.room.onLeaveZone("kylo", closeItem);

function questMatch(quest: string) {
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
  }
  if (
    WA.state.loadVariable("quest_1_1") &&
    WA.state.loadVariable("quest_1_2") &&
    WA.state.loadVariable("quest_1_3")
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
