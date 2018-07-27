const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setGame("Fortnite FR [BETA]");
	console.log("Le bot a ete connecte")
})

client.on('message', async message => {
	if (message.content === '!reaction-role') {
		const reactmessage = await message.channel.send('React with 👌 to get your role!');
		await reactmessage.react('👌');

		const filter = (reaction, user) => reaction.emoji.name === '👌' && !user.bot;
		const collector = reactmessage.createReactionCollector(filter, { time: 15000 });

		collector.on('collect', async reaction => {
			const user = reaction.users.last();
			const guild = reaction.message.guild;
			const member = guild.member(user) || await guild.fetchMember(user);
			member.addRole('Membre');
			console.log(`Added the role to ${member.displayName}`);
		});
	}
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
