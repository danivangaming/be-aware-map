import {ReviewObject} from "../ReviewObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";
import {InfoText} from "../../../shared/htmlObjects/InfoText.js";

$(function() {


    let codeContainer = $("#code-container")
    //codeContainer.focus()
    let review1 : ReviewObject = new ReviewObject()
    let tab1 = review1.createTabWithCode(true,    "import java.io.File;\n" +
        "import java.io.FileNotFoundException;\n" +
        "import java.util.Arrays;\n" +
        "import java.util.Scanner;\n" +
        "\n" +
        "public class ReadFile {\n" +
        "\n" +
        "       public static void main(String[] args) throws FileNotFoundException {\n" +
        "        String file = \"/home/jeff/Documents/document.txt;/\"\n" +
        "        Scanner content=new Scanner(new File(file));\n" +
        "\n" +
        "        while (content.hasNextLine()){\n" +
        "            String line=content.nextLine();\n" +
        "            System.out.println(line);\n" +
        "        }\n" +
        "    }\n"+
        "}\n", "java")

    review1.addButton(tab1,"Good!", () => {
        WA.state.saveVariable(LEVEL_CONSTANTS.LEVEL_1.javaReadFileProblem.variableName, true)
        codeContainer.empty()
        codeContainer.append(review1.getHtml())
        codeContainer.append(new InfoText("Prevent undefined behaviour by catching exceptions.", "Explanation",true,"AWESOME!").getHtml().html())
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
