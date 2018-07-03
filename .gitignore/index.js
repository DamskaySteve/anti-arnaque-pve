const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setGame("Fortnite FR");
	console.log("Le bot a ete connecte")
})

bot.on ("guildMemberAdd", member => {
	member.guild.channels.find("name", ":raised_hand:bienvenue:raised_hand:").send(':fire: Un anti-arnaqueur a spawn ! Bienvenue sur Fortnite [FR] PVE !  ')
})

bot.login(process.env.TOKEN);
