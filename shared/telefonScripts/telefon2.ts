let answer_option1_2: HTMLParagraphElement = document.getElementById("first_answer_option1") as HTMLParagraphElement;
let answer_option2_2: HTMLParagraphElement = document.getElementById("first_answer_option2") as HTMLParagraphElement;

answer_option1_2.onmouseover = function () {
    answer_option1_2.style.textDecoration = "underline"
}

answer_option2_2.onmouseover = function () {
    answer_option2_2.style.textDecoration = "underline"
}

answer_option1_2.onmouseout = function () {
    answer_option1_2.style.textDecoration = "none"
}

answer_option2_2.onmouseout = function () {
    answer_option2_2.style.textDecoration = "none"
}

answer_option1_2.onclick = show_right
answer_option2_2.onclick = show_second_2

function show_second_2() {
    document.body.innerHTML =
        '<div class="telefon_container">' +
        '<div id="second_question" class="imessage">\n' +
        '        <p class="from-them">Thank you very much, if you share the computer now, ' +
        '                             I can work on the problem with you.</p>\n' +
        '    </div>\n' +
        '\n' +
        '    <p id="comment_2" class="comment">Choose your answer:</p>\n' +
        '\n' +
        '    <div id="second_answer" class="imessage">\n' +
        '        <p id="second_answer_option1" class="from-me grow">>hang up & change password<</p>\n' +
        '        <p id="second_answer_option2" class="from-me grow">>Share Computer<</p>\n' +
        '    </div>' +
        '</div>'

    answer_option1_2 = document.getElementById("second_answer_option1") as HTMLParagraphElement;
    answer_option2_2 = document.getElementById("second_answer_option2") as HTMLParagraphElement;

    answer_option1_2.onmouseover = function () {
        answer_option1_2.style.textDecoration = "underline"
    }

    answer_option2_2.onmouseover = function () {
        answer_option2_2.style.textDecoration = "underline"
    }

    answer_option1_2.onmouseout = function () {
        answer_option1_2.style.textDecoration = "none"
    }

    answer_option2_2.onmouseout = function () {
        answer_option2_2.style.textDecoration = "none"
    }

    answer_option1_2.onclick = show_right
    answer_option2_2.onclick = show_third_2
}

function show_third_2() {
    document.body.innerHTML =
        '<div class="telefon_container">' +
        '<div id="third_question" class="imessage">\n' +
        '        <p class="from-them">According to my diagnostic tool, your computer is infected with too many' +
        ' complex malware systems, I can\'t help you promptly without a lot of effort. However, if you wish, you can ' +
        '             hire a technician to take care of your problems. However, you will incur costs of 20 €/h.</p>\n' +
        '    </div>\n' +
        '\n' +
        '    <p id="comment_3" class="comment">Choose your answer:</p>\n' +
        '\n' +
        '    <div id="third_answer" class="imessage">\n' +
        '        <p id="third_answer_option1" class="from-me grow">>hang up & change password<</p>\n' +
        '        <p id="third_answer_option2" class="from-me grow">>hire a technician<</p>\n' +
        '    </div>' +
        '</div>'

    answer_option1_2 = document.getElementById("third_answer_option1") as HTMLParagraphElement;
    answer_option2_2 = document.getElementById("third_answer_option2") as HTMLParagraphElement;

    answer_option1_2.onmouseover = function () {
        answer_option1_2.style.textDecoration = "underline"
    }

    answer_option2_2.onmouseover = function () {
        answer_option2_2.style.textDecoration = "underline"
    }

    answer_option1_2.onmouseout = function () {
        answer_option1_2.style.textDecoration = "none"
    }

    answer_option2_2.onmouseout = function () {
        answer_option2_2.style.textDecoration = "none"
    }

    answer_option1_2.onclick = show_right
    answer_option2_2.onclick = show_wrong

}

function show_right() {
    WA.state.saveVariable('quest_2_3', true).catch(e => console.error(e))
    document.body.innerHTML =
        '<div class="telefon_container">' +
        '<br>' +
        '<p id="comment_4" class="comment">Conclusion:</p>' +
        '<div id="conclusion_right" class="imessage">\n' +
        '        <p class="from-them"> Right choice!\n' +
        '        </p>\n' +
        '\n' +
        '        <p class="from-them">\n' +
        '            It is best to hang up as early as possible as this is obviously not a real Microsoft employee.\n' +
        '        </p>\n' +
        '        <p class="from-them"> A support employee never contacts a customer without a prior request, out of ' +
        '                              nowhere, so Ranjid is caught in the first sentence.\n' +
        '        </p>\n' +
        '    </div>' +
        '</div>'
}

function show_wrong() {
    document.body.innerHTML =
        '<div class="telefon_container">' +
        '<br>' +
        '<p id="comment_4" class="comment">Conclusion:</p>\n' +
        '\n' +
        '    <div id="conclusion_wrong" class="imessage">\n' +
        '        <p class="from-them">\n' +
        '            Wrong choice!\n' +
        '        </p>\n' +
        '\n' +
        '        <p class="from-them">\n' +
        '            It is best to hang up as early as possible as this is obviously not a real Microsoft employee.\n' +
        '        </p>\n' +
        '        <p class="from-them"> A support employee never contacts a customer without a prior request, out of ' +
        '                              nowhere, so Ranjid is caught in the first sentence.\n' +
        '        </p>\n' +
        '    </div>' +
        '</div>'
}