/// <reference path="../node_modules/be-aware-api/iframe_api.d.ts" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { TextFilesGerman } from "../Scripts/TextFilesGerman";
import { TextFilesEnglish } from "../Scripts/TextFilesEnglish";
import { elevator } from "./elevator";

let TextFiles: any = TextFilesGerman;

bootstrapExtra().catch((e) => console.error(e));
let currentItem: any = undefined;
let currentTriggerMessage: any = undefined;

WA.state.getLocalStorageData("getMaxLevelAvailable", "", {
  id: "level",
  callback: (data) => {
    elevator.setMaxLevelAvailable(Number(data));
  }
})

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

WA.room.setProperty("exit", "exitUrl", "Level5.json");
elevator.setCurrentLevel("Level5.json");

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

WA.room.onEnterZone("fend_1", () => {
  currentItem = WA.ui.openBubble("bubble_end_1", TextFiles.fend_1);
});

WA.room.onLeaveZone("fend_1", closeItem);

WA.room.onEnterZone("fend_2", () => {
  currentItem = WA.ui.openBubble("bubble_end_2", TextFiles.fend_2);
});

WA.room.onLeaveZone("fend_2", closeItem);

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
