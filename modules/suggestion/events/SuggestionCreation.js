const client = require('../../../index');
const {EmbedBuilder} = require('discord.js');

client.on('messageCreate', async (message) => {
    if (message.channel.id !== process.env.SUGGESTION_CHANNEL || message.author.bot) return;

    try {
        await message.delete();

        const embed = new EmbedBuilder()
            .setTitle(`📬 Suggestion de ${message.author.tag}`)
            .setColor('#24dab1')
            .setDescription(`${message.content}`)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter({
                text: '📝  Ecris ta suggestion directement dans ce salon et discute-en dans le fil ci-dessous.',
            });

        const threadMessage = await message.channel.send({embeds: [embed]});

        await Promise.all([
            threadMessage.react('✅'),
            threadMessage.react('❌'),
            threadMessage.startThread({
                name: `📢 Débat〡Suggestion de ${message.author.username}`,
                autoArchiveDuration: 60
            }),
        ]);
    } catch (error) {
        console.error("Une erreur s'est produite:", error.message);
    }
});