import { Observable } from "rxjs";
import { IframeApiContribution } from "./IframeApiContribution";
interface DataDescriptor {
    id: string,
    callback: (data: string) => void;
}
export declare const initVariables: (_variables: Map<string, unknown>) => void;
export declare class WorkadventureStateCommands extends IframeApiContribution<WorkadventureStateCommands> {
    callbacks: import("./IframeApiContribution").IframeCallbackContribution<keyof import("../Events/IframeEvent").IframeResponseEventMap>[];
    getLocalStorageData(type: string, data: string, language?: DataDescriptor): void;
    saveVariable(key: string, value: unknown): Promise<void>;
    loadVariable(key: string): unknown;
    onVariableChange(key: string): Observable<unknown>;
}
declare const proxyCommand: WorkadventureStateCommands & {
    [key: string]: unknown;
};
export default proxyCommand;
