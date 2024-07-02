var styleElement = document.createElement("style");
var cssStyles = `
.chat-message {
    clear: both;
    overflow: auto;
}

.user-message p {
    background-color: #808080;
    color: white ;
    float: right;
    border-top-right-radius: 0;
}

.admin-message p {
    background-color: #f0f0f0;
    color: #333;
    float: left;
    border-top-left-radius: 0;
}

.user-message p,
.admin-message p {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px 15px;
    max-width: 70%;
}

`;
styleElement.appendChild(document.createTextNode(cssStyles));
document.head.appendChild(styleElement);

function selectCategory(category) {
    document.getElementById("categories").style.display = "none";
    document.getElementById("chat-input").style.display = "inline-flex";
    var message;
    switch (category) {
        case "Seleksi":
            message = "Anda memilih 'Seleksi'. Pilih pertanyaan di bawah ini:";
            displayMessage(message, "admin");

            fetch("/get-seleksi-questions")
                .then((response) => response.json())
                .then((data) => {
                    displayQuestionButtons(data);
                })
                .catch((error) => {
                    console.error("Error fetching questions:", error);
                    displayMessage(
                        "Gagal mengambil pertanyaan. Silakan coba lagi nanti.",
                        "admin"
                    );
                });
            break;
        default:
            message = "Bagaimana saya bisa membantu Anda?";
            displayMessage(message, "admin");
            break;
    }
    document.getElementById("chatbot-container").classList.add("open");
}

function displayQuestionButtons(questions) {
    var questionList = document.createElement("ul");
    questionList.classList.add("question-list");

    Object.keys(questions).forEach(function (id) {
        var listItem = document.createElement("li");
        listItem.textContent = questions[id];
        listItem.classList.add("question-button");
        listItem.onclick = function () {
            fetchAnswer(id);
        };
        questionList.appendChild(listItem);
    });

    document.getElementById("chatbot-content").appendChild(questionList);
}

function displayQuestionAndAnswer(questionId, questionText) {
    var chatContent = document.getElementById("chatbot-content");

    var chatMessageQuestion = document.createElement("div");
    chatMessageQuestion.className = "chat-message user-message";
    chatMessageQuestion.innerHTML =
        "<p><strong>You:</strong> " + questionText + "</p>";
    chatContent.appendChild(chatMessageQuestion);

    fetch(`/questions/${questionId}/answer`)
        .then((response) => response.json())
        .then((data) => {
            var chatMessageAnswer = document.createElement("div");
            chatMessageAnswer.className = "chat-message admin-message";
            chatMessageAnswer.innerHTML =
                "<p><strong>Admin:</strong> " + data.jawaban + "</p>";
            chatContent.appendChild(chatMessageAnswer);
            chatContent.scrollTop = chatContent.scrollHeight;
        });
}

function clearPreviousAnswers() {
    var previousAnswers = document.querySelectorAll(".admin-message");
    previousAnswers.forEach(function (answer) {
        answer.remove();
    });
}

function displayMessage(message, sender) {
    var chatContent = document.getElementById("chatbot-content");
    var chatMessage = document.createElement("div");
    chatMessage.className = "chat-message";

    var messageClass = sender === "user" ? "user-message" : "admin-message";

    chatMessage.innerHTML =
        "<p><strong>" +
        (sender === "user" ? "You" : "Admin") +
        ": </strong>" +
        message +
        "</p>";
    chatMessage.classList.add(messageClass);
    chatContent.appendChild(chatMessage);
    chatContent.scrollTop = chatContent.scrollHeight;
}
