import { IframeQueryMap, IframeResponseEvent, IframeResponseEventMap } from "./Events/IframeEvent";
import type { HasPlayerMovedEvent } from "./Events/HasPlayerMovedEvent";
import type { SetVariableEvent } from "./Events/SetVariableEvent";
declare type AnswererCallback<T extends keyof IframeQueryMap> = (query: IframeQueryMap[T]["query"], source: MessageEventSource | null) => IframeQueryMap[T]["answer"] | PromiseLike<IframeQueryMap[T]["answer"]>;

interface MailDescriptor {
    reference: string;
    sender: string;
    senderInitials: string;
    senderMail: string;
    text: string;
}
/**
 * Listens to messages from iframes and turn those messages into easy to use observables.
 * Also allows to send messages to those iframes.
 */
declare class IframeListener {
    private readonly _readyStream;
    readonly readyStream: import("rxjs").Observable<HTMLIFrameElement>;
    private readonly _chatStream;
    readonly chatStream: import("rxjs").Observable<object & {
        message: string;
        author: string;
    }>;
    private readonly _getLocalStorageDataStream;
    readonly getLocalStorageDataStream: import("rxjs").Observable<object & {
        type: string;
        data: string;
    }>
    private readonly _openPopupStream;
    readonly openPopupStream: import("rxjs").Observable<object & {
        popupId: number;
        targetObject: string;
        message: string;
        buttons: (object & {
            label: any;
            className: any;
        })[];
        type: string;
        password: string;
        mail: MailDescriptor;
    }>;
    private readonly _setCharacterSpriteStream;
    readonly setCharacterSpriteStream: import("rxjs").Observable<object & {
        type: string;
        sprite: string;
        part: string;
    }>
    private readonly _openBubbleStream;
    readonly openBubbleStream: import("rxjs").Observable<object & {
        bubbleId: number;
        targetObject: string;
        message: string;
    }>;
    private readonly _openTabStream;
    readonly openTabStream: import("rxjs").Observable<object & {
        url: string;
    }>;
    private readonly _goToPageStream;
    readonly goToPageStream: import("rxjs").Observable<object & {
        url: string;
    }>;
    private readonly _loadPageStream;
    readonly loadPageStream: import("rxjs").Observable<string>;
    private readonly _openCoWebSiteStream;
    readonly openCoWebSiteStream: import("rxjs").Observable<object & {
        url: string;
        allowApi: boolean;
        allowPolicy: string;
    }>;
    private readonly _closeCoWebSiteStream;
    readonly closeCoWebSiteStream: import("rxjs").Observable<void>;
    private readonly _disablePlayerControlStream;
    readonly disablePlayerControlStream: import("rxjs").Observable<void>;
    private readonly _enablePlayerControlStream;
    readonly enablePlayerControlStream: import("rxjs").Observable<void>;
    private readonly _closePopupStream;
    readonly closePopupStream: import("rxjs").Observable<object & {
        popupId: number;
    }>;
    private readonly _closeBubbleStream;
    readonly closeBubbleStream: import("rxjs").Observable<object & {
        bubbleId: number;
    }>;
    private readonly _displayBubbleStream;
    readonly displayBubbleStream: import("rxjs").Observable<void>;
    private readonly _removeBubbleStream;
    readonly removeBubbleStream: import("rxjs").Observable<void>;
    private readonly _showLayerStream;
    readonly showLayerStream: import("rxjs").Observable<object & {
        name: string;
    }>;
    private readonly _hideLayerStream;
    readonly hideLayerStream: import("rxjs").Observable<object & {
        name: string;
    }>;
    private readonly _setPropertyStream;
    readonly setPropertyStream: import("rxjs").Observable<object & {
        layerName: string;
        propertyName: string;
        propertyValue: string | number | boolean | undefined;
    }>;
    private readonly _registerMenuCommandStream;
    readonly registerMenuCommandStream: import("rxjs").Observable<string>;
    private readonly _unregisterMenuCommandStream;
    readonly unregisterMenuCommandStream: import("rxjs").Observable<string>;
    private readonly _playSoundStream;
    readonly playSoundStream: import("rxjs").Observable<object & {
        url: string;
        config: (object & {
            volume: any;
            loop: any;
            mute: any;
            rate: any;
            detune: any;
            seek: any;
            delay: any;
        }) | undefined;
    }>;
    private readonly _stopSoundStream;
    readonly stopSoundStream: import("rxjs").Observable<object & {
        url: string;
    }>;
    private readonly _loadSoundStream;
    readonly loadSoundStream: import("rxjs").Observable<object & {
        url: string;
    }>;
    private readonly _setTilesStream;
    readonly setTilesStream: import("rxjs").Observable<(object & {
        x: number;
        y: number;
        tile: string | number | null;
        layer: string;
    })[]>;
    private readonly _modifyEmbeddedWebsiteStream;
    readonly modifyEmbeddedWebsiteStream: import("rxjs").Observable<object & {
        name: string;
    } & Partial<{
        url: string;
        visible: boolean;
        allowApi: boolean;
        allow: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }>>;
    private readonly iframes;
    private readonly iframeCloseCallbacks;
    private readonly scripts;
    private sendPlayerMove;
    private answerers;
    init(): void;
    /**
     * Allows the passed iFrame to send/receive messages via the API.
     */
    registerIframe(iframe: HTMLIFrameElement): void;
    unregisterIframe(iframe: HTMLIFrameElement): void;
    registerScript(scriptUrl: string): void;
    private getBaseUrl;
    private static getIFrameId;
    unregisterScript(scriptUrl: string): void;
    sendUserInputChat(message: string): void;
    sendEnterEvent(name: string): void;
    sendLeaveEvent(name: string): void;
    hasPlayerMoved(event: HasPlayerMovedEvent): void;
    sendButtonClickedEvent(popupId: number, buttonId: number): void;
    setVariable(setVariableEvent: SetVariableEvent): void;
    sendActionMessageTriggered(uuid: string): void;
    sendPasswordEntered(password: boolean): void;
    sendDataFetched(data: string): void;
    /**
     * Sends the message... to all allowed iframes.
     */
    postMessage(message: IframeResponseEvent<keyof IframeResponseEventMap>): void;
    /**
     * Registers a callback that can be used to respond to some query (as defined in the IframeQueryMap type).
     *
     * Important! There can be only one "answerer" so registering a new one will unregister the old one.
     *
     * @param key The "type" of the query we are answering
     * @param callback
     */
    registerAnswerer<T extends keyof IframeQueryMap>(key: T, callback: AnswererCallback<T>): void;
    unregisterAnswerer(key: keyof IframeQueryMap): void;
    dispatchVariableToOtherIframes(key: string, value: unknown, source: MessageEventSource | null): void;
}
export declare const iframeListener: IframeListener;
export {};
