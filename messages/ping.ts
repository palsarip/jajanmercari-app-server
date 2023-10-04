import { Message } from "discord.js";

const client = require("../utils/discord");

module.exports = function (app: Function) {
  client.on("messageCreate", (message: Message) => {
    if (message.content === "!ping") {
      message.channel.send("Pong!");
    }
  });
};

export {};
