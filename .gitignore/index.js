const Discord = require("discord.js");

var bot = new Discord.Client();

var prefix = "!"

bot.on("ready", function() {
	bot.user.setActivity("Fortnite [FR] Pve");
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

	if(message.author.bot) return


	if(['Salut', 'salut'].includes(message.content)) {

		message.reply('Salut ✋')
	}

	if(['ki joue' , 'qui joue ?', 'Qui joue', 'Qui joue ?', 'qui joue'].includes(message.content)) {
		message.reply('Moi ! Je veux jouer avec toi !')
	}


	if(['a+' , "A+" , "Good bye"].includes(message.content)) {
		message.reply('A+ ! 👋')
	}


	if(message.content.includes('cool le bot')) {
		message.reply('Merci ! Damskay qui la coder & vanerac 😉')
	}


	if(['wsh' , 'Wsh'].includes(message.content)) {
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
			bot.destroy()
		}

		if(command == "invite"){
			message.reply("Yep ! Tu peux partager ce lien a tout le monde ! https://discord.gg/wzRmvBQ !")
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
			message.channel.send("Le Ping l'API est de `"+ bot.ping+"` ms")
		}
	}
})




bot.login(process.env.TOKEN);//
