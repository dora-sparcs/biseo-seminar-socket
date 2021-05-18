// Create Chat Server
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true 
    }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listen on *: ${PORT}`));

io.on("connection", socket => {
    // Connect with Socket
    const { id } = socket.client;
    console.log(`User connected: ${id}`);

    // #3 Using Nicknames
    socket.on("chat message", (msg) => {
        // #1 Sending and Receiving Messages
        console.log(`${id}: ${msg}`);

        // #2 Broadcasting Messages

    });
});