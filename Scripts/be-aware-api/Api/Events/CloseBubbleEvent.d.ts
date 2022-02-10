import * as tg from "generic-type-guard";
export declare const isCloseBubbleEvent: tg.TypeGuard<object & {
    bubbleId: number;
}>;
/**
 * A message sent from the iFrame to the game to add a message in the chat.
 */
export declare type CloseBubbleEvent = tg.GuardedType<typeof isCloseBubbleEvent>;
