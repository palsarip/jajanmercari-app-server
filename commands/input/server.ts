const client = require("../../utils/discord");

module.exports = function (app: Function) {
  client.on("interactionCreate", (interaction: any) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === "server") {
      interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
    }

    console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
  });
};

export {};
