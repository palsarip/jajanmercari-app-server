require("dotenv").config();
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "server",
    description: "Replies with server info!",
  },
  {
    name: "user",
    description: "Replies with user info!",
  },
  {
    name: "announce",
    description: "Announces a message to a channel!",
    options: [
      {
        name: "announcement",
        description: "The announcement to send",
        type: 3,
        required: true,
      },
      {
        name: "channel",
        description: "The channel to send the announcement to",
        type: 7,
        required: true,
      },
    ],
  },
];

(async () => {
  const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
