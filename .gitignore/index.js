const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setGame("Anti-Arnaque.exe");
	console.log("Le bot a ete connecte")
})

bot.on ("guildMemberAdd", member => {
	member.guild.channels.find("name", "bienvenue").send(':fire: $(member.user.username) a spawn ! Un anti-arnaqueur est aparue ! Bienvenue sur Anti-Arnaque PVE !')
})

bot.login(process.env.TOKEN);
