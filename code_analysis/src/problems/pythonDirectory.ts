import {CodeAnalysisObject} from "../CodeAnalysisObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";

$(function() {

    let codeContainer = $("#code-container")

    let codeAnalysisObject = new CodeAnalysisObject();

    codeAnalysisObject.createProblem(codeContainer,LEVEL_CONSTANTS.LEVEL_2.pythonDirectory.variableName,"python","import os\n" +
        "os.system('ls')\n","Issue: [B605:start_process_with_a_shell] Starting a process with a shell: Seems safe, but may be changed in the future, consider rewriting without shell\n" +
        "   Severity: Low   Confidence: High\n" +
        "   Location: directory.py:2:0\n" +
        "\n" +
        "Issue: [B607:start_process_with_partial_path] Starting a process with a partial executable path\n" +
        "   Severity: Low   Confidence: High\n" +
        "   Location: directory.py:2:0\n",[{answer : "risk of malicious code execution", isRight: false},{answer : "risk of data breach", isRight: true},{answer : "risk of running unchecked statements", isRight: false},{answer : "risk of buffer overflow", isRight: false}],"os.system() runs system commands in Python. For example the ls command in Linux which prints every file in the current folder.<br\>" +
        "<br\>" +
        "import os<br\>" +
        "os.system('ls')<br\>" +
        "<br\>" +
        "<br\>" +
        "If there are sensitive files such as passwd or other internal company files there is the risk of a data breach.")


    codeContainer.append(codeAnalysisObject.getHtml());

})
