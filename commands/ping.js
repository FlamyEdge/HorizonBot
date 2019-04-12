module.exports = async message => {
  const Discord = require("discord.js");
  const client = new Discord.Client();

  const m = await message.channel.send("Ping?");
  m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms.`);
}
