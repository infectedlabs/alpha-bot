const Discord = require("discord.js");
const dotenv = require("dotenv");
const express = require("express");

dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;
const webhookClient = new Discord.WebhookClient({ 
    url: process.env.URL,
});

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.post("/", (req, res) => {
    const bodyData = req.body;

    webhookClient.send(`Hello im ${bodyData.name}`);

    res.send(JSON.stringify(bodyData));
});

app.listen(port, () => console.log("Server is ready"));