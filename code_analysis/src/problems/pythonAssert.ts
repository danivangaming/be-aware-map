import {CodeAnalysisObject} from "../CodeAnalysisObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";

$(function() {

    let codeContainer = $("#code-container")

    let codeAnalysisObject = new CodeAnalysisObject();

    codeAnalysisObject.createProblem(codeContainer,LEVEL_CONSTANTS.LEVEL_2.pythonAssert.variableName,"python","assert (2+2==6, \"2+2 is 6!\")","Issue: [B101:assert_used] Use of assert detected. The enclosed code will be removed when compiling to optimised byte code.\n" +
        "   Severity: Low   Confidence: High\n" +
        "   Location: assert.py:1:0\n",[{answer : "risk of malicious code execution", isRight: false},{answer : "risk of data stealing", isRight: false},{answer : "risk of running unchecked statements", isRight: true},{answer : "risk of buffer overflow", isRight: false}],"Assert in this case has an non-empty tuple which is true in Python language.<br\> The parentheses make the expression to an tuple and this is always true.<br\>")


    codeContainer.append(codeAnalysisObject.getHtml());

})
