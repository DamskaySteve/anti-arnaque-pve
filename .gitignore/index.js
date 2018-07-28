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

	if(message.content === '!clap') {
		message.reply('applaudit !👏👏👏')
	}

	if(message.content === 'xD') {
		message.reply(':)')
	}

	if(message.content === 'Damskay') {
		message.reply('Ouep ? Tu peux lui poser une questions sur #❕aide❕')
	}

	if(message.content === 'bravo') {
		message.reply('Oh ! Merci, merci !')
	}

	if(message.content === 'Qui joue') {
		message.reply('Moi ! Je veux jouer avec toi !')
	}

	if(message.content === 'Qui joue ?') {
		message.reply('Moi ! Je veux jouer avec toi !')
	}

	if(message.content === 'qui joue') {
		message.reply('Moi ! Je veux jouer avec toi !')
	}
	
	if(message.content === 'qui joue ?') {
		message.reply('Moi ! Je veux jouer avec toi !')
	}

	if(message.content === 'ki joue') {
		message.reply('Moi ! Je veux jouer avec toi !')
	}

	if(message.content === 'a+') {
		message.reply('A+ ! 👋')
	}

	if(message.content === 'Good bye') {
		message.reply('Ciao !👋')
        }

	if(message.content === 'A+') {
		message.reply('A+ ! 👋')
	}

	if(message.content === 'cool le bot') {
		message.reply('Merci ! Damskay qui la coder')
	}
	
	if(message.content === 'cool le bot') {
		message.reply('Merci ! Damskay qui la coder')
	}

	if(message.content === '!stop') {
		message.reply('Arret du bot...')
	}

	if(message.content === 'sa va') {
		message.reply("Je vais toujours bien, je suis un robot !")
	}
	
	if(message.content === 'wsh') {
		message.reply("Wsh la cité !")
	}
	
	if(message.content === 'Wsh') {
		message.reply("Wsh frere !")
	}

	if(message.content === '!invite') {
		message.reply("Yep ! Tu peux partager ce lien a tout le monde ! https://discord.gg/6bHyYR4 !")
	}

	if(message.content === prefix + "setuprole"){
		var setrole = new Discord.RichEmbed()
		.setColor("#3774e5")
		.setTitle("**Pour avoir accés au salons d'échange du serveur, clique sur la reaction ci dessous**")
		.addField("Deviens un echangeur !" , " :recycle:  **Echange** ")
		message.channel.sendMessage(setrole);
		console.log("SETROLE DEFINIT")
	}

    
	if(message.content.startsWith("!sondage")) {
		let args = message.content.split(" ").slice(1);
		let thingToEcho = args.join(" ")
		let embed = new Discord.RichEmbed()
			.setDescription("**Sondage** @everyone")
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
