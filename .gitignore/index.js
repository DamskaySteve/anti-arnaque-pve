const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setGame("Anti-Arnaque.exe");
	console.log("Le bot a ete connecte")
})

bot.login(process.env.TOKEN);
