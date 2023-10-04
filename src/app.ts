// client.on("interactionCreate", (interaction: any) => {
//   if (!interaction.isCommand()) return;

//   const { commandName } = interaction;

//   if (commandName === "ping") {
//     interaction.reply("Pong!");
//   } else if (commandName === "server") {
//     interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
//   } else if (commandName === "user") {
//     interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
//   } else if (commandName === "announce") {
//     const announcement = interaction.options.getString("announcement");
//     const channel = interaction.options.getChannel("channel");

//     const embed = new EmbedBuilder()
//       .setTitle("Announcement")
//       .setDescription(announcement)
//       .setFooter({ text: `Announcement by ${interaction.user.tag}` })
//       .setTimestamp();

//     channel.send({ embeds: [embed] });
//     interaction.reply("Announcement sent!");
//   }

//   console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
// });
