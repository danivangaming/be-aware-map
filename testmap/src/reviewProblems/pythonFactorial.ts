import {ReviewObject} from "../ReviewObject.js";

$(function() {


    let codeContainer = $("#code-container")
    let review1 : ReviewObject = new ReviewObject()
    let tab1 = review1.createElement(true,    "import math\n" +
        "\n" +
        "\n" +
        "def factorial(num):\n" +
        "    try:\n" +
        "        result = math.factorial(num)\n" +
        "        return result\n" +
        "    except ValueError:\n" +
        "        print(\"bad input\")\n")

    review1.addButton(tab1,"Good!", () => {alert("RICHTIG!!")})
    review1.addButton(tab1,"Bad!", () => {alert("FALSCH!!")})



    codeContainer.append(review1.getHtml())

})