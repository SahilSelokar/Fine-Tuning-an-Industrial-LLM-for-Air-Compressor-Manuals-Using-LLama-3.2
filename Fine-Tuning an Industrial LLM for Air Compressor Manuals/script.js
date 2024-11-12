document.getElementById('send-button').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
        displayMessage(userInput, 'user');
        document.getElementById('user-input').value = ''; // Clear the input field
        getBotResponse(userInput);
    }
});

function displayMessage(message, sender) {
    const chatArea = document.getElementById('chat-area');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerHTML = `
        <div class="bubble">${message}</div>
    `;
    chatArea.appendChild(messageElement);
    chatArea.scrollTop = chatArea.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userInput) {
    // For demo purposes, we'll use a dummy response
    setTimeout(() => {
        const botResponse = "I'm here to help you with your air compressor!";
        displayMessage(botResponse, 'bot');
    }, 1000); // Simulate typing delay
}
