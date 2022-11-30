import {CodeAnalysisObject} from "../CodeAnalysisObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";

$(function() {

    let codeContainer = $("#code-container")

    let codeAnalysisObject = new CodeAnalysisObject();

    codeAnalysisObject.createProblem(codeContainer,LEVEL_CONSTANTS.LEVEL_2.pythonTemp.variableName,"python","import tempfile\n" +
        "name=tempfile.mktemp()\n","Issue: [B306:blacklist] Use of insecure and deprecated function (mktemp).\n" +
        "   Severity: Medium   Confidence: High\n" +
        "   Location: temp.py:2:5\n" +
        "\n",[{answer : "risk of malicious code execution", isRight: false},{answer : "higher risk comes with higher permissions", isRight: false},{answer : "risk of altering files", isRight: true},{answer : "risk of buffer overflow", isRight: false}],"mktemp() creates a temporary file.<br\>" +
        "<br\>" +
        "import tempfile<br\>" +
        "name=tempfile.mktemp()\n" +
        "<br\>" +
        "<br\>" +
        "<br\>n" +
        "This temporary file can be altered and this a security risk.")


    codeContainer.append(codeAnalysisObject.getHtml());

})
