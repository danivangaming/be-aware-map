import {HtmlObject} from "./HtmlObject.js";
import {getUniqueID} from "./HtmlObjectHelper.js";


declare var Prism : any;
export class CodeBox implements HtmlObject{
    id: string = getUniqueID();
    code : string
    language : string

    constructor(code : string, language : string = "javascript") {
        this.code = code;
        this.language = language
    }

    getHtml = (): JQuery => {

        let codeElement = $("<pre class='prettyprint linenums'></pre>")
        codeElement.append(Prism.highlight(this.code, Prism.languages[this.language]))
        return codeElement
    };

}