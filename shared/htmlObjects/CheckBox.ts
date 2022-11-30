import {HtmlObject} from "./HtmlObject.js";
import {getUniqueID} from "./HtmlObjectHelper.js";

export class CheckBox implements HtmlObject {
    id: string = getUniqueID();
    isChecked: boolean;
    labelText : string;
    readOnly : boolean;

    constructor(isChecked: boolean = false, readOnly = false , labelText = "") {
        this.isChecked = isChecked
        this.labelText = labelText
        this.readOnly = readOnly
    }


    getHtml(): JQuery {

        let onClick = () => {
            return false
        }

        let formCheck = $("<div></div>");
        formCheck.addClass("form-check");

        let input = $("<input>");
        //let input = $("<input onclick='return false'>");
        input.addClass("form-check-input");
        input.attr("type", "checkbox");
        input.attr("value", "");
        input.attr("id", this.id);
        if(this.isChecked){
            input.attr("checked", "checked")
        }
        if(this.readOnly){
            input.attr("onclick","return false")
        }

//input.prop("disabled", true)

        let label = $("<label></label>");
        label.attr("for", this.id);
        label.addClass("form-check-label");
        label.text(this.labelText);


        let combined = formCheck.append(input).append(label)

        return combined

    }


}