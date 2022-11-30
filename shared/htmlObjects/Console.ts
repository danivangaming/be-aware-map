import {HtmlObject} from "./HtmlObject.js";
import {getUniqueID} from "./HtmlObjectHelper.js";
import {CodeBox} from "./CodeBox.js";

export class Console implements HtmlObject{
    id: string = getUniqueID();
    command : string;
    consoleText : string;


    constructor(command : string, consoleText : string) {

        this.command = command;
        this.consoleText = consoleText;
    }

    getHtml(): JQuery {

let br = $("<br/>")

let consoleDiv = $("<div></div>").addClass("console");
let outputDiv = $("<div></div>").addClass("output");
let initSpan = $("<span></span>").text("Checking code...");
let initTime = $("<span></span>").addClass("green").text("20.002ms finished!");
let errorText = $("<span></span>").addClass("red").text("Error found!");
let seperator = $("<span></span>").addClass("seperator").text("== == == == == == == == == == == == == == == == == ==");
let bigText = $("<pre></pre>").addClass("fancy").attr("contenteditable", "false").text("\n" +
    "                                                                                                                                                 \n" +
    "  _____                 _____               _____           _____  _____   ______            ______          _____     ____             ______   \n" +
    " |\\    \\   _____    ___|\\    \\          ___|\\    \\     ____|\\    \\|\\    \\ |\\     \\       ___|\\     \\    ____|\\    \\   |    |        ___|\\     \\  \n" +
    " | |    | /    /|  /    /\\    \\        /    /\\    \\   /     /\\    \\\\\\    \\| \\     \\     |    |\\     \\  /     /\\    \\  |    |       |     \\     \\ \n" +
    " \\/     / |    || |    |  |    |      |    |  |    | /     /  \\    \\\\|    \\  \\     |    |    |/____/| /     /  \\    \\ |    |       |     ,_____/|\n" +
    " /     /_  \\   \\/ |    |__|    |      |    |  |____||     |    |    ||     \\  |    | ___|    \\|   | ||     |    |    ||    |  ____ |     \\--'\\_|/\n" +
    "|     // \\  \\   \\ |    .--.    |      |    |   ____ |     |    |    ||      \\ |    ||    \\    \\___|/ |     |    |    ||    | |    ||     /___/|  \n" +
    "|    |/   \\ |    ||    |  |    |      |    |  |    ||\\     \\  /    /||    |\\ \\|    ||    |\\     \\    |\\     \\  /    /||    | |    ||     \\____|\\ \n" +
    "|\\ ___/\\   \\|   /||____|  |____|      |\\ ___\\/    /|| \\_____\\/____/ ||____||\\_____/||\\ ___\\|_____|   | \\_____\\/____/ ||____|/____/||____ '     /|\n" +
    "| |   | \\______/ ||    |  |    |      | |   /____/ | \\ |    ||    | /|    |/ \\|   ||| |    |     |    \\ |    ||    | /|    |     |||    /_____/ |\n" +
    " \\|___|/\\ |    | ||____|  |____|       \\|___|    | /  \\|____||____|/ |____|   |___|/ \\|____|_____|     \\|____||____|/ |____|_____|/|____|     | /\n" +
    "    \\(   \\|____|/   \\(      )/           \\( |____|/      \\(    )/      \\(       )/      \\(    )/          \\(    )/      \\(    )/     \\( |_____|/ \n" +
    "     '      )/       '      '             '   )/          '    '        '       '        '    '            '    '        '    '       '    )/    \n" +
    "            '                                 '                                                                                            '     \n");




let actionDiv = $("<div></div>").addClass("action");
let commandBegin = $("<span></span>").text("dev$");
let command = $("<span></span>").text(this.command);



let consoleOutput = new CodeBox(this.consoleText, "html").getHtml()


actionDiv.append(commandBegin);


let content = outputDiv.append(bigText).append(seperator.clone()).append(br.clone()).append(actionDiv).append(command).append(br.clone()).append(br.clone()).append(initSpan).append(br.clone()).append(initTime).append(br.clone()).append(errorText).append(br.clone()).append(seperator.clone()).append(br.clone()).append(consoleOutput);




return consoleDiv.append(content);



    }



}