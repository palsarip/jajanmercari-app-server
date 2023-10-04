require("dotenv").config();
const express = require("express");
const app = express();

//importing discord client
// const discord = require("./discord");
const { Client, GatewayIntentBits } = require("discord.js");

//messages
require("./messages/ping")(app);

//status
require("./bot/status")(app);
