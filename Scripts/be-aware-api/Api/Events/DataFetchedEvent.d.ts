import * as tg from "generic-type-guard";
export declare const isDataFetchedEvent: tg.TypeGuard<object & {
    data: string;
}>;

export declare type DataFetchedEvent = tg.GuardedType<typeof isDataFetchedEvent>

