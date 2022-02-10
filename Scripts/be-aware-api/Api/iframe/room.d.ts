import { IframeApiContribution } from "./IframeApiContribution";
// @ts-ignore
import type { ITiledMap } from "../../Phaser/Map/ITiledMap";
import type { WorkadventureRoomWebsiteCommands } from "./website";
interface TileDescriptor {
    x: number;
    y: number;
    tile: number | string | null;
    layer: string;
}
export declare const setRoomId: (id: string) => void;
export declare const setMapURL: (url: string) => void;
export declare class WorkadventureRoomCommands extends IframeApiContribution<WorkadventureRoomCommands> {
    callbacks: import("./IframeApiContribution").IframeCallbackContribution<keyof import("../Events/IframeEvent").IframeResponseEventMap>[];
    onEnterZone(name: string, callback: () => void): void;
    onLeaveZone(name: string, callback: () => void): void;
    showLayer(layerName: string): void;
    hideLayer(layerName: string): void;
    setProperty(layerName: string, propertyName: string, propertyValue: string | number | boolean | undefined): void;
    getTiledMap(): Promise<ITiledMap>;
    setTiles(tiles: TileDescriptor[]): void;
    get id(): string;
    get mapURL(): string;
    loadTileset(url: string): Promise<number>;
    get website(): WorkadventureRoomWebsiteCommands;
}
declare const _default: WorkadventureRoomCommands;
export default _default;
