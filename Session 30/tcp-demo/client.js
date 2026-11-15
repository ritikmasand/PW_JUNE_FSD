import net from "net";

// Connect to server

const client = net.createConnection({ port: 3000, host: "localhost" }, () => {
    
  console.log("connected to the server");
});

client.on("data", (data) => {
  console.log("Server says:", data.toString());
});

client.on("close", () => {
  console.log("connection closed");
});
