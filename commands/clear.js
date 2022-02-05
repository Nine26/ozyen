module.exports = {
    name: 'clear',
    description: "",
    async execute(message, args) {
        if (message.member.permissions.has("KICK_MEMBERS")) {
            if (!args[0]) return message.reply("Please enter the amount of messages to clear");

            if (isNaN(args[0])) return message.reply("Haha very funny now type a real number");

            if (args[0] > 100) return message.reply("You can't remove more than 100 messages at once");

            if (args[0] < 1) return message.reply("You have to delete at least one message smh");

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
            });
        } else {
            message.channel.send("You don't have sufficient permissions to use this command!");
        }
    }
}