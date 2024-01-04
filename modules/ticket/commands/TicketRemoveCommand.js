const {EmbedBuilder, ApplicationCommandOptionType} = require('discord.js');

module.exports = {
    name: "remove",
    description: "Permet de retirer un utilisateur d'un ticket.",
    options: [
        {
            name: "utilisateur",
            description: "Entrez l'utilisateur que vous voulez retirer du ticket",
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
            ViewChannel: false,
            SendMessages: false,
            AttachFiles: false,
            ReadMessageHistory: false,
        })

        const embed = new EmbedBuilder()
            .setTitle('📋 Support')
            .setColor('#B526D8')
            .setDescription(`L'utilisateur ${member} a été retiré du ticket !`)

        await interaction.followUp({
            embeds: [embed],
            ephemeral: true
        });

    }
}