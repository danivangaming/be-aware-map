import * as tg from "generic-type-guard";
export declare const isOpenBubbleEvent: tg.TypeGuard<object & {
    bubbleId: number;
    targetObject: string;
    message: string;
}>;
/**
 * A message sent from the iFrame to the game to add a message in the chat.
 */
export declare type OpenBubbleEvent = tg.GuardedType<typeof isOpenBubbleEvent>;
