const client = require("../utils/discord");

const ping = client.on("messageCreate", (message: any) => {
  if (message.content === "!ping") {
    message.channel.send("Pong!");
  }
});

module.exports = ping;
