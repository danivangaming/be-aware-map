/// <reference path="../node_modules/be-aware-api/iframe_api.d.ts" />
// npm run build inside maps/map/ directory
// npm install --save ./Scripts/be-aware-api

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { TextFilesGerman } from "../Scripts/TextFilesGerman";
import { TextFilesEnglish } from "../Scripts/TextFilesEnglish";
import { elevator } from "./elevator";

bootstrapExtra().catch((e) => console.error(e));

let TextFiles: any = TextFilesGerman;
let currentItem: any = undefined;
let currentTriggerMessage: any = undefined;
WA.room.setProperty("exit", "exitUrl", "map.json");
elevator.setCurrentLevel("map.json");

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

WA.state.getLocalStorageData("getMaxLevelAvailable", "", undefined, {
  id: "level",
  callback: (data) => {
    if (data) {
      elevator.setMaxLevelAvailable(Number(data));
    }
  },
});

WA.ui.openPopup("popUp_elevator", elevator.getCurrentLevel().toString(), []);

WA.room.onEnterZone("interact_down", () => {
  currentTriggerMessage = WA.ui.displayActionMessage({
    message: TextFiles.elevator_interact_message,
    callback: () => {
      WA.room.setProperty("exit", "exitUrl", elevator.setLevelDown());
      WA.ui.openPopup("popUp_elevator", elevator.getCurrentLevel().toString(), []);
    },
  });
});

WA.room.onLeaveZone("interact_down", closeTriggerMessage);

WA.room.onEnterZone("interact_up", () => {
  currentTriggerMessage = WA.ui.displayActionMessage({
    message: TextFiles.elevator_interact_message,
    callback: () => {
      WA.room.setProperty("exit", "exitUrl", elevator.setLevelUp());
      WA.ui.openPopup("popUp_elevator", elevator.getCurrentLevel().toString(), []);
    },
  });
});

WA.room.onLeaveZone("interact_up", () => {
  if (currentTriggerMessage !== undefined) {
    currentTriggerMessage.remove();
  }
});

WA.room.onEnterZone("f0_1", () => {
  currentItem = WA.ui.openBubble("bubble_0_1", TextFiles.f0_1);
});

WA.room.onLeaveZone("f0_1", closeItem);

WA.room.onEnterZone("f0_2", () => {
  currentItem = WA.ui.openBubble("bubble_0_2", TextFiles.f0_2);
});

WA.room.onLeaveZone("f0_2", closeItem);

WA.room.onEnterZone("f0_3", () => {
  currentItem = WA.ui.openBubble("bubble_0_3", TextFiles.f0_3);
});

WA.room.onLeaveZone("f0_3", closeItem);

WA.room.onEnterZone("f0_4", () => {
  currentItem = WA.ui.openBubble("bubble_0_4", TextFiles.f0_4);
});

WA.room.onLeaveZone("f0_4", closeItem);

WA.room.onEnterZone("f0_5", () => {
  currentItem = WA.ui.openBubble("bubble_0_5", TextFiles.f0_5);
});

WA.room.onLeaveZone("f0_5", closeItem);

WA.room.onEnterZone("f0_reception", () => {
  currentItem = WA.ui.openBubble(
    "bubble_0_reception",
    TextFiles.f0_reception
  );
});

WA.room.onLeaveZone("f0_reception", closeItem);

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
