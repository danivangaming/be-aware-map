import {ReviewObject} from "../ReviewObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";
import {InfoText} from "../../../shared/htmlObjects/InfoText.js";

$(function() {

    let codeContainer = $("#code-container")
    //codeContainer.trigger("focus");
    let review1 : ReviewObject = new ReviewObject()
    let tab1 = review1.createTabWithCode(true,    "from decimal import Decimal\n" +
        "\n" +
        "\n" +
        "def devision(num_1, num_2):\n" +
        "    return Decimal(num_1) / Decimal(num_2)\n" +
        "\n" +
        "\n" +
        "def devision_view():\n" +
        "    try:\n" +
        "        num_1, num_2 = request.get_json()[\"numbers\"]\n" +
        "        return devision(num_1, num_2)\n" +
        "    except ValueError:\n" +
        "        return \"wrong input\"\n")

    review1.addButton(tab1,"Good!", () => {
        codeContainer.empty()
        codeContainer.append(review1.getHtml())
        codeContainer.append(new InfoText("Wrong answer sorry!",  "Wrong",true).getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")
    })
    review1.addButton(tab1,"Bad!", () => {
        codeContainer.empty()
        codeContainer.append(review1.getHtml())
        codeContainer.append(review2.getHtml())
    review1.unbindButtons();
    review2.bindButtonsToKeys()})


    codeContainer.append(review1.getHtml())
    review1.bindButtonsToKeys();



    let review2 : ReviewObject = new ReviewObject()
    let rev2Tab1 = review2.createTabWithCode(true, "from decimal import Decimal\n" +
        "\n" +
        "BLACKLIST = [Decimal(\"inf\"), Decimal(\"-inf\")]\n" +
        "\n" +
        "\n" +
        "def decimal_devision(num_1, num_2):\n" +
        "    try:\n" +
        "        num_1 = Decimal(num_1)\n" +
        "        num_2 = Decimal(num_2)\n" +
        "    except TypeError:\n" +
        "        raise ValueError(\"wrong input\")\n" +
        "\n" +
        "    if num_1 == 0 or num_1 in BLACKLIST:\n" +
        "        raise ValueError(\"value 1 is not accepted\")\n" +
        "\n" +
        "    if num_2 == 0 or num_2 in BLACKLIST:\n" +
        "        raise ValueError(\"value 2 is not accepted\")\n" +
        "\n" +
        "    return num_1 / num_2\n")

    review2.addButton(rev2Tab1, "Good", () => {

        WA.state.saveVariable(LEVEL_CONSTANTS.LEVEL_1.pythonInputValidationProblem.variableName, true)

        review2.tabContainer.makeTabActive(rev2Tab1);
        codeContainer.empty()
        codeContainer.append(review1.getHtml())
        codeContainer.append(review2.getHtml())
        codeContainer.append(new InfoText("Do a good input validation and check every case. This prevents crashes.", "Explanation",true,"AWESOME!").getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")
    })




    let rev2Tab2 = review2.createTabWithCode(false,     "from decimal import Decimal\n" +
        "\n" +
        "\n" +
        "def division(num_1, num_2):\n" +
        "    try:\n" +
        "        num_1 = Decimal(num_1)\n" +
        "        num_2 = Decimal(num_2)\n" +
        "    except TypeError:\n" +
        "        raise ValueError(\"wrong input\")\n" +
        "\n" +
        "    if num_2 == 0 or num_1 == 0:\n" +
        "        raise ValueError(\"zero is not allowed as an operand\")\n" +
        "\n" +
        "    return num_1 / num_2\n")

    review2.addButton(rev2Tab2, "Good", () => {
        codeContainer.empty()
        review2.tabContainer.makeTabActive(rev2Tab2);
        codeContainer.append(review1.getHtml())
        codeContainer.append(review2.getHtml())
        codeContainer.append(new InfoText("Wrong answer sorry!",  "Wrong",true).getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")
    })


    let rev2Tab3 = review2.createTabWithCode(false, "from decimal import Decimal\n" +
        "\n" +
        "BLACKLIST = [Decimal(\"inf\"), Decimal(\"-inf\")]\n" +
        "\n" +
        "\n" +
        "def decimal_devision(num_1, num_2):\n" +
        "    try:\n" +
        "        num_1 = Decimal(num_1)\n" +
        "        num_2 = Decimal(num_2)\n" +
        "    except TypeError:\n" +
        "        raise ValueError(\"wrong input\")\n" +
        "\n" +
        "    if num_1 is None or num_1 in BLACKLIST:\n" +
        "        raise ValueError(\"value 1 is not accepted\")\n" +
        "\n" +
        "    if num_2 is None or num_2 in BLACKLIST:\n" +
        "        raise ValueError(\"value 2 is not accepted\")\n" +
        "\n" +
        "    return num_1 / num_2\n")


    review2.addButton(rev2Tab3, "Good", () => {
        codeContainer.empty()
        review2.tabContainer.makeTabActive(rev2Tab3);
        codeContainer.append(review1.getHtml())
        codeContainer.append(review2.getHtml())
        codeContainer.append(new InfoText("Wrong answer sorry!",  "Wrong",true).getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")
    })
//codeReviewApi.addReviewObjectsToHtmlElement(phase1Element, codeArray)
})
