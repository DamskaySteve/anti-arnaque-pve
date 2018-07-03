const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setGame("Fortnite FR");
	console.log("Le bot a ete connecte")
})

bot.on ("guildMemberAdd", member => {
	member.guild.channels.find("name", ":raised_hand:bienvenue:raised_hand:").send(':fire: Un anti-arnaqueur a spawn ! Bienvenue sur Fortnite [FR] PVE !  ')
})

bot.on('message', message => {
    
	if (message.content === "!clap")
        	message.reply("Clap des mains ! :clap: :clap: :clap:");
   	     	console.log("Commande clap salut faite !")
    	}
	
    	if(message.content === prefix + "help"){
		var help_embed = new Discord.RichEmbed()
		.setColor("#8F20FE")
		.setTitle("Aide")
		.setDescription("Liste des commandes")
		.addField("!help", "Affiche les commandes du bot")
		.addField("!clap", "Clap des mains")
		.setFooter("Menu d'aide - Fortnite [FR] Pve")
		message.channel.sendMessage(help_embed);
		console.log("Help command")
    	}
});

bot.login(process.env.TOKEN);
