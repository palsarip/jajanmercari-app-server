const client = require("../../utils/discord");

module.exports = function (app: Function) {
  client.on("interactionCreate", (interaction: any) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === "user") {
      interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
    }

    console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
  });
};

export {};
