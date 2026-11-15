import net from "net";

// create tcp server
const server = net.createServer((socket) => {
  console.log("client connected");
  socket.on("error", (err) => {
    console.log(err.message);
  });

  socket.write("welcome Client");
  socket.end();
});

server.listen(3000, () => {
  console.log("Tcp server running on port 3000");
});
