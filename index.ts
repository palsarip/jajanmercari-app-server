import express, { Express, Request, Response } from "express";

require("dotenv").config();
const app: Express = express();

//bot
require("./bot/status")(app);

//commands
require("./commands/command-list")(app);
require("./commands/input/ping")(app);
require("./commands/input/server")(app);
require("./commands/input/user")(app);
require("./commands/input/announce")(app);

//messages
require("./messages/ping")(app);

export {};
