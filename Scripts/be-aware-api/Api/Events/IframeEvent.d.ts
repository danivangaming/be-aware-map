import * as tg from "generic-type-guard";
import type {ButtonClickedEvent} from "./ButtonClickedEvent";
import type {ChatEvent} from "./ChatEvent";
import type {ClosePopupEvent} from "./ClosePopupEvent";
import type {EnterLeaveEvent} from "./EnterLeaveEvent";
import type {GoToPageEvent} from "./GoToPageEvent";
import type {LoadPageEvent} from "./LoadPageEvent";
import type {OpenCoWebSiteEvent} from "./OpenCoWebSiteEvent";
import type {OpenPopupEvent} from "./OpenPopupEvent";
import type {OpenTabEvent} from "./OpenTabEvent";
import type {UserInputChatEvent} from "./UserInputChatEvent";
import type {LayerEvent} from "./LayerEvent";
import type {SetPropertyEvent} from "./setPropertyEvent";
import type {LoadSoundEvent} from "./LoadSoundEvent";
import type {PlaySoundEvent} from "./PlaySoundEvent";
import type {MenuItemClickedEvent} from "./ui/MenuItemClickedEvent";
import type {MenuItemRegisterEvent} from "./ui/MenuItemRegisterEvent";
import type {HasPlayerMovedEvent} from "./HasPlayerMovedEvent";
import type {SetTilesEvent} from "./SetTilesEvent";
import type {SetVariableEvent} from "./SetVariableEvent";
import type {EmbeddedWebsite} from "../iframe/Room/EmbeddedWebsite";
import type {LoadTilesetEvent} from "./LoadTilesetEvent";
import type {MessageReferenceEvent} from "./ui/TriggerActionMessageEvent";
import type {BooleanChangedEvent} from "./BooleanChangedEvent";
import type {DataFetchedEvent} from "./DataFetchedEvent"
import {OpenBubbleEvent} from "./OpenBubbleEvent";
import {CloseBubbleEvent} from "./CloseBubbleEvent";
import type {GetLocalStorageDataEvent} from "./GetLocalStorageDataEvent"
import {SetCharacterSpriteEvent} from "./SetCharacterSpriteEvent";

export interface TypedMessageEvent<T> extends MessageEvent {
    data: T;
}

/**
 * List event types sent from an iFrame to WorkAdventure
 */
export declare type IframeEventMap = {
    getLocalStorageData: GetLocalStorageDataEvent
    loadPage: LoadPageEvent;
    chat: ChatEvent;
    openPopup: OpenPopupEvent;
    closePopup: ClosePopupEvent;
    openBubble: OpenBubbleEvent;
    closeBubble: CloseBubbleEvent;
    openTab: OpenTabEvent;
    goToPage: GoToPageEvent;
    openCoWebSite: OpenCoWebSiteEvent;
    closeCoWebSite: null;
    disablePlayerControls: null;
    restorePlayerControls: null;
    displayBubble: null;
    removeBubble: null;
    onPlayerMove: undefined;
    showLayer: LayerEvent;
    hideLayer: LayerEvent;
    setProperty: SetPropertyEvent;
    loadSound: LoadSoundEvent;
    playSound: PlaySoundEvent;
    stopSound: null;
    getState: undefined;
    loadTileset: LoadTilesetEvent;
    registerMenuCommand: MenuItemRegisterEvent;
    setTiles: SetTilesEvent;
    modifyEmbeddedWebsite: Partial<EmbeddedWebsite>;
    setCharacterSprite: SetCharacterSpriteEvent;
};

export interface IframeEvent<T extends keyof IframeEventMap> {
    type: T;
    data: IframeEventMap[T];
}

export declare const isIframeEventWrapper: (event: any) => event is IframeEvent<keyof IframeEventMap>;

export interface IframeResponseEventMap {
    userInputChat: UserInputChatEvent;
    enterEvent: EnterLeaveEvent;
    leaveEvent: EnterLeaveEvent;
    buttonClickedEvent: ButtonClickedEvent;
    hasPlayerMoved: HasPlayerMovedEvent;
    menuItemClicked: MenuItemClickedEvent;
    setVariable: SetVariableEvent;
    messageTriggered: MessageReferenceEvent;
    booleanChanged: BooleanChangedEvent;
    dataFetched: DataFetchedEvent;
}

export interface IframeResponseEvent<T extends keyof IframeResponseEventMap> {
    type: T;
    data: IframeResponseEventMap[T];
}

export declare const isIframeResponseEventWrapper: (event: {
    type?: string;
}) => event is IframeResponseEvent<keyof IframeResponseEventMap>;
/**
 * List event types sent from an iFrame to WorkAdventure that expect a unique answer from WorkAdventure along the type for the answer from WorkAdventure to the iFrame.
 * Types are defined using Type guards that will actually bused to enforce and check types.
 */
export declare const iframeQueryMapTypeGuards: {
    getState: {
        query: tg.TypeGuard<undefined>;
        answer: tg.TypeGuard<object & {
            roomId: string;
            mapUrl: string;
            nickname: string;
            uuid: string | undefined;
            startLayerName: string | null;
            tags: string[];
            variables: object;
        }>;
    };
    getMapData: {
        query: tg.TypeGuard<undefined>;
        answer: tg.TypeGuard<object & {
            data: object;
        }>;
    };
    setVariable: {
        query: tg.TypeGuard<object & {
            key: string;
            value: unknown;
        }>;
        answer: tg.TypeGuard<undefined>;
    };
    loadTileset: {
        query: tg.TypeGuard<object & {
            url: string;
        }>;
        answer: tg.TypeGuard<number>;
    };
    triggerActionMessage: {
        query: tg.TypeGuard<object & {
            message: string;
            uuid: string;
            type: "message" | "warning";
        }>;
        answer: tg.TypeGuard<undefined>;
    };
    removeActionMessage: {
        query: tg.TypeGuard<object & {
            uuid: string;
        }>;
        answer: tg.TypeGuard<undefined>;
    };
    getEmbeddedWebsite: {
        query: tg.TypeGuard<string>;
        answer: tg.TypeGuard<object & {
            name: string;
            url: string;
            position: object & {
                x: any;
                y: any;
                width: any;
                height: any;
            };
        } & Partial<{
            visible: boolean;
            allowApi: boolean;
            allow: string;
        }>>;
    };
    deleteEmbeddedWebsite: {
        query: tg.TypeGuard<string>;
        answer: tg.TypeGuard<undefined>;
    };
    createEmbeddedWebsite: {
        query: tg.TypeGuard<object & {
            name: string;
            url: string;
            position: object & {
                x: any;
                y: any;
                width: any;
                height: any;
            };
        } & Partial<{
            visible: boolean;
            allowApi: boolean;
            allow: string;
        }>>;
        answer: tg.TypeGuard<undefined>;
    };
};
declare type GuardedType<T> = T extends (x: unknown) => x is infer T ? T : never;
declare type IframeQueryMapTypeGuardsType = typeof iframeQueryMapTypeGuards;
declare type UnknownToVoid<T> = undefined extends T ? void : T;
export declare type IframeQueryMap = {
    [key in keyof IframeQueryMapTypeGuardsType]: {
        query: GuardedType<IframeQueryMapTypeGuardsType[key]["query"]>;
        answer: UnknownToVoid<GuardedType<IframeQueryMapTypeGuardsType[key]["answer"]>>;
    };
};

export interface IframeQuery<T extends keyof IframeQueryMap> {
    type: T;
    data: IframeQueryMap[T]["query"];
}

export interface IframeQueryWrapper<T extends keyof IframeQueryMap> {
    id: number;
    query: IframeQuery<T>;
}

export declare const isIframeQueryKey: (type: string) => type is "getState" | "getMapData" | "setVariable" | "loadTileset" | "triggerActionMessage" | "removeActionMessage" | "getEmbeddedWebsite" | "deleteEmbeddedWebsite" | "createEmbeddedWebsite";
export declare const isIframeQuery: (event: any) => event is IframeQuery<"getState" | "getMapData" | "setVariable" | "loadTileset" | "triggerActionMessage" | "removeActionMessage" | "getEmbeddedWebsite" | "deleteEmbeddedWebsite" | "createEmbeddedWebsite">;
export declare const isIframeQueryWrapper: (event: any) => event is IframeQueryWrapper<"getState" | "getMapData" | "setVariable" | "loadTileset" | "triggerActionMessage" | "removeActionMessage" | "getEmbeddedWebsite" | "deleteEmbeddedWebsite" | "createEmbeddedWebsite">;

export interface IframeAnswerEvent<T extends keyof IframeQueryMap> {
    id: number;
    type: T;
    data: IframeQueryMap[T]["answer"];
}

export declare const isIframeAnswerEvent: (event: {
    type?: string;
    id?: number;
}) => event is IframeAnswerEvent<"getState" | "getMapData" | "setVariable" | "loadTileset" | "triggerActionMessage" | "removeActionMessage" | "getEmbeddedWebsite" | "deleteEmbeddedWebsite" | "createEmbeddedWebsite">;

export interface IframeErrorAnswerEvent {
    id: number;
    type: keyof IframeQueryMap;
    error: string;
}

export declare const isIframeErrorAnswerEvent: (event: {
    type?: string;
    id?: number;
    error?: string;
}) => event is IframeErrorAnswerEvent;
export {};
