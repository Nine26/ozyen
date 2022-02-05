module.exports = {
    name: 'hello',
    description: "umm idk",
    aliases: ['yo', 'hi'], 
    async execute(message, args, client){
        message.channel.send('hi');
    }
}