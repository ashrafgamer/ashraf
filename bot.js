const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ("+");
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
client.user.setGame(`اشوفك يا حلو`,'https://www.twitch.tv/v5bz'); 
}); 


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
