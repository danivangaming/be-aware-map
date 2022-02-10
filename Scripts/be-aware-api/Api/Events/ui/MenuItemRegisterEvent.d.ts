import * as tg from "generic-type-guard";
export declare const isMenuItemRegisterEvent: tg.TypeGuard<object & {
    menutItem: string;
}>;
/**
 * A message sent from the iFrame to the game to add a new menu item.
 */
export declare type MenuItemRegisterEvent = tg.GuardedType<typeof isMenuItemRegisterEvent>;
export declare const isMenuItemRegisterIframeEvent: tg.TypeGuard<object & {
    type: "registerMenuCommand";
    data: object & {
        menutItem: any;
    };
}>;
export declare const registerMenuCommandStream: import("rxjs").Observable<string>;
export declare function handleMenuItemRegistrationEvent(event: MenuItemRegisterEvent): void;
