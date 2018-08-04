const Discord = require("discord.js");

var client = new Discord.Client();

var prefix = "!"

client.on("ready", function() {
	client.user.setActivity("Fortnite [FR] Pve");
	console.log("Le client a ete connecte")
})

client.on("guildMemberAdd", member => {

	let salon = member.guild.channels.find("name", "✋accueil✋")
		 var bvn = new Discord.RichEmbed()
		 .setColor("#5ef209")
		 .setTitle(`**Bienvenue a  ${member.user.username} sur Fortnite [FR] Pve ! Amuse toi bien ici ! :tada: **`);
		 console.log("SETROLE DEFINIT")
	 salon.send(bvn)
	 });

client.on("guildMemberRemove", member => {

		let salon = member.guild.channels.find("name", "✋accueil✋")
			 var bvn = new Discord.RichEmbed()
			 .setColor("#f20909")
			 .setTitle(`**Aurevoir a ${member.user.username} sur Fortnite [FR] Pve ! Bonne chance dans ton aventure ! :wave: **`);
			 console.log("SETROLE DEFINIT")
		 salon.send(bvn)
		 });


client.on('message', message => {

	if(message.author.client) return

	if(message.content == 'Salut') {
		message.reply('Salut ✋')
	}


	if(message.content.includes('ki joue' || 'qui joue ?' || 'Qui joue' || 'Qui joue ?' || 'qui joue')) {
		message.reply('Moi ! Je veux jouer avec toi !')
	}


	if(message.content.includes('a+' || "A+" || "Good bye")) {
		message.reply('A+ ! 👋')
	}


	if(message.content.includes('cool le client')) {
		message.reply('Merci ! Damskay qui la coder & vanerac 😉')
	}


	if(message.content.includes('wsh' || 'Wsh')) {
		message.reply("Wsh la cité !")
	}


	if(message.content.startsWith(prefix)){
		const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

		message.delete()

		if(command == "clap"){
			message.reply('applaudit !👏👏👏')
		}

		if(command === 'stop') {
			if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`Tu n'as pas la permission d'executer cette commande`)
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
				if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`Tu n'as pas la permission d'executer cette commande`)
				if(args.length == 0) return message.reply(`Manque un argument`)
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

		if(command == "ping"){
			message.channel.send(`Ping est de: ${client.ping}`).then(m =>{m.delete(5000)})
		}
	}
})




client.login(process.env.TOKEN);//
