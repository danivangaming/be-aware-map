import {ReviewObject} from "../ReviewObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";
import {InfoText} from "../../../shared/htmlObjects/InfoText.js";
$(function() {



    let codeContainer = $("#code-container")
    //codeContainer.trigger("focus")
    let review1 : ReviewObject = new ReviewObject()
    let tab1 = review1.createTabWithCode(true,    "import java.util.Scanner;\n" +
        "\n" +
        "public class EnterPasswordCode {\n" +
        "\n" +
        "    public static void main(String[] args) {\n" +
        "\n" +
        "        System.out.println(\"Please type your in password, it will be stored secure afterwards\");\n" +
        "        Scanner sc = new Scanner(System.in);\n" +
        "        String password = sc.nextLine();\n" +
        "    }\n" +
        "}\n", "java")

    review1.addButton(tab1,"Good!", () => {
        codeContainer.empty()
        codeContainer.append(review1.getHtml())
        codeContainer.append(new InfoText("Wrong answer sorry!",  "Wrong",true).getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")})

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
    let rev2Tab1 = review2.createTabWithCode(true,     "import java.math.BigInteger;\n" +
        "import java.nio.charset.StandardCharsets;\n" +
        "import java.security.MessageDigest;\n" +
        "import java.security.NoSuchAlgorithmException;\n" +
        "import java.util.Scanner;\n" +
        "\n" +
        "public class EnterPasswordCodeExample1 {\n" +
        "\n" +
        "    public static void main(String[] args) throws NoSuchAlgorithmException {\n" +
        "\n" +
        "        System.out.println(\"Please type your in password, it will be stored secure afterwards\");\n" +
        "        Scanner sc = new Scanner(System.in);\n" +
        "\n" +
        "        MessageDigest messageDigest = MessageDigest.getInstance(\"MD5\");\n" +
        "        messageDigest.update(StandardCharsets.UTF_8.encode(sc.nextLine()));\n" +
        "        String md5hashedpassword = String.format(\"%032x\", new BigInteger(1, messageDigest.digest()));\n" +
        "    }\n" +
        "}\n", "java")

    review2.addButton(rev2Tab1, "Good", () => {
        codeContainer.empty()
        review2.tabContainer.makeTabActive(rev2Tab1);
        codeContainer.append(review1.getHtml())
        codeContainer.append(review2.getHtml())
        codeContainer.append(new InfoText("Wrong answer sorry!",  "Wrong",true).getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")
    })




    let rev2Tab2 = review2.createTabWithCode(false,     "import java.math.BigInteger;\n" +
        "import java.nio.charset.StandardCharsets;\n" +
        "import java.security.MessageDigest;\n" +
        "import java.security.NoSuchAlgorithmException;\n" +
        "import java.util.Scanner;\n" +
        "\n" +
        "public class EnterPasswordCodeExample2 {\n" +
        "\n" +
        "    public static void main(String[] args) throws NoSuchAlgorithmException {\n" +
        "\n" +
        "        System.out.println(\"Please type your in password, it will be stored secure afterwards\");\n" +
        "        Scanner sc = new Scanner(System.in);\n" +
        "\n" +
        "        MessageDigest messageDigest = MessageDigest.getInstance(\"SHA-256\");\n" +
        "        messageDigest.update(StandardCharsets.UTF_8.encode(sc.nextLine()));\n" +
        "        String sha256hashedpassword = String.format(\"%032x\", new BigInteger(1, messageDigest.digest()));\n" +
        "    }\n" +
        "}\n","java")

    review2.addButton(rev2Tab2, "Good", () => {

        codeContainer.empty()
        review2.tabContainer.makeTabActive(rev2Tab2);
        codeContainer.append(review1.getHtml())
        codeContainer.append(review2.getHtml())
        codeContainer.append(new InfoText("Wrong answer sorry!",  "Wrong",true).getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")
    })




    let rev2Tab3 = review2.createTabWithCode(false, "import de.mkammerer.argon2.Argon2;\n" +
        "import de.mkammerer.argon2.Argon2Factory;\n" +
        "\n" +
        "import java.util.Scanner;\n" +
        "\n" +
        "public class EnterPasswordCodeExample3 {\n" +
        "\n" +
        "    public static void main(String[] args) {\n" +
        "\n" +
        "        System.out.println(\"Please type your in password, it will be stored secure afterwards\");\n" +
        "        Scanner sc = new Scanner(System.in);\n" +
        "\n" +
        "        Argon2 argon2 = Argon2Factory.create();\n" +
        "        String hashedpassword = argon2.hash(10, 65536, 1, sc.nextLine()); //best parameters may vary\n" +
        "    }\n" +
        "}\n","java")


    review2.addButton(rev2Tab3, "Good", () => {
        codeContainer.empty()
        review2.tabContainer.makeTabActive(rev2Tab3);
        codeContainer.append(review1.getHtml())
        codeContainer.append(review2.getHtml())
        WA.state.saveVariable(LEVEL_CONSTANTS.LEVEL_1.javaPasswordProblem.variableName, true)
        codeContainer.append(new InfoText("Use password optimized hashing algorithms such as argon2. <br\> MD5 is not considered collison resistant anymore. <br\> SHA256 is considered secure but it is too fast to calculate and may be vulnerable to bruteforcing.", "Explanation",true,"AWESOME!").getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")
    })
//codeReviewApi.addReviewObjectsToHtmlElement(phase1Element, codeArray)
})
