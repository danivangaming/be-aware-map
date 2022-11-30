import {ReviewObject} from "../ReviewObject.js";

$(function() {


    let codeContainer = $("#code-container")
    let review1 : ReviewObject = new ReviewObject()
    let tab1 = review1.createElement(true,    "#include &lt;stdio.h&gt;\n" +
        "\n" +
        "    int main() {\n" +
        "\n" +
        "        printf(\"Please enter your values:\\n\");\n" +
        "        char[] array 10]\n" +
        "        fgets(array, 10, stdin);\n" +
        "        printf(\"Content of array is %s\\n\", array);\n" +
        "\n" +
        "        return 0;\n" +
        "    }\n", "clike")

    review1.addButton(tab1,"Good!", () => {alert("RICHTIG!!")})
    review1.addButton(tab1,"Bad!", () => {alert("FALSCH!!")})



    codeContainer.append(review1.getHtml())



})

