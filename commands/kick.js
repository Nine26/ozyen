const discord = require('discord.js')

module.exports = { 
    name: "kick",
    description: "",
    async execute(message, args, client) {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("u dont have perms")
        let target = message.mentions.members.first()

        if(!target) return message.reply("please tell me who u want to kick")

        if(target.id === message.author.id) {
            return message.reply("r u dumb?")
        }

        let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("Please give a reason!")

        let embed = new discord.MessageEmbed()
        .setTitle("User Banned")
        .addField("Target", target.user.tag)
        .addField("moderator", message.author.tag)
        .addField("Reason", `${reason}`)
        await message.channel.send(embed)
        await target.kick({reason:reason})
    }
}
