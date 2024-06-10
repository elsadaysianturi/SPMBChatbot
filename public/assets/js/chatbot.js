var chatbotButton = document.getElementById("chatbot-button");
var chatbotContainer = document.getElementById("chatbot-container");
var closeChatbotButton = document.querySelector(".close-chatbot");
// var closeIcon =
//     '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

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
