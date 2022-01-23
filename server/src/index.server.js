import { Server } from "socket.io";

import Connect from "./db.js";
import { getDocuent, updateDocument } from "./fuctions.js";

const PORT = 8080 || process.env.PORT;
Connect();
const io = new Server(PORT, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("get-document", async (id) => {
    const document = await getDocuent(id);
    socket.join(id);

    socket.emit("load-document", document.data);

    socket.on("/", (data) => {
      socket.broadcast.to(id).emit("receive-data", data);
    });

    socket.on("save-document", async (data) => {
      await updateDocument(id, data);
    });
  });
});
