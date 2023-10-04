const client = require("../../utils/discord");

module.exports = function (app: Function) {
  client.on("interactionCreate", (interaction: any) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === "ping") {
      interaction.reply("Pong!");
    }

    console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
  });
};

export {};
