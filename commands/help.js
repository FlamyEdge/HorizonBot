module.exports = message => {
  message.reply("Check your dm for the result...")
  .then(msg => {
    msg.delete(5000)
  })
  .catch(O_o=>{})
  return message.author.send({embed: {
    color: "16744448",
    description: "To add me to your server, use this link:\nhttps://discordapp.com/api/oauth2/authorize?client_id=565434350968111104&permissions=8&scope=bot\n\nYou can use `!commands` to see all available commands.\nYou can use `?[commands]` to check the usage of a command. *For example: `?ping` -> `!ping` command return the latency between client and bot*\n\n__*Bot created by FlamyEdge#2750. All right reserved.*__"
  }})
}
