import {CodeAnalysisObject} from "../CodeAnalysisObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";

$(function() {

    let codeContainer = $("#code-container")

    let codeAnalysisObject = new CodeAnalysisObject();

    codeAnalysisObject.createProblem(codeContainer,LEVEL_CONSTANTS.LEVEL_2.cScanf.variableName,"clike","#include <stdio.h>\n" +
        "\n" +
        "int main() {\n" +
        "\n" +
        "    int i;\n" +
        "    printf(\"Please enter value:\");\n" +
        "    scanf(\"%d\",&i);\n" +
        "\n" +
        "    return 0;\n" +
        "}\n","scanf.c: (in function main)\n" +
        "scanf.c:7:5: Return value (type int) ignored: scanf(\"%d\", &i)\n" +
        "  Result returned by function call is not used. If this is intended, can cast\n" +
        "  result to (void) to eliminate message. (Use -retvalint to inhibit warning)\n" +
        "\n" +
        "Finished checking --- 1 code warning\n",[{answer : "unused variable", isRight: false},{answer : "buffer overflow", isRight: true},{answer : "undefined behaviour", isRight: false},{answer : "everythings fine", isRight: false}],"Scanf() reads input from the keyboard.<br\>" +
        "<br\>" +
        "scanf(\"%d\",&i);<br\>" +
        "<br\>" +
        "<br\>" +
        "As scanf() has no limitation of characters it can lead to buffer overflows.")


    codeContainer.append(codeAnalysisObject.getHtml());

})
