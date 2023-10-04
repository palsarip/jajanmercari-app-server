const client = require("../../utils/discord");
const { EmbedBuilder } = require("discord.js");

module.exports = function (app: Function) {
  client.on("interactionCreate", (interaction: any) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === "announce") {
      const announcement = interaction.options.getString("announcement");
      const channel = interaction.options.getChannel("channel");

      const embed = new EmbedBuilder()
        .setTitle("Announcement")
        .setDescription(announcement)
        .setFooter({ text: `Announcement by ${interaction.user.tag}` })
        .setTimestamp();

      channel.send({ embeds: [embed] });
      interaction.reply("Announcement sent!");
    }

    console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
  });
};

export {};
