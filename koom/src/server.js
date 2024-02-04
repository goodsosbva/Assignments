import http from "http";
// import SocketIO from "socket.io";
import {Server} from "socket.io";
import {instrument} from "@socket.io/admin-ui";
import express from 'express';

const app = express();

app.set('view engine', "pug")
app.set("views", __dirname + '/views');

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

// app.listen(3000, handleListen);
const httpServer = http.createServer(app)
const wsServer = new Server(httpServer, {
    cors: {
        origin: ['https://admin.socket.io'],
        Credentials: true,
    },
})
instrument(wsServer, {
    auth: false,
})

function publicRooms() {
    const {
        sockets: {
            adapter: {sids, rooms},
        },
    } = wsServer;

    const publicRooms = [];
    rooms.forEach((_, key) => {
        if(sids.get(key) === undefined) {
            publicRooms.push(key)
        }
    })
    return publicRooms;
}

function countRoom(roomName) {
    return wsServer.sockets.adapter.rooms.get(roomName)?.size;
}

wsServer.on("connection", (socket) => {
    // console.log(socket);
    socket["nickname"] = "Anone";
    socket.onAny((event) => {
        console.log(wsServer.sockets.adapter);
        console.log(`socket event: ${event}`);
    })
    socket.on("enter_room", (roomName, done) => {
        socket.join(roomName);
        done();
        socket.to(roomName).emit("welcome", socket.nickname, countRoom(roomName));
        wsServer.sockets.emit("room_change", publicRooms());
    })
    socket.on("disconnecting", () => {
        socket.rooms.forEach((room) =>
            socket.to(room).emit("bye", socket.nickname, countRoom(room) - 1)
        );
    });
    socket.on("disconnect", () => {
        wsServer.sockets.emit("room_change", publicRooms());
    })
    socket.on("new_message", (msg, room, done) => {
        socket.to(room).emit("new_message", `${socket.nickname}: ${msg}`);
        // 내가 보낸 메세지를 보기 위해
        done();
    })
    socket.on("nickname", (nickname) => (socket["nickname"] = nickname));
})

const handleListen = () => console.log("Listening on http://localhost:3000");
httpServer.listen(3000, handleListen);