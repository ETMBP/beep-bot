const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(interaction) {
        const regExp = new RegExp('smoke|fire|flame|🔥|🚬|🥵|☕|cook|toast')
        if (interaction.content.match(regExp)) {
            interaction.reply('!BEEP!');
            console.log('BEEP BEEP MATHAFAKKA');
        }
    },
};
