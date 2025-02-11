import { io } from 'socket.io-client';

const SOCKET_URL = 'https://yeab-chat.onrender.com'; // Backend server URL

const socket = io(SOCKET_URL, {
    autoConnect: false, // Connect manually when needed
});

export default socket;
