import express from "express";
import { ENV } from "./lib/env.js"
import { connect } from "mongoose";
import { connectDB } from "./lib/db.js";
import dns from "dns"
import cors from "cors"
import {serve } from "inngest/express"
import { inngest,functions} from "./lib/inngest.js";
import { clerkMiddleware } from "@clerk/express";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";
dns.setServers(["1.1.1.1","8.8.8.8"])

const app = express();


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
}));



app.use(clerkMiddleware());
app.use(express.json())

app.use("/api/inngest",serve({client: inngest, functions}))
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);
console.log(ENV.PORT);

app.get("/", (req,res) => {
    res.status(200).json({msg: "Success from backend"});
});






const startServer = async () => {
    try {

        await connectDB();
        app.listen(ENV.PORT, ()=> {
    console.log("server is running on port 3000")})
         } catch (error) {
            console.error("error starting the server",error)
        
    }
}

startServer();
