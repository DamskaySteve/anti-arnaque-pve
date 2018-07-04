const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setGame("Fortnite FR");
	console.log("Le bot a ete connecte")
})

bot.on ("guildMemberAdd", member => {
	member.guild.channels.find("name", "✋bienvenue✋").send(':fire: Un membre a spawn ! Bienvenue sur Fortnite [FR] PVE !  ')
})

bot.on('message', message => {
    
	if(message.content.startsWith("!sondage")) {
		let args = message.content.split(" ").slice(1);
		let thingToEcho = args.join(" ")
		let embed = new Discord.RichEmbed()
			.setDescription("**Sondage**")
			.addField(thingToEcho, "Repondre avec :white_check_mark: ou :x:")
			.setColor('#551EEC')
		message.channel.send(embed)
		.then(function (message) {
			message.react("✅")
			message.react("❌")
		}).catch(function() {
		});

	}
})


bot.login(process.env.TOKEN);
