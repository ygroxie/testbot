const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("TestBot, !help");
    console.log("Le bot a bien, était connecté !");
});

bot.login("NDMxNzIxNTAxNjY2OTY3NTU2.DajyvQ.QoRY6Vs8jNapyhd83nCzDx79Ki8")
