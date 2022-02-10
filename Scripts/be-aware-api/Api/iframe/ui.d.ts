import { IframeApiContribution } from "./IframeApiContribution";
import type { ButtonDescriptor } from "./Ui/ButtonDescriptor";
import { Popup } from "./Ui/Popup";
import { ActionMessage } from "./Ui/ActionMessage";
import {Bubble} from "./Ui/Bubble";
export interface ActionMessageOptions {
    message: string;
    type?: "message" | "warning";
    callback: () => void;
}
export interface BooleanDescriptor {
    id: string;
    callback: (bool: boolean) => void;
}
interface MailDescriptor {
    reference: string;
    sender: string;
    senderInitials: string;
    senderMail: string;
    text: string;
}
export declare class WorkAdventureUiCommands extends IframeApiContribution<WorkAdventureUiCommands> {
    callbacks: import("./IframeApiContribution").IframeCallbackContribution<keyof import("../Events/IframeEvent").IframeResponseEventMap>[];
    openPopup(targetObject: string, message: string, buttons: ButtonDescriptor[], type?: string, callback?: BooleanDescriptor | null, mail?: MailDescriptor): Popup;
    registerMenuCommand(commandDescriptor: string, callback: (commandDescriptor: string) => void): void;
    setCharacterSprite(type: string, sprite: string, part: string): void
    displayBubble(): void;
    removeBubble(): void;
    openBubble(targetObject: string, message: string): Bubble;
    displayActionMessage(actionMessageOptions: ActionMessageOptions): ActionMessage;
}
declare const _default: WorkAdventureUiCommands;
export default _default;
