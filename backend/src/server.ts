import express, { Express } from "express";
import { Socket } from "socket.io";
import cors from "cors"
const app:Express = express();
const httpServer = require("http").createServer(app);
const PORT = 5000
const db =require("./db/db")

app.use(cors({
    origin:"http://localhost:5173",
    methods:"GET, PUT, POST, PATCH, DELETE",
    credentials:true
}))

const server = app.listen(PORT,(err:Error | void){
    if(err){
        console.log(err)
    }else{
        console.log(`Backend is up on port ${PORT}`)
    }
});

import ioModule from "./sockets/io";

const io = ioModule.init(server);

io.on("connection", (socket: Socket) => {
  console.log("Client connected");
});


