var chatbotButton = document.getElementById("chatbot-button");
var chatbotContainer = document.getElementById("chatbot-container");
var closeChatbotButton = document.querySelector(".close-chatbot");

chatbotButton.addEventListener("mouseenter", function () {
    if (
        window
            .getComputedStyle(chatbotContainer)
            .getPropertyValue("display") === "block"
    ) {
        chatbotButton.innerHTML = closeIcon;
    }
});

chatbotButton.addEventListener("mouseleave", function () {
    if (
        window
            .getComputedStyle(chatbotContainer)
            .getPropertyValue("display") === "block"
    ) {
        chatbotButton.innerHTML =
            '<img src="assets/images/icons8-chat-90.png" alt="Chatbot Icon">';
    }
});

closeChatbotButton.addEventListener("click", function () {
    closeChatbot();
});

chatbotButton.onclick = function () {
    if (
        window
            .getComputedStyle(chatbotContainer)
            .getPropertyValue("display") === "block"
    ) {
        chatbotContainer.style.display = "none";
        chatbotButton.innerHTML =
            '<img src="assets/images/icons8-chat-90.png" alt="Chatbot Icon">';
    } else {
        chatbotContainer.style.display = "block";
        chatbotButton.innerHTML = closeIcon;
    }
};
document
    .querySelector(".back-to-categories")
    .addEventListener("click", function () {
        backToCategories();
    });

function backToCategories() {
    document.getElementById("chat-input").style.display = "none";
    document.getElementById("categories").style.display = "block";
}

function closeChatbot() {
    chatbotContainer.style.display = "none";
}

function displayMultiPartAnswer(answerParts) {
    var chatContent = document.getElementById("chatbot-content");
    answerParts.forEach(function (part) {
        var chatMessage = document.createElement("div");
        chatMessage.className = "chat-message";
        chatMessage.innerHTML = "<p><strong>Admin: </strong>" + part + "</p>";
        chatContent.appendChild(chatMessage);
    });
    chatContent.scrollTop = chatContent.scrollHeight;
}

function sendMessage() {
    var userInput = document.getElementById("user-input").value;

    displayMessage(userInput, "user");

    fetch("/chatbot/message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
        },
        body: JSON.stringify({ message: userInput }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (typeof data.response === "object") {
                displayQuestionButtons(data.response);
            } else {
                displayMessage(data.response, "admin");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            displayMessage(
                "Terjadi kesalahan. Silakan coba lagi nanti.",
                "admin"
            );
        });

    document.getElementById("user-input").value = "";
}

function displayMessage(message, sender) {
    var chatContent = document.getElementById("chatbot-content");
    var chatMessage = document.createElement("div");
    chatMessage.className = "chat-message";

    var messageClass = sender === "user" ? "user-message" : "admin-message";

    chatMessage.innerHTML = `<p><strong>${
        sender === "user" ? "You" : "Admin"
    }: </strong>${message}</p>`;
    chatMessage.classList.add(messageClass);
    chatContent.appendChild(chatMessage);
    chatContent.scrollTop = chatContent.scrollHeight;
}

function fetchAnswer(pertanyaanId) {
    fetch("/chatbot/jawaban", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
        },
        body: JSON.stringify({ pertanyaan_id: pertanyaanId }),
    })
        .then((response) => response.json())
        .then((data) => {
            displayMessage(data.response, "admin");
        })
        .catch((error) => {
            console.error("Error:", error);
            displayMessage(
                "Terjadi kesalahan. Silakan coba lagi nanti.",
                "admin"
            );
        });
}
