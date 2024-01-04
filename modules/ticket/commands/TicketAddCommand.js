const {EmbedBuilder, ApplicationCommandOptionType} = require('discord.js');

module.exports = {
    name: "add",
    description: "Permet d'ajouter un utilisateur à un ticket.",
    options: [
        {
            name: "utilisateur",
            description: "Entrez l'utilisateur que vous voulez ajouter au ticket.",
            type: ApplicationCommandOptionType.User,
            required: true
        }
    ],

    run: async (client, interaction) => {

        const member = interaction.options.getMember("utilisateur");

        const ticket = await client.db.get(`ticket_${interaction.channel.id}`);
        if (!ticket) return interaction.followUp({
            content: 'Ticket introuvable',
            ephemeral: true
        }).catch(e => console.log(e));

        await interaction.channel.permissionOverwrites.edit(member.id, {
            ViewChannel: true,
            SendMessages: true,
            AttachFiles: true,
            ReadMessageHistory: true,
        })

        const added = new EmbedBuilder()
            .setTitle('📋 Support')
            .setColor('#B526D8')
            .setDescription(`L'utilisateur ${member} a été ajouté au ticket !`)

        await interaction.followUp({
            embeds: [added],
            ephemeral: true
        });

    }
}