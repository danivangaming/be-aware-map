let answer_option1: HTMLParagraphElement = document.getElementById("first_answer_option1") as HTMLParagraphElement;
let answer_option2: HTMLParagraphElement = document.getElementById("first_answer_option2") as HTMLParagraphElement;

answer_option1.onmouseover = function () {
    answer_option1.style.textDecoration = "underline"
}

answer_option2.onmouseover = function () {
    answer_option2.style.textDecoration = "underline"
}

answer_option1.onmouseout = function () {
    answer_option1.style.textDecoration = "none"
}

answer_option2.onmouseout = function () {
    answer_option2.style.textDecoration = "none"
}

answer_option1.onclick = show_second
answer_option2.onclick = show_second

function show_second() {
    document.body.innerHTML =
        '<div class="telefon_container">' +
        '<div id="second_question" class="imessage">\n' +
        '        <p class="from-them">How has the customer structure of HSA-Informatics changed in view of \n' +
        ' the situation in 2020</p>\n' +
        '    </div>\n' +
        '\n' +
        '    <p id="comment_2" class="comment">Choose your answer:</p>\n' +
        '\n' +
        '    <div id="second_answer" class="imessage">\n' +
        '        <p id="second_answer_option1" class="from-me grow">Due to the uncertainty in the population\n' +
        ' in 2020, the majority of private customers have disappeared, which is why HSA-Informatics is now\n' +
        ' focusing almost exclusively on business customers\n' +
        ' </p>\n' +
        '        <p id="second_answer_option2" class="from-me grow">For reasons of data security,\n' +
        ' I cannot give you any information on this.</p>\n' +
        '    </div>' +
        '</div>'

    answer_option1 = document.getElementById("second_answer_option1") as HTMLParagraphElement;
    answer_option2 = document.getElementById("second_answer_option2") as HTMLParagraphElement;

    answer_option1.onmouseover = function () {
        answer_option1.style.textDecoration = "underline"
    }

    answer_option2.onmouseover = function () {
        answer_option2.style.textDecoration = "underline"
    }

    answer_option1.onmouseout = function () {
        answer_option1.style.textDecoration = "none"
    }

    answer_option2.onmouseout = function () {
        answer_option2.style.textDecoration = "none"
    }

    answer_option1.onclick = show_third
    answer_option2.onclick = show_third
}

function show_third() {
    document.body.innerHTML =
        '<div class="telefon_container">' +
        '<div id="third_question" class="imessage">\n' +
        '        <p class="from-them">In order to send you the prize money for the best training place in 2020, ' +
        '                    I now need the bank details of an account belonging to the company from you.</p>\n' +
        '    </div>\n' +
        '\n' +
        '    <p id="comment_3" class="comment">Choose your answer:</p>\n' +
        '\n' +
        '    <div id="third_answer" class="imessage">\n' +
        '        <p id="third_answer_option1" class="from-me grow">IBAN: DE89 5001 0517 7221 5356 85 <br> The\n' +
        ' associated pin is ****</p>\n' +
        '        <p id="third_answer_option2" class="from-me grow">I am not authorized to share data of this type,\n' +
        ' please contact my manager. </p>\n' +
        '    </div>' +
        '</div>'

    answer_option1 = document.getElementById("third_answer_option1") as HTMLParagraphElement;
    answer_option2 = document.getElementById("third_answer_option2") as HTMLParagraphElement;

    answer_option1.onmouseover = function () {
        answer_option1.style.textDecoration = "underline"
    }

    answer_option2.onmouseover = function () {
        answer_option2.style.textDecoration = "underline"
    }

    answer_option1.onmouseout = function () {
        answer_option1.style.textDecoration = "none"
    }

    answer_option2.onmouseout = function () {
        answer_option2.style.textDecoration = "none"
    }

    answer_option1.onclick = show_fourth
    answer_option2.onclick = show_fourth
}

function show_fourth() {
    WA.state.saveVariable('quest_2_2', true).catch(e => console.error(e))
    document.body.innerHTML =
        '<div class="telefon_container">' +
        '<div id="fourth_question" class="imessage">\n' +
        '        <p class="from-them">Thank you for your time, see you again.</p>\n' +
        '    </div>\n' +
        '\n' +
        '    <p id="comment_4" class="comment">Conclusion:</p>\n' +
        '\n' +
        '    <div id="conclusion" class="imessage">\n' +
        '        <p class="from-them">Right Answers: <br>\n' +
        '            1. Question: Option1; <br>\n' +
        '            2. Question: Option2; <br>\n' +
        '            3. Question: Option2; <br>\n' +
        '        </p>\n' +
        '        <p class="from-them">Do not give any information about the company structure or similar information. ' +
        '                            Competitors can gain competitive advantages with such information.\n' +
        '        </p>\n' +
        '    </div>' +
        '</div>'

}
