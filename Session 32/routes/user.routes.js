import express from "express";
import { getUsers } from "../controllers/user.controller.js";

// Router

const router = express.Router();

router.get("/id", getUsers);

export default router