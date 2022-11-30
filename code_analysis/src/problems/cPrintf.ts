import {CodeAnalysisObject} from "../CodeAnalysisObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";

$(function() {

    let codeContainer = $("#code-container")

    let codeAnalysisObject = new CodeAnalysisObject();

    codeAnalysisObject.createProblem(codeContainer,LEVEL_CONSTANTS.LEVEL_2.cprinf.variableName,"clike","#include <stdio.h>\n" +
        "\n" +
        "int main() {\n" +
        "\n" +
        "\tsprintf(str, \"%s\", string);\n" +
        "\n" +
        "    return 0;\n" +
        "}\n" +
        "\n","sprintf.c:5:2: Recommend using snprintf\n" +
        "                  instead: sprintf\n" +
        "sprintf.c:5:10: Unrecognized identifier: str\n" +
        "  Identifier used in code has not been declared. (Use -unrecog to inhibit\n" +
        "  warning)\n" +
        "sprintf.c:5:21: Unrecognized identifier: string\n",[{answer : "malicious code execution", isRight: false},{answer : "risk of data breach", isRight: false},{answer : "undefined behaviour", isRight: false},{answer : "buffer overflow", isRight: true}],"Sprintf() prints a formatted string.<br\>" +
        "<br\>" +
        "sprintf(str, \"%s\", string);<br\>" +
        "<br\>" +
        "<br\>" +
        "Similiar to scanf() it has no limitation and may lead to buffer overflows.")


    codeContainer.append(codeAnalysisObject.getHtml());

})
