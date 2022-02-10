import * as tg from "generic-type-guard";
export declare const isBooleanChangedEvent: tg.TypeGuard<object & {
    password: boolean;
}>;

export declare type BooleanChangedEvent = tg.GuardedType<typeof isBooleanChangedEvent>