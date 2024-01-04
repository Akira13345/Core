const client = require('../../../index');
const {EmbedBuilder} = require('discord.js');
const InvitesTracker = require('@androz2091/discord-invites-tracker');

const tracker = InvitesTracker.init(client, {
    fetchGuilds: true,
    fetchVanity: true,
    fetchAuditLogs: true
});

tracker.on('guildMemberAdd', async (member, type, invite) => {
    const welcomeChannel = member.guild.channels.cache.get(process.env.WELCOME_CHANNEL_ID);

    if (!welcomeChannel) {
        console.log('Le salon de bienvenue n\'existe pas !');
        return;
    }


    const embed = new EmbedBuilder()
        .setTitle('Bienvenue')
        .setColor('#B526D8')
        .setThumbnail(member.user.displayAvatarURL())
        .setURL('https://google.fr')
        .setTimestamp()

    switch (type) {
        case 'normal':
            embed.setDescription(`Bienvenue ${member.user} sur le discord\n\nNous sommes actuellement **${member.guild.memberCount}** membres !\n\nTu as été invité par ${invite.inviter.username}!`);
            break;
        case 'vanity':
            embed.setDescription(`Bienvenue ${member.user} sur le discord\n\nNous sommes actuellement **${member.guild.memberCount}** membres !\n\nTu as rejoint en utilisant une invitation personnalisée !`);
            break;
        case 'permissions':
            embed.setDescription(`Bienvenue ${member.user} sur le discord\n\nNous sommes actuellement **${member.guild.memberCount}** membres !`);
            break;
        case 'unknown':
            embed.setDescription(`Bienvenue ${member.user} sur le discord\n\nNous sommes actuellement **${member.guild.memberCount}** membres !`);
            break;
        default:
            embed.setDescription(`Bienvenue ${member.user} sur le discord de **SkyHills !**\n\nNous sommes actuellement **${member.guild.memberCount}** membres !`);
    }

    await member.roles.add(process.env.MEMBER_ROLE_ID);
    await welcomeChannel.send({embeds: [embed]});
});