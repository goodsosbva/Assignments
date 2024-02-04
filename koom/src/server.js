import http from "http";
import SocketIO from "socket.io";
import express from 'express';

const app = express();

app.set('view engine', "pug")
app.set("views", __dirname + '/views');

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

// app.listen(3000, handleListen);
const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

wsServer.on("connection", (socket) => {
    // console.log(socket);
    socket["nickname"] = "Anone";
    socket.on("enter_room", (roomName, done) => {
        done();
        socket.join(roomName);
        socket.to(roomName).emit("welcome", socket.nickname);
    })
    socket.on("disconnectiong", () => {
        socket.rooms.forEach(room => socket.to(room).emit("bye", socket.nickname));
    })
    socket.on("new_message", (msg, room, done) => {
        console.log('msg, room, done >>> ', msg, room ,done);
        socket.to(room).emit("new_message", `${socket.nickname}: ${msg}`);
        // 내가 보낸 메세지를 보기 위해
        done();
    })
    socket.on("nickname", (nickname) => (socket["nickname"] = nickname));
})

const handleListen = () => console.log("Listening on http://localhost:3000");
httpServer.listen(3000, handleListen);