import {CodeAnalysisObject} from "../CodeAnalysisObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";

$(function() {

    let codeContainer = $("#code-container")

    let codeAnalysisObject = new CodeAnalysisObject();

    codeAnalysisObject.createProblem(codeContainer,LEVEL_CONSTANTS.LEVEL_2.cVariable.variableName,"clike","#include <stdio.h>\n" +
        "\n" +
        "int main() {\n" +
        "\n" +
        "\tint i=0;\n" +
        "    int j, sum;\n" +
        "\n" +
        "    sum=i+j;\n" +
        "\n" +
        "    return 0;\n" +
        "}\n" +
        "\n","variable.c: (in function main)\n" +
        "variable.c:8:11: Variable j used before definition\n" +
        "  An rvalue is used that may not be initialized to a value on some execution\n" +
        "  path. (Use -usedef to inhibit warning)\n",[{answer : "unused variable", isRight: false},{answer : "buffer overflow", isRight: false},{answer : "undefined behaviour", isRight: true},{answer : "data stealing", isRight: false}],"Using an not initialised variable leads to undefined behaviour. It can not be determined which data is in the variable.<br\>" +
        "<br\>" +
        "int i=0;<br\>" +
        "int j, sum;<br\>" +
        "sum=i+j;")


    codeContainer.append(codeAnalysisObject.getHtml());

})
