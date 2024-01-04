const client = require('../../../index');

client.on('interactionCreate', async (interaction) => {

    const notificationRoles = {
        "update": "1149759575239696427",
        "poll": "1079149240896475197",
        "event": "1079149280863993896",
        "status": "1079149323180323016",
    };

    if (!interaction.isButton()) return;

    const roleId = notificationRoles[interaction.customId];
    if (!roleId) return;

    const role = interaction.guild.roles.cache.get(roleId);
    if (!role) return;

    try {
        if (interaction.member.roles.cache.has(role.id)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({content: `Vous avez perdu le rôle ${role.name}`, ephemeral: true});
        } else {
            await interaction.member.roles.add(role);
            await interaction.reply({content: `Vous avez reçu le rôle ${role.name}`, ephemeral: true});
        }
    } catch (error) {
        console.error('Une erreur est survenue:', error);
    }
});