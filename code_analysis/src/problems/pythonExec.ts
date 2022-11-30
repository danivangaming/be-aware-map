import {CodeAnalysisObject} from "../CodeAnalysisObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";

$(function() {

    let codeContainer = $("#code-container")

    let codeAnalysisObject = new CodeAnalysisObject();

    codeAnalysisObject.createProblem(codeContainer,LEVEL_CONSTANTS.LEVEL_2.pythonExec.variableName,"python","program = input()\n" +
        "exec(program)\n","Issue: [B102:exec_used] Use of exec detected.\n" +
        "   Severity: Medium   Confidence: High\n" +
        "   Location: exec.py:2:0\n",[{answer : "risk of malicious code execution", isRight: true},{answer : "risk of data stealing", isRight: false},{answer : "risk of altering files", isRight: false},{answer : "risk of buffer overflow", isRight: false}],"exec() executes a command from the command line.<br\>" +
        "<br\>" +
        "program = input()<br\>" +
        "exec(program)<br\>" +
        "<br\>" +
        "<br\>" +
        "In this case it executes an inputted command which means that a user can run ever command possible on the underlying system. This is a big security risk! Especially the risk of running malicious code.<br\>")


    codeContainer.append(codeAnalysisObject.getHtml());

})
