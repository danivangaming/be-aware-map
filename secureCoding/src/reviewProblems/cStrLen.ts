import {ReviewObject} from "../ReviewObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";
import {InfoText} from "../../../shared/htmlObjects/InfoText.js";

$(function() {



    let codeContainer = $("#code-container")
    //codeContainer.trigger("focus");
    let review1 : ReviewObject = new ReviewObject()
    let tab1 = review1.createTabWithCode(false,    "#include <stdio.h>"+"\n" +
        "#include <stdio.h>" +
        "    int main() {\n" +
        "\n" +
        "        char text1[]=\"\";\n" +
        "        int secondtolast=strlen(text1)-1;\n" +
        "\n" +
        "        return 0;\n" +
        "}\n", "clike")

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
        review2.bindButtonsToKeys()
    })



    codeContainer.append(review1.getHtml())
    review1.bindButtonsToKeys();


//Teil 2




    let review2 : ReviewObject = new ReviewObject()
    let rev2Tab1 = review2.createTabWithCode(false,     "#include <stdio.h>"+"\n" +
        "#include <string.h>\n" +
        "\n" +
        "    int main() {"+"\n" +
        "        char text1[]=\"\";\n"+
        "        int lengthofarray=0;\n"+
        "\n" +
        "        for(int i=0; text1[i]!='\0'; i++){\n" +
        "           lengthofarray++;\n"+
        "        }\n" +
        "        int secondtolast=lengthofarray-2;\n" +
        "\n" +
        "        return 0;"+"\n"+
        "}\n", "clike")

    review2.addButton(rev2Tab1, "Good", () => {
        codeContainer.empty()
        review2.tabContainer.makeTabActive(rev2Tab1);
        codeContainer.append(review1.getHtml())
        codeContainer.append(review2.getHtml())
        codeContainer.append(new InfoText("Wrong answer sorry!",  "Wrong",true).getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")
    })




    let rev2Tab2 = review2.createTabWithCode(false,     "#include <stdio.h>"+"\n" +
        "#include <string.h>\n" +
        "    int main() {\n"+
        "\n" +
        "        char text1[]=\"\";\n" +
        "        int lengthofarray=0;\n" +
        "\n" +
        "        for(int i=0; text1[i]!='\0'; i++){\n"+
        "           lengthofarray++;\n"+
        "        }\n" +
        "\n" +
        "        int secondtolast=lengthofarray-1;\n" +
        "\n" +
        "        return 0;\n" +
        "}\n","clike")

    review2.addButton(rev2Tab2, "Good", () => {
        codeContainer.empty()
        review2.tabContainer.makeTabActive(rev2Tab2);
        codeContainer.append(review1.getHtml())
        codeContainer.append(review2.getHtml())
        codeContainer.append(new InfoText("Wrong answer sorry!",  "Wrong",true).getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")
    })




    let rev2Tab3 = review2.createTabWithCode(false, "#include <stdio.h>\n" +
        "#include <string.h>\n" +
        "\n" +
        "    int main() {" +
        "        char text1[]=\"\";\n" +
        "\n" +
        "        if(strlen(text1)>0){\n" +
        "        int secondtolast=strlen(text1)-1;\n" +
        "        }\n" +
        "\n" +
        "        return 0;\n" +
        "}\n","clike")


    review2.addButton(rev2Tab3, "Good", () => {
        WA.state.saveVariable(LEVEL_CONSTANTS.LEVEL_1.cStrLenProblem.variableName, true)

        review2.tabContainer.makeTabActive(rev2Tab3);
        codeContainer.empty()
        codeContainer.append(review1.getHtml())
        codeContainer.append(review2.getHtml())
        codeContainer.append(new InfoText("Check whether the array is empty and then afterwards determine the second last position.<br\>", "Explanation",true,"AWESOME!").getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")
    })

})
