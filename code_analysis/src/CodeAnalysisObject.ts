import {CodeBox} from "../../shared/htmlObjects/CodeBox.js";
import {HtmlObject} from "../../shared/htmlObjects/HtmlObject.js";
import {getUniqueID} from "../../shared/htmlObjects/HtmlObjectHelper.js";
import {InfoText} from "../../shared/htmlObjects/InfoText.js";
import {Console} from "../../shared/htmlObjects/Console.js";
import {Button} from "../../shared/htmlObjects/Button.js";
import {changeTabKey, keysToMap} from "../../shared/global/config.js";

export class CodeAnalysisObject implements HtmlObject {

    id: string = getUniqueID();
    answers: { answer: string, isRight: boolean }[];
    console: Console;
    codeBox: CodeBox;
    rightText: InfoText;
    buttonArray: Button[] = [];
    activeBindFunctions: ((e: KeyboardEvent) => void)[] = [];


    createProblem(codeContainer: JQuery,variableName: string, language: string, code: string, consoleOutput: string, answers: { answer: string, isRight: boolean, }[], rightText: string) {


        // this.codeBox = new CodeBox(code,language);


        this.codeBox = new CodeBox(code, language);
        this.answers = answers;
        this.rightText = new InfoText(rightText, "Info", true);
        this.console = new Console("abc-command", consoleOutput);

        let wrongText =  new InfoText("Answer is wrong!", "Info", true);

        //let consoleDiv = $("<div></div>").addClass("console");
        //let outputDiv = $("<div></div>").addClass("output");


        answers.forEach((answer) => {
            let buttonFun = () => {
                codeContainer.empty();
                codeContainer.append(this.getHtml());
                codeContainer.append(wrongText.getHtml().addClass("console-text"));
                $("html, body").animate({ scrollTop: $(document).height() }, "fast");
            };

            if (answer.isRight) {
                buttonFun = () => {
                    WA.state.saveVariable(variableName, true)
                    codeContainer.empty();
                    codeContainer.append(this.getHtml());
                    codeContainer.append(this.rightText.getHtml().addClass("console-text"));
                    $("html, body").animate({ scrollTop: $(document).height() }, "fast");
                }
            }


            this.buttonArray.push(new Button(answer.answer, buttonFun))
        })



        this.bindButtonsToKeys()
    }


    getHtml(): JQuery {
        let buttonHtml = $("<div></div>")
        this.buttonArray.forEach((button, index) => {
            buttonHtml.append(button.getHtml().addClass("m-4"))

            if(index != 0 && (index + 1) % 2 == 0){
                buttonHtml.append("<br />")
            }
        });


        return $("<div></div>").append(this.codeBox.getHtml().addClass("console-text").append($("<hr/>")).append(this.console.getHtml()).append($("<hr/>")).append(buttonHtml));
    }




    bindButtonsToKeys = () => {

        this.activeBindFunctions.forEach((bindFunction) => {
            document.removeEventListener('keydown', bindFunction);
        })


        const bindFunction = (e: KeyboardEvent) => {
            e.preventDefault();

                let index = 0
                this.buttonArray.forEach((button) => {
                    if(index >= keysToMap.length){
                        return;
                    }
                    else if(e.key == keysToMap[index]){
                        button.triggerButton();
                    }
                    index++;
                })


        };

        document.addEventListener('keydown', bindFunction);
        this.activeBindFunctions.push(bindFunction)


    };


}