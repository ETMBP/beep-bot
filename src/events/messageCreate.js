const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(interaction) {
        const regExp = new RegExp('smoke|smokin|fire|flame|🔥|🚬|🥵|☕|cook|toast|heat|stove|inferno|combustion|burn','i')
        if (interaction.content.match(regExp)) {
            interaction.reply('!BEEP!');
            console.log('BEEP BEEP MATHAFAKKA');
        }
    },
};
