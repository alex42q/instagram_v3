import socketIO from "socket.io";

let io: socketIO.Server;

export default {
  init: (httpServer:any) => {
    io = socketIO(httpServer, {
      cors: {
        origin: "*",
        methods: "GET, POST, PUT, DELETE, PATCH",
        credentials: true,
      },
    });
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error("Socket.io not initialized!");
    }
    return io;
  },
};
