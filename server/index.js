const WebSocket = require("ws");

const wss = new WebSocket.Server({port: 8082});


wss.on("connection", ws => {
    console.log("new client connected");

    ws.on("message", data => {
        console.log(`client has sent us: ${data}`);
        ws.send(data);
    });

    ws.on("close", () => {
        console.log("client has disconnected");
    });
});