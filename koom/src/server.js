import http from "http";
import WebSocket from "ws";
import express from 'express';

const app = express();

app.set('view engine', "pug")
app.set("views", __dirname + '/views');

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log('Listennig on http://localhost:3000');
// app.listen(3000, handleListen);
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

const sockets = [];

wss.on("connection", (socket) => {
    sockets.push(socket)
    socket["nickname"] = "Annoymous";
    console.log("Connected to Browser");
    console.log('sockets >> ', sockets)
    socket.on("close", () => console.log("Disconnected from Browser"));
    socket.on("message", (msg) => {
        const message = JSON.parse(msg);
        switch (message.type) {
            case "new_message":
                sockets.forEach(aSocket => {
                    console.log('aSocket ============>>>>>>>>>>',aSocket);
                    aSocket.send(`${socket.nickname}: ${message.payload}`);
                });

                break;
            case "nickname":
                socket["nickname"] = message.payload;
                break;
        }
    })

})

server.listen(3000, handleListen);