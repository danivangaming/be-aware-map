import * as tg from "generic-type-guard";
export declare const isGetLocalStorageDataEvent: tg.TypeGuard<object & {
    type: string;
    data: string;
}>
/**
 * A message to get and set the local Lanugage
 */
export declare type GetLocalStorageDataEvent = tg.GuardedType<typeof isGetLocalStorageDataEvent>