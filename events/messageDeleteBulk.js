const db = require('../data.js')

exports.run = function (Discord, client, messages) {
  let bulkDeletedMessages = messages.array()
  bulkDeletedMessages.forEach(message => {
    let embed = new Discord.RichEmbed()
        .setColor(0xf44336)
        .setAuthor(`Message Bulk Deleted`, message.author.avatarURL)
        .addField('Guild', message.guild.name)
        .addField('Author', `${message.member.displayName}(${message.author.username}#${message.author.discriminator})`)
        .addField('Message', message.content)
        .setFooter(`Hydro-Bot`)
        .setTimestamp()
    client.channels.get(db.data.logs.messages).send({ embed })
  })
}