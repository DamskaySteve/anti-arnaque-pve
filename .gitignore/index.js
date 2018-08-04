const Discord = require("discord.js");

var bot = new Discord.Client();

var prefix = "!";

bot.on("ready", function() {
	bot.user.setGame("Fortnite [FR] Pve");
	console.log("Le bot a ete connecte")
})

bot.on("guildMemberAdd", member => {

	let salon = member.guild.channels.find("name", "✋accueil✋")
		 var bvn = new Discord.RichEmbed()
		 .setColor("#5ef209")
		 .setTitle(`**Bienvenue a  ${member.user.username} sur Fortnite [FR] Pve ! Amuse toi bien ici ! :tada: **`);
		 console.log("SETROLE DEFINIT")
	 salon.send(bvn)
	 });

bot.on("guildMemberRemove", member => {

		let salon = member.guild.channels.find("name", "✋accueil✋")
			 var bvn = new Discord.RichEmbed()
			 .setColor("#f20909")
			 .setTitle(`**Aurevoir a ${member.user.username} sur Fortnite [FR] Pve ! Bonne chance dans ton aventure ! :wave: **`);
			 console.log("SETROLE DEFINIT")
		 salon.send(bvn)
		 });


bot.on('message', message => {

	if(message.content === 'Salut') {
		message.reply('Salut ✋')
	}


	if(message.content === 'ki joue' || message.content === 'qui joue ?' || message.content === 'Qui joue' || message.content === 'Qui joue ?' || message.content === 'qui joue') {
		message.reply('Moi ! Je veux jouer avec toi !')
	}


	if(message.content === 'a+' || message.content === 'A+' || 'Good bye') {
		message.reply('A+ ! 👋')
	}


	if(message.content === 'cool le bot') {
		message.reply('Merci ! Damskay qui la coder & vanerac 😉')
	}


	if(message.content === 'wsh' || message.content === 'Wsh') {
		message.reply("Wsh la cité !")
	}


	if(message.conent.startsWith(prefix)){
		const args = message.content.slice(server_settings[message.guild.id].server.prefix.length).trim().split(/ +/g);
	  const command = args.shift().toLowerCase();

		message.delete()

		if(command == "clap"){
			message.reply('applaudit !👏👏👏')
		}

		if(command === 'stop') {
			if(!message.guild.member(message.author).hasPerission("ADMINISTRATOR")) return message.reply(`Tu n'as pas la permission d'executer cette commande`)
			message.reply('Arret du bot...')
			client.destroy()
		}

		if(command == "invite"){
			message.reply("Yep ! Tu peux partager ce lien a tout le monde ! https://discord.gg/6bHyYR4 !")
		}

		if(command == "setuprole"){
			var setrole = new Discord.RichEmbed()
			.setColor("#3774e5")
			.setTitle("**Pour avoir accés au salons d'échange du serveur, clique sur la reaction ci dessous**")
			.addField("Deviens un echangeur !" , " :recycle:  **Echange** ");
			message.channel.sendMessage(setrole)
			console.log("SETROLE DEFINIT")
		}

		if(command == "sondage"){
			let embed = new Discord.RichEmbed()
				.setDescription("**Sondage** @everyone")
				.addField(args, "Repondre avec :white_check_mark: ou :x:")
				.setColor('#551EEC');
			message.channel.send(embed)
			.then(function (message) {
				message.react("✅")
				message.react("❌")
			})
		}
	}
})




bot.login(process.env.TOKEN);
