import {ReviewObject} from "../ReviewObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";
import {InfoText} from "../../../shared/htmlObjects/InfoText.js";

$(function() {


    let codeContainer = $("#code-container")
    codeContainer.focus()
    let review1 : ReviewObject = new ReviewObject()
    let tab1 = review1.createTabWithCode(true,    "import java.io.IOException;\n" +
        "import java.io.PrintWriter;\n" +
        "import java.net.Socket;\n" +
        "import java.util.Scanner;\n" +
        "\n" +
        "public class SocketConnectionCode {\n" +
        "\n" +
        "    public static void main(String[] args) throws IOException {\n" +
        "\n" +
        "        String host = \"www.bank.de\";\n" +
        "        int port = 80;\n" +
        "\n" +
        "        System.out.println(\"Please enter your confidential data, it will be sent secure to your banks server\");\n" +
        "        Scanner sc = new Scanner(System.in);\n" +
        "\n" +
        "        Socket socket = new Socket(host, port);\n" +
        "\n" +
        "        PrintWriter out = new PrintWriter(socket.getOutputStream());\n" +
        "        out.println(sc.nextLine());\n" +
        "        out.flush();\n" +
        "    }\n" +
        "}\n", "java")

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
    let rev2Tab1 = review2.createTabWithCode(true,     "import javax.net.ssl.SSLSocket;\n" +
        "import javax.net.ssl.SSLSocketFactory;\n" +
        "import java.io.IOException;\n" +
        "import java.io.PrintWriter;\n" +
        "import java.util.Scanner;\n" +
        "\n" +
        "public class SocketConnectionCodeExample1 {\n" +
        "\n" +
        "    public static void main(String[] args) throws IOException {\n" +
        "\n" +
        "        String host = \"www.bank.de\";\n" +
        "        int port = 443;\n" +
        "\n" +
        "        System.out.println(\"Please enter your confidential data, it will be sent secure to your banks server\");\n" +
        "        Scanner sc = new Scanner(System.in);\n" +
        "\n" +
        "        SSLSocketFactory factory = (SSLSocketFactory) SSLSocketFactory.getDefault();\n" +
        "        SSLSocket s = (SSLSocket) factory.createSocket(host, port);\n" +
        "        s.setEnabledProtocols(new String[]{\"TLSv1.0\"});\n" +
        "        s.startHandshake();\n" +
        "\n" +
        "        PrintWriter out = new PrintWriter(s.getOutputStream());\n" +
        "        out.println(sc.nextLine());\n" +
        "        out.flush();\n" +
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




    let rev2Tab2 = review2.createTabWithCode(false,     "import javax.net.ssl.SSLSocket;\n" +
        "import javax.net.ssl.SSLSocketFactory;\n" +
        "import java.io.IOException;\n" +
        "import java.io.PrintWriter;\n" +
        "import java.util.Scanner;\n" +
        "\n" +
        "public class SocketConnectionCodeExample2 {\n" +
        "\n" +
        "    public static void main(String[] args) throws IOException {\n" +
        "\n" +
        "        String host = \"www.bank.de\";\n" +
        "        int port = 443;\n" +
        "\n" +
        "        System.out.println(\"Please enter your confidential data, it will be sent secure to your banks server\");\n" +
        "        Scanner sc = new Scanner(System.in);\n" +
        "\n" +
        "        SSLSocketFactory factory = (SSLSocketFactory) SSLSocketFactory.getDefault();\n" +
        "        SSLSocket s = (SSLSocket) factory.createSocket(host, port);\n" +
        "        s.setEnabledProtocols(new String[]{\"TLSv1.1\"});\n" +
        "        s.startHandshake();\n" +
        "\n" +
        "        PrintWriter out = new PrintWriter(s.getOutputStream());\n" +
        "        out.println(sc.nextLine());\n" +
        "        out.flush();\n" +
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




    let rev2Tab3 = review2.createTabWithCode(false, "import javax.net.ssl.SSLSocket;\n" +
        "import javax.net.ssl.SSLSocketFactory;\n" +
        "import java.io.IOException;\n" +
        "import java.io.PrintWriter;\n" +
        "import java.util.Scanner;\n" +
        "\n" +
        "public class SocketConnectionCodeExample3 {\n" +
        "\n" +
        "    public static void main(String[] args) throws IOException {\n" +
        "\n" +
        "        String host = \"www.bank.de\";\n" +
        "        int port = 443;\n" +
        "\n" +
        "        System.out.println(\"Please enter your confidential data, it will be sent secure to your banks server\");\n" +
        "        Scanner sc = new Scanner(System.in);\n" +
        "\n" +
        "        SSLSocketFactory factory = (SSLSocketFactory) SSLSocketFactory.getDefault();\n" +
        "        SSLSocket s = (SSLSocket) factory.createSocket(host, port);\n" +
        "        s.setEnabledProtocols(new String[]{\"TLSv1.3\"});\n" +
        "        s.startHandshake();\n" +
        "\n" +
        "        PrintWriter out = new PrintWriter(s.getOutputStream());\n" +
        "        out.println(sc.nextLine());\n" +
        "        out.flush();\n" +
        "    }\n" +
        "}\n","java")


    review2.addButton(rev2Tab3, "Good", () => {
        codeContainer.empty()
        review2.tabContainer.makeTabActive(rev2Tab3);
        codeContainer.append(review1.getHtml())
        codeContainer.append(review2.getHtml())
        WA.state.saveVariable(LEVEL_CONSTANTS.LEVEL_1.javaSocketProblem.variableName, true)
        codeContainer.append(new InfoText("Confidential data should only be sent through encrypted connections. <br\> Be also aware that some versions of encryption may be outdated and insecure. <br\>", "Explanation",true,"AWESOME!").getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")
    })
//codeReviewApi.addReviewObjectsToHtmlElement(phase1Element, codeArray)
})


