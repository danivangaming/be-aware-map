import {CodeAnalysisObject} from "../CodeAnalysisObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";

$(function () {





    let codeContainer = $("#code-container")

    let codeAnalysisObject = new CodeAnalysisObject();

    codeAnalysisObject.createProblem(codeContainer, LEVEL_CONSTANTS.LEVEL_2.cPointer.variableName, "clike", "#include <stdio.h>\n" +
        "\n" +
        "int main() {\n" +
        "\n" +
        "    int factor1=129;\n" +
        "    int factor2=212;\n" +
        "    int factor3=122;\n" +
        "    int sum1;\n" +
        "    int sum2;\n" +
        "\n" +
        "    int *ptr1;\n" +
        "    int *ptr2;\n" +
        "    int *ptr3;\n" +
        "\n" +
        "    ptr1=&\factor1;\n" +
        "    ptr2=&\factor2;\n" +
        "    ptr3=&\factor3;\n" +
        "\n" +
        "    sum1=*ptr1+*ptr2;\n" +
        "    free(ptr1);\n" +
        "    free(ptr2);\n" +
        "\n" +
        "    sum2=*ptr1+*ptr2+*ptr3;\n" +
        "\n" +
        "    return 0;\n" +
        "}\n", "pointer.c: (in function main)\n" +
        "pointer.c:23:11: Variable ptr1 used after being released\n" +
        "  Memory is used after it has been released (either by passing as an only param\n" +
        "  or assigning to an only global). (Use -usereleased to inhibit warning)\n" +
        "   pointer.c:20:10: Storage ptr1 released\n" +
        "pointer.c:23:17: Variable ptr2 used after being released\n" +
        "   pointer.c:21:10: Storage ptr2 released\n" +
        "\n" +
        "Finished checking --- 2 code warnings\n", [{
        answer: "Malicious code execution",
        isRight: false
    }, {answer: "Undefined behaviour", isRight: true}, {
        answer: "Data stealing",
        isRight: false
    }, {answer: "Buffer overflow ", isRight: false}], "Using a pointer after it is dereferenced is dangerous.<br\>" +
        "<br\>" +
        "free(ptr1);<br\>" +
        "free(ptr2);<br\>" +
        "sum2=*ptr1+*ptr2+*ptr3;<br\>" +
        "<br\>" +
        "<br\>" +
        "It may lead to undefined behaviour.")
    codeContainer.append(codeAnalysisObject.getHtml());

})