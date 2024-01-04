const {EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder} = require('discord.js');

module.exports = {
    name: "ticket",
    description: "Permet de déployer le système de ticket",


    run: async (client, interaction) => {

        const ticket = new EmbedBuilder()
            .setTitle('Support')
            .setColor('#2F3136')
            .setDescription('Contactez notre support grâce à un ticket, il sera pris en charge dès que possible !\n\nAfin de créer un ticket et obtenir de l\'aide, réagissez avec la catégorie juste en dessous. 📩\n\n:warning: Merci de préciser votre pseudo et votre serveur en expliquant votre problème, plainte ou requête !')
            .setTimestamp()

        const row = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('ticket')
                    .setPlaceholder('Aucune catégorie sélectionnée')
                    .addOptions([
                        {
                            label: '❓Problème en jeu',
                            description: 'Bugs,Duplication,etc...',
                            value: '1',
                        },
                        {
                            label: '💎 Autres',
                            description: 'Autres questions/problèmes.',
                            value: '2',
                        },
                        {
                            label: '💸 Problème boutique',
                            description: 'Problème avec un achat.',
                            value: '3',
                        },
                        {
                            label: '🎥 Partenaire',
                            description: 'Demande de grade.',
                            value: '4',
                        }
                    ]),
            );


        await interaction.deleteReply();
        await interaction.channel.send({embeds: [ticket], components: [row]});
    }
}