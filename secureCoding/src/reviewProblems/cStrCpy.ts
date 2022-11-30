import {ReviewObject} from "../ReviewObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";
import {InfoText} from "../../../shared/htmlObjects/InfoText.js";

$(function() {



    let codeContainer = $("#code-container")
    //codeContainer.trigger("focus");
    let review1 : ReviewObject = new ReviewObject()
    let tab1 = review1.createTabWithCode(false,    "#include <stdio.h>"+"\n" +
        "#include <string.h>\n" +
        "    int main() {"+ "\n" +
        "\n" +
        "        char text1[3]=\"TUX\";\n" +
        "        char text2[5]=\"PUFFY\";\n" +
        "        strcpy(text1,text2);\n" +
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
        review2.bindButtonsToKeys()})



    codeContainer.append(review1.getHtml())
    review1.bindButtonsToKeys();


//Teil 2




    let review2 : ReviewObject = new ReviewObject()
    let rev2Tab1 = review2.createTabWithCode(false,     "#include <stdio.h>"+"\n" +
        "#include <string.h>\n" +
        "\n" +
        "    int main() {"+"\n" +
        "        char text1[3]=\"TUX\";\n"+
        "        char text2[5]=\"PUFFY\";\n"+
        "        strncpy(text1,text2,5);\n"+
        "\n"+
        "        return 0;\n"+
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
        "    int main() {\n" +
        "\n" +
        "        char text1[3]=\"TUX\";\n" +
        "        char text2[5]=\"PUFFY\";\n" +
        "        int sizeoftext1=0;\n"+
        "        int sizeoftext2=0;\n"+
        "\n" +
        "        sizeoftext1=sizeof(text1)/(sizeof(text1[0]);\n" +
        "        sizeoftext2=sizeof(text2)/(sizeof(text2[0]);\n"+
        "\n" +
        "        strcpy(text1,text2);" +
        "\n"+
        "        return 0;\n" +
        "\n" +
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
        "\n" +
        "        char text1[3]=\"TUX\";\n" +
        "        char text2[5]=\"PUFFY\";\n" +
        "        int sizeoftext1=sizeof(text1)/(sizeof(text1[0]);\n" +
        "        int sizeoftext2=sizeof(text2)/(sizeof(text2[0]);\n" +
        "\n" +
        "        if(sizeoftext1>=sizeoftext2){\n" +
        "        strncpy(text1,text2,5);\n" +
        "\n" +
        "}\n","clike")


    review2.addButton(rev2Tab3, "Good", () => {
        codeContainer.empty()
        review2.tabContainer.makeTabActive(rev2Tab3);
        codeContainer.append(review1.getHtml())
        codeContainer.append(review2.getHtml())
        WA.state.saveVariable(LEVEL_CONSTANTS.LEVEL_1.cStrCpyProblem.variableName, true)
        codeContainer.append(new InfoText("Determine the sizes of the arrays, check whether the one is big enough for the other and then use strncpy() to copy the data.<br\>", "Explanation",true,"AWESOME!").getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")
    })

})
