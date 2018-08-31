const Discord = require("discord.js");

// BOT ARCHIVER


var bot = new Discord.Client();

var prefix = "!"




bot.on("ready", function() {
	bot.user.setActivity("Fortnite [FR] Pve");
	console.log("Le bot a ete connecte")
})




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
		message.reply('Merci ! Damskay qui la coder 😉')
	}


	if(['wsh' , 'Wsh'].includes(message.content)) {
		message.reply("Wsh la cité !")
	}


	if(message.content.startsWith(prefix)){
		const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();


		if command == "clap"){
			message.reply('applaudit !👏👏👏')
			console.log("Commande !clap demander")
		}

		if command === 'stop') {
			if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`Tu n'as pas la permission d'executer cette commande`)
			message.reply('Arret du bot...')
			console.log("Arret du bot demander")
			bot.destroy()
		}

		if command == "invite"){
			message.reply("**MAINTENANCE EN COURS**")
			console.log("Invitation demander")
		}


"

		if command == "ping"){
			message.channel.send("**MAINTENANCE EN COURS** : Le Ping l'API est de `"+ bot.ping+"` ms")
		}
	}
})






bot.login(process.env.TOKEN);//
