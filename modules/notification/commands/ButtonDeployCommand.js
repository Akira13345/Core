const {EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');

module.exports = {
    name: "notification",
    description: "Permet de déployer le système de notification.",

    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
            .setTitle('📍 Notifications')
            .setDescription('Cliquez sur les **boutons** ci-dessous pour obtenir les **notification** de votre choix.\n\nMise à jour ➜ 💻\nSondages ➜ 📈\nEvénements ➜ 🎉\nStatut ➜ 📡\n\nVous pouvez choisir plusieurs notification.\nVous pouvez **désactiver** les notifications à tout moment en **cliquant** sur le bouton.')
            .setColor('#B526D8')

        const button = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel('Mise à jour')
                    .setCustomId('update')
                    .setEmoji('💻'))

            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel('Sondages')
                    .setCustomId('poll')
                    .setEmoji('📈'))

            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel('Evénements')
                    .setCustomId('event')
                    .setEmoji('🎉'))

            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel('Statut')
                    .setCustomId('status')
                    .setEmoji('📡')
            );

        await interaction.deleteReply();
        await interaction.channel.send({embeds: [embed], components: [button]});

    }
}