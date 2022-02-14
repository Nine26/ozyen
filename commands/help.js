const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "help",
    description: "",

    async execute(message, args, Discord) {

        const BotInfo = new MessageEmbed()
        .setColor(0xD866BE)
        .setTitle('Bot Information')
        .addField('**Prefix**', 'The Bots prefix is: `#`')
        .addField('**Pages**', '`1.Bot Information`, `2.Moderation & Information`, `3.Fun`')
        .addField('**Navigation Help**', 'Use the arrows below to look through the pages!')
        .setAuthor(' ',message.author.displayAvatarURL())

        const Information = new MessageEmbed()
        .setColor(0xD86685)
        .setAuthor(' ',message.author.displayAvatarURL())
        .setTitle('Moderation & Information')
        .addField('`#ban`', 'Bans Specified user!')
        .addField('`#unban`', 'Unbans Specified user!')
        .addField('`#kick`', 'Kicks a specified user!')
        .addField('`#clear`', 'Deletes messages [100 max]')
        .addField('`#avatar`', 'Shows you user information!')
        .addField('`#ping`', 'Shows you the bots ping!')

        const fun = new MessageEmbed()
        .setColor(0xD88066)
        .setAuthor(' ',message.author.displayAvatarURL())
        .setTitle('Fun')
        .addField('`#meme`', 'Sends meme')
        .addField('`#pcmr', 'Sends something from the pcmr subreddit')

        




        const pages = [
            BotInfo,
            Information,
            fun,
        ]

        const emojiList = ["⏪", "⏩"]

        const timeout = '600000';

        pagination(message, pages, emojiList, timeout)
    }
}