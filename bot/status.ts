const client = require("../index");

const clients = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const status = client.on("ready", () => {
  console.log(`✅ SERVER RUNNING ON PORT ${process.env.PORT}`);
  console.log(`✅ lOGGED IN AS ${client.user.tag}`);
  client.user.setActivity("with discord.js");
});

client.login(process.env.DISCORD_TOKEN);

module.exports = status;
