import {ReviewObject} from "../ReviewObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";
import {InfoText} from "../../../shared/htmlObjects/InfoText.js";

$(function() {


    let codeContainer = $("#code-container")
    //codeContainer.trigger("focus");
    let review1 : ReviewObject = new ReviewObject()
    let tab1 = review1.createTabWithCode(true,    "import math\n" +
        "\n" +
        "\n" +
        "def factorial(num):\n" +
        "    try:\n" +
        "        result = math.factorial(num)\n" +
        "        return result\n" +
        "    except ValueError:\n" +
        "        print(\"bad input\")\n")

    review1.addButton(tab1,"Good!", () => {
        WA.state.saveVariable(LEVEL_CONSTANTS.LEVEL_1.pythonFactorialProblem.variableName, true)

        codeContainer.empty()
        codeContainer.append(review1.getHtml())
        codeContainer.append(new InfoText("There is no problem. <br\> The user input is checked in the math library and the error is handled.", "Explanation",true,"AWESOME!").getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")
    })
    review1.addButton(tab1,"Bad!", () => {
        codeContainer.empty()
        codeContainer.append(review1.getHtml())
        codeContainer.append(new InfoText("Wrong answer sorry!",  "Wrong",true).getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")
    })



    codeContainer.append(review1.getHtml())
    review1.bindButtonsToKeys();

})
