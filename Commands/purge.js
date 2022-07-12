module.exports = {
    name: 'purge',
    permissions: ["ADMINISTRATOR"],
    description: "This command deletes messages.",
    async execute(message, args, Discord, client) {
        if(!args[0]) return message.reply("Please enter the ammount of messages you would like to purge.");
        if(isNaN(args[0])) return message.reply("Please enter a number.");
    
        if(args[0] > 100) return message.reply("You can't purge more then 100 messages.");
        if (args[0] < 1) return message.reply("You have to purge atleast one message.");
    
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
        
    }
}
