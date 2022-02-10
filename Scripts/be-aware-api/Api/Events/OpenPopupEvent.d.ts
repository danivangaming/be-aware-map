import * as tg from "generic-type-guard";
interface MailDescriptor {
    reference: string;
    sender: string;
    senderInitials: string;
    senderMail: string;
    text: string;
}

export declare const isOpenPopupEvent: tg.TypeGuard<object & {
    popupId: number;
    targetObject: string;
    message: string;
    buttons: (object & {
        label: any;
        className: any;
    })[];
    type?: string;
    passwordAsWord?: string;
    mail?: MailDescriptor;
}>;
/**
 * A message sent from the iFrame to the game to add a message in the chat.
 */
export declare type OpenPopupEvent = tg.GuardedType<typeof isOpenPopupEvent>;
