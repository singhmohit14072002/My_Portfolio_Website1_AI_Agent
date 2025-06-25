document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    // Display a welcome message from the AI
    appendMessage('Welcome! I am an AI assistant. How can I help you today?', 'ai');

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userMessage = userInput.value.trim();

        if (userMessage) {
            appendMessage(userMessage, 'user');
            userInput.value = '';
            
            // Simulate AI thinking and get a response
            setTimeout(() => {
                const aiResponse = getMockAIResponse(userMessage);
                appendMessage(aiResponse, 'ai');
            }, 500);
        }
    });

    function appendMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', `${sender}-message`);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
    }

    function getMockAIResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        
        if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
            return 'Hello there! How can I assist you with Mohit\'s portfolio?';
        } else if (lowerCaseMessage.includes('skills') || lowerCaseMessage.includes('technologies')) {
            return 'Mohit is skilled in Node.js, Express, Docker, Google Cloud, and CI/CD. He also has experience with front-end technologies like HTML, CSS, and JavaScript.';
        } else if (lowerCaseMessage.includes('contact')) {
            return 'You can contact Mohit through the contact form on the website or via the email provided in his resume.';
        } else if (lowerCaseMessage.includes('projects')) {
            return 'This portfolio is one of his projects! He has also worked on various applications involving backend development and cloud deployment. You can ask for more specific examples.';
        } else if (lowerCaseMessage.includes('resume')) {
            return 'You can download Mohit\'s resume from the "About" page.';
        } else if (lowerCaseMessage.includes('thank')) {
            return 'You\'re welcome! Is there anything else I can help you with?';
        } else {
            return "I'm sorry, I'm just a simple mock-up AI. I don't have the answer to that yet. For now, you can ask me about Mohit's skills, projects, or how to contact him.";
        }
    }
}); 