document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const userMessage = userInput.value.trim();
        if (!userMessage) {
            return;
        }

        addMessageToChatBox('user', userMessage);
        userInput.value = '';

        const thinkingMessageElement = addMessageToChatBox('bot', 'Thinking...');

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [{ role: 'user', text: userMessage }],
                }),
            });

            if (!response.ok) {
                thinkingMessageElement.textContent = 'Failed to get response from server.';
                return;
            }

            const data = await response.json();

            if (data.result) {
                thinkingMessageElement.textContent = data.result;
            } else {
                thinkingMessageElement.textContent = 'Sorry, no response received.';
            }
        } catch (error) {
            console.error('Error:', error);
            thinkingMessageElement.textContent = 'Failed to get response from server.';
        }
    });

    function addMessageToChatBox(role, content) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', `${role}-message`);
        messageElement.textContent = content;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        return messageElement;
    }
});