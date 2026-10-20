import express from "express";
import { ENV } from "./lib/env.js"
import { connect } from "mongoose";
import { connectDB } from "./lib/db.js";
import dns from "dns"

dns.setServers(["1.1.1.1","8.8.8.8"])

const app = express();

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
