import * as tg from "generic-type-guard";
export declare const isSetCharacterSpriteEvent: tg.TypeGuard<object & {
    type: string;
    sprite: string;
    part: string;
}>;
/**
 * Change character sprite
 */
export declare type SetCharacterSpriteEvent = tg.GuardedType<typeof isSetCharacterSpriteEvent>;
