import type { ButtonDescriptor } from "./Api/iframe/Ui/ButtonDescriptor";
import type { Popup } from "./Api/iframe/Ui/Popup";
import type { Sound } from "./Api/iframe/Sound/Sound";
declare const wa: {
    ui: import("./Api/iframe/ui").WorkAdventureUiCommands;
    nav: import("./Api/iframe/nav").WorkadventureNavigationCommands;
    controls: import("./Api/iframe/controls").WorkadventureControlsCommands;
    chat: import("./Api/iframe/chat").WorkadventureChatCommands;
    sound: import("./Api/iframe/sound").WorkadventureSoundCommands;
    room: import("./Api/iframe/room").WorkadventureRoomCommands;
    player: import("./Api/iframe/player").WorkadventurePlayerCommands;
    state: import("./Api/iframe/state").WorkadventureStateCommands & {
        [key: string]: unknown;
    };
    onInit(): Promise<void>;
    /**
     * @deprecated Use WA.chat.sendChatMessage instead
     */
    sendChatMessage(message: string, author: string): void;
    /**
     * @deprecated Use WA.chat.disablePlayerControls instead
     */
    disablePlayerControls(): void;
    /**
     * @deprecated Use WA.controls.restorePlayerControls instead
     */
    restorePlayerControls(): void;
    /**
     * @deprecated Use WA.ui.displayBubble instead
     */
    displayBubble(): void;
    /**
     * @deprecated Use WA.ui.removeBubble instead
     */
    removeBubble(): void;
    /**
     * @deprecated Use WA.nav.openTab instead
     */
    openTab(url: string): void;
    /**
     * @deprecated Use WA.sound.loadSound instead
     */
    loadSound(url: string): Sound;
    /**
     * @deprecated Use WA.nav.goToPage instead
     */
    goToPage(url: string): void;
    /**
     * @deprecated Use WA.nav.goToRoom instead
     */
    goToRoom(url: string): void;
    /**
     * @deprecated Use WA.nav.openCoWebSite instead
     */
    openCoWebSite(url: string, allowApi?: boolean, allowPolicy?: string): void;
    /**
     * @deprecated Use WA.nav.closeCoWebSite instead
     */
    closeCoWebSite(): void;
    /**
     * @deprecated Use WA.ui.openPopup instead
     */
    openPopup(targetObject: string, message: string, buttons: ButtonDescriptor[]): Popup;
    /**
     * @deprecated Use WA.chat.onChatMessage instead
     */
    onChatMessage(callback: (message: string) => void): void;
    /**
     * @deprecated Use WA.room.onEnterZone instead
     */
    onEnterZone(name: string, callback: () => void): void;
    /**
     * @deprecated Use WA.room.onLeaveZone instead
     */
    onLeaveZone(name: string, callback: () => void): void;

    openBubble(): void;
};
export declare type WorkAdventureApi = typeof wa;
declare global {
    interface Window {
        WA: WorkAdventureApi;
    }
    let WA: WorkAdventureApi;
}
export {};
