const Discord = require('discord.js');
const { Permissions } = require('discord.js');
 
    const client = new Discord.Client( {
       
 
 
        intents: [
            Discord.Intents.FLAGS.GUILDS,
            Discord.Intents.FLAGS.GUILD_MESSAGES
        ]
    });

    
const prefix = '/';


const fs = require('fs');
 
client.commands = new Discord.Collection();
            
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.once('ready', () => {
    console.log('Revan is ready.');
});
 
client.on("messageCreate", message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.split(' ').slice(1);
    const command = message.content.split(' ')[0].slice(prefix.length).toLowerCase();
 
 
    if(command === 'whoarewe'){
        client.commands.get('whoarewe').execute(message, args, Discord, client);
    }
    if(command === 'purge'){
        client.commands.get('purge').execute(message, args, Discord, client);
    }
    if(command === 'kick'){
        client.commands.get('kick').execute(message, args, Discord, client);
    }
    if(command === 'ban'){
        client.commands.get('ban').execute(message, args, Discord, client);
    }
    if(command === 'mute'){
        client.commands.get('mute').execute(message, args, Discord, client);
    }
    if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args, Discord, client);
    }
    if(command === 'setup'){
        client.commands.get('setup').execute(message, args, Discord, client);
    }
    if(command === 'giveaway'){
        client.commands.get('giveaway').execute(message, args, Discord, client);
    }
    if(command === 'meme'){
        client.commands.get('meme').execute(message, args, Discord, client);
    }
    if(command === 'weather'){
        client.commands.get('weather').execute(message, args, Discord, client);
    }
    if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord, client);
    }

    
});
 
client.login('Token');
