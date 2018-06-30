const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setGame("Anti-Arnaque.exe");
	console.log("Le bot a ete connecte")
})

bot.on ("guildMemberAdd", member => {
	member.guild.channels.find("name", "bienvenue").send(':fire: Un anti-arnaqueur a spawn ! :scar: Bienvenue sur Anti-Arnaque PVE ! :raven: ')
})

bot.login(process.env.TOKEN);
