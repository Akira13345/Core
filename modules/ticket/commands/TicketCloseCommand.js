const {EmbedBuilder} = require('discord.js');
const formatDate = require('dateformat');
const {createTranscript} = require('discord-html-transcripts')

module.exports = {
    name: "close",
    description: "Permet de fermer un ticket.",

    run: async (client, interaction) => {

        const ticket = await client.db.get(`ticket_${interaction.channel.id}`);
        if (!ticket) return interaction.followUp({
            content: 'Ticket introuvable',
            ephemeral: true
        }).catch(e => console.log(e));

        const data = await client.db.get(`ticket_${interaction.channel.id}`);
        const creator = data.creator;
        const date = data.date;


        const transcript = await createTranscript(interaction.channel, {
            limit: -1,
            fileName: `${creator}-transcript.html`,
            returnBuffer: false
        });

        const channel = client.channels.cache.find(channel => channel.id === process.env.TICKET_LOGS);

        const close = new EmbedBuilder()
            .setTitle('📋 Support')
            .setColor('#B526D8')
            .setDescription(`Ticket ouvert par <@${creator}> \nTicket fermé par ${interaction.user}\n\nTicket ouvert le ${formatDate(date, "dd/mm/yy HH:MM:ss")}\nTicket fermé le ${formatDate(new Date(), "dd/mm/yy HH:MM:ss")}`)

        await channel.send({
            files: [transcript],
            embeds: [close]
        });


        await client.db.delete(`ticket_${interaction.channel.id}`);


        setTimeout(async () => {
            await interaction.channel.delete()
        }, 5000);
    }
}