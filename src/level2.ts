/// <reference path="../node_modules/be-aware-api/iframe_api.d.ts" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { TextFilesGerman } from "../Scripts/TextFilesGerman";
import { TextFilesEnglish } from "../Scripts/TextFilesEnglish";
import { elevator } from "./elevator";

let TextFiles: any = TextFilesGerman;

WA.room.hideLayer("USB_Highlight");
bootstrapExtra().catch((e) => console.error(e));

let currentItem: any = undefined;
let currentTriggerMessage: any = undefined;
let pickedUp: boolean = false;
let usbQuest: boolean = false;
WA.room.setProperty("exit", "exitUrl", "Level2.json");
elevator.setCurrentLevel("Level2.json");

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
  },
});

WA.ui.openBubble("popUp_Elevator", "MaxLevelAvailable: "+ elevator.getHighestLevel()+ "CurrentLevel: "+ elevator.getCurrentLevel() )

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

WA.room.onEnterZone("usb_pickUp", () => {
  if (!pickedUp) {
    currentTriggerMessage = WA.ui.displayActionMessage({
      message: TextFiles.usb_pickup,
      callback: () => {
        pickedUp = true;
        WA.room.hideLayer("USB");
        WA.room.hideLayer("USB_Highlight");
        WA.ui.setCharacterSprite("set", "accessory_usb", "accessory")
      },
    });
  }
});

WA.room.onEnterZone("usb_highlight", () => {
  if (!pickedUp) {
    WA.room.showLayer("USB_Highlight");
  }
});

WA.room.onLeaveZone("usb_highlight", () => {
  WA.room.hideLayer("USB_Highlight");
});

WA.room.onLeaveZone("usb_pickUp", closeTriggerMessage);

WA.room.onEnterZone("usb_quest_right_zone", () => {
  if (pickedUp && !usbQuest) {
    currentTriggerMessage = WA.ui.displayActionMessage({
      message: TextFiles.f2_usb_quest_right_m,
      callback: () => {
        currentItem = WA.ui.openBubble(
          "USB_quest_right",
          TextFiles.f2_usb_quest_right
        );
        questMatch("quest_2_1");
        WA.ui.setCharacterSprite("remove", "accessory_usb", "accessory")
        usbQuest = true;
      },
    });
  }
});

WA.room.onLeaveZone("usb_quest_right_zone", () => {
  closeItem();
  closeTriggerMessage();
});

WA.room.onEnterZone("usb_quest_wrong_zone", () => {
  if (pickedUp && !usbQuest) {
    currentTriggerMessage = WA.ui.displayActionMessage({
      message: TextFiles.f2_usb_quest_wrong_m,
      callback: () => {
        currentItem = WA.ui.openPopup("USB_quest_wrong", "", [], "virus");
        pickedUp = false;
        WA.room.showLayer("USB");
        WA.ui.setCharacterSprite("remove", "accessory_usb", "accessory")
      },
    });
  }
});

WA.room.onLeaveZone("usb_quest_wrong_zone", () => {
  closeItem();
  closeTriggerMessage();
});

WA.room.onEnterZone("f2_reception", () => {
  currentItem = WA.ui.openBubble(
    "bubble_2_reception",
    TextFiles.f2_reception
  );
});

WA.room.onLeaveZone("f2_reception", closeItem);

WA.room.onEnterZone("f2_1", () => {
  currentItem = WA.ui.openBubble("bubble_2_1", TextFiles.f2_1);
});

WA.room.onLeaveZone("f2_1", closeItem);

WA.room.onEnterZone("f2_2", () => {
  currentItem = WA.ui.openBubble("bubble_2_2", TextFiles.f2_2);
});

WA.room.onLeaveZone("f2_2", closeItem);

WA.room.onEnterZone("f2_3", () => {
  currentItem = WA.ui.openBubble("bubble_2_3", TextFiles.f2_3);
});

WA.room.onLeaveZone("f2_3", closeItem);

WA.room.onEnterZone("f2_4", () => {
  currentItem = WA.ui.openBubble("bubble_2_4", TextFiles.f2_4);
});

WA.room.onLeaveZone("f2_4", closeItem);

WA.room.onEnterZone("f2_5", () => {
  currentItem = WA.ui.openBubble("bubble_2_5", TextFiles.f2_5);
});

WA.room.onLeaveZone("f2_5", closeItem);

WA.room.onEnterZone("f2_6", () => {
  currentItem = WA.ui.openBubble("bubble_2_6", TextFiles.f2_6);
});

WA.room.onLeaveZone("f2_6", closeItem);

WA.room.onEnterZone("f2_7", () => {
  currentItem = WA.ui.openBubble("bubble_2_7", TextFiles.f2_7);
});

WA.room.onLeaveZone("f2_7", closeItem);

WA.room.onEnterZone("f2_8", () => {
  currentItem = WA.ui.openBubble("bubble_2_8", TextFiles.f2_8);
});

WA.room.onLeaveZone("f2_8", closeItem);

WA.room.onEnterZone("telefon_upper_right", () => {
  currentItem = WA.ui.openPopup("popUp_Telefon_1", "", [], "telefon_1_1", {
    id: "question1",
    callback: (result) => {
      if (result) {
        currentItem.close();
        currentItem = WA.ui.openPopup(
          "popUp_Telefon_1",
          "",
          [],
          "telefon_1_2",
          {
            id: "question2",
            callback: (result) => {
              if (result) {
                currentItem.close();
                currentItem = WA.ui.openPopup(
                  "popUp_Telefon_1",
                  "",
                  [],
                  "telefon_1_3",
                  {
                    id: "question3",
                    callback: (result) => {
                      if (result) {
                        currentItem.close();
                        currentItem = WA.ui.openPopup(
                          "popUp_Telefon_1",
                          "",
                          [],
                          "telefon_1_4",
                          {
                            id: "question4",
                            callback: (result) => {
                              if (result) {
                                questMatch("quest_2_2");
                              }
                            },
                          }
                        );
                      }
                    },
                  }
                );
              }
            },
          }
        );
      }
    },
  });
});

WA.room.onLeaveZone("telefon_upper_right", closeItem);

WA.room.onEnterZone("telefon_upper_left", () => {
  currentItem = WA.ui.openPopup("popUp_Telefon_2", "", [], "telefon_2_1", {
    id: "question1",
    callback: (result) => {
      if (result) {
        currentItem.close();
        currentItem = WA.ui.openPopup(
          "popUp_Telefon_2",
          "",
          [],
          "telefon_2_2",
          {
            id: "question2",
            callback: (result) => {
              if (result) {
                currentItem.close();
                currentItem = WA.ui.openPopup(
                  "popUp_Telefon_2",
                  "",
                  [],
                  "telefon_2_3",
                  {
                    id: "question3",
                    callback: (result) => {
                      if (result) {
                        currentItem.close();
                        currentItem = WA.ui.openPopup(
                          "popUp_Telefon_2",
                          "",
                          [],
                          "telefon_2_wrong"
                        );
                      } else {
                        currentItem.close();
                        currentItem = WA.ui.openPopup(
                          "popUp_Telefon_2",
                          "",
                          [],
                          "telefon_2_right",
                          {
                            id: "right3",
                            callback: (result) => {
                              if (result) {
                                questMatch("quest_2_3");
                              }
                            },
                          }
                        );
                      }
                    },
                  }
                );
              } else {
                currentItem.close();
                currentItem = WA.ui.openPopup(
                  "popUp_Telefon_2",
                  "",
                  [],
                  "telefon_2_right",
                  {
                    id: "right2",
                    callback: (result) => {
                      if (result) {
                        questMatch("quest_2_3");
                      }
                    },
                  }
                );
              }
            },
          }
        );
      } else {
        currentItem.close();
        currentItem = WA.ui.openPopup(
          "popUp_Telefon_2",
          "",
          [],
          "telefon_2_right",
          {
            id: "right1",
            callback: (result) => {
              if (result) {
                questMatch("quest_2_3");
              }
            },
          }
        );
      }
    },
  });
});

WA.room.onLeaveZone("telefon_upper_left", closeItem);

function questMatch(quest: string) {
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
  }
  if (
    WA.state.loadVariable("quest_2_1") &&
    WA.state.loadVariable("quest_2_2") &&
    WA.state.loadVariable("quest_2_3")
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
