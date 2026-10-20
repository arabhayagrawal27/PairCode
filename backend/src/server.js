import express from "express";
import { ENV } from "./lib/env.js"
import { connect } from "mongoose";
import { connectDB } from "./lib/db.js";
import dns from "dns"
import cors from "cors"
import {serve } from "inngest/express"
import { inngest } from "./lib/inngest.js";

dns.setServers(["1.1.1.1","8.8.8.8"])

const app = express();


app.use(express.json())
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))
app.use("/api/inngest",serve({client: inngest, functions}))

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
