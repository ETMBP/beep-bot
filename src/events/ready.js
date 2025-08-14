const { Events, GuildChannelManager, PermissionsBitField } = require('discord.js');

function getRandomIndex (max) {
    return Math.floor(Math.random() * max);
}

async function getRandomChannel(client) {
    const myGuilds = await client.guilds.fetch();
    for (const [key, myGuild] of myGuilds) {
        console.log(`Working on ${myGuild.name}`);
        const myChannelManager = new GuildChannelManager(myGuild);
        try {
            myChannels = await myChannelManager.fetch();
        } catch (error) {
            console.error(error);
            return;
        }

        let writeableChannels = [];
        for (const [key, myChannel] of myChannels) {
            if (0 === myChannel.type) {
                const myBot = myChannel.guild.members.me;
                const permissions = myChannel.permissionsFor(myBot);

                if (permissions && permissions.has(PermissionsBitField.Flags.SendMessages) && permissions.has(PermissionsBitField.Flags.ViewChannel)) {
                    console.log(`I can write in ${myChannel.name}`);
                    writeableChannels.push(myChannel);
                }
            }
        }

        if (0 < writeableChannels.length) {
            const i = getRandomIndex(writeableChannels.length)
            writeableChannels[i].send('beep')
                .then(console.log(`I told the people of ${writeableChannels[i].guild.name} in the ${writeableChannels[i].name} channel that my battery is low`))
                .catch(console.error);
        }
    }
}

async function randomBeep(client) {
    const minMs = ((process.env.MIN_TIME * 60) * 1000)
    const maxMs = ((process.env.MAX_TIME * 60) * 1000)

    do {
        const waitMs = Math.floor(Math.random() * (maxMs - minMs + 1) + minMs);
        console.log(`Battery will last ${(waitMs / 1000) / 60}`)
        await new Promise(r => setTimeout(r, waitMs));
        getRandomChannel(client);
        console.log(waitMs)
    } while (true);
}

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
        randomBeep(client);
	},
};
