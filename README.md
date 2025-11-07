# Gemini-AI-Chatbot
A simple web chatbot built with Node.js/Express on the backend and vanilla JavaScript on the frontend. It uses the Google Gemini API to generate real-time AI responses.

# Key Features
Simple Monolith Architecture: The backend (Node.js/Express) serves the API and also serves the frontend files (HTML, CSS, JS).

Gemini API Integration: Uses the Google Generative AI SDK on the server side to generate AI responses.

Pure Frontend: The entire interface is driven by vanilla JavaScript (no frameworks/libraries like React or Vue).

Asynchronous Messaging Flow:

1. Displays user messages.

2. Displays a temporary "Thinking..." message.

3. Sends an asynchronous fetch request to /api/chat.

4. Replaces the "Thinking..." message with the AI ​​response.

Error Handling: Robust try...catch logic to handle network failures or API response issues.

# Technologies Used
Backend: Node.js, Express

API: Google Gemini API (via @google/generative-ai)

Frontend: HTML5, CSS3, Vanilla JavaScript (ES6+)

# Implementation
Get your Gemini API key on the Google AI Studio website.

Create a .env file and add GEMINI_API_KEY = "your_gemini_api_key" to it.