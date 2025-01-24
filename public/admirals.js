const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

chatInput.addEventListener('keypress', function(event) {
	if (event.key === 'Enter') {
		const message = chatInput.value;
		if (message.trim() !== '') {
			const messageElement = document.createElement('div');
			messageElement.textContent = message;
			chatMessages.appendChild(messageElement);
			chatInput.value = '';
			chatMessages.scrollTop = chatMessages.scrollHeight;
		}
	}
});

import { Server } from "socket.io";
const socket = io('http://localhost:3000');

socket.on('connect', () => {
	console.log('Connected to the server');
});

chatInput.addEventListener('keypress', function(event) {
	if (event.key === 'Enter') {
		const message = chatInput.value;
		if (message.trim() !== '') {
			socket.emit('chat message', message);
			chatInput.value = '';
		}
	}
});

socket.on('chat message', function(message) {
	const messageElement = document.createElement('div');
	messageElement.textContent = message;
	chatMessages.appendChild(messageElement);
	chatMessages.scrollTop = chatMessages.scrollHeight;
});