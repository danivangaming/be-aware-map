import {ReviewObject} from "../ReviewObject.js";

$(function() {


    let codeContainer = $("#code-container")
    let review1 : ReviewObject = new ReviewObject()
    let tab1 = review1.createElement(true,    "from decimal import Decimal\n" +
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

    review1.addButton(tab1,"Good!", () => {alert("Die Antwort ist leider falsch!")})
    review1.addButton(tab1,"Bad!", () => {codeContainer.append(review2.getHtml())})



    codeContainer.append(review1.getHtml())



    let review2 : ReviewObject = new ReviewObject()
    let rev2Tab1 = review2.createElement(true, "from decimal import Decimal\n" +
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

    review2.addButton(rev2Tab1, "Good", () => {alert("RICHTIG!")})




    let rev2Tab2 = review2.createElement(false,     "from decimal import Decimal\n" +
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

    review2.addButton(rev2Tab2, "Good", () => {alert("FALSCH!")})


    let rev2Tab3 = review2.createElement(false, "from decimal import Decimal\n" +
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


    review2.addButton(rev2Tab3, "Good", () => {alert("FALSCH!")})
//codeReviewApi.addReviewObjectsToHtmlElement(phase1Element, codeArray)
})