import {ReviewObject} from "../ReviewObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";
import {InfoText} from "../../../shared/htmlObjects/InfoText.js";

$(function() {


    let codeContainer = $("#code-container")
    //codeContainer.trigger("focus");
    let review1 : ReviewObject = new ReviewObject()
    let tab1 = review1.createTabWithCode(false,    "#include <stdio.h>\n" +
        "\n" +
        "    int main() {\n" +
        "\n" +
        "        printf(\"Please enter your values:\\n\");\n" +
        "        char[] array 10]\n" +
        "        fgets(array, 10, stdin);\n" +
        "        printf(\"Content of array is %s\\n\", array);\n" +
        "\n" +
        "        return 0;\n" +
        "}\n", "clike")

    review1.addButton(tab1,"Good!", () => {
        codeContainer.empty()
        codeContainer.append(review1.getHtml())
    WA.state.saveVariable(LEVEL_CONSTANTS.LEVEL_1.cPrintProblem.variableName, true)
    codeContainer.append(new InfoText("fgets() is the correct function to prevent buffer overflows.<br\>",  "Explanation:",true, "AWESOME!").getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast");
    })
    review1.addButton(tab1,"Bad!", () => {
        codeContainer.empty()
        codeContainer.append(review1.getHtml())
        codeContainer.append(new InfoText("Wrong answer sorry!",  "Wrong",true).getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast");})



    codeContainer.append(review1.getHtml())
    review1.bindButtonsToKeys();



})
