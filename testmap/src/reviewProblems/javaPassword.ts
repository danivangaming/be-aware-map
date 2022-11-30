import {ReviewObject} from "../ReviewObject.js";

$(function() {



    let codeContainer = $("#code-container")
    let review1 : ReviewObject = new ReviewObject()
    let tab1 = review1.createElement(true,    "import java.util.Scanner;\n" +
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

    review1.addButton(tab1,"Good!", () => {alert("Die Antwort ist leider falsch!")})
    review1.addButton(tab1,"Bad!", () => {codeContainer.append(review2.getHtml())})



    codeContainer.append(review1.getHtml())


//Teil 2




    let review2 : ReviewObject = new ReviewObject()
    let rev2Tab1 = review2.createElement(true,     "import java.math.BigInteger;\n" +
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

    review2.addButton(rev2Tab1, "Good", () => {alert("FALSCH!")})




    let rev2Tab2 = review2.createElement(false,     "import java.math.BigInteger;\n" +
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
    review2.addButton(rev2Tab2, "Good", () => {alert("FALSCH!")})




    let rev2Tab3 = review2.createElement(false, "import de.mkammerer.argon2.Argon2;\n" +
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


    review2.addButton(rev2Tab3, "Good", () => {alert("FALSCH!")})
//codeReviewApi.addReviewObjectsToHtmlElement(phase1Element, codeArray)
})