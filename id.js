const Discord = require("discord.js");



if(cmd === `${prefix}id`)  {
const dm = new Discord.RichEmbed()
.setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
.setTitle("Successfully fetched ID")
.setDescription(`${message.author.tag} your id is ${message.author.id}`)
.setColor("#FF0000")
.setTimestamp()
message.author.send(dm)

const embed = new Discord.RichEmbed()
.setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
.setTitle("Successfully sent ID")
.setDescription("Sent your Discord User ID to your DM's")
.setColor("#FF0000")
.setTimestamp()
.setFooter("Command executed");
message.channel.send(embed)

}


module.exports.help = {
  name:"id"
}
