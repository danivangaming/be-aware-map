import {HtmlObject} from "./HtmlObject.js";
import {getUniqueID} from "./HtmlObjectHelper.js";

export class Button implements HtmlObject{
    id: string = getUniqueID();
    name : string

    onClickFunction : () => void


    constructor(name : string, onClickFunction : () => void) {
        this.name = name
        this.onClickFunction = onClickFunction
    }


    getHtml = (): JQuery => {
        let buttonHtml = $("<button type='button' id='"+this.id+"' class='btn btn-primary'>" + this.name + "</button>")
        buttonHtml.on("click", this.onClickFunction)
        return buttonHtml
    };

    triggerButton = () => {
        $("#" + this.id).trigger("click");
    };

}