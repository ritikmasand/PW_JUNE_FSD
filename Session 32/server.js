import express from "express";
import userRouter from "./routes/user.routes.js";
import dotenv from "dotenv";

const app = express();

// app.get("/", (req,res)=>{
// res.send("Hello from express")
// })
// app.get("/contacts", (req, res) => {
//   res.send("Hello from express");
// });


app.use("/users", userRouter);
dotenv.config();
// const password = "qwerty123";
// const port = 3000;

// console.log();
console.log(process.env.DB_PASSWORD);

app.listen(process.env.PORT, () => {
  console.log("Server running on port 3000");
});
