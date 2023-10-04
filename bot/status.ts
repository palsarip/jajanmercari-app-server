const client = require("../utils/discord");

module.exports = function (app: Function) {
  client.on("ready", () => {
    console.log(`✅ SERVER RUNNING ON PORT ${process.env.PORT}`);
    console.log(`✅ lOGGED IN AS ${client.user.tag}`);
    client.user.setActivity("with discord.js");
  });

  client.login(process.env.DISCORD_TOKEN);
};
